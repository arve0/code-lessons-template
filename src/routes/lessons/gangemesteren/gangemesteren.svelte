<svelte:head>
  <title>Gangemesteren</title>
</svelte:head>
<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I dag skal vi lage et nyttig spill, nemlig et spill som hjelper oss å lære
    andre ting. Vi skal få hjelp til å lære gangetabellen!
  </p>
  <figure>
    <img
      src="lessons/gangemesteren/gangemesteren.png"
      alt="Illustrasjon av et ferdig gangemester spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-l%C3%A6remesteren">
    Steg 1: Læremesteren
  </h1>
  <p>
    Vi skal etterhvert lage et spill hvor vi får tilfeldige spørsmål fra
    gangetabellen. Etter at vi svarer får vi vite om vi klarte å svare riktig,
    og vi vil også få litt hjelp fra tegninger på skjermen. Men først
    introduserer vi <code>Læremester</code> som skal hjelpe oss med
    gangetabellen.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>[ ] Start et nytt prosjekt og slett kattefiguren.</p>
      </li>
      <li>
        <p>
          [ ] Legg til en ny figur ved å klikke på
          <img
            src="lessons/gangemesteren/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur frabiblioteket"
          />. Velg en av <em>Wizard</em>-figurene nesten nederst i
          <code>Mennesker</code>-kategorien. Kall figuren
          <code>Læremester</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi skal nå bruke
          <code class="blockoperators">tilfeldig tall</code>-klosser slik at
          <code>Læremester</code> kan spørre oss om tilfeldige gangestykker.
          Skriv dette skriptet:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
si (tilfeldig tall fra (2) til (10)) i (2) sekunder
si [ganger] i (2) sekunder
si (tilfeldig tall fra (2) til (10)) i (2) sekunder
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Stiller <code>Læremester</code> deg et gangestykke?</p>
      </li>
      <li>
        <p>
          [ ] Vi skal etterhvert se hvordan vi kan få
          <code>Læremester</code> til å si hele teksten, i stedet for bare et
          ord om gangen.
        </p>
      </li>
      <li>
        <p>
          [ ] Foreløpig kan du ikke svare <code>Læremester</code> (ihvertfall
          ikke med datamaskinen, prøv gjerne å regne ut svaret og si det til dem
          som sitter ved siden av deg).
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-datamaskinen-er-en-kalkulator">
    Steg 2: Datamaskinen er en kalkulator
  </h1>
  <p>
    Du har kanskje ikke tenkt på det, men datamaskinen er en veldig flink
    kalkulator. Det engelske ordet <em>computer</em> betyr til og med
    <em>regnemaskin</em>. Vi skal nå se på hvordan vi får Scratch til å gange
    sammen tall.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] For å få Scratch til å regne bruker vi
          <code class="blockoperators">Operatorer</code>-klosser. Prøv for
          eksempel å dra gangeklossen - med
          <code class="blockoperators">*</code>-tegnet - til skriptområdet på
          høyresiden. Skriv inn to tall og klikk på klossen. Scratch regner da
          ut svaret på gangestykket.
        </p>
        <figure>
          <img
            src="lessons/gangemesteren/gangeoperator.png"
            alt="Bilde av Scratch som regner ut 3 ganger 4"
          />
        </figure>
      </li>
      <li>
        <p>
          [ ] Vi vil nå kombinere gangeklossen med
          <code class="blockoperators">tilfeldig tall</code>-klossen, men for å
          få dette til trenger vi en måte å huske de tilfeldige tallene:
          <strong>Variabler</strong>. Gå til
          <code class="blockdata">Data</code>-kategorien og lag tre nye
          variabler: <code class="blockdata">tall1</code>,
          <code class="blockdata">tall2</code>, og
          <code class="blockdata">riktig svar</code>. La de gjelde for alle
          figurer.
        </p>
      </li>
      <li>
        <p>
          [ ] Skriv nå et <strong>helt nytt skript</strong> (la det ligge ved
          siden av det skriptet du skrev i forrige steg).
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spørsmål v]
sett [tall1 v] til (tilfeldig tall fra (2) til (10))
sett [tall2 v] til (tilfeldig tall fra (2) til (10))
sett [riktig svar v] til ((tall1) * (tall2))
</code></pre>
      </li>
      <li>
        <p>
          [ ] Prøv å klikke på skriptet for å teste det (siden det ikke starter
          med et grønt flagg kan vi ikke teste det på den vanlige måten). Om du
          ser på variablene på scenen skal de endre seg hver gang du klikker på
          skriptet. Er <code class="blockdata">riktig svar</code> rett?
        </p>
        <figure>
          <img
            src="lessons/gangemesteren/variabler.png"
            alt="Bilde av to tall, og deres produkt i Scratch"
          />
        </figure>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-et-skikkelig-sp%C3%B8rsm%C3%A5l">
    Steg 3: Et skikkelig spørsmål
  </h1>
  <p>
    La oss se om vi kan sette sammen disse tallene til et skikkelig spørsmål.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Lag en ny variabel, <code class="blockdata">spørsmål</code>. Også
          denne skal gjelde for alle figurer.
        </p>
      </li>
      <li>
        <p>
          [ ] Klossen <code class="blockoperators">sett sammen</code> kan brukes
          for å sette sammen flere tall og ord. Vi skal nå bruke to
          <code class="blockoperators">sett sammen</code>-klosser på denne
          måten:
        </p>
        <pre><code class="blocks">sett sammen (sett sammen [] []) []
