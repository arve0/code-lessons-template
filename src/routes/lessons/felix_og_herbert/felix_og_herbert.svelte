<!-- generated from src/lessons/felix_og_herbert/felix_og_herbert.md -->

<svelte:head>
  <title>Felix og Herbert</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Vi skal lage et spill hvor katten Felix skal fange musa Herbert. Du styrer
    Herbert med musepekeren og skal prøve å unngå å bli tatt av Felix. Jo lenger
    du unngår ham jo flere poeng får du, men blir du tatt, går poengsummen din
    ned.
  </p>
  <figure>
    <img
      src="lessons/felix_og_herbert/felix_og_herbert.png"
      alt="Bilde av katten Felix og musa Herbert"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-felix-f%C3%B8lger-musepekeren">
    Steg 1: Felix følger musepekeren
  </h1>
  <p><em>Vi ønsker at katten Felix skal følge etter musepekeren.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt prosjekt.</p>
      </li>
      <li>
        <p>
          Trykk på kattefiguren nede i høyre del av skjermen og bytt navn på
          figuren til <code>Felix</code>.
        </p>
        <figure>
          <img src="lessons/felix_og_herbert/navn_figur.png" alt="Skift navn" />
        </figure>
      </li>
      <li>
        <p>
          Sørg for at Felix kun ser til høyre og venstre ved å sette
          rotasjonsmåte til høyre-venstre.
        </p>
        <p>
          <img
            src="lessons/felix_og_herbert/../bilder/rotasjonsmate-hv.png"
            alt="Høyre/Venstre"
          />.
        </p>
      </li>
      <li>
        <p>
          Klikk på
          <img
            src="lessons/felix_og_herbert/../bilder/velg-bakgrunn.png"
            alt="Velg en ferdig bakgrunn"
          />
          nederst til høyre på skjermen for å sette en bakgrunn. Velg den
          bakgrunnen du vil.
        </p>
      </li>
      <li>
        <p>
          Klikk på Felix, velg <code>Kode</code>-fanen og lag dette skriptet:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gjenta for alltid
    pek mot [musepeker v]
    gå (10) steg
    neste drakt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Følger Felix musepekeren?</p>
      </li>
      <li>
        <p>Ser det ut som han går når han beveger seg?</p>
      </li>
      <li>
        <p>Beveger han seg med riktig hastighet?</p>
      </li>
      <li>
        <p>
          Klikk det røde stopp-symbolet for at Felix skal slutte å følge etter
          musepekeren.
        </p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p>
      Hvis du er pålogget med din egen Scratchbruker lagrer scratch alle
      prosjektene dine automatisk med jevne mellomrom. Det kan likevel være lurt
      å lagre manuelt innimellom.
    </p>
    <ul>
      <li>I filmenyen, velg <code>Lagre nå</code>.</li>
    </ul>
    <p>Hvis du ikke har bruker kan du ikke lagre, bare fortsett til steg 2.</p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-felix-jager-herbert">
    Steg 2: Felix jager Herbert
  </h1>
  <p>
    <em
      >Nå ønsker vi at Felix skal jage musa Herbert i stedet for
      musepekeren.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny figur ved å trykke på
          <img
            src="lessons/felix_og_herbert/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />
          og velg figuren <code>Dyr/Mouse1</code>.
        </p>
      </li>
      <li>
        <p>Bytt navn på figuren til <code>Herbert</code>.</p>
      </li>
      <li>
        <p>
          Gjør Herbert mindre enn Felix ved å velge
          <code>Størrelse</code> feltet rett over figuren, og skriv inn et
          mindre tall. Prøv å endre tallet fra 100 til 30.
        </p>
      </li>
      <li>
        <p>Gi Herbert dette skriptet:</p>
        <pre><code class="blocks">når grønt flagg klikkes
gjenta for alltid
    gå til [musepeker v]
    pek mot [Felix v]
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Flytter Herbert seg med musepekeren?</p>
      </li>
      <li>
        <p>Jager Felix Herbert?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-3%3A-felix-sier-n%C3%A5r-han-har-fanget-herbert"
  >
    Steg 3: Felix sier når han har fanget Herbert
  </h1>
  <p>
    <em
      >Vi vil at Felix skal vite når han har fanget Herbert og fortelle det til
      oss.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>Endre skriptet til Felix til dette:</p>
        <pre><code class="blocks">når grønt flagg klikkes
