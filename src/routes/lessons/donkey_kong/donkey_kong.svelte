<!-- generated from src/lessons/donkey_kong/donkey_kong.md -->

<svelte:head>
  <title>Donkey Kong</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Donkey Kong var det første virkelig plattform-spillet da det ble gitt ut i
    1981. I tillegg til Donkey Kong var det også her vi første gang ble kjent
    med Super Mario (som het Jumpman den gang). I spillet styrer vi Super Mario
    mens han prøver å redde kjæresten sin fra Donkey Kong, og må passe seg for
    tønner og ildkuler mens han hopper mellom plattformer.
  </p>
  <figure>
    <img
      src="lessons/donkey_kong/donkey_kong.png"
      alt="Illustrasjon av et ferdig Donkey Kong spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="oversikt-over-prosjektet">
    Oversikt over prosjektet
  </h1>
  <p>
    <em
      >Mesteparten av kodingen av Donkey Kong skal du gjøre selv. Underveis vil
      du lære hvordan du lager et enkelt plattform-spill i Scratch.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="plan">Plan</h2>
    <ul>
      <li>
        <p>Hvordan styre en plattform-helt som kan hoppe?</p>
      </li>
      <li>
        <p>Plattformer og stiger</p>
      </li>
      <li>
        <p>Donkey Kong og rullende ildkuler</p>
      </li>
      <li>
        <p>.. og andre utfordringer</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-en-hoppende-helt">
    Steg 1: En hoppende helt
  </h1>
  <p>
    <em
      >Den viktigste delen av et godt plattform-spill er å ha en helt man kan
      styre rundt og hoppe fra plattform til plattform med.</em
    >
  </p>
  <p>
    I denne delen skal vi konsentrere oss om hvordan vi kan styre heltefiguren,
    og spesielt hvordan vi får den til å hoppe og falle på en troverdig måte.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt prosjekt.</p>
      </li>
      <li>
        <p>
          For å kunne teste at heltefiguren oppfører seg som vi vil trenger vi
          en enkel plattform (vi skal tegne flere plattformer senere). Tegn en
          ny bakgrunn. Velg å tegne med <code>Vektorgrafikk</code>. Tegn en
          smal, lang boks nederst på skjermen. Fyll den med en farge forskjellig
          fra linjefargen.
        </p>
        <figure>
          <img
            src="lessons/donkey_kong/plattform.png"
            alt="Bilde av en plattform i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Velg eller lag deg en figur du ønsker å bruke som den hoppende helten
          du skal styre. Om du ikke bruker Scratch-katten så slett denne. Kall
          figuren <code>Jumpman</code>. Sannsynligvis vil vi gjøre figuren
          mindre slik at vi får plass til flere plattformer på skjermen. Dette
          kan du gjøre med kode som kun kjører i det du starter spillet, for
          eksempel:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett størrelse til (40) %
begrens rotasjon [vend sideveis v]
</code></pre>
        <p>
          Vi har også lagt til en kloss som passer på at
          <code>Jumpman</code> bare snur seg mot høyre eller venstre.
        </p>
      </li>
      <li>
        <p>
          Vi trenger to variabler som vi skal bruke til å kontrollere bevegelsen
          til <code>Jumpman</code>. Lag to variabler,
          <code class="b">(fartX)</code> og <code class="b">(fartY)</code>. Pass
          på at begge gjelder kun <em>for denne figuren</em>.
        </p>
      </li>
      <li>
        <p>
          I hovedløkken som styrer <code>Jumpman</code> vil vi først endre litt
          på disse <code class="blockdata">fart</code>-variablene, og til slutt
          flytte selve figuren basert på dem.
        </p>
        <p>
          Dersom ingenting påvirker figuren vår vil vi at
          <code class="b">(fartX)</code> skal gå mot 0 (farten bremses), mens vi
          vil at <code class="b">(fartY)</code> skal bli et stadig større
          negativt tall (figuren faller). Men om figuren står på plattformen
          skal <code class="b">(fartY)</code> være 0 (figuren står i ro). Dette
          kan vi kode omtrent som følger:
        </p>
        <pre><code class="blocks">når jeg mottar [nytt spill v]
