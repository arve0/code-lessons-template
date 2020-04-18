import globby from "globby";
import fs from "fs";
import path from "path";
import rimraf from "rimraf";
import mkdirp from "mkdirp";
import frontmatter from "front-matter";
import markdown from "./markdown";
import prettier from "prettier";

const INPUT_FOLDER = "src/lessons";
const STATIC_FOLDER = "static/lessons";
const OUTPUT_FOLDER = "src/routes/lessons";

rimraf.sync(OUTPUT_FOLDER);

const files = globby.sync(path.join(INPUT_FOLDER, "**/*"));
console.log(`Found ${files.length} files`);

const metadata = [];

for (const filename of files) {
  if (path.extname(filename) !== ".md") {
    let output_filename = path.join(
      STATIC_FOLDER,
      path.relative(INPUT_FOLDER, filename)
    );

    mkdirp.sync(path.dirname(output_filename));

    fs.copyFileSync(filename, output_filename);
  } else {
    let output_filename = path
      .join(OUTPUT_FOLDER, path.relative(INPUT_FOLDER, filename))
      .replace(/\.md$/, ".svelte");

    mkdirp.sync(path.dirname(output_filename));
    console.log(`${filename} → ${output_filename}`);

    const lesson = frontmatter(fs.readFileSync(filename, "utf8"));

    if (!lesson.attributes) {
      throw new Error(`No frontmatter in ${filename}`);
    } else if (!lesson.attributes.title) {
      throw new Error(`No title in ${filename}`);
    }

    const base_path = path.relative("src", path.dirname(filename));
    const html = prettier.format(
      header({ ...lesson.attributes, filename }) +
        markdown
          .render(lesson.body)
          .replace(
            /(src|href)="([^"]+)"/g,
            make_urls_relative_to_root(base_path)
          ),
      { parser: "html" }
    );

    metadata.push({
      url: path.relative("src", filename).replace(/\.md$/, ""),
      ...lesson.attributes,
    });

    fs.writeFileSync(output_filename, html);
  }
}

const metadata_by_level = metadata.reduce((by_level, lesson) => {
  by_level[lesson.level] = by_level[lesson.level] || [];
  by_level[lesson.level].push(lesson);
  return by_level;
}, {});

fs.writeFileSync(
  path.join(STATIC_FOLDER, "metadata.json"),
  JSON.stringify(metadata_by_level)
);

function header({ filename, title }) {
  return `<!-- generated from ${filename} -->

<svelte:head>
  <title>${title}</title>
</svelte:head>

`;
}

function make_urls_relative_to_root(base_path) {
  return function (match, attribute, url) {
    if (url.match(/^(http|https):\/\//) !== null) {
      return match;
    }
    return `${attribute}="${base_path}/${url}"`;
  };
}