gjenta for alltid
    pek mot [musepeker v]
    gå (10) steg
    neste drakt
    hvis &lt;berører [Herbert v]?&gt;
        si [Tok deg!] i (1) sekunder
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>Sier Felix fra når han har fanget Herbert?</li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-4%3A-herbert-blir-et-sp%C3%B8kelse-n%C3%A5r-han-fanges"
  >
    Steg 4: Herbert blir et spøkelse når han fanges
  </h1>
  <p>
    <em
      >I tillegg til at Felix sier noe, vil vi nå at Herbert blir forvandlet til
      et spøkelse når han fanges.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Endre skriptet til Felix slik at det sender en melding og lager en lyd
          når han fanger Herbert:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gjenta for alltid
    pek mot [musepeker v]
    gå (10) steg
    neste drakt
    hvis &lt;berører [Herbert v]?&gt;
        send melding [Fanget! v]
]
        si [Tok deg!] i (1) sekunder
        vent (1) sekunder
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>Velg Herbert og gå til <code>Drakter</code>-fanen.</p>
      </li>
      <li>
        <p>
          Hent en ny drakt ved å trykke på
          <img
            src="lessons/felix_og_herbert/../bilder/hent-fra-bibliotek.png"
            alt="Velg drakt fra biblioteket"
          />
          og velg <code>Fantasi/Ghost</code>
        </p>
      </li>
      <li>
        <p>
          Endre navnene på Herberts drakter slik at musedrakten heter
          <code>levende</code> og spøkelsesdrakten heter <code>død</code>.
        </p>
      </li>
      <li>
        <p>
          Gå til <code>Kode</code>-fanen, og lag et nytt skript for Herbert for
          å gjøre ham om til et spøkelse. Ikke slett det gamle skriptet:
        </p>
        <pre><code class="blocks">når jeg mottar [Fanget! v]
bytt drakt til [død v]
vent (0.5) sekunder
bytt drakt til [levende v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Forvandles Herbert til et spøkelse når han fanges?</p>
      </li>
      <li>
        <p>Spiller Felix lyden sin til riktig tid?</p>
      </li>
      <li>
        <p>Står Felix stille lenge nok til at Herbert kommer seg unna?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-telle-poeng">Steg 5: Telle poeng</h1>
  <p>
    <em
      >La oss legge til en poengsum slik at vi kan se hvor flink man er til å
      holde Herbert i live. Vi begynner med poengsummen null og øker den med en
      for hvert sekund. Hvis Felix fanger Herbert, minker vi poengsummen med
      ti.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          På <code>Kode</code>-fanen under kategorien
          <code class="blockdata">Variabler</code>, lag en ny variabel. Kall
          variabelen for <code>Poeng</code>, og la den gjelde for alle figurer.
        </p>
        <figure>
          <img
            src="lessons/felix_og_herbert/ny-variabel-poeng.png"
            alt="Bilde av den nye poeng variabelen"
          />
        </figure>
        <p>
          Legg merke til at <code>Poeng 0</code> dukket opp øverst til venstre i
          spillet ditt.
        </p>
      </li>
      <li>
        <p>
          Klikk på <code>Scene</code> helt til høyre på skjermen, ved siden av
          lista over figurene Felix og Herbert. Lag disse to skriptene på
          scenen:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett [Poeng v] til [0]
gjenta for alltid
    vent (1) sekunder
    endre [Poeng v] med (1)
slutt

når jeg mottar [Fanget! v]
endre [Poeng v] med (-10)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Øker poengsummen med en hvert sekund?</p>
      </li>
      <li>
        <p>Går poengsummen ned med ti når Herbert blir fanget?</p>
      </li>
      <li>
        <p>Hva skjer om Herbert fanges før du har ti poeng?</p>
      </li>
      <li>
        <p>Går poengsummen tilbake til null når du starter spillet på nytt?</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet-2">Lagre prosjektet</h2>
    <p><em>Du er ferdig. Godt gjort. Nå kan du spille spillet!</em></p>
    <p>
      Hvis du er logget inn med din scratchbruker kan du dele spillet med
      familie og venner ved å trykke <code>Legg ut</code> på menylinjen.
    </p>
  </section>
</section>