</code></pre>
        <p>
          Dette gir oss plass til tre tall eller ord. Her kan vi putte inn
          <code class="blockdata">tall1</code>, teksten <code>ganger</code> og
          <code class="blockdata">tall2</code>. Pass på at du har mellomrom før
          og etter <code>ganger</code>, det ser best ut da. Om du klikker på den
          første <code class="blockoperators">sett sammen</code>-klossen vil du
          se hvordan den ferdige teksten blir.
        </p>
        <figure>
          <img
            src="lessons/gangemesteren/sett_sammen.png"
            alt="Bilde av sett sammen blokkene i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          [ ] Legg denne klossen til nederst i
          <code>Nytt spørsmål</code>-skriptet:
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spørsmål v]
sett [tall1 v] til (tilfeldig tall fra (2) til (10))
sett [tall2 v] til (tilfeldig tall fra (2) til (10))
sett [riktig svar v] til ((tall1) * (tall2))
sett [spørsmål v] til (sett sammen (sett sammen (tall1) [ ganger ]) (tall2))
</code></pre>
      </li>
      <li>
        <p>
          [ ] Nå skal vi få <code>Læremester</code> til å stille oss spørsmålet
          vi har satt sammen. <strong>Bytt ut</strong> det første skriptet (med
          det grønne flagget) du skrev med dette:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
send melding [Nytt spørsmål v] og vent
spør (spørsmål) og vent
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Stiller <code>Læremester</code> deg et skikkelig spørsmål, for
          eksempel <code>9 ganger 6</code>?
        </p>
      </li>
      <li>
        <p>[ ] Er spørsmålene forskjellige hver gang?</p>
      </li>
      <li>
        <p>
          [ ] Om du vil ha en liten utfordring kan du prøve å bruke flere
          <code class="blockoperators">sett sammen</code>-klosser slik at
          spørsmålet blir for eksempel <code>Hva er 9 ganger 6?</code>.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-er-svaret-riktig-da%3F">
    Steg 4: Er svaret riktig da?
  </h1>
  <p>Nå som vi kan svare på spørsmål vil vi også vite om vi svarer riktig.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Du ser kanskje at <code class="blockdata">riktig svar</code> vises
          på scenen? Da blir det jo ikke særlig vanskelig! Ta bort alle
          variablene fra scenen ved å gå til <code>Data</code>-kategorien og
          fjern haken foran hver variabel.
        </p>
      </li>
      <li>
        <p>
          [ ] Nå skal vi bruke en
          <code class="blockcontrol">hvis ellers</code>-kloss for å gjøre
          forskjellige ting ettersom du svarer riktig eller feil på
          gangestykkene. <strong>Utvid</strong> det ene skriptet ditt på denne
          måten:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
send melding [Nytt spørsmål v] og vent
spør (spørsmål) og vent
hvis &lt;(svar) = (riktig svar)&gt;
    si [Ja, så flink du er!] i (2) sekunder
ellers
    si [Nei, det ble visst feil.] i (2) sekunder
slutt
</code></pre>
        <p>
          Klossen <code class="blocksensing">svar</code> husker svaret du
          skriver når <code>Læremester</code> spør om gangestykket.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Hva skjer om du svarer riktig?</p>
      </li>
      <li>
        <p>
          [ ] Klikk det grønne flagget igjen for å få en ny oppgave. Hva skjer
          om du ikke svarer riktig?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-flere-gangestykker">
    Steg 5: Flere gangestykker
  </h1>
  <p>
    I stedet for å måtte trykke det grønne flagget hele tiden, kan vi be
    <code>Læremester</code> om å stille oss flere spørsmål!
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Vi bruker først en <code class="blockcontrol">gjenta</code>-kloss
          slik at vi kan få flere oppgaver. Legg merke til at vi også sender en
          <code class="blockevents">Nytt spørsmål</code>-melding hvis svaret er
          riktig. Hvis svaret er feil stiller vi det samme spørsmålet en gang
          til.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
