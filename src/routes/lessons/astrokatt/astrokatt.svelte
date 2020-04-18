<!-- generated from src/lessons/astrokatt/astrokatt.md -->

<svelte:head>
  <title>Astrokatt</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Katten vår har så lyst å være en astronaut, la oss se om vi kan hjelpe ham?
    Underveis vil vi lære hvordan vi flytter figurer rundt på skjermen, og
    hvordan katter blir påvirket av gravitasjonskreftene fra jorden.
  </p>
  <figure>
    <img
      src="lessons/astrokatt/astrokatt.png"
      alt="Bilde av en katt i verdensrommet"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-en-flyvende-katt">
    Steg 1: En flyvende katt
  </h1>
  <p>Vi begynner prosjektet vårt med å få katten til å fly!</p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Start et nytt prosjekt. Når du står på startsiden til Scratch kan
          du starte et nytt prosjekt på to måter. Gå til
          <a href="https://scratch.mit.edu">scratch.mit.edu</a>.
        </p>
        <ol>
          <li>
            <p>
              Hvis du ikke har en bruker kan du trykke på
              <code>Direkte til programmering</code> på forsiden. Da blir du
              sendt til verktøyet der vi faktisk programmerer.
            </p>
          </li>
          <li>
            <p>
              Dersom du har en bruker kan du logge inn og deretter trykke på
              navnet ditt øverst i høyre hjørne. Trykk så
              <code>Mine ting</code> og til slutt <code>Nytt prosjekt</code>.
            </p>
          </li>
        </ol>
        <p>Du vil se en katt som venter på å bli programmert!</p>
        <p>
          Hvis du allerede har prøvd deg frem med noe kan du starte et nytt
          prosjekt ved å velge <code>Fil</code> over programmeringsområdet og så
          <code>Ny</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Prøv å klikk på de blå klossene til venstre på skjermen. For
          eksempel, om du klikker på
        </p>
        <pre><code class="blocks">gå (10) steg
</code></pre>
        <p>skal du se at katten flytter litt på seg, og om du klikker på</p>
        <pre><code class="blocks">snu @turnRight (15) grader