gå til x: (-150) y: (-100)
gjenta for alltid  // hovedløkken
    sett [fartX v] til ((0.8) * (fartX))  // farten bremses
    endre [fartY v] med (-0.5)  // gravitasjon, figuren faller
    hvis &lt;berører fargen [#0000ff]&gt;  // figuren står på plattformen
        sett [fartY v] til [0]
    slutt
    endre x med (fartX)  // flytt selve figuren
    endre y med (fartY)
slutt
</code></pre>
      </li>
      <li>
        <p>
          Om du prøver spillet ditt så langt (husk å legge til et skript på
          bakgrunnen som sender en <code>nytt spill</code>-melding når det
          grønne flagget klikkes), vil du se at figuren din faller ned til
          plattformen. Men du kan ikke kontrollere den.
        </p>
      </li>
      <li>
        <p>
          For å styre <code>Jumpman</code> legger vi flere
          <code class="blockcontrol">hvis</code>-tester inn i hovedløkken. For
          eksempel kan du få figuren til å bevege seg mot venstre ved å legge
          til dette rett før <code class="b">endre x med (fartX)</code>:
        </p>
        <pre><code class="blocks">hvis &lt;tast [pil venstre v] trykket?&gt;
    pek i retning (-90 v)
    sett [fartX v] til [-5]
    neste drakt
slutt
</code></pre>
        <p>Lag også en tilsvarende blokk for å flytte figuren mot høyre.</p>
      </li>
      <li>
        <p>
          Vi vil også at <code>Jumpman</code> hopper når vi trykker på
          <code>pil opp</code>-tasten. Her må vi være litt forsiktig, siden vi
          bare vil at figuren kan hoppe hvis den står på en plattform (ikke når
          den allerede hopper). En enkel måte å få til dette på er å legge
          <code>pil opp</code>-testen inne i testen for om figuren står på
          plattformen:
        </p>
        <pre><code class="blocks">hvis &lt;berører fargen [#0000ff]&gt;  // gammel kode: figuren står på plattformen
    sett [fartY v] til [0]
    hvis &lt;tast [pil opp v] trykket?&gt;  // ny kode: figuren hopper
        sett [fartY v] til [5]
    slutt
slutt
</code></pre>
      </li>
    </ul>
    <p>
      Vi har nå et bra utgangspunkt for et plattformspill. Nemlig en figur som
      vi kan styre rundt, og som kan hoppe når vi vil det. Lek litt med
      <code>Jumpman</code> og tallene vi har brukt i
      <code class="b">sett [fartX v] til []</code>- og
      <code class="b">sett [fartY v] til []</code>-klossene slik at du får en
      bevegelse du synes virker naturlig.
    </p>
    <ul>
      <li>
        <p>
          Du har kanskje oppdaget at av og til faller
          <code>Jumpman</code> delvis <em>gjennom</em> plattformen? Hvis ikke,
          prøv å slipp ham fra toppen av skjermen. Den følgende testen fikser
          dette ganske greit:
        </p>
        <pre><code class="blocks">hvis &lt;berører fargen [#009900]&gt;
    endre y med (2)
slutt
</code></pre>
        <p>
          Dette var også grunnen til at vi fylte plattformen med en annen farge
          enn linjefargen.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-plattformer-og-stiger">
    Steg 2: Plattformer og stiger
  </h1>
  <p>
    <em
      >Nå har vi en figur som kan springe og hoppe rundt på skjermen. La oss
      lage flere plattformer den kan leke seg på.</em
    >
  </p>
  <p>
    Mens vi tegner flere plattformer er det viktig at vi bruker
    <code>Vektorgrafikk</code> fordi dette gjør det lett å flytte plattformene
    rundt etter at vi har tegnet dem.
  </p>
  <section class="activity">
    <h2 class="activity" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Før vi tegner flere plattformer skal vi lage stiger, som vil gjøre det
          enklere for helten vår å klatre opp eller ned. Som for plattformer
          skal vi kjenne igjen stiger ved hjelp av fargen. For å gjøre litt
          enkel testing, tegn først en strek rett opp fra plattformen (vi skal
          tegne en finere stige senere) i en ny farge:
        </p>
        <figure>
          <img
            src="lessons/donkey_kong/stige.png"
            alt="Bilde av en rett strek som illustrerer en stige"
          />
        </figure>
        <p>
          Bruke <strong>linje</strong>-verktøyet og hold inne
          <code>shift</code>-knappen mens du tegner for å få en helt rett linje.
        </p>
      </li>
      <li>
        <p>
          Hvordan skal helten vår klatre i en stige? Først og fremst vil han
          ikke falle nedover (på samme måte som når han står på en plattform). I
          tillegg vil vi kunne klatre opp og ned i stigen. Legg til denne testen
          på <code>Jumpman</code>:
        </p>
        <pre><code class="blocks">hvis &lt;berører fargen [#ff0000]?&gt;
    sett [fartY v] til [0]
    hvis &lt;tast [pil opp v] trykket?&gt;
        endre y med (3)
    slutt
slutt
</code></pre>
        <p>
          Med denne koden kan vi klatre opp stigen. Hvordan kommer vi oss ned
          igjen? Kan du legge til en
          <code class="b">hvis &lt;tast [pil ned v] trykket?&gt;</code>-test til
          slik at vi også kan klatre ned stigen?
        </p>
      </li>
      <li>
        <p>
          Tegn flere plattformer og stiger. Test underveis at det er mulig for
          <code>Jumpman</code> å klatre eller hoppe mellom plattformene, men
          samtidig at han ikke klarer å hoppe mellom to plattformer når det ikke
          er meningen at det skal gå an.
        </p>
      </li>
      <li>
        <p>
          Når du er fornøyd med hvordan brettet ser ut kan du også tegne stigene
          litt finere. Om du vil kan du også vente med dette til etter at du har
          programmert Donkey Kong i neste steg.
        </p>
        <figure>
          <img
            src="lessons/donkey_kong/stige_med_plattform.png"
            alt="Bilde av en mer realistisk stige"
          />
        </figure>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-donkey-kong-og-rullende-ildkuler">
    Steg 3: Donkey Kong og rullende ildkuler
  </h1>
  <p>
    <em
      >På tide med litt utfordringer! Nå skal vi programmere Donkey Kong til å
      kaste rullende ildkuler mot oss.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en <code>Donkey Kong</code>-figur, og plasser den på en passende
          plattform. Denne vil ikke bevege seg i dette spillet, slik at den
          eneste koden vi egentlig trenger er for å kaste ildkuler. Vi skal lage
          denne koden snart.
        </p>
      </li>
      <li>
        <p>
          Lag også en ny <code>Ildkule</code>-figur. Dette kan være en sirkel du
          farger oransje, eller du kan prøve å tegne noe mer avansert. La
          figuren <code class="blocklooks">skjules</code> når det grønne flagget
          klikkes.
        </p>
      </li>
      <li>
        <p>
          Nå skal vi skrive koden på Donkey Kong. Den blir ganske enkel. Etter
          at <code>Donkey Kong</code> mottar <code>nytt spill</code> kan du la
          han gå inn i en <code class="blockcontrol">for alltid</code>-løkke
          hvor han <code class="blockcontrol">lager klon av Ildkule</code> og
          deretter <code class="blockcontrol">venter 3 sekunder</code>.
        </p>
      </li>
      <li>
        <p>
          Men nå må vi programmere hvordan ildkulene skal oppføre seg. Vi vil
          holde styr på hvordan de beveger seg ved hjelp av
          <code class="b">(fartX)</code> og <code class="b">(fartY)</code> på
          samme måte som for <code>Jumpman</code>. Lag derfor disse to
          variablene også på <code>Ildkule</code>. Husk at de skal gjelde kun
          <em>for denne figuren</em>.
        </p>
      </li>
      <li>
        <p>
          Først bestemmer vi hvilken fart kula har når
          <code>Donkey Kong</code> kaster den. Dette gjør vi ved å sette
          <code class="blockdata">fart</code>-variablene, for eksempel på denne
          måten:
        </p>
        <pre><code class="blocks">når jeg starter som klon
gå til [Donkey Kong v]
sett [fartX v] til [3]
sett [fartY v] til (tilfeldig tall fra (0) til (5))
vis
</code></pre>
      </li>
      <li>
        <p>
          Videre bestemmer vi hvordan kulene oppfører seg ved å lage en
          hovedløkke på omtrent samme måte som for <code>Jumpman</code>.
        </p>
        <p>
          Legg en
          <code class="b">gjenta til &lt;(y-posisjon) &lt; [-170]&gt;</code
          >-kloss nederst i
          <code class="b">når jeg starter som klon</code>-skriptet, og fyll
          denne med kode som lar kulen falle, merker at ildkulen ligger på
          plattformen, og flytter selve figuren.
        </p>
      </li>
      <li>
        <p>
          Legg også til kode som gjør at ildkulene snur,
          <code class="b">sett [fartX v] til ((-1) * (fartX))</code>, når de
          <code class="blocksensing">berører kant</code>, og kode som sender en
          melding, <code>fanget Jumpman</code>, når de
          <code class="blocksensing">berører Jumpman</code>.
        </p>
      </li>
      <li>
        <p>
          Lag kode på <code>Jumpman</code> som mottar
          <code>fanget Jumpman</code>, og som kanskje
          <code class="blocksound">spiller en lyd</code>.
        </p>
      </li>
      <li>
        <p>
          Til slutt, lag en skatt som Jumpman skal redde. Dette blir en ny figur
          som kan stå i ro til den <code>berører Jumpman</code> og deretter
          sende en melding <code>fant skatten</code>. Skriv kode som svarer på
          denne meldingen på passende måte.
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
      >Du har nå laget en enkel variant av Donkey Kong. Men prøv å gjøre spillet
      morsommere ved å videreutvikle det. Du bestemmer selv hvordan du vil jobbe
      videre, men nedenfor er noen ideer som kanskje kan være til
      inspirasjon?</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="ideer-til-videreutvikling">
      Ideer til videreutvikling
    </h2>
    <ul>
      <li>
        <p>
          Legg gjerne til flere animasjoner og lyder. For eksempel kan Donkey
          Kong gjøre en kastebevegelse når han kaster ildkuler.
        </p>
      </li>
      <li>
        <p>
          Lag en forside og meny. Om du lager en forside som forteller litt om
          hvordan man spiller spillet ditt blir det enklere for andre å spille
          det også!
        </p>
      </li>
      <li>
        <p>
          Vi har laget ett brett, men du kan enkelt tegne flere bakgrunner med
          andre plattformer og hindringer. Prøv å lag flere brett hvor man
          kommer videre til neste nivå etter at man har funnet skatten.
        </p>
      </li>
      <li>
        <p>
          For å gi spillerene litt mer motivasjon kan det være lurt å telle
          poeng og liv. Til dette trenger du to nye variabler,
          <code class="b">(poeng)</code> og <code class="b">(liv)</code>. For å
          telle liv kan du bruke <code>fanget Jumpman</code>-meldingen. Før du
          teller poeng må du tenke på hva du vil at spillerene skal få poeng
          for?
        </p>
      </li>
      <li>
        <p>
          Du kan legge til en tidsbegrensning om du vil gjøre spillet mer
          utfordrende. Til dette bruker du en variabel
          <code class="b">(tid)</code> som du
          <code class="blockdata">endrer</code> og deretter
          <code class="blockcontrol">venter 1 sekund</code>.
        </p>
      </li>
    </ul>
  </section>
</section>
