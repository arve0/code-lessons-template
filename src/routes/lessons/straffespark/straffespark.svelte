<svelte:head>
  <title>Straffespark</title>
</svelte:head>
<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Vi skal lage et enkelt fotballspill, hvor du skal prøve å score på så mange
    straffespark som mulig.
  </p>
  <figure>
    <img
      src="lessons/straffespark/straffespark.png"
      alt="Illustrasjon av et ferdig straffesparkspill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-katten-og-fotballbanen">
    Steg 1: Katten og fotballbanen
  </h1>
  <p>
    <em
      >Vi begynner med å lage en katt som kan bevege seg på en fotballbane.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Start et nytt prosjekt, for eksempel ved å klikke
          <code>Programmering</code> i menyen. Hvis du allerede har startet et
          prosjekt kan du begynne på et nytt ved å velge <code>Fil</code> og
          deretter <code>Ny</code>.
        </p>
      </li>
      <li>
        <p>[ ] Klikk på kattefiguren og gi katten navnet <code>Leo</code>.</p>
      </li>
      <li>
        <p>
          [ ] Klikk på
          <img
            src="lessons/straffespark/../bilder/velg-bakgrunn.png"
            alt="Velg ny bakgrunn"
          />
          nederst til høyre på skjermen for å hente inn en ny bakgrunn. Velg
          bakgrunnen <code>Sport/soccer 2</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi skal nå skrive et lite program som flytter katten
          <code>Leo</code> når vi klikker på ham. Klikk på <code>Leo</code> i
          figurvinduet nederst på skjermen. Pusle deretter sammen de følgende
          klossene i skriptvinduet i midten av skjermen:
        </p>
        <pre><code class="blocks">når denne figuren klikkes
gå (10) steg
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Flytter <code>Leo</code> på seg når du klikker på ham?</p>
      </li>
      <li>
        <p>
          [ ] Hva skjer om du klikker mange ganger på <code>Leo</code> slik at
          han når bort til kanten av scenen?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Du kan flytte <code>Leo</code> tilbake på skjermen ved å trykke på
          ham og dra ham dit du vil.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi vil likevel programmere en enklere måte å få
          <code>Leo</code> tilbake på banen på. Lag et
          <strong>nytt</strong> skript, <strong>ved siden av</strong> det du
          allerede har laget, som ser slik ut:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-180) y: (-30)
</code></pre>
      </li>
      <li>
        <p>
          [ ] Nå vil <code>Leo</code> komme tilbake på banen hver gang du
          klikker det grønne flagget rett over scenen.
        </p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p>
      Du har nå skrevet et lite program! Scratch lagrer alt du gjør med jevne
      mellomrom. Det er likevel en god vane å lagre selv også innimellom.
    </p>
    <ul>
      <li>
        <p>
          [ ] På midten øverst på skjermen er det et tekstfelt hvor du kan gi et
          navn til spillet ditt. Kall det for eksempel
          <code>Straffespark</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] I menyen <code>Fil</code> kan du velge <code>Lagre nå</code> for å
          lagre prosjektet.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-vi-sparker-ballen">
    Steg 2: Vi sparker ballen
  </h1>
  <p><em>Det neste vi trenger i spillet vårt er en ball!</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Vi skal nå legge til en ball-figur i spillet vårt. Klikk på
          <img
            src="lessons/straffespark/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />
          og velg fotballen <code>Sport/Soccer Ball</code>.
        </p>
      </li>
      <li>
        <p>[ ] Gi fotballen navnet <code>Ball</code>.</p>
      </li>
      <li>
        <p>
          [ ] Gjør ballen mindre ved først å trykke på
          <code>Størrelse</code> feltet, og endre tallet fra 100 til 60.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi skal nå skrive et litt lengre program for ballen. I dette
          programmet legger vi først fotballen på plass foran katten. Etter at
          ballen berører <code>Leo</code> (det vil si <code>Leo</code> sparker
          ballen) begynner ballen å bevege seg. Se om du kjenner igjen hvor i
          programmet de forskjellige tingene skjer:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-125) y: (-60)