</code></pre>
        <p>
          vil den snu seg! Disse klossene er kommandoer vi kan gi til katten!
        </p>
      </li>
      <li>
        <p>
          [ ] Legg merke til at til venstre for de blå klossene er det flere
          kategorier av kommandoer i forskjellige farger, for eksempel
          <code class="blocklooks">Utseende</code> og
          <code class="blocksound">Lyd</code>. Klikk på disse kategoriene og
          prøv noen av klossene du finner!
        </p>
      </li>
      <li>
        <p>
          [ ] Når vi programmerer så lager vi script, som er lister over
          kommandoer som skal kjøres.
        </p>
        <p>
          For å sette sammen flere kommandoer til et skript kan du dra klosser
          til det store tomme området til midt på skjermen.
        </p>
        <p>
          Prøv å pusle sammen disse klossene (bruk fargene for å finne riktig
          kategori):
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    gå (10) steg
    snu @turnRight (15) grader
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p>
      Legg merke til at den første klossen sier at noe skal skje når vi klikker
      et grønt flagg. Nær toppen av skjermen, over vinduet med katten, finner du
      et grønt flagg. <strong>Klikk på det!</strong>
    </p>
    <ul>
      <li>
        <p>
          [ ] Du skal se at katten flytter seg rundt i en sirkel. Les koden du
          laget en gang til. Skjønner du hvorfor katten går i sirkel?
        </p>
      </li>
      <li>
        <p>
          [ ] Prøv å endre tallene i koden din. Kan du få katten til å gå
          saktere? I større sirkler?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Nå skal vi endre litt på koden slik at vi kan kontrollere hvordan
          katten beveger seg. I kategorien
          <code class="blocksensing">Sansning</code> finnes en kloss som
          reagerer når en tast er trykket. Den kan vi bruke til å styre katten
          med piltastene.
        </p>
        <p>Bytt ut klossene i koden din slik at den blir seende slik ut:</p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    hvis &lt;tast [pil høyre v] trykket?&gt;
        snu @turnRight (5) grader
    slutt
    hvis &lt;tast [pil venstre v] trykket?&gt;
        snu @turnLeft (5) grader
    slutt
    hvis &lt;tast [pil opp v] trykket?&gt;
        gå (5) steg
    slutt
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
        <p>[ ] Kan du styre katten rundt ved å bruke piltastene?</p>
      </li>
      <li>
        <p>[ ] Forstår du hvordan katten kontrolleres?</p>
      </li>
      <li>
        <p>
          [ ] Kan du få katten til å fly raskere eller saktere ved å endre i
          koden?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-ut-i-verdensrommet!">
    Steg 2: Ut i verdensrommet!
  </h1>
  <p>Nå skal vi sende den flyvende katten ut i verdensrommet.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Klikk på
          <img
            src="lessons/astrokatt/../bilder/velg-bakgrunn.png"
            alt="Velg ny bakgrunn"
          />
          nederst til høyre på skjermen for å hente inn en ny bakgrunn. Velg
          bakgrunnen <code>Stars</code> som du finner i kategorien
          <code>Romfart</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi skal også gi katten en liten romhjelm, siden den flyr rundt ute
          i rommet. Klikk på katten i figurvinduet og deretter på fanen
          <code>Drakter</code> øverst til venstre på skjermen.
        </p>
      </li>
      <li>
        <p>
          [ ] Velg først en litt lys farge. Klikk deretter på Sirkel-verktøyet
          på siden av katten, og tegn en sirkel rundt hodet på katten.
        </p>
        <figure>
          <img
            src="lessons/astrokatt/katt_oksygentank.png"
            alt="Bilde av katt med oksygentank"
          />
        </figure>
      </li>
    </ul>
    <p>Til slutt lager vi også en jordklode, som katten kan fly rundt.</p>
    <ul>
      <li>
        [ ] Klikk på fanen <code>Kode</code> og deretter på
        <img
          src="lessons/astrokatt/../bilder/hent-fra-bibliotek.png"
          alt="Velg figur frabiblioteket"
        />
        nede til høyre på skjermen. Skriv <code>Earth</code> i søkefeltet, og
        velg jordklodefiguren. Dra denne litt på siden av skjermen.
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        [ ] Flyr katten fortsatt rundt omkring i verdensrommet når du trykker på
        piltastene?
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-litt-mer-ekte-...">
    Steg 3: Litt mer ekte ...
  </h1>
  <p>
    Vi skal nå legge på noen effekter som gjør at spillet virker litt mer
    realistisk.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Først kan vi få jordkloden til å rotere. Dette er enkelt, vi har
          jo allerede gjort det for katten! Pass på at jordkloden er merket i
          figurlisten, og lag deretter dette skriptet:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    snu @turnRight (1) grader
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] Videre skal vi gjøre det slik at det ser ut som om katten flyr mot
          jorda. Det gjør vi ved å endre størrelsen slik at katten blir mindre
          jo nærmere den kommer jordkloden.
        </p>
        <p>
          Klikk på katten i figurlisten. Legg
          <code class="blocklooks">sett størrelse til</code> nederst i
          <code class="blockcontrol">gjenta for alltid</code>-løkka, slik at
          størrelsen på katten er avhengig av avstanden til jordkloden:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    hvis &lt;tast [pil høyre v] trykket?&gt;
        snu @turnRight (5) grader
    slutt
    hvis &lt;tast [pil venstre v] trykket?&gt;
        snu @turnLeft (5) grader
    slutt
    hvis &lt;tast [pil opp v] trykket?&gt;
        gå (5) steg
    slutt
    sett størrelse til (avstand til [Earth v])%
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Blir katten mindre når den nærmer seg jorda?</p>
      </li>
      <li>
        <p>
          [ ] Ser det ut som om den flyr ned mot jorda, og kommer tilbake til
          oss?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] For å gjøre det enda mer realistisk vil vi forandre hvor langt
          katten flytter seg med. Når den er langt unna oss flytter den seg ikke
          like mange steg. Bytt ut
        </p>
        <pre><code class="blocks">gå (5) steg
