<!-- generated from src/lessons/snake/snake.md -->

<svelte:head>
  <title>Snake</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    En eller annen variant av Snake har eksistert på nesten alle personlige
    datamaskiner helt siden slutten av 1970-tallet. Ekstra populært ble spillet
    da det dukket opp i Nokias mobiltelefoner i 1997, og de seneste årene har
    spillet til og med blitt innlemmet i New Yorks Museum of Modern Arts
    samling.
  </p>
  <p>
    Selve spillet går enkelt og greit ut på å styre en slange rundt på skjermen,
    mens slangen må unngå å krasje i kanten av skjermen eller seg selv. Slangen
    vokser ved å spise epler som dukker opp tilfeldige steder på skjermen. Snake
    kan videreutvikles på mange måter, enten ved å lage ekstra hindringer på
    skjermen, ved forskjellige typer bonusepler, eller for eksempel ved at to
    slanger konkurrerer om å spise eplene og om å stenge hverandre inne.
  </p>
  <figure>
    <img
      src="lessons/snake/snake.png"
      alt="Illustrasjon av et ferdig Snake spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="oversikt-over-prosjektet">
    Oversikt over prosjektet
  </h1>
  <p>
    <em
      >Mesteparten av kodingen av Snake skal du gjøre selv. I Snake bruker vi
      kloner på en litt spesiell og ganske smart måte. Vi vil derfor fokusere på
      kloning i begynnelsen av denne leksjonen.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="plan">Plan</h2>
    <ul>
      <li>
        <p>Slangen flytter på seg ... eller?</p>
      </li>
      <li>
        <p>Styr slangen til den krasjer!</p>
      </li>
      <li>
        <p>Epler og annet snadder.</p>
      </li>
      <li>
        <p>Vegger, bonusepler, flere slanger og andre utfordringer.</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-slangen-flytter-p%C3%A5-seg-...-eller%3F">
    Steg 1: Slangen flytter på seg ... eller?
  </h1>
  <p>
    <em
      >Snake er i prinsippet et enkelt spill å lage. Men en utfordring er
      hvordan selve slangen skal flyttes rundt. Først virker det kanskje som om
      man trenger en eller annen liste som husker hvor hver del av slangen er
      slik at man kan flytte den.</em
    >
  </p>
  <p>
    I stedet for å bruke lister skal vi bruke kloning på en litt spesiell måte.
    Husk at når vi kloner kopierer vi både utseendet og oppførselen til en
    figur. Vi vil starte med en enkel boks som vil være en del av kroppen til
    slangen. Denne boksen vil vi flytte, klone, flytte, klone og så videre.
    Trikset for at det skal se ut som om slangen flytter på seg er at de gamle
    klonene sletter seg selv etter litt tid.
  </p>
  <p>
    I figuren er den blå boksen hodet til slangen, de grønne boksene er kroppen
    til slangen, mens de hvite boksene indikerer hvor slangen har vært (men er
    egentlig slettede klonede bokser).
  </p>
  <figure>
    <img
      src="lessons/snake/teller.png"
      alt="Bilde av slangen, og hvor den har vært"
    />
  </figure>
  <p>
    For å vite når vi skal slette kloner bruker vi tre variabler:
    <code class="blockdata">lengde</code> er lengden på slangen,
    <code class="blockdata">teller</code> er en enkel teller som passer på hvor
    mange steg slangen har gått siden begynnelsen av spillet. Til slutt vil
    <code class="blockdata">min id</code> være et tall som forteller hvilket
    nummer i rekken en gitt klone er. Over er
    <code class="blockdata">min id</code> skrevet i hver boks,
    <code class="blockdata">teller</code> er 16 siden slangen har gått 16 steg,
    og <code class="blockdata">lengde</code> er 6.
  </p>
  <p>
    Trikset er nå ganske enkelt. Hver klone sletter seg selv hvis
    <code class="blockdata">min id</code> er mindre enn
    <code class="blockdata">teller</code> -
    <code class="blockdata">lengde</code>. La oss prøve dette ut i praksis.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt prosjekt. Slett kattefiguren.</p>
      </li>
      <li>
        <p>
          Lag en boksfigur. Tegn denne selv. Du bør lage den ganske liten slik
          at du får plass til en lang slange på skjermen. Pass også på at boksen
          blir like bred som høy. Et sted mellom <code>10 x 10</code> og
          <code>20 x 20</code> er en fin størrelse.
        </p>
        <figure>
          <img
            src="lessons/snake/boks.png"
            alt="Bilde av en eksempelboks i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Lag så de tre variablene: <code class="blockdata">lengde</code> og
          <code class="blockdata">teller</code> skal gjelde for alle figurer,
          mens <code class="blockdata">min id</code> må gjelde kun for denne
          figuren siden den skal være forskjellig for hver klon.
        </p>
      </li>
      <li>
        <p>
          Vi skal nå lage hovedløkken i spillet. Først setter vi de nødvendige
          variablene, deretter bruker vi en løkke til å lage stadig nye
          slangebokser.
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
sett [teller v] til [0]
sett [lengde v] til [5]
gjenta til &lt;berører [kant v]&gt;
    sett [min id v] til (teller)
    endre [teller v] med (1)
    vent (0.1) sekunder
    lag klon av [meg v]
    gå (10) steg
