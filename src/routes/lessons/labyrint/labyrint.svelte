<!-- generated from src/lessons/labyrint/labyrint.md -->

<svelte:head>
  <title>Labyrint</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I dette spillet vil vi kontrollere en liten utforsker mens hun leter etter
    skatten gjemt inne i labyrinten. Dessverre er skatten beskyttet av den
    skumle froskekongen. Vi vil lære hvordan vi kontrollerer figurer, og hvordan
    vi kan programmere figurer til å bevege seg selv.
  </p>
  <figure>
    <img
      src="lessons/labyrint/labyrint.png"
      alt="Bilde av labyrinten, froskekongen, utforskeren og skatten"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-hvordan-styre-figurer-med-piltastene">
    Steg 1: Hvordan styre figurer med piltastene
  </h1>
  <p>
    <em
      >Vi begynner med å se på hvordan vi kan styre figurer med piltastene. For
      å få til dette vil vi bruke
      <code class="blockevents">Hendelser</code>-klosser som merker når man
      trykker på tastaturet.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt prosjekt.</p>
      </li>
      <li>
        <p>
          Slett kattefiguren ved å høyreklikke på den og velge
          <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          Legg til en ny figur. Klikk på
          <img
            src="lessons/labyrint/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />-knappen og velg en figur du har lyst til å styre rundt. Vi har
          brukt <code>Dyr/Beetle</code>-figuren.
        </p>
      </li>
      <li>
        <p>
          Gi den nye figuren navnet <code>Utforsker</code>: trykk på navnfeltet
          over figuren og skriv inn det nye navnet.
        </p>
        <p>
          Vi begynner med å la figuren bevege seg oppover skjermen når vi
          trykker på <code>pil opp</code>-tasten.
        </p>
      </li>
      <li>
        <p>Legg til følgende skript på <code>Utforsker</code>-figuren din.</p>
        <pre><code class="blocks">når [pil opp v] trykkes
pek i retning (0 v)
gå (5) steg
</code></pre>
        <p>
          Prøv å trykk på <code>pil opp</code>-tasten. Beveger utforskeren din
          seg oppover skjermen? Nå må vi lage lignende skript for de andre
          tastene.
        </p>
      </li>
      <li>
        <p>
          Legg også til disse skriptene, slik at <code>Utforsker</code> har
          totalt fire skript, ett for hver tast.
        </p>
        <pre><code class="blocks">når [pil ned v] trykkes
pek i retning (180 v)
gå (5) steg

når [pil høyre v] trykkes
pek i retning (90 v)
gå (5) steg

når [pil venstre v] trykkes
pek i retning (-90 v)
gå (5) steg
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Beveger utforskeren din seg rundt slik du hadde forventet?</p>
      </li>
      <li>
        <p>Kan du forandre hvor raskt utforskeren flytter seg?</p>
      </li>
    </ul>
    <p>
      Tallet <code>5</code> i <code class="b">gå (5) steg</code>-klossene
      bestemmer hvor raskt utforskeren flytter seg rundt. Vi vil gjerne
      eksperimentere litt for å se hvilken fart som passer best i spillet vårt,
      men for å endre farten må vi bytte tallet i fire forskjellige skript. Det
      blir for mye jobb!
    </p>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <p>
      Vi vil i stedet bruke en <strong>variabel</strong> som kan styre farten
      til <code>Utforsker</code>-figuren.
    </p>
    <ul>
      <li>
        <p>
          Lag en ny variabel ved å gå til
          <code class="blockdata">Variabler</code>-kategorien og klikk
          <code>Lag en Variabel</code>.
        </p>
      </li>
      <li>
        <p>
          Kall variabelen <code>hastighet</code>, og velg at den bare skal
          gjelde <code>For denne figuren</code>.
        </p>
      </li>
      <li>
        <p>
          Til slutt, fjern avhukingen ved siden av den nye
          <code class="b">(hastighet)</code>-klossen for at variabelen ikke skal
          vises på scenen.
        </p>
      </li>
    </ul>
    <p>
      Nå må vi endre i skriptene våre slik at bruker
      <code class="b">(hastighet)</code>-variabelen.
    </p>
    <ul>
      <li>
        <p>
          Lag først et nytt skript som setter verdien av
          <code class="b">(hastighet)</code> til <code>10</code>.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett [hastighet v] til [10]