send melding [Nytt spørsmål v] og vent
gjenta (10) ganger
    spør (spørsmål) og vent
    hvis &lt;(svar) = (riktig svar)&gt;
        si [Ja, så flink du er!] i (2) sekunder
        send melding [Nytt spørsmål v] og vent
    ellers
        si [Nei, det ble visst feil.] i (2) sekunder
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] Vi kan også telle poeng hver gang du svarer riktig. For å gjøre
          dette trenger vi en ny variabel, <code class="blockdata">Poeng</code>.
          Denne skal gjelde for alle figurer, og denne lar vi være på scenen
          slik at vi ser den.
        </p>
      </li>
      <li>
        <p>
          [ ] Legg til en kloss i skriptet som setter
          <code class="blockdata">Poeng</code> til <code>0</code> rett etter at
          det grønne flagget klikkes.
        </p>
      </li>
      <li>
        <p>
          [ ] Legg også til en kloss som endrer
          <code class="blockdata">Poeng</code> med <code>1</code> hvis
          <code class="blocksensing">svar</code> er riktig.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Får du flere oppgaver uten at du må trykke på det grønne flagget?
        </p>
      </li>
      <li>
        <p>[ ] Får du et poeng hver gang du svarer riktig?</p>
      </li>
      <li>
        <p>[ ] Klarer du 10 poeng?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-6%3A-litt-hjelp-kanskje-...">
    Steg 6: Litt hjelp kanskje ...
  </h1>
  <p>
    Til slutt skal vi se på hvordan <code>Læremester</code> kan gi oss litt
    hjelp med gangestykkene. En måte å tenke på gangestykker er at vi har mange
    ting som vi plasserer i et rutenett. For eksempel kan vi tenke på
    <strong>3 ganger 4</strong> som <strong>3</strong> rader med
    <strong>4</strong> elefanter i hver som dette:
  </p>
  <figure>
    <img
      src="lessons/gangemesteren/elefanter.png"
      alt="Bilde av 3*4=12 smilende elefanter"
    />
  </figure>
  <p>
    Hvis vi ikke husker hvor mye 3 ganger 4 er, kan vi da telle elefanter og
    finne ut at svaret er <strong>12</strong>.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Legg til en ny figur som vi kan få litt hjelp fra. Du kan velge
          hvilken figur du vil, men vi har brukt <code>Dyr/Elephant</code>. Gi
          figuren navnet <code>Hjelper</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] For å tegne et rutenett med Hjelpere bruker vi to
          <code class="blockcontrol">gjenta</code>-klosser i tillegg til
          <code class="blockpen">stemple avtrykk</code> som tegner Hjelperne på
          skjermen. Blokken <code class="blockpen">stemple avtrykk</code> er i
          Scratch 3 flyttet til tilleggsfunksjoner. Du finner den ved å trykke
          på <code>Hent tilleggsfunksjon</code> nederst til venstre, og så legge
          til tilleggsfunksjonen <code>Penn</code>. Skriv dette skriptet på
          <code>Hjelper</code>-figuren:
        </p>
        <pre><code class="blocks">når jeg mottar [Tegn hjelper v]
slett alt
sett størrelse til (20)%
vis
sett y til (140)
gjenta (tall1) ganger
    sett x til (-140)
    gjenta (tall2) ganger
        stemple avtrykk
        endre x med (40)
    slutt
    endre y med (-25)
slutt
skjul
</code></pre>
        <p>
          Om du har brukt en annen figur som <code>Hjelper</code> kan det hende
          du må bruke noen andre tall i dette skriptet. Prøv i så fall først å
          forandre på
          <code class="blocklooks">sett størrelse til 20%</code>-klossen.
        </p>
      </li>
      <li>
        <p>
          [ ] Nå skal vi tegne dette rutenettet hver gang vi lager et nytt
          spørsmål. Klikk på <code>Læremester</code>, og legg til en kloss
          nederst i <code>Nytt spørsmål</code>-skriptet:
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spørsmål v]
sett [tall1 v] til (tilfeldig tall fra (2) til (10))
sett [tall2 v] til (tilfeldig tall fra (2) til (10))
sett [riktig svar v] til ((tall1) * (tall2))
sett [spørsmål v] til (sett sammen (sett sammen (tall1) [ ganger ]) (tall2))
send melding [Tegn hjelper v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>[ ] Tegnes det et rutenett av hjelpere til hver oppgave?</li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="flere-utfordringer">Flere utfordringer</h2>
    <ul>
      <li>
        <p>
          [ ] Du kan forandre hvor vanskelige gangestykkene er ved å forandre
          tallene i <code class="blockoperators">tilfeldig tall</code>-klossene.
        </p>
      </li>
      <li>
        <p>
          [ ] Om du gir <code>Hjelper</code> flere drakter kan du bruke en
          <code class="blocklooks">neste drakt</code>-kloss i
          <code>Tegn hjelper</code>-skriptet for å få litt variasjon i
          hjelperfigurene. Om du gjør dette er det enklest om draktene er
          omtrent like store.
        </p>
      </li>
      <li>
        <p>
          [ ] Kanskje <code>Læremester</code> kan gi litt mer hjelp når man
          svarer feil? Klarer du få henne til å si
          <code>Nei, det riktige svaret er større</code> eller
          <code>Nei, det riktige svaret er mindre</code>?
        </p>
      </li>
      <li>
        <p>
          [ ] <code>Læremester</code> kan mye rart! Kanskje hun kan lære bort
          andre ting enn gangestykker?
        </p>
      </li>
    </ul>
  </section>
</section>