vent til &lt;berører [Leo v]?&gt;
gjenta for alltid
    gå (6) steg
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
        <p>[ ] Sparker <code>Leo</code> ballen når du klikker på ham?</p>
      </li>
      <li>
        <p>
          [ ] Kan <code>Leo</code> sparke ballen en gang til dersom du trykker
          det grønne flagget igjen?
        </p>
      </li>
      <li>
        <p>
          [ ] Hvis <code>Leo</code> sparker ballen før du klikker på ham (med en
          gang du trykker det grønne flagget), så må du endre litt på tallene i
          <code class="b">gå til x: () y: ()</code>-klossen slik at ballen
          ligger i ro foran <code>Leo</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Noen ganger flytter ballen seg tilbake <em>før</em>
          <code>Leo</code> er tilbake på plassen sin og dermed berører ballen
          <code>Leo</code> igjen og begynner å bevege seg. Da hjelper det å
          legge til en <code class="b">vent (1) sekunder</code>-kloss før
          <code class="b">vent til &lt;berører [Leo v]?&gt;</code>-klossen.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-vi-trenger-en-keeper!">
    Steg 3: Vi trenger en keeper!
  </h1>
  <p>
    <em
      >Vi skal nå gjøre spillet litt vanskeligere ved å programmere en
      keeper.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Legg til en figur til som kan være keeper. Vi har brukt
          <code>Dyr/Octopus</code>, men du kan også bruke en annen figur om du
          vil.
        </p>
      </li>
      <li>
        <p>[ ] Flytt figuren foran på høyre side.</p>
      </li>
      <li>
        <p>[ ] Gi figuren navnet <code>Keeper</code>.</p>
      </li>
      <li>
        <p>[ ] Lag det følgende programmet for keeperen:</p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (100) y: (-50)
pek i retning (0 v)
gjenta for alltid
    gå (15) steg
    sprett tilbake ved kanten
slutt
</code></pre>
        <p>
          Det er et par nye klosser i dette skriptet. Les programmet nøye. Hva
          tror du de nye klossene gjør?
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Starter keeperen i målet?</p>
      </li>
      <li>
        <p>[ ] Beveger <code>Keeper</code> seg opp og ned på skjermen?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] En ting som ser litt rart ut er at <code>Keeper</code> ikke ser på
          ballen. Vi fikser dette ved å legge til en
          <code class="b">begrens rotasjon [snu sideveis v]</code>-kloss helt i
          begynnelsen av skriptet vårt.
        </p>
      </li>
      <li>
        <p>
          [ ] Du synes kanskje at keeperen er litt stor? Vi har tidligere sett
          hvordan vi kan redusere tallet i <code>Størrelse</code>-boksen i
          figuren for å gjøre figurer mindre. En annen måte å endre størrelsen
          på er ved å bruke klosser fra
          <code class="blocklooks">Utseendet</code>-kategorien.
        </p>
        <p>
          Legg klossen <code class="b">sett størrelse til (100)%</code> inn i
          <code class="blockcontrol">gjenta for alltid</code>-løkka. Du kan nå
          eksperimentere med å endre <code>100%</code> til et annet tall til du
          finner en passende størrelse på keeperen. Om du har brukt blekkspruten
          som <code>Keeper</code> passer <code>50%</code> ganske bra. Prøv deg
          frem!
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Ser keeperen i retning av <code>Leo</code> og ballen?</p>
      </li>
      <li>
        <p>
          [ ] Hva skjer etter at katten skyter mot mål? Kan keeperen redde
          ballen?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-keeperen-redder!">
    Steg 4: Keeperen redder!
  </h1>
  <p><em>Nå er det på tide at keeperen redder ballen!</em></p>
  <p>
    Vi skal nå lage noen tester som sier i fra når keeperen redder ballen, eller
    når ballen går i mål.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Vi begynner med å finne ut når keeperen redder ballen. Klikk på
          <code>Ball</code>. Legg til en
          <code class="blockcontrol">hvis ellers</code>-kloss i skriptet slik:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-125) y: (-60)
vent til &lt;berører [Leo v]?&gt;
gjenta for alltid
    gå (6) steg
    hvis &lt;berører [Keeper v]?&gt;
        send melding [Redning v]
    ellers
    slutt
slutt
</code></pre>
        <p>
          I klossen <code class="b">send melding [message1 v]</code> må du velge
          <code>Ny melding</code> og deretter skrive inn
          <code>Redning</code> som meldingsnavn.
        </p>
      </li>
    </ul>
    <p>
      Meldinger er beskjeder som figurene i spillet kan sende seg i mellom uten
      at du egentlig ser det. Disse gjør det lett for flere figurer å reagere på
      ting som skjer.
    </p>
    <ul>
      <li>
        <p>
          [ ] Vi vil nå at både ballen og keeperen skal slutte å bevege seg ved
          en redning. Legg til dette som et nytt skript på både
          <code>Ball</code> og <code>Keeper</code>:
        </p>
        <pre><code class="blocks">når jeg mottar [Redning v]