</code></pre>
        <p>med</p>
        <pre><code class="blocks">gå ((avstand til [Earth v]) / (50)) steg
</code></pre>
        <p>
          Denne klossen er litt komplisert fordi den er satt sammen av tre
          forskjellige klosser. Se på fargene så finner du de riktige klossene.
        </p>
      </li>
      <li>
        <p>
          [ ] Av og til vil katten fly bak jordkloden. For å slippe det kan du
          legge klossen <code class="blocklooks">Legg foran alt</code> øverst i
          katten sitt skript.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Flyr katten rundt omkring i verdensrommet? Kan du få den til å
          lande på jorda?
        </p>
      </li>
      <li>
        <p>
          [ ] Prøv også å flytte jordkloden til andre steder på skjermen. Blir
          det annerledes å fly med katten nå?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-gravitasjon">Steg 4: Gravitasjon</h1>
  <p>
    Gravitasjon er kraften som jorda trekker på alle katter og mennesker med. Vi
    kan la astrokatten vår bli påvirket av gravitasjonen også.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Lag et nytt skript på katten. Du kan bare legge klossene ved siden
          av det skriptet du allerede har laget. Skriptet skal se slik ut:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (-200) y: (150)
gjenta for alltid
    pek mot [Earth v]
    gå (1) steg
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] Når du tester programmet ditt ved å klikke på det grønne flagget,
          vil du se at katten svever mot jordkloden. Gravitasjonen trekker på
          den!
        </p>
      </li>
      <li>
        <p>
          [ ] MEN, vi har et problem: Vi kan ikke lengre styre katten! Hva har
          skjedd?
        </p>
        <p>
          I det nye skriptet sier vi at katten
          <code class="blockcontrol">gjenta for alltid</code> skal
          <code class="blockmotion">peke mot</code> jordkloden. Da hjelper det
          jo ikke at vi i det andre skriptet sier at katten skal snu seg.
        </p>
      </li>
      <li>
        <p>
          [ ] Det er ingen kommando i Scratch for å flytte en figur mot en
          annen. Derfor må vi peke katten mot jordkloden og deretter flytte den.
          Men vi kan få programmet til å virke igjen, hvis vi bare husker
          hvilken retning katten pekte før vi snudde den.
        </p>
        <p>
          For at programmer skal huske ting bruker vi variabler. Lag en variabel
          ved å klikke på <code class="blockdata">Variabler</code>-kategorien og
          deretter på <code>Lag en variabel</code>. Kall variabelen
          <code>katteretning</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi kan nå bruke denne variabelen til å huske hvilken retning
          katten pekte. Endre skriptet ditt ved å legge til to nye klosser:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (-200) y: (150)
gjenta for alltid
    sett [katteretning v] til (retning)
    pek mot [Earth v]
    gå (1) steg
    pek i retning (katteretning)
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Kan du styre katten igjen?</p>
      </li>
      <li>
        <p>
          [ ] Hvis du ikke trykker på noen taster, vil katten da falle ned mot
          jorden?
        </p>
      </li>
      <li>
        <p>
          [ ] Legg merke til at hvis katten har kommet veldig nært jorden klarer
          den ikke å fly tilbake til oss. Det er fordi gravitasjonen er
          kraftigere jo nærmere jorda man er. Og når katten kommer nært jorda
          har den ikke nok hastighet til å unnslippe jordas gravitasjon.
        </p>
        <p>Hvordan kan du endre på jordas gravitasjon og kattens hastighet?</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-spillet">Lagre spillet</h2>
    <p>
      Da har vi en katt som kan fly rundt i verdensrommet. Eksperimenter gjerne
      med å utvide spillet ditt. Når du er ferdig kan du klikke på
      <code>Legg ut</code>-knappen. Da vil spillet bli lagt ut på
      Scratch-hjemmesiden din slik at andre kan spille det.
    </p>
    <p>
      Merk at du må ha en bruker og være innlogget for å kunne lagre og legge ut
      på nett. Det er mulig å lagre på datamaskinen uten å være innlogget. Trykk
      på <code>Fil</code> og velg <code>Lagre på datamaskinen</code>.
    </p>
  </section>
</section>
