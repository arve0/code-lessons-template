<!-- generated from src/lessons/flaksefugl/flaksefugl.md -->

<svelte:head>
  <title>Flaksefugl</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Nå skal vi lage vår egen versjon av spillet <strong>Flappy Bird</strong>. Du
    styrer fuglen <strong>Flakse</strong> ved å trykke på mellomromtasten for å
    flakse med vingene. Du må holde Flakse flyvende og prøve å styre mellom
    rørene!
  </p>
  <figure>
    <img
      src="lessons/flaksefugl/flaksefugl.png"
      alt="Illustrasjon av et ferdig Flaksefugl spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-f%C3%A5-flakse-til-%C3%A5-falle">
    Steg 1: Få Flakse til å falle
  </h1>
  <p>
    <em>Vi begynner enkelt, ved å introdusere Flakse og få ham til å falle.</em>
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Start et nytt Scratch-prosjekt. Slett katten ved klikke på
          søppelkassen.
        </p>
      </li>
      <li>
        <p>
          Bytt ut bakgrunnen med et landskap. <code>Desert</code> er et bra
          valg.
        </p>
      </li>
      <li>
        <p>
          Legg til Flakse-figuren. Du trenger en figur med drakter for vinger
          opp og vinger ned. <code>Parrot</code> er et bra forslag.
        </p>
      </li>
      <li>
        <p>Bytt navn på figuren til <code>Flakse</code>.</p>
      </li>
      <li>
        <p>Gi Flakse dette skriptet:</p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-50) y: (0)
gjenta for alltid
    endre y med (-3)
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>Starter Flakse midt på skjermen og faller mot bunnen?</li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-f%C3%A5-flakse-til-%C3%A5-fly">
    Steg 2: Få Flakse til å fly
  </h1>
  <p>
    <em
      >Nå vil vi at Flakse skal fly oppover når du trykker mellomromtasten.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Klikk på <code>Drakter</code> og gi de to draktene navnene
          <code>Vinger opp</code> og <code>Vinger ned</code>.
        </p>
      </li>
      <li>
        <p>Gå tilbake til <code>Kode</code> og legg til dette skriptet:</p>
        <pre><code class="blocks">Når [mellomrom v] trykkes
bytt drakt til [Vinger ned v]
gjenta (10) ganger
    endre y med (6)
slutt
bytt drakt til [Vinger opp v]
gjenta (10) ganger
    endre y med (6)
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Klarer du å kontrollere Flakse med mellomromtasten?</p>
      </li>
      <li>
        <p>
          La du merke til at om du trykker mellomrom flere ganger raskt etter
          hverandre så flakser Flakse av og til bare en gang? Det er det neste
          vi skal fikse.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-gj%C3%B8r-kontrollen-bedre">
    Steg 3: Gjør kontrollen bedre
  </h1>
  <p>
    <em
      >Vi vil at Flakse skal reagere hver gang vi trykker mellomrom. Men når vi
      trykker mellomrom så starter to løkker etter hverandre. Hvis vi trykker
      mellomrom før disse to løkkene er ferdig så skjer det ikke noe. For å løse
      dette problemet skal vi bruke en variabel til å telle hvor mange flaks vi
      trenger å gjøre.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny variabel og kall den <code class="blockdata">flaks</code>.
          Velg at den bare skal gjelde <code>For denne figuren</code>. Klikk
          <code>OK</code>. Skjul variabelen ved å ta vekk avhukingen foran
          variabelen.
        </p>
      </li>
      <li>
        <p>
          Vi skal nå gjøre om på skriptet som starter med
          <code class="blockevents">når mellomrom trykkes</code>. Dra i
          <code class="blocklooks">bytt drakt til Vinger ned</code>-klossen slik
          at den og klossene under løsner. Legg disse klossene til siden. Vi
          skal bruke dem igjen straks.
        </p>
      </li>
      <li>
        <p>
          Legg til enda et nytt skript. Legg merke til at klossene du nettopp la
          til siden kan brukes igjen inne i
          <code class="blockcontrol">gjenta til flaks = 0</code>-løkken:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett [flaks v] til [0]