slutt
</code></pre>
        <p>
          Her må <code>10</code>-tallet i
          <code class="blockmotion">gå 10 steg</code>-klossen være likt med
          størrelsen på din boks.
        </p>
      </li>
      <li>
        <p>
          Selve kloneboksene trenger nå bare vente til de skal slette seg selv.
          Det er ganske enkelt.
        </p>
        <pre><code class="blocks">når jeg starter som klon
vent til &lt;((teller) - (lengde)) &gt; (min id)&gt;
slett denne klonen
</code></pre>
        <p>
          Sammenlign disse skriptene med figuren og forklaringen ovenfor.
          Skjønner du hvordan de fungerer?
        </p>
      </li>
      <li>
        <p>
          Prøv spillet ditt. Det kan være greit å lage et skript på scenen som
          sender ut meldingen <code>Nytt spill</code> når det grønne flagget
          klikkes. Du skal se en slange som beveger seg over skjermen, du kan
          selvsagt ikke styre den enda!
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-styr-slangen-til-den-krasjer!">
    Steg 2: Styr slangen til den krasjer!
  </h1>
  <p><em>Vi skal nå kontrollere slangen med piltastene.</em></p>
  <p>
    Det er lett å bruke piltastene til å kontrollere slangen. Siden den går av
    seg selv trenger vi bare å endre retningen når piltastene trykkes.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag et nytt skript som også starter på
          <code>Nytt spill</code>-meldingen. Lag en
          <code class="blockcontrol">gjenta for alltid</code>-løkke hvor du
          tester om hver piltast er trykket og endrer hvilken retning figuren
          peker tilsvarende.
        </p>
      </li>
      <li>
        <p>
          Legg til en <code class="blockmotion">gå til x: y:</code>- og en
          <code class="blockmotion">pek i retning</code>-kloss først i skriptet
          ditt slik at slangen starter et fornuftig sted i begynnelsen av
          spillet.
        </p>
      </li>
      <li>
        <p>
          Du kan markere hodet til slangen ved å lage en ekstra drakt. Lag for
          eksempel en kopi av den boksen du allerede har tegnet, og endre fargen
          på denne. Kall en av draktene <code>hode</code> og den andre
          <code>kropp</code>. Du kan da bruke <code>hode</code>-drakten i
          hovedløkken hvor du genererer klonen. I skriptet for hver klon endrer
          du så drakten til <code>kropp</code> før
          <code class="blockcontrol">vente</code>-klossen.
        </p>
      </li>
      <li>
        <p>
          Legg også inn en sjekk på om slangen krasjer i seg selv. Dette kan du
          for eksempel gjøre ved å utvide testen i
          <code class="blockcontrol">gjenta til</code>-klossen med
          <code class="blockoperators">eller</code> og
          <code class="blocksensing">berører fargen</code>.
        </p>
      </li>
      <li>
        <p>
          Prøv spillet ditt. Du skal nå kunne styre slangen din rundt på
          skjermen, helt til du krasjer i kanten eller i deg selv.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-epler-og-annet-snadder">
    Steg 3: Epler og annet snadder
  </h1>
  <p>
    <em
      >Nå skal vi gi slangen litt mål og mening. Ved å spise epler kan slangen
      vokse seg stor og sterk!</em
    >
  </p>
  <p>
    Eplene er ganske enkle å lage da vi bare trenger en figur som blir borte når
    slangen spiser dem. For å enklere kunne utvide med flere epler og slikt
    senere bruker vi kloner av eplene også.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny eplefigur. Denne bør være omtrent like stor som slangen. For
          eksempel en rød fyllt sirkel som er omtrent
          <code>10 x 10</code> passer bra.
        </p>
      </li>
      <li>
        <p>
          Lag et skript som starter på en ny melding <code>Lag eple</code>.
          Dette skriptet skal flytte eplet til et tilfeldig sted på skjermen, og
          deretter lage en klon. Men vi vil være litt nøye med at eplet havner i
          samme &quot;rutenett&quot; som slangen. For eksempel, om slangeboksene
          dine er <code>10 x 10</code> kan du bruke noe som dette:
        </p>
        <pre><code class="blocks">gå til x: ((10) * (tilfeldig tall fra (-23) til (23))) y: ((10) * (tilfeldig tall fra (-16) til (16)))