stopp [andre skript i figuren v] :: control
</code></pre>
        <p>
          Et triks er å først skrive denne koden for <code>Ball</code>. Deretter
          kan du kopiere den til <code>Keeper</code> ved å dra koden til
          <code>Keeper</code>-figuren i figurvinduet nederst på skjermen.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        [ ] Slutter både ballen og keeperen å bevege seg om keeperen redder?
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <p>
      Nå skal vi også sjekke om ballen har gått i mål. Vi gjør dette ved å
      undersøke hvor langt til høyre på skjermen ballen har beveget seg.
      Posisjonen til en figur i Scratch er beskrevet ved hjelp av koordinater:
      <code class="b">(x-posisjon)</code> sier hvor en figur er sidelengs på
      skjermen, mens <code class="b">(y-posisjon)</code> sier hvor langt opp
      eller ned på skjermen en figur er.
    </p>
    <p>
      Rett under scenen kan du se to tall merket <code>x</code> og
      <code>y</code>. Disse viser koordinatene til musepekeren. De endrer seg
      automatisk når figuren flytter seg - og når du endrer dem så flytter
      figuren seg automatisk, også.
    </p>
    <figure>
      <img
        src="lessons/straffespark/koordinater.png"
        alt="Bilde av hvor x- og y-koordinatene vises i Scratch"
      />
    </figure>
    <ul>
      <li>
        <p>
          [ ] Vi sier at det har blitt mål om ballen går langt nok til høyre
          uten at den blir reddet. Om du prøver å legge ballen på målstangen du
          at målstanga er omtrent ved <code>x</code> lik 230. Endre skriptet på
          ballen litt til, slik at det blir seende slik ut:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-125) y: (-60)
vent til &lt;berører [Leo v]?&gt;
gjenta for alltid
    gå (6) steg
    hvis &lt;berører [Keeper v]?&gt;
        send melding [Redning v]
    ellers
        hvis &lt;(x-posisjon) &gt; [230]&gt;
            send melding [Mål v]
        slutt
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] På samme måte som for redning kan vi avslutte bevegelsen til
          <code>Ball</code> og <code>Keeper</code> ved å lage dette skriptet på
          begge figurene:
        </p>
        <pre><code class="blocks">når jeg mottar [Mål v]
stopp [andre skript i figuren v] :: control
</code></pre>
      </li>
      <li>
        <p>
          [ ] Vi kan også la <code>Leo</code> juble litt når han scorer mål.
          Klikk på kattefiguren og gi ham følgende skript:
        </p>
        <pre><code class="blocks">når jeg mottar [Mål v]
si [Ja, det ble mål!!] i (2) sekunder
</code></pre>
      </li>
      <li>
        <p>
          [ ] Lag et tilsvarende skript der <code>Leo</code> sier noe om at han
          er lei seg om det blir en <code>Redning</code>. Prøv dette på egen
          hånd!
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Klarer du å score mål?</p>
      </li>
      <li>
        <p>[ ] Klarer keeperen å redde noen skudd?</p>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="endre-farten">Endre farten</h2>
    <p>
      Du kan gjøre spillet enklere eller vanskeligere ved å endre farten på
      ballen og hvor fort keeperen beveger seg. Begge disse er bestemt av tallet
      som står i <code class="b">gå () steg</code>-klossene til henholdsvis
      <code>Ball</code> og <code>Keeper</code>.
    </p>
    <p>
      Prøv forskjellige tall for både fotballen og keeperen til du finner den
      kombinasjonen du liker best. Pass på at det blir litt vanskelig, men ikke
      umulig.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-f%C3%B8rstemann-til-10!">
    Steg 5: Førstemann til 10!
  </h1>
  <p>
    <em
      >Vi skal tilslutt se på hvordan vi kan telle hvor mange mål som
      scores.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-8">Sjekkliste</h2>
    <p>
      For å telle hvor mange mål du har scoret, og hvor mange redninger
      <code>Keeper</code> har gjort, skal vi bruke <em>variabler</em>.
    </p>
    <ul>
      <li>
        <p>[ ] Klikk på scenen til høyre for figurlisten.</p>
      </li>
      <li>
        <p>
          [ ] Klikk på <code class="blockdata">Variabler</code>-kategorien og
          lag en ny variabel. Gi den nye variabelen navnet <code>Mål</code>.
          Legg merke til at det dukket opp en ny boks på scenen som er merket
          <code>Mål</code>, og som viser tallet
          <code class="blockdata">0</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi vil nå telle målene. Lag et nytt skript som endrer
          <code class="b">(Mål)</code> hver gang meldingen
          <code>Mål</code> sendes, ved å lage dette skriptet på Scenen:
        </p>
        <pre><code class="blocks">når jeg mottar [Mål v]
endre [Mål v] med (1)
</code></pre>
      </li>
      <li>
        <p>
          [ ] Vi kan gjøre tilsvarende for å telle antall redninger. Lag en ny
          variabel som heter <code class="b">(Redninger)</code>.
        </p>
      </li>
      <li>
        <p>[ ] Lag deretter et nytt skript for å telle redningene:</p>
        <pre><code class="blocks">når jeg mottar [Redning v]