bytt drakt til [Vinger opp v]
gjenta for alltid
    gjenta til &lt;(flaks) = [0]&gt;
        endre [flaks v] med (-1)
        bytt drakt til [Vinger ned v]
        gjenta (10) ganger
            endre y med (6)
        slutt
        bytt drakt til [Vinger opp v]
        gjenta (10) ganger
            endre y med (6)
        slutt
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>
          Til slutt, legg følgende skript på
          <code class="blockevents">når mellomrom trykkes</code>-klossen som ble
          til overs tidligere:
        </p>
        <pre><code class="blocks">når [mellomrom v] trykkes
endre [flaks v] med (1)
</code></pre>
      </li>
      <li>
        <p>Du skal nå ha tre forskjellige skript på Flakse.</p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>Flakser Flakse en gang for hver gang du trykker mellomromtasten?</li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-legg-til-r%C3%B8rene">
    Steg 4: Legg til rørene
  </h1>
  <p><em>Vi vil legge til noen hindringer som Flakse kan fly igjennom.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>Legg til en ny figur ved å klikke på <em>Tegn</em>-knappen.</p>
        <figure>
          <img src="lessons/flaksefugl/tegn-ny.png" alt="Tegn ny figur" />
        </figure>
      </li>
      <li>
        <p>
          Hvis det står <code>Gå til vektorgrafikk</code> på en knapp til
          venstre under tegneområdet, klikk på knappen.
        </p>
      </li>
      <li>
        <p>Klikk på <code>Zoom =</code> så du kan se hele tegneområdet.</p>
        <figure>
          <img src="lessons/flaksefugl/zoom_eq.png" alt="Zoom =" />
        </figure>
      </li>
      <li>
        <p>
          Klikk på <code>Rektangel</code>-ikonet, til venstre ved tegneområdet
          <img src="lessons/flaksefugl/rektangel.png" alt="Rektangel" />. Velg
          farge på rektangelet som skal tegnes ved å klikke på
          <code>Fyll</code>. Velg en fin farge. Vi ønsker å gjøre omrisset av
          firkanten gjennomsiktig. Dette gjør vi ved å klikke på
          <code>Kant</code>, og klikke på ikonet helt nederst i farge-dialogen,
          med en rød skråstrek.
        </p>
        <figure>
          <img src="lessons/flaksefugl/fyll_kant.png" alt="fyll kant" />
        </figure>
      </li>
      <li>
        <p>
          Tegn to bokser ved å klikke og dra i tegneområdet. Tegn én boks på
          toppen og én på bunnen av tegneflaten. Det skal se omtrent sånn ut:
        </p>
        <figure>
          <img
            src="lessons/flaksefugl/pipe_design.png"
            alt="Bilde av et hinder for Flakse"
          />
        </figure>
      </li>
      <li>
        <p>
          Skyggelegg rørene. Dette gjør du ved å klikke <code>Velg</code>
          <img src="lessons/flaksefugl/velg.png" alt="velg" />. Deretter klikker
          du på firkanten som skal skyggelegges. Klikk på
          <code>Fyll</code>-ikonet over tegneområdet til venstre. I den nye
          dialogen som dukker opp, velg mellom forskjellige måter å skyggelegge
          på med de små ikonene i toppen av dialogen.
        </p>
        <figure>
          <img
            src="lessons/flaksefugl/fyll_gradering.png"
            alt="Fyll gradering"
          />
        </figure>
      </li>
      <li>
        <p>Gi den nye figuren navnet <code>Rør</code>.</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-f%C3%A5-r%C3%B8rene-til-%C3%A5-bevege-seg">
    Steg 5: Få rørene til å bevege seg
  </h1>
  <p>
    <em
      >Nå skal vi få rørene til å flytte seg og gjøre høyden tilfeldig slik at
      vi får en hinderløype til Flakse.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>Klikk på <code>Rør</code>-figuren og velg <code>Kode</code>.</p>
      </li>
      <li>
        <p>Legg til disse to skriptene:</p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul
sett størrelse til (200)%
gjenta for alltid
    lag klon av [meg v]
    vent (2) sekunder
slutt

når jeg starter som klon
gå til x: (240) y: (tilfeldig tall fra (-80) til (80))
vis
gjenta (120) ganger
    endre x med (-4)