</code></pre>
        <p>
          Husk at skjermen har koordinater fra <code>-240</code> til
          <code>240</code> i x-retning, og <code>-180</code> til
          <code>180</code> i y-retning. Pass på at eplene dine lander godt
          innenfor skjermen slik at slangen kan spise dem.
        </p>
      </li>
      <li>
        <p>
          Nå trenger vi et skript som sender ut slike
          <code>Lag eple</code>-meldinger. Lag et skript som starter når det
          mottar <code>Nytt spill</code>. Dette skriptet skal
          <code class="blocklooks">skjule</code> eplet og deretter sende en
          <code>Lag eple</code>-melding.
        </p>
      </li>
      <li>
        <p>
          Til slutt lager vi oppførselen for et slikt kloneeple. Lag et nytt
          skript som starter med
          <code class="blockcontrol">når jeg starter som klon</code>. Dette
          skriptet må <code class="blocklooks">vise</code> eplet,
          <code class="blockcontrol">vente til</code> det
          <code class="blocksensing">berører slangen</code>, øke
          <code class="blockdata">lengden</code> på slangen, deretter
          <code class="blockevents">sende</code> en
          <code>Lag eple</code>-melding og til slutt
          <code class="blockcontrol">slette denne klonen</code>.
        </p>
      </li>
      <li>
        <p>
          Legg på noen enkle lydeffekter! For eksempel passer lyden
          <code>chomp</code> ganske bra når et eple blir spist. Hvilken lyd
          passer når slangen krasjer?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-videreutvikling-av-spillet">
    Steg 4: Videreutvikling av spillet
  </h1>
  <p>
    <em
      >Du står helt fritt i hvordan du vil jobbe videre med spillet ditt, men
      her er noen ideer som kan gjøre spillet enda morsommere å spille:</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="ideer-til-videreutvikling">
      Ideer til videreutvikling
    </h2>
    <ul>
      <li>
        <p>
          Legg til en poeng-teller. Det enkleste er bare å bruke
          <code class="blockdata">lengde</code> som poeng. Vis denne variabelen
          på skjermen. Høyreklikk på den og velg <code>stor</code>.
        </p>
      </li>
      <li>
        <p>
          La hastigheten øke etterhvert i spillet. Vanligvis gjør vi dette ved å
          forandre hvor mange steg en figur går. Det kan vi ikke gjøre her siden
          hver boks i slangekroppen må henge sammen. I stedet kan du forandre på
          hvor lenge det ventes mellom hver klon som lages.
        </p>
      </li>
      <li>
        <p>
          Kanskje du kan videreutvikle hele konseptet, slik at det er mulig å
          plukke opp forskjellige bonusepler underveis. For eksempel kan du ha
          epler som øker lengden på slangen med mer enn 1, epler som lager flere
          epler, ekstra store epler, eller noe helt annet.
        </p>
      </li>
      <li>
        <p>
          Det trenger jo ikke bare være ett eple om gangen. Om du for eksempel
          lager tre epler i starten av spillet vil det være litt mindre leting
          etter eplene og spillet kan være litt morsommere. Du kan gjøre dette
          ved hjelp av kloning, bare pass på at ikke klonene lager nye kloner
          igjen!
        </p>
      </li>
      <li>
        <p>
          La eplene flytte seg om det går en viss tid uten at de blir spist. For
          å holde styr på tiden kan du bruke
          <code class="blocksensing">tid</code>-klossen i
          <code class="blocksensing">Sansning</code>-kategorien.
        </p>
      </li>
      <li>
        <p>
          I stedet for at slangen bare kan krasje i seg selv eller i kanten, kan
          du også lage hindringer på selve brettet. Disse kan du for eksempel
          tegne på bakgrunnen i en spesiell farge og deretter undersøke om
          slangen <code class="blocksensing">berører fargen</code>. Du kan til
          og med ha flere brett med dører mellom.
        </p>
      </li>
      <li>
        <p>
          Hva med å lage en to-spiller versjon? Spillerene styrer hver sin
          slange, og samtidig som de konkurrerer om å spise eplene prøver de å
          sperre hverandre inne.
        </p>
      </li>
      <li>
        <p>
          Spillet ditt fortjener også en forside og en meny som kan starte
          spillet. Her kan du også la spillerene velge vanskelighetsgrad ved å
          endre på ting som lengde, hastighet, hinder i banen og så videre.
        </p>
      </li>
    </ul>
  </section>
</section>