</code></pre>
      </li>
      <li>
        <p>
          Deretter endrer vi de fire skriptene vi allerede har laget slik at de
          bruker <code class="b">(hastighet)</code>.
        </p>
        <pre><code class="blocks">når [pil opp v] trykkes
pek i retning (0 v)
gå (hastighet) steg

når [pil ned v] trykkes
pek i retning (180 v)
gå (hastighet) steg

når [pil høyre v] trykkes
pek i retning (90 v)
gå (hastighet) steg

når [pil venstre v] trykkes
pek i retning (-90 v)
gå (hastighet) steg
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
          Beveger utforskeren din seg fortsatt rundt slik den gjorde tidligere?
        </p>
      </li>
      <li>
        <p>
          Forandrer hastigheten til utforskeren seg hvis du endrer verdien av
          <code class="b">(hastighet)</code> og klikker på det grønne flagget
          igjen?
        </p>
      </li>
      <li>
        <p>Velg en hastighet du synes passer.</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-vi-tegner-v%C3%A5r-egen-labyrint">
    Steg 2: Vi tegner vår egen labyrint
  </h1>
  <p>
    <em
      >Nå som vi kan bevege utforskeren vår rundt omkring på skjermen, skal vi
      gi henne en utfordring! Vi vil tegne en labyrint som hun kan bevege seg
      rundt inni.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Trykk <code>Velg et bakgrunnsbilde</code>
          <img
            src="lessons/labyrint/../bilder/velg-bakgrunn.png"
            alt="Velg figur fra biblioteket"
          />
          nederst til høyre på skjermen, og trykk så på penselen som dukker opp,
          for å tegne en ny bakgrunn. Pass på at du faktisk tegner en ny
          <strong>bakgrunn</strong>, og ikke en ny figur.
        </p>
      </li>
      <li>
        <p>Gi den nye bakgrunnen navnet <code>Labyrint</code>.</p>
      </li>
      <li>
        <p>
          Velg en farge du liker og tegn en liten labyrint. Det er viktig at
          alle veggene i labyrinten har samme farge (vi oppdager hvorfor snart).
          Du kan velge selv hvordan labyrinten skal se ut, den trenger ikke en
          gang å ha rette vegger!
        </p>
        <figure>
          <img
            src="lessons/labyrint/liten-labyrint.png"
            alt="Bilde av en enkel liten labyring"
          />
        </figure>
        <p>
          Dette er et eksempel på en liten og enkel labyrint. Du kan selv velge
          hvordan din labyrint skal se ut! Men ikke bruk for lang tid på å tegne
          labyrinten nå, for vi vil jo fortsette å programmere. Du kan i stedet
          komme tilbake og tegne en mer avansert labyrint etter at du er ferdig
          med spillet!
        </p>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="tips">Tips</h2>
    <p>
      Dersom du vil tegne rette vegger er det enklest å bruke linjeverktøyet,
      <img
        src="lessons/labyrint/../bilder/tegn-linje.png"
        alt="Linjeverktøy"
      />. Du kan i tillegg holde inne <code>shift</code>-knappen for at linjene
      skal bli helt rette.
    </p>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Kan du bevege utforskerfiguren din rundt inne i labyrinten?</p>
      </li>
      <li>
        <p>
          Dersom figuren din er for stor kan du gjøre den mindre ved å trykke på
          figuren, og så gjøre tallet i <code>Størrelse</code>-boksen mindre.
        </p>
      </li>
      <li>
        <p>Hva skjer dersom figuren din går på veggen i labyrinten?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-3%3A-utforskeren-kan-ikke-g%C3%A5-gjennom-veggen"
  >
    Steg 3: Utforskeren kan ikke gå gjennom veggen
  </h1>
  <p>
    <em
      >Selv om vi har tegnet en flott labyrint bryr ikke utforskeren seg noe om
      den. Hun kan bare gå gjennom veggene. Det skal vi gjøre noe med nå</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <p>
      For å oppdage når <code>Utforsker</code>-figuren vår går gjennom veggen på
      labyrinten vil vi bruke en
      <code class="b">&lt;berører fargen [#ffffff]&gt;</code>-kloss. Denne
      klossen merker om en figur kommer borti en spesiell farge. Her er det
      viktig at vi har tegnet alle veggene i labyrinten i samme farge.
    </p>
    <ul>
      <li>
        <p>
          Vi legger
          <code class="b">&lt;berører fargen [#ffffff]&gt;</code>-klossen inn i
          skriptet vi allerede har laget som setter
          <code class="b">(hastighet)</code>-variabelen.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett [hastighet v] til [10]
gjenta for alltid
    hvis &lt;berører fargen [#cc0000]?&gt;
        snu @turnRight (180) grader
        gå (hastighet) steg
        snu @turnRight (180) grader
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>
          For å få riktig farge i
          <code class="b">berører fargen [#cc0000]</code>-klossen klikker du
          først på den lille firkanten hvor fargen vises. Det dukker opp en boks
          med fargevalg. Under fargevalgene er det et ikon. Klikk ikonet,
          deretter flytter du musepekeren slik at den peker på en vegg i
          labyrinten din. Da forandres fargen i den lille firkanten. Klikk igjen
          for å velge denne fargen.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Blir utforskeren stoppet når hun prøver å gå gjennom veggen?</p>
      </li>
      <li>
        <p>
          Skjønner du hvordan skriptet sier at utforskeren ikke kan gå gjennom
          veggen?
        </p>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="tips-2">Tips</h2>
    <p>
      En måte vi kan bruke for å begrense hvor en figur kan gå, er å tvinge den
      til å ta et skritt tilbake når den gjør noe feil. I koden
    </p>
    <pre><code class="blocks">  snu @turnRight (180) grader
  gå (hastighet) steg
  snu @turnRight (180) grader
</code></pre>
    <p>
      vil figuren først snu seg helt rundt (180 grader), deretter ta et skritt,
      og til slutt snu seg rundt igjen slik at den peker i samme retning som da
      den startet.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-p%C3%A5-leting-etter-skatten">
    Steg 4: På leting etter skatten
  </h1>
  <p>
    <em
      >Nå kan vi bevege oss rundt i labyrinten. Men det blir jo fort kjedelig om
      vi ikke har noe å gjøre inne i labyrinten. La oss se om vi kanskje finner
      en skatt!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        Legg til en ny figur. Du kan velge en figur fra biblioteket ved å flytte
        musepekeren over
        <img
          src="lessons/labyrint/../bilder/hent-fra-bibliotek.png"
          alt="Velg figur fra biblioteket"
        />
        og enten trykke på penselen som dukker opp for å tegne en egen, eller
        trykk på forstørrelsesglasset for å velge en figur som er ferdiglagd.
      </li>
    </ul>
    <p>. Vi brukte figuren <code>Ting/Star1</code>.</p>
    <ul>
      <li>
        <p>Gi den nye figuren navnet <code>Skatt</code>.</p>
      </li>
      <li>
        <p>
          Dra skatten rundt inne i labyrinten din, og gjem den et sted den er
          vanskelig å komme til.
        </p>
      </li>
    </ul>
    <p>
      Vi skal nå lage litt kode som oppdager når utforskeren finner skatten. Her
      har vi faktisk et valg: Vi kan lage et skript på
      <code>Utforsker</code> som sjekker om hun berører <code>Skatt</code>,
      eller vi kan gjøre det omvendt, vi kan lage et skript på
      <code>Skatt</code> som sjekker om den berører <code>Utforsker</code>.
    </p>
    <p>
      I dette tilfellet spiller det liten rolle hva vi velger, men om vi tenker
      oss at vi kanskje vil lage flere skatter senere kan det være litt enklere
      å lage skriptet på <code>Skatt</code>.
    </p>
    <ul>
      <li>
        <p>
          Pass på at figuren <code>Skatt</code> er markert, og skriv følgende
          kode:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    hvis &lt;berører [Utforsker v]?&gt;
        skjul
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Forsvinner skatten når utforskeren finner fram til den?</p>
      </li>
      <li>
        <p>
          Hva skjer når du prøver å starte spillet på nytt etter å ha funnet
          skatten? Hvor har skatten blitt av?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <p>
      Det er et problem i spillet vårt. Etter at utforskeren har funnet skatten
      en gang, forblir skatten borte.
    </p>
    <ul>
      <li>
        <p>
          Vi må passe på at skatten vises på begynnelsen av spillet. Endre
          skriptet på <code>Skatt</code> ved å legge til
          <code class="b">vis</code> helt i begynnelsen.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
vis
gjenta for alltid
    hvis &lt;berører [Utforsker v]?&gt;
        skjul
    slutt
slutt
</code></pre>
      </li>
    </ul>
    <p>
      Vi har enda et problem: Når vi starter spillet på nytt står utforskeren
      fortsatt der den fant skatten sist. Det blir ikke veldig spennende.
    </p>
    <ul>
      <li>
        <p>Klikk på <code>Utforsker</code>-figuren.</p>
      </li>
      <li>
        <p>
          Legg til en <code class="b">gå til x: () y: ()</code>-kloss rett etter
          <code class="b">sett [hastighet v] til (10)</code>-klossen.
        </p>
      </li>
      <li>
        <p>
          For å finne ut hvilke tall vi vil bruke for <code>x</code> og
          <code>y</code> kan vi gjøre følgende. Dra utforskeren til et sted det
          er fint å starte fra. Se på tallene over figur-lista. Sammen med
          <code>Utforsker</code>-figuren står det <code>x</code> og
          <code>y</code> og to tall. Dette er posisjonen til figuren akkurat nå.
          Skriv disse to tallene inn i
          <code class="b">gå til x: () y: ()</code>-klossen.
        </p>
      </li>
      <li>
        <p>
          Hele skriptet vil nå se slik ut (dine tall for <code>x</code> og
          <code>y</code> vil være forskjellige):
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett [hastighet v] til [10]
gå til x: (-200) y: (0)
gjenta for alltid
    hvis &lt;berører fargen [#cc0000]?&gt;
        snu @turnRight (180) grader
        gå (hastighet) steg
        snu @turnRight (180) grader
    slutt
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
        <p>Forsvinner fortsatt skatten når utforskeren finner fram til den?</p>
      </li>
      <li>
        <p>
          Virker spillet slik det skal når du starter det på nytt etter å ha
          funnet skatten?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-froskekongen-vokter-i-gangene">
    Steg 5: Froskekongen vokter i gangene
  </h1>
  <p>
    <em
      >Nå skal vi gjøre spillet vanskeligere. Froskekongen vandrer rundt i
      labyrinten og passer på skatten.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Legg til en ny figur. Vi brukte <code>Dyr/Frog</code>. Gi den navnet
          <code>Froskekonge</code>.
        </p>
      </li>
      <li>
        <p>
          Plasser den nye figuren et sted i labyrinten. Gjør den mindre eller
          større om nødvendig.
        </p>
      </li>
    </ul>
    <p>
      Vi begynner med å la <code>Froskekonge</code> merke at den fanger
      utforskeren. Dette blir veldig likt hvordan <code>Skatt</code> merket at
      den ble funnet.
    </p>
    <ul>
      <li>
        <p>Legg til følgende kode:</p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    hvis &lt;berører [Utforsker v]?&gt;
        si [Tok deg!] i (1) sekunder
        stopp [alle v] :: control
    slutt
slutt
</code></pre>
      </li>
    </ul>
    <p>
      Linjen <code class="b">stopp [alle v] :: control</code> gjør at skriptet
      på <code>Skatt</code> slutter å kjøre. Det betyr at vi klarer ikke å få
      tak i skatten etter at vi har blitt tatt av <code>Froskekonge</code>.
    </p>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-7">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Hva skjer om utforskeren kommer borti froskekongen?</p>
      </li>
      <li>
        <p>
          Hva skjer når du finner skatten etter å ha blitt tatt av froskekongen?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-8">Sjekkliste</h2>
    <p>Til sist skal vi få froskekongen til å bevege seg rundt i labyrinten.</p>
    <ul>
      <li>
        <p>
          Start et nytt skript på <code>Froskekonge</code>-figuren. Igjen kan du
          bytte ut tallene for <code>x</code> og <code>y</code> med noe som
          passer for din labyrint.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (50) y: (100)
pek i retning (-90 v)
</code></pre>
      </li>
      <li>
        <p>
          Før vi lar <code>Froskekonge</code> begynne å bevege seg lager vi en
          <code class="b">(hastighet)</code>-variabel også for ham. Klikk på
          <code class="blockdata">Variabler</code>, og deretter
          <code>Lag en Variabel</code>. Kall variabelen
          <code>hastighet</code> og la den gjelde kun
          <code>For denne figuren</code>. Tilslutt, fjern avhukingen på
          variabelen.
        </p>
      </li>
      <li>
        <p>
          Vi kan nå utvide skriptet slik at froskekongen går fram og tilbake. Vi
          får ham til å snu når han treffer veggen på nesten samme måte som vi
          hindrer utforskeren i å gå gjennom veggen.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (50) y: (100)
pek i retning (-90 v)
sett [hastighet v] til [5]
gjenta for alltid
    gå (hastighet) steg
    hvis &lt;berører fargen [#cc0000]?&gt;
        snu @turnRight (180) grader
        gå (hastighet) steg
    slutt
slutt
</code></pre>
      </li>
    </ul>
    <p>
      Helt tilslutt kan vi gjøre det enda vanskeligere ved å la froskekongen av
      og til endre retning.
    </p>
    <ul>
      <li>
        <p>
          Legg til kode som lar <code>Froskekonge</code> snu seg tilfeldig rundt
          i labyrinten:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (50) y: (100)
pek i retning (-90 v)
sett [hastighet v] til [5]
gjenta for alltid
    gå (hastighet) steg
    hvis &lt;berører fargen [#cc0000]?&gt;
        snu @turnRight (180) grader
        gå (hastighet) steg
    slutt
    hvis &lt;(tilfeldig tall fra (1) til (25)) = [1]&gt;
        snu @turnRight ((tilfeldig tall fra (-1) til (1)) * (90)) grader
    slutt
slutt
</code></pre>
      </li>
    </ul>
    <p>
      Disse to siste klossene ser litt kompliserte ut. La oss se litt nøyere på
      dem.
    </p>
    <ul>
      <li>
        <p>
          Klossen
          <code class="b"
            >hvis &lt;(tilfeldig tall fra (1) til (25)) = [1]&gt;</code
          >
          sier at vi skal gjøre <em>noe</em> cirka èn av 25 ganger.
        </p>
      </li>
      <li>
        <p>
          Dette <em>noe</em> er
          <code class="b"
            >snu @turnRight ((tilfeldig tall fra (-1) til (1)) * (90))
            grader</code
          >. Tegnet <code>*</code> betyr gange, slik at om vi velger tilfeldig
          mellom tallene -1, 0 og 1, betyr det at froskekongen vil vende -90, 0
          eller 90 grader. Det vil si at den svinger mot venstre, fortsetter
          rett frem eller svinger mot høyre.
        </p>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="tips-3">Tips</h2>
    <p>
      Du kan av og til oppleve at <code>Froskekonge</code> setter seg fast i
      veggen. Dette er fordi <code>Froskekonge</code> fortsatt berører
      labyrintveggen etter at den har snudd seg. Et par ting du kan prøve for å
      forbedre dette er å gjøre <code>Froskekonge</code>-figuren mindre, legge
      en <code class="b">begrens rotasjon [ikke roter v]</code>-kloss øverst i
      <code>Froskekonge</code>-skriptet, eller velge en figur som er
      <em>rundere</em> (prøv også å viske bort tunga til
      <code>Froskekonge</code> om du bruker <code>Dyr/Frog</code>-figuren).
    </p>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-8">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Klarer du å få tak i skatten?</p>
      </li>
      <li>
        <p>
          Om du synes spillet er for lett eller vanskelig er det mange måter du
          kan endre dette på! Prøv å lag froskekongen større eller mindre. Prøv
          å endre hastigheten på både utforskeren og froskekongen. Om du endrer
          tallet 25 i det siste skriptet vi laget for
          <code>Froskekonge</code> vil han endre retning oftere eller sjednere.
        </p>
      </li>
      <li>
        <p>
          Du kan også prøve å lage flere skatter. Prøv å høyreklikk på
          <code>Skatt</code>-figuren og velg <code>Lag en kopi</code>.
        </p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p><em>Da var vi ferdig med labyrint-spillet!</em></p>
    <p>
      Nå kan du gå på skattejakt! Hvis du vil kan du dele spillet med familie og
      venner ved å trykke <code>Legg ut</code>.
    </p>
  </section>
</section>