endre [Redninger v] med (1)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-7">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Teller spillet hver gang du scorer mål?</p>
      </li>
      <li>
        <p>[ ] Telles også hvor mange redninger keeperen gjør?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-9">Sjekkliste</h2>
    <p>
      Avslutningsvis vil vi legge inn en test på om <code>Leo</code> klarer å
      score 10 mål eller <code>Keeper</code> klarer å redde 10 ganger. Dette er
      litt omfattende.
    </p>
    <ul>
      <li>
        <p>
          [ ] Først vil vi lage to nye bakgrunner, en vi kan bruke om spilleren
          vinner (katten scorer 10 ganger) og en vi bruker om spilleren taper
          (keeperen redder 10 ganger). Klikk på <code>Bakgrunner</code>-fanen.
          Høyreklikk på den lille versjonen av bakgrunnen til venstre på
          skjermen og velg <code>Lag en kopi</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Velg en passende farge, og klikk deretter på tekstverktøyet
          (ikonet med stor T). Velg Skrifttype: <code>Marker</code>. Skriv en
          seierstekst, for eksempel <code>Gratulerer, du vant!</code>. Plasser
          den litt høyt på kopien av bakgrunnen. Gi denne bakgrunnen navnet
          <code>Seier</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Lag deretter en ny kopi av den originale bakgrunnen. Kall denne
          bakgrunnen <code>Tap</code> og skriv også her en passende tekst.
        </p>
      </li>
      <li>
        <p>
          [ ] Lag et skript på bakgrunnen som setter variabelene dine til 0 ved
          begynnelsen av spillet.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett [Mål v] til [0]
sett [Redninger v] til [0]
bytt bakgrunn til [goal1]
send melding [Nytt spark v]
</code></pre>
      </li>
      <li>
        <p>
          [ ] Vi vil nå spille uten at vi må klikke på det grønne flagget for
          hver gang vi skal skyte et straffespark. Til dette bruker vi meldingen
          <code>Nytt spark</code>. Vi må nå bytte ut
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
</code></pre>
        <p>med</p>
        <pre><code class="blocks">når jeg mottar [Nytt spark v]
</code></pre>
        <p>
          på både <code>Leo</code>, <code>Ball</code> og <code>Keeper</code>.
          For eksempel, på <code>Leo</code> blir skriptet seende slik ut:
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spark v]
gå til x: (-180) y: (-30)
</code></pre>
      </li>
      <li>
        <p>
          [ ] Til slutt legger vi på testen om vi har scoret 10 mål, eller om
          keeperen har reddet 10 ganger. Endre <code>Mål</code>-skriptet på
          scenen slik at det blir seende slik ut:
        </p>
        <pre><code class="blocks">når jeg mottar [Mål v]
endre [Mål v] med (1)
vent (2) sekunder
hvis &lt;(Mål) &lt; [10]&gt;
    send melding [Nytt spark v]
ellers
    bytt bakgrunn til [Seier v]
    stopp [alle v] :: control
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] På samme måte endrer du <code>Redning</code>-skriptet på scenen:
        </p>
        <pre><code class="blocks">når jeg mottar [Redning v]
endre [Redninger v] med (1)
vent (2) sekunder
hvis &lt;(Redninger) &lt; [10]&gt;
    send melding [Nytt spark v]
ellers
    bytt bakgrunn til [Tap v]
    stopp [alle v] :: control
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-8">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Får du skyte flere straffespark uten å måtte trykke på det grønne
          flagget mellom hver gang?
        </p>
      </li>
      <li>
        <p>[ ] Bytter spillet til riktig bakgrunn om du scorer 10 mål?</p>
      </li>
      <li>
        <p>
          [ ] Bytter spillet til riktig bakgrunn om keeperen redder 10 ganger?
        </p>
      </li>
      <li>
        <p>
          [ ] Nullstilles målene og redningene når du klikker det grønne
          flagget?
        </p>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="lydeffekter">Lydeffekter</h2>
    <p>
      Du kan legge lydeffekter på spillet ditt ved å bruke klossene under
      <code class="blocksound">Lyd</code>-kategorien. Prøv for eksempel å legge
      på lyder når ballen sparkes, når keeperen redder eller når det blir mål.
    </p>
    <p>
      For å finne flere lyder å bruke i spillet ditt kan du velge
      <code>Lyder</code>-fanen. Her kan du hente flere lyder fra
      Scratch-biblioteket eller til og med ta opp egne lyder. Eksperimenter og
      prøv deg frem!
    </p>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-spillet">Lagre spillet</h2>
    <p>
      Da er vi ferdige med Straffespark! Om du har noen ideer til hvordan du kan
      gjøre spillet enda morsommere så prøv dem selv!
    </p>
    <p>
      Om du klikker <code>Legg ut</code> vil prosjektet ditt bli lagt ut på
      Scratch-hjemmesiden slik at andre kan spille det!
    </p>
  </section>
</section>
