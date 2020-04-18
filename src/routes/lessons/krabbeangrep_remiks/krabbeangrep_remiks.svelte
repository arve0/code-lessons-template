<!-- generated from src/lessons/krabbeangrep_remiks/krabbeangrep_remiks.md -->

<svelte:head>
  <title>Krabbeangrep! Remiks</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Denne uken skal vi gjøre noe litt annerledes. I stedet for å lage et spill
    fra bunnen av skal vi remikse et eksisterende spill. Vi skal lære hvordan vi
    kan gjøre et spill mer komplett ved å blant annet legge til en meny som
    styrer spillflyten, og som lar oss spille flere ganger. Spillet vi skal
    remikse heter Krabbeangrep! og det går ut på at spilleren styrer en kanon
    som skal forsvare jorden mot et intergalaktisk krabbeangrep! Kanonen skyter
    kuler som tar knekken på krabbene og får poeng når den treffer.
  </p>
  <figure>
    <img
      src="lessons/krabbeangrep_remiks/krabbeangrep_remiks.png"
      alt="Illustrerer en remix av et krabbespill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-bli-kjent-med-spillet">
    Steg 1: Bli kjent med spillet
  </h1>
  <p>
    <em
      >Før vi begynner å kode noe som helst skal vi bli litt kjent med spillet
      som det er.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Gå inn på
          <a href="http://scratch.mit.edu/users/gubbisduff/"
            >http://scratch.mit.edu/users/gubbisduff/</a
          >
          og klikk på prosjektet <code>Krabbeangrep!</code> Velg
          <code class="blocksensing">Se inni</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Trykk på knappen der det står <code>Remiks</code> øverst i høyre
          hjørne. Nå har du en kopi av spillet på din egen bruker som du kan
          gjøre hva du vil med uten at du endrer originalen.
        </p>
      </li>
      <li>
        <p>
          [ ] Bruk noen minutter på å se igjennom alle skriptene i prosjektet.
          Les igjennom alle kommentarene og vær helt sikker på at du har
          forstått hvordan spillet fungerer før du går videre; spør gjerne om
          hjelp!
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        [ ] Prøv spillet en gang eller to for å bli bedre kjent med hvordan det
        fungerer.
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-vi-lager-en-meny%2C-del-i">
    Steg 2: Vi lager en meny, del I
  </h1>
  <p>
    <em
      >Nå skal vi lage en meny som dukker opp når spillet starter og når spillet
      er slutt. Menyen skal i første omgang være veldig enkel, alt som skal være
      der er en startknapp.</em
    >
  </p>
  <p>
    Se nøye på skissen under før du går videre. Her ser du hvordan flyten i
    spillet skal være. Flyten i spillet skal styres gjennom meldinger som sendes
    mellom figurene. Hver gang noe nytt skal skje, som for eksempel et nytt
    spill skal startes, eller at menyen skal vises etter spillet er tapt skal
    det sendes en melding.
  </p>
  <figure>
    <img
      src="lessons/krabbeangrep_remiks/spillflyt.png"
      alt="Bilde av flyten i spillet"
    />
  </figure>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Først må du lage en figur som skal fungere som startknapp. Denne
          kan du tegne selv ved å klikke på
          <img
            src="lessons/krabbeangrep_remiks/../bilder/tegn-ny.png"
            alt="Tegn ny"
          />
          i figurområdet. Et enkelt rektangel med teksten
          <code>Start</code> inni burde gjøre susen. Gi den navnet
          <code>Startknapp</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi må også lage en bakgrunn som kan fungere som hovedmeny. Trykk
          på scenen og velg <code>Bakgrunner</code>. Lag en kopi av bakgrunnen
          <code>Rommet</code> ved å høyreklikke og trykke på
          <code>lag en kopi</code>. Pynt litt på den med tekst og hva annet du
          måtte ønske så man ser at det er en hovedmeny. Gi den navnet
          <code>Hovedmeny</code>.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-vi-lager-en-meny%2C-del-ii">
    Steg 3: Vi lager en meny, del II
  </h1>
  <p>
    <em
      >Som spillet er nå så startes det når man trykker på det grønne flagget.
      Nå vil vi at hovedmenyen skal dukke opp når vi trykker på det grønne
      flagget, og at spillet skal starte når man trykker på Startknapp
      figuren.</em
    >
  </p>
  <section class="protip">
    <h3 class="protip" id="se-mottakere">Se mottakere</h3>
    <p>
      Du kan sjekke hvem som mottar en bestemt melding ved å høyreklikke på en
      meldingskloss og klikke på <code>vis sendere</code> og
      <code>vis mottakere</code>. Da vil de som sender/mottar akkurat den
      meldingen få en ramme rundt seg i figurområdet.
    </p>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>[ ] Endre på skriptene i scenen slik at du har følgende skript:</p>
        <pre><code class="blocks">når grønt flagg klikkes