slutt
slett denne klonen
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Kommer det mange rør flygende mot Flakse?</p>
      </li>
      <li>
        <p>Har rørene åpninger til å fly gjennom?</p>
      </li>
      <li>
        <p>
          Om du synes det er vanskelig å fly Flakse gjennom åpningene, kan du
          for eksempel endre på åpningen mellom rørene med tegneverktøyet. En
          annen mulighet er å lage Flakse mindre.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-6%3A-finn-ut-om-flakse-kr%C3%A6sjer-med-r%C3%B8rene"
  >
    Steg 6: Finn ut om Flakse kræsjer med rørene
  </h1>
  <p>
    <em
      >For at spillet skal bli vanskelig må spilleren styre Flakse gjennom
      åpningene mellom rørene uten å komme borti hverken rør eller kanten av
      skjermen. Vi skal legge til noen klosser som merker om Flakse kræsjer.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi legger til en lyd som vi kan spille når Flakse kræsjer. Klikk på
          <code>Flakse</code>-figuren og så på fanen <code>Lyder</code>.
        </p>
      </li>
      <li>
        <p>
          Klikk på <code>Velg en lyd</code>-ikonet, nederst til venstre i
          vinduet.
        </p>
      </li>
      <li>
        <p>
          Velg en kræsjelyd for <code>Flakse</code>. <code>Screech</code> er en
          kul lyd.
        </p>
      </li>
      <li>
        <p>Klikk deg tilbake til <code>Kode</code>-fanen.</p>
      </li>
      <li>
        <p>Legg til dette skriptet på Flakse:</p>
        <pre><code class="blocks">når grønt flagg klikkes
vent til &lt;&lt;berører [kant v]?&gt; eller &lt;berører [Rør v]?&gt;&gt;
start lyden [screech v]
si [Du tapte!]
send melding [Tap v]
stopp [andre skript i figuren v] :: control
</code></pre>
      </li>
      <li>
        <p>Klikk så på <code>Rør</code>-figuren og legg til dette skriptet:</p>
        <pre><code class="blocks">når jeg mottar [Tap v]
stopp [andre skript i figuren v] :: control
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>
        Stopper spillet hvis Flakse kommer borti et rør eller kanten av brettet?
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-7%3A-legg-til-poeng">Steg 7: Legg til poeng</h1>
  <p>
    <em
      >Spilleren skal score ett poeng hver gang Flakse flyr gjennom en
      røråpning.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi legger til en lyd hver gang Flakse scorer ett poeng. Klikk på
          <code>Rør</code>-figuren og legg til en lyd. <code>Bird</code> er et
          lurt valg.
        </p>
      </li>
      <li>
        <p>Gå tilbake til <code>Kode</code>-fanen.</p>
      </li>
      <li>
        <p>
          Lag en ny variabel som skal gjelde <code>For alle figurer</code>. Kall
          den <code class="blockdata">poeng</code>.
        </p>
      </li>
      <li>
        <p>
          Legg til et skript som setter poengene til 0 når det grønne flagget
          klikkes. Dette klarer du selv!
        </p>
      </li>
      <li>
        <p>Legg så til dette skriptet på <code>Rør</code>:</p>
        <pre><code class="blocks">når jeg starter som klon
