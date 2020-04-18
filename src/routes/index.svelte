<!-- generated from src/lessons/index.md -->

<svelte:head>
  <title>Scratch</title>
</svelte:head>

<script context="module">
  export async function preload(page, session) {
    const response = await this.fetch("/lessons/metadata.json");
    const lessons_by_level = await response.json();

    return { lessons_by_level };
  }
</script>

<script>
  export let lessons_by_level;

  let levels = Object.keys(lessons_by_level);
</script>

<section>
  <h1 id="scratch">Scratch</h1>
  <p>
    With Scratch, you can program your own interactive stories, games, and
    animations — and share your creations with others in the online community.
  </p>
  <p>
    Scratch helps young people learn to think creatively, reason systematically,
    and work collaboratively — essential skills for life in the 21st century.
  </p>
  <p>
    Scratch is a project of the Lifelong Kindergarten Group at the MIT Media
    Lab. It is provided free of charge.
  </p>
  <section>
    <h2 id="who-uses-scratch%3F">Who Uses Scratch?</h2>
    <p>
      Scratch is designed especially for ages 8 to 16, but is used by people of
      all ages. Millions of people are creating Scratch projects in a wide
      variety of settings, including homes, schools, museums, libraries, and
      community centers.
    </p>
    <p>
      Source:
      <a href="https://scratch.mit.edu/about">https://scratch.mit.edu/about</a>
    </p>
  </section>
</section>

<h2>Lessons</h2>

<ul>
  {#each levels as level}
  <h3>Level {level}</h3>
  {#each lessons_by_level[level] as lesson}
  <li>
    <a href="{lesson.url}">{lesson.title}</a>
  </li>
  {/each} {/each}
</ul>