send melding [hovedmeny v]

Når jeg mottar [hovedmeny v]
bytt bakgrunn til [Hovedmeny v]
</code></pre>
      </li>
      <li>
        <p>
          [ ] Gi startknappen de følgende skriptene (de to første sørger for at
          knappen oppfører seg riktig i starten av spillet, og det siste sørger
          for at startknappen faktisk er en startknapp):
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul

når jeg mottar [hovedmeny v]
gå til x: (0) y: (0)
vis

når denne figuren klikkes
send melding [nytt spill v]
</code></pre>
      </li>
      <li>
        <p>
          [ ] Nå må vi sørge for at resten av figurene oppfører seg som vi vil
          både når flagget klikkes, når hovedmenyen skal vises og når
          startknappen klikkes! Det betyr at vi må ha mange små skript som
          lytter etter disse meldingene (skript som starter med klossene under
          <code class="blockevents">Hendelser</code>). Vi skal ikke skrive
          nøyaktig opp hvordan disse skriptene skal se ut, det skal du klare
          selv, men her er det som må med:
        </p>
      </li>
      <li>
        <p>
          [ ] Både romskipet, romvesenet og godbiten må gjøre følgende: figuren
          skjules når flagget klikkes og figuren går inn i
          <em>hovedløkken</em> sin når <code>nytt spill</code> mottas. Hva som
          er <em>hovedløkken</em> til en figur står tydelig skrevet i
          kommentarene.
        </p>
      </li>
      <li>
        <p>[ ] Startknappen må skjules når <code>nytt spill</code> mottas.</p>
      </li>
      <li>
        <p>
          [ ] Scenen må skifte bakgrunn til <code>Rommet</code> når
          <code>nytt spill</code> mottas.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Skjules alle figurene utenom startknappen når hovedmenyen vises?
        </p>
      </li>
      <li>
        <p>[ ] Starter spillet som det skal når startknappen klikkes?</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p>
      Nå er vi ferdig med å fortelle deg hva du skal gjøre. Resten av tiden kan
      du bruke på en eller flere av utfordringene nedenfor.
    </p>
  </section>
  <section class="challenge">
    <h2
      class="challenge"
      id="utfordring%3A-vis-poengsummen-n%C3%A5r-spillet-er-ferdig"
    >
      Utfordring: Vis poengsummen når spillet er ferdig
    </h2>
    <p>
      Nå som spillet har en god start kan du prøve å gi det en god slutt også. I
      denne utfordringen er målet å gjøre det siste steget i spillflyt-tegningen
      ovenfor. Du legger kanskje merke til at scenen har et skript som starter
      med <code class="blockevents">Når jeg mottar treff</code>, og at her
      sendes meldingen <code>tapte</code> hvis spilleren ikke har flere liv
      igjen? Det er ingen som mottar denne meldingen! Gi de andre figurene
      skript som reagerer på denne meldingen. En av figurene kan for eksempel si
      hvor mange poeng spilleren fikk i noen sekunder og så kan spillet gå
      tilbake til hovedmenyen.
    </p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring%3A-lag-flere-typer-angripere">
      Utfordring: Lag flere typer angripere
    </h2>
    <p>
      Spillet heter jo Krabbeangrep!, men det kan jo hende at det finnes andre
      romvesener som vil angripe jorden! Du kan gi Romvesen-figuren flere
      drakter som tilsvarer andre typer angripere. Klarer du å gjøre det slik at
      man får høyere poengsum om man skyter noen romvesener enn for andre? Da må
      du gjøre endringer i skriptet til scenen som lytter etter meldingen
      <code>treff!</code>. Du kan jo også gi Godbit-figuren flere drakter som
      man får flere poeng for å samle.
    </p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring%3A-flere-elementer-i-menyen">
      Utfordring: Flere elementer i menyen
    </h2>
    <p>
      Hva med å legge til flere knapper i menyen? Kanskje en knapp som heter
      <code>Hjelp</code> som når du trykker på den tar deg til en bakgrunn hvor
      det står hvordan man spiller spillet? Her må du huske på å ha en
      <code>tilbake</code>-knapp så man kommer seg tilbake til menyen etter man
      har lært seg spillet.
    </p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring%3A-gj%C3%B8r-spillet-vanskeligere">
      Utfordring: Gjør spillet vanskeligere
    </h2>
    <p>
      Akkurat nå er spillet ganske enkelt. Prøv å la krabbene dale nedover
      skjermen raskere og raskere når når man skyter flere av dem. Her kan det
      være lurt å lage en variabel som heter
      <code class="blockdata">hastighet</code> og bruke denne i hovedløkken til
      Romvesen-figuren. Så kan du for eksempel bruke en
      <code class="blockdata">endre hastighet med 1</code>-kloss når et romvesen
      treffes.
    </p>
  </section>
</section>
