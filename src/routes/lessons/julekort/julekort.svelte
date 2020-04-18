<!-- generated from src/lessons/julekort/julekort.md -->

<svelte:head>
  <title>Julekort</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Vi skal lage et julekort i Scratch. Det skal ha noen enkle funksjoner og
    animasjoner. Når det er ferdig vil det se omtrent slik ut.
  </p>
  <figure>
    <img
      src="lessons/julekort/julekort.png"
      alt="Eksempel på bilde av et julekort"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-endre-bakgrunn-og-finne-figurer">
    Steg 1: Endre bakgrunn og finne figurer
  </h1>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Start et nytt prosjekt. Når du står på startsiden til Scratch, trykk
          på navnet ditt øverst i høyre hjørne. Trykk så &quot;Mine ting&quot;
          og til slutt &quot;Nytt prosjekt&quot;. Du vil se en katt som venter
          på å bli programmert!
        </p>
      </li>
      <li>
        <p>
          Trykk på
          <img
            src="lessons/julekort/../bilder/velg-bakgrunn.png"
            alt="Velg figur fra biblioteket"
          />
          nede til høyre for å importere en ferdig bakgrunn. Velg den bakgrunnen
          du vil. Trykk så <code>Scene</code>, <code>Bakgrunner</code>, velg den
          tomme bakgrunnen til venstre, og slett den ved å høyreklikke på den og
          velg <code>Slett</code>.
        </p>
      </li>
      <li>
        <p>
          Slett kattefiguren <code>Sprite1</code> ved å høyreklikke på ham og
          slette.
        </p>
      </li>
      <li>
        <p>
          Velg nye figurer fra biblioteket med dette ikonet nede til høyre:
          <img
            src="lessons/julekort/../bilder/hent-fra-bibliotek.png"
            alt="Hent fra bibliotek"
          />
        </p>

        <p>Legg til isbjørnen, snømannen og juletreet.</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-legge-til-kode">Steg 2: Legge til kode</h1>
  <p>Nå skal vi få figurene til å gjøre ting når de blir klikket på.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Velg isbjørnen og fanen <code class="blocklightgrey">Skript</code> og
          lag denne koden. Når isbjørnen blir klikket på skal den si
          <code>God jul!</code>. Deretter skal den skifte utseende hvert sekund,
          10 ganger.
        </p>
        <pre><code class="blocks">når denne figuren klikkes
si [God jul!] i (2) sekunder
gjenta (10) ganger
    neste drakt
    vent (1) sekunder
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt">Test prosjektet ditt</h2>
    <p><strong>Klikk på isbjørnen og se om koden din virker.</strong></p>
    <ul>
      <li>
        <p>Sier isbjørnen <code>God jul!</code>?</p>
      </li>
      <li>
        <p>Forandrer isbjørnen stilling?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Velg snømannen og fanen <code>Skript</code> og lag denne koden.
          Snømannen skal spørre etter navnet ditt. Den setter svaret inn i en ny
          setning. Deretter skal den skifte farge.
        </p>
        <pre><code class="blocks">når denne figuren klikkes
spør [Hva er navnet ditt?] og vent
si (sett sammen [God jul ] (svar)) i (2) sekunder
gjenta for alltid
    endre [farge v] effekt med (25)
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-2">Test prosjektet ditt</h2>
    <p><strong>Klikk på snømannen og se om koden din virker.</strong></p>
    <ul>
      <li>
        <p>Spør snømannen om navnet ditt?</p>
      </li>
      <li>
        <p>Svarer snømannen med navnet ditt når du har skrevet det inn?</p>
      </li>
      <li>
        <p>Forandrer snømannen farge?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Velg juletreet og fanen <code class="blocklightgrey">Skript</code> og
          lag denne koden. Nå skal juletreet skifte farge og utseende.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    vent (0.3) sekunder
    endre [farge v] effekt med (25)
    neste drakt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-3">Test prosjektet ditt</h2>
    <p><strong>Trykk på det grønne flagget og se om alt virker.</strong></p>
    <ul>
      <li>
        <p>Endrer treet farge?</p>
      </li>
      <li>
        <p>Danser treet fra side til side?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-har-du-ledig-tid%2C-sier-du%3F">
    Steg 3: Har du ledig tid, sier du?
  </h1>
  <p>Da har du jobbet godt! Om du fortsatt har ledig tid kan du:</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Legge til din egen velkomsthilsen, for eksempel &quot;God jul&quot;
          eller du kan synge din egen julesang.
        </p>
        <p>
          Klikk på <code>Scene</code>, og velg fanen
          <code class="blocklightgrey">Lyder</code>. Flytt musepekeren over
          <code>Velg en lyd</code>-ikonet helt nede til venstre, og klikk
          <code>Spill inn lyd</code>.
        </p>
        <figure>
          <img
            src="lessons/julekort/lyder.png"
            alt='Bilde av fanen "Lyder" i Scratch'
          />
        </figure>
        <p>
          Ta opp din egen lyd, og gi den et navn, for eksempel
          <code>julehilsen</code>. Gå deretter inn på
          <code class="blocklightgrey">Skript</code>, og legg inn følgende kode:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
spill lyden [julehilsen v] til den er ferdig
</code></pre>
      </li>
      <li>
        <p>
          Kanskje finne på noen andre morsomme animasjoner? Snømannen kan danse
          eller turne litt? Kan vi ha snakkende eller hoppende gale
          julepresanger? Du bestemmer!
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-lagre-og-publisere">
    Steg 4: Lagre og publisere
  </h1>
  <p>
    Gi julekortet ditt et navn. Klikk <code>Fil</code>-menyen øverst til
    venstre, og klikk <code>Lagre nå</code> under den.
  </p>
  <p>
    Deretter kan du publisere julekortet ditt ved å velge <code>Legg ut</code>.
  </p>
  <figure>
    <img
      src="lessons/julekort/leggut.png"
      alt="Bilde av hvordan publisere Scratch julekortet"
    />
  </figure>
</section>