vent til &lt;(x-posisjon) &lt; ([x-posisjon v] av [Flakse v])&gt;
endre [poeng v] med (1)
start lyden [bird v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Scorer du poeng når Flakse flyr forbi en åpning mellom rørene?</p>
      </li>
      <li>
        <p>Hvordan kan du lage dette spillet lettere eller vanskeligere?</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet-ditt">Lagre prosjektet ditt</h2>
    <p>
      Supert, du har laget ferdig din egen enkle versjon av Flappy Bird-spillet.
    </p>
    <p>Her er noen flere ting du kan prøve:</p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring-1%3A-legg-til-tyngdekraft">
      Utfordring 1: Legg til tyngdekraft
    </h2>
    <p>
      Når noe faller på grunn av tyngdekraft øker farten jo lenger fallet varer.
      Vi skal prøve å etterligne denne måten å falle på.
    </p>
    <ul>
      <li>
        <p>
          Legg til en ny variabel for <code>Flakse</code> som heter
          <code class="blockdata">løft</code>. Variablen skal gjelde for
          <code>For denne figuren</code>.
        </p>
      </li>
      <li>
        <p>Endre Flakses falleskript:</p>
        <pre><code class="blocks">når grønt flagg klikkes
sett [løft v] til [0]
gå til x: (-50) y: (0)
gjenta for alltid
    endre y med (løft)
    endre [løft v] med (-0.2)
slutt
</code></pre>
      </li>
      <li>
        <p>Deretter må vi endre Flakses flakseskript:</p>
        <pre><code class="blocks">når grønt flagg klikkes
sett [flaks v] til [0]
bytt drakt til [Vinger opp v]
gjenta for alltid
    gjenta til &lt;(flaks) = [0]&gt;
        endre [flaks v] med (-1)
        bytt drakt til [Vinger ned v]
        endre [løft v] med (4)
        vent (0.1) sekunder
        bytt drakt til [Vinger opp v]
        vent (0.1) sekunder
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-7">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>Faller Flakse fortere jo lenger han detter?</li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring-2%3A-fall-ut-av-skjermen">
      Utfordring 2: Fall ut av skjermen
    </h2>
    <p>Når spilleren taper vil vi at Flakse faller ned og ut av skjermen.</p>
    <ul>
      <li>
        <p>
          Bytt ut <code class="blockevents">send meldingen Tap</code>-klossen
          med <code class="blockevents">send meldingen Fall</code> i skriptet
          som merker når Flakse kræsjer i kanten eller i et rør. Slett
          <code class="blockcontrol">stopp</code>-klossen på slutten av
          skriptet.
        </p>
      </li>
      <li>
        <p>Legg til disse nye skriptene på <code>Flakse</code>-figuren:</p>
        <pre><code class="blocks">når jeg mottar [Fall v]
gjenta for alltid
    snu @turnRight (5) grader
slutt

når jeg mottar [Fall v]
gjenta til &lt;(y-posisjon) &lt; [-180]&gt;
    endre y med (løft)
    endre [løft v] med (-0.2)
slutt
skjul
send melding [Tap v]
stopp [andre skript i figuren v] :: control
</code></pre>
      </li>
      <li>
        <p>
          Du må også legge til en <code class="blocklooks">vis</code>-kloss samt
          sette Flakses retning når spillet starter på nytt.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-8">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Faller Flakse ut av skjermen når han treffer et rør?</p>
      </li>
      <li>
        <p>Flyr Flakse riktig vei når spillet starter igjen?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring-3%3A-legg-til-rekorder">
      Utfordring 3: Legg til rekorder
    </h2>
    <ul>
      <li>
        <p>
          Lag en ny variabel og merk av
          <code>Nett variabel (lagret på nett)</code>-boksen. Kall variabelen
          <code class="blockdata">Rekord</code>.
        </p>
      </li>
      <li>
        <p>
          Når spillet er ferdig må vi sjekke om det er en ny rekord. Det gjør vi
          ved å endre <code>Tap</code>-skriptet på <code>Rør</code> slik:
        </p>
        <pre><code class="blocks">når jeg mottar [Tap v]
hvis &lt;(poeng) &gt; (Rekord)&gt;
    sett [Rekord v] til (poeng)
slutt
stopp [andre skript i figuren v] :: control
</code></pre>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="nettvariabler">Nettvariabler</h2>
    <p>
      Nettvariabler gir deg muligheten til å huske ting mellom forskjellige
      brukere og forskjellige kjøringer av spillet ditt (i motsetning til
      vanlige variabler hvor verdiene blir nullstilt hver gang du trykker det
      grønne flagget). Dette er nøyaktig det vi trenger for å huske hva rekorden
      i spillet er.
    </p>
    <p>
      Nettvariabler er fortsatt litt eksperimentelle, og for tiden får ikke nye
      brukere av Scratch lov til å lage slike variabler. Hvis du ikke får lov
      til å lage en slik variabel må du hoppe over den siste utfordringen.
    </p>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-9">Test prosjektet</h2>
    <p><strong>Klikk det grønne flagget.</strong></p>
    <ul>
      <li>Oppdaterer rekorden seg hver gang du setter ny rekord?</li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet-ditt-2">Lagre prosjektet ditt</h2>
    <p>
      <strong
        >Gratulerer, du er ferdig med spillet! Hva er rekorden din?</strong
      >
    </p>
    <p>
      Ikke glem å dele spillet med vennene dine. Trykk på
      <code>Legg ut</code> for at andre skal få prøve!
    </p>
  </section>
</section>
