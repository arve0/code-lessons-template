<!-- generated from src/lessons/soloball/soloball.md -->

<svelte:head>
  <title>Soloball</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Vi skal nå lære hvordan vi kan lage et enkelt ballspill med Scratch. I
    soloball skal du styre katten som kontrollerer ballen, slik at ballen ikke
    går i nettet.
  </p>
  <figure>
    <img
      src="lessons/soloball/soloball.png"
      alt="Bilde av katten Felix som spiller soloball"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-en-roterende-katt">
    Steg 1: En roterende katt
  </h1>
  <p>
    <em
      >Vi begynner med å se på hvordan vi kan få kattefiguren til å rotere.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Start et nytt Scratch-prosjekt. Du vil se en kattefigur midt på
          scenen.
        </p>
      </li>
      <li>
        <p>
          Pusle sammen de følgende klossene i kode-området i midten av skjermen.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (0) y: (0)
gjenta for alltid
    pek mot [musepeker v]
slutt
</code></pre>
        <p>
          Dette er et eksempel på et lite program, eller skript som det kalles i
          Scratch. Dette skriptet sier at kattefiguren skal stå midt på skjermen
          og alltid peke mot, eller se mot, musepekeren.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          For å starte programmet du nettopp puslet sammen kan du klikke på det
          grønne flagget over scenen.
        </p>
      </li>
      <li>
        <p>
          Begynner katten å rotere rundt slik at den alltid ser mot musepekeren?
        </p>
      </li>
      <li>
        <p>
          For å stoppe programmet ditt kan du klikke på det røde stopp-tegnet
          ved siden av det grønne flagget.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-katten-l%C3%B8per-rundt">
    Steg 2: Katten løper rundt
  </h1>
  <p>
    <em
      >I stedet for at katten roterer vil vi at den skal kunne løpe rundt i
      sirkel på skjermen.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <p>
      Vi skal nå gjøre et lite triks hvor vi flytter katten vekk fra sentrum
      slik at det ser ut som om den løper i sirkel i stedet for å rotere.
    </p>
    <ul>
      <li>
        <p>
          Gi først kattefiguren din navnet <code>Katt</code>. Dette gjør du ved
          å skrive <code>Katt</code> i tekstfeltet over kattefiguren.
        </p>
      </li>
      <li>
        <p>
          Klikk på <code class="blocklightgrey">Drakter</code>-fanen øverst på
          skjermen. Du vil nå se to kattefigurer. Slett en av dem ved å klikke
          på den lille x-en i hjørnet av figuren.
        </p>
      </li>
      <li>
        <p>
          Gjør katten mindre ved å klikke på den i det store bildet, og deretter
          dra i et av hjørnene.
        </p>
        <figure>
          <img
            src="lessons/soloball/katt_krymp.png"
            alt="Bilde av hvordan krympe katten Felix"
          />
        </figure>
      </li>
      <li>
        <p>
          Roter deretter katten ved å dra i den lille rundingen over katten.
        </p>
        <figure>
          <img
            src="lessons/soloball/katt_roter.png"
            alt="Bilde av hvordan rotere katten Felix"
          />
        </figure>
      </li>
      <li>
        <p>
          Til slutt kan du ta tak i kattefiguren ved å klikke på den lille
          rundingen midt på katten. Flytt den et stykke til siden. Følg med på
          scenen øverst til venstre at du ikke drar den av skjermen.
        </p>
        <figure>
          <img
            src="lessons/soloball/katt_flytt.png"
            alt="Bilde av hvordan flytte den roterte katten Felix"
          />
        </figure>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          Start programmet ditt igjen. Flytter katten seg i sirkel når du
          beveger musepekeren?
        </p>
      </li>
      <li>
        <p>
          Fungerer bevegelsen bra? Ser katten passe stor ut? Husk at du kan gå
          tilbake og endre på kattefiguren senere hvis du oppdager noe som kunne
          vært bedre.
        </p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="hva-skjedde%3F">Hva skjedde?</h2>
    <p>
      Selv om ikke endret programmet vårt oppfører katten seg veldig annerledes.
      Skjønner du hvorfor?
    </p>
    <p>
      Når vi sier at katten skal
      <code class="blockmotion">peke mot musepekeren</code> må den rotere rundt
      et punkt. Dette punktet kalles senterpunktet til figuren.
    </p>
    <p>
      Senterpunktet er i midten av bildet til katten. Når du trykker
      <code>=</code> ikonet under bildet vil du se hele bildet til figuren, og
      senterpunktet er da alltid i midten.
    </p>
    <figure>
      <img
        src="lessons/soloball/../bilder/scratch_3_senterpunkt_illustrasjon.png"
        alt="Senterpunkt illustrasjon"
      />
    </figure>
    <p>
      Når katten er utenfor senterpunktet vil det se ut som om katten løper
      rundt dette punktet i stedet for at den bare roterer uten å flytte seg.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-en-ball!">Steg 3: En ball!</h1>
  <p>
    <em>Nå skal vi lage en ball og få den til å sprette rundt på skjermen.</em>
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Klikk på <code class="blocklightgrey">Kode</code>-fanen slik at du ser
          skriptet du skrev tidligere.
        </p>
      </li>
      <li>
        <p>
          Klikk på
          <img
            src="lessons/soloball/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />
          ved siden av <code>Ny figur</code> for å hente en ny figur.
        </p>
      </li>
      <li>
        <p>
          Hvis du klikker kategorien <code>Sport</code> vil du se flere baller.
          Velg en av dem.
        </p>
      </li>
      <li>
        <p>
          Vi skal nå se en annen måte å gjøre figurer mindre på. Finn
          <code>Størrelse</code> feltet over ball-figuren. Den har nå verdien
          100. Skriv en mindre verdi, da blir ballen mindre. Prøv ulike tall til
          ballen ser ut som riktig størrelse i forhold til katten.
        </p>
      </li>
      <li>
        <p>
          Nå lager vi et program for ballen. Vi vil at ballen skal starte midt
          på skjermen. Deretter går den inn i en løkke hvor den flytter seg
          litt, og snur om katten kommer borti den.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (0) y: (0)
gjenta for alltid
    gå (3) steg
    hvis &lt;berører [Katt v] ?&gt;
        pek i retning ((180) + (retning))
    slutt
slutt
</code></pre>
        <p>
          Klossen <code class="blockmotion">retning</code> finner du helt
          nederst i <code class="blockmotion">Bevegelse</code>-kategorien.
        </p>
      </li>
      <li>
        <p>Skjønner du hvorfor</p>
        <pre><code class="blocks">pek i retning ((180) + (retning))
</code></pre>
        <p>gjør at ballen snur? Vi vil se nærmere på dette i Steg 6.</p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Beveger ballen seg? Snur ballen når katten berører den?</p>
      </li>
      <li>
        <p>Hva skjer om ballen flyr forbi katten?</p>
      </li>
      <li>
        <p>
          Starter ballen midt på skjermen igjen hvis du trykker på det grønne
          flagget en gang til?
        </p>
      </li>
      <li>
        <p>
          Hvis du synes ballen blir for lett &quot;fanget&quot; av katten kan du
          prøve å gjøre katten litt mindre. Vi vil finne en bedre løsning på
          dette problemet i Ekstra 3-delen.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-et-nett!">Steg 4: Et nett!</h1>
  <p>
    <em
      >Vi skal nå lage et nett som kan fange ballen hvis den flyr forbi
      katten.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi skal nå lage en figur som vi tegner selv. For å gjøre dette holder
          du musepekeren over
          <img
            src="lessons/soloball/../bilder/hent-fra-bibliotek.png"
            alt="Hent fra bibliotek"
          />, og så klikker du på <code>Tegn</code> ikonet.
        </p>
      </li>
      <li>
        <p>
          Velg linje-verktøyet på venstre side av skjermen, og trykk så
          <code>Kant</code> boksen for å velge farge. Velg en godt synlig farge,
          eksempel rød.
        </p>
      </li>
      <li>
        <p>
          Tegn en liten loddrett strek til høyre på figuren din. Hold gjerne
          inne <code>Skift</code>-knappen, da får du en helt loddrett strek.
        </p>
        <figure>
          <img
            src="lessons/soloball/tegn_nett.png"
            alt="Bilde av en helt loddrett strek"
          />
        </figure>
      </li>
      <li>
        <p>Klikk på <code class="blocklightgrey">Kode</code>-fanen.</p>
      </li>
      <li>
        <p>
          Vi skal nå tegne et sirkelformet nett ved å stemple denne figuren på
          bakgrunnen mange ganger i en sirkel. Lag det følgende skriptet:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (0) y: (0)
gjenta (36) ganger
    snu @turnLeft (10) grader
    lag klon av (meg)
slutt
</code></pre>
        <p>
          <code>lag klon av (meg)</code> lager en kopi av figuren der den
          befinner seg, før original-figuren flytter seg videre.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Tegnes det en sirkel på bakgrunnen når spillet starter?</p>
      </li>
      <li>
        <p>
          Det kan hende du må flytte litt på katt- og nett-figuren for at de
          skal passe sammen. Vi vil at det skal se ut omtrent som på bildet i
          begynnelsen av denne oppgaven.
        </p>
      </li>
      <li>
        <p>Skjer det noe når ballen treffer nettet?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-nettet-fanger-ballen">
    Steg 5: Nettet fanger ballen
  </h1>
  <p><em>Vi vil at ballen skal stoppe når den treffer nettet.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <p>
      Foreløpig har vi ikke laget noe kode som forteller ballen at den har
      truffet nettet. Det skal vi gjøre nå.
    </p>
    <ul>
      <li>
        <p>
          Klikk på ball-figuren, slik at du ser skriptet vi tidligere lagde for
          denne.
        </p>
      </li>
      <li>
        <p>
          Vi skal nå bruke
          <code class="blocksensing">berører fargen</code>-klossen for å oppdage
          at ballen treffer nettet. Legg til nye klosser i skriptet ditt slik at
          det blir seende slik ut:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (0) y: (0)
gjenta for alltid
    gå (3) steg
    hvis &lt;berører [Katt v] ?&gt;
        pek i retning ((180) + (retning))
    slutt
    hvis &lt;berører fargen [#ff0000] ?&gt;
        stopp [alle v] :: control
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>
          For å få riktig farge i
          <code class="blocksensing">berører fargen</code>-klossen klikker du
          først på den lille firkanten hvor fargen vises. I boksen som vises
          midt på skjermen med fargevalg, så er det et lite
          &quot;dråpeteller&quot;-ikon under. Klikk på det. Deretter flytter du
          musepekeren slik at den peker på nettet sin rød-farge. Trykk på det,
          så velger du den fargen.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Stopper ballen når den kommer til nettet?</p>
      </li>
      <li>
        <p>
          Med <code class="blockcontrol">stopp alle</code>-klossen stoppes hele
          spillet når ballen treffer nettet. For å spille videre må du klikke
          det grønne flagget igjen.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-6%3A-mer-naturlig-sprett">
    Steg 6: Mer naturlig sprett
  </h1>
  <p>
    <em
      >Nå spretter ballen bare fram og tilbake på samme linje hele tiden. Vi vil
      at den skal sprette litt mer naturlig når den treffer katten.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <p>
      En bra modell for hvordan en ball spretter er at vinkelen ut er den samme
      som vinkelen inn.
    </p>
    <figure>
      <img
        src="lessons/soloball/sprett_vinkel1.png"
        alt="Bilde av hvordan en ball sprett"
      />
    </figure>
    <p>
      I spillet er det to retninger vi må tenke på, retningen til ballen og
      retningen kattefiguren står i.
    </p>
    <figure>
      <img
        src="lessons/soloball/sprett_vinkel2.png"
        alt="Bilde av retning av katt og ball"
      />
    </figure>
    <p>
      Før vi gjør noe mer så trenger ballen å vite hvilken retning katten har.
    </p>
    <ul>
      <li>
        <p>
          Velg kattefiguren, trykk på <code>Variabel</code> kategorien og lag en
          ny variabel på katten som du kaller <code>retning av katt</code> (og
          velg at den skal være synlig for alle figurer).
        </p>
      </li>
      <li>
        <p>
          I kattens skript, juster slik at den hele tiden oppdaterer denne
          variabelen med sin retning:
        </p>
      </li>
    </ul>
    <pre><code class="blocks"> når @greenFlag klikkes
 gå til x: (0) y: (0)
 gjenta for alltid
     pek mot [musepeker v]
     sett (kattens retning) til (retning)
 slutt
</code></pre>
    <p>Nå kan ballen få tak i retningen til katten.</p>
    <p>
      I figuren over og i koden videre betyr
      <code class="blockmotion">retning</code> retningen til ballen, siden koden
      tilhører ballfiguren. Så langt har vi brukt
    </p>
    <pre><code class="blocks">pek i retning ((180) + (retning))
</code></pre>
    <p>
      for at ballen skal snu. I figuren ser vi at dette betyr at ballen spretter
      tilbake der den kom i fra.
    </p>
    <p>
      Vi bør også kompensere for retningen til <code>Katt</code>. Dette kan vi
      gjøre ved å trekke fra to ganger (<code class="blockmotion">retning</code>
      - <code class="blockdata">retning av katt</code>). Skjønner du hvorfor av
      figuren? Da blir den nye retningen
    </p>
    <pre><code class="blocks">(((180) + (retning)) - ((2) * ((retning) - (retning av katt)))
</code></pre>
    <p>Vi kan forenkle dette til</p>
    <pre><code class="blocks">(((180) - (retning)) + ((2) * (retning av katt)))
</code></pre>
    <ul>
      <li>
        <p>Endre i skriptet til ballen slik at spretten blir bedre,</p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (0) y: (0)
gjenta for alltid
    gå (3) steg
    hvis &lt;berører [Katt v] ?&gt;
        pek i retning (((180) - (retning)) + ((2) * (retning av katt)))
    slutt
    hvis &lt;berører fargen [#ff0000] ?&gt;
        stopp [alle v] :: control
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
        <p>Ser du at ballen spretter litt mer naturlig nå?</p>
      </li>
      <li>
        <p>
          Har du noen ideer til hvordan spillet kan bli enda bedre? Prøv dem ut!
        </p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-og-legg-ut-prosjektet">
      Lagre og legg ut prosjektet
    </h2>
    <p>
      Vi har nå laget et ganske morsomt spill! Hvis du vil kan du gå videre med
      de neste stegene for å gjøre spillet enda litt mer spennende.
    </p>
    <p>
      For å lagre spillet ditt kan du velge <code>Lagre nå</code> i
      <code>Fil</code>-menyen. Spillet blir da lagret på brukerkontoen ditt hos
      Scratch. Om du ikke har laget deg brukerkonto kan du velge
      <code>Last ned til datamaskinen</code> i stedet.
    </p>
    <p>
      Om du lagrer spillet på brukerkontoen din kan du også legge det ut slik at
      andre kan spille det. For å gjøre dette klikker du <code>Legg ut</code> i
      midten i toppen av skjermen. Du kan deretter dele nettadressen til spillet
      ditt med venner og familie.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="ekstra-1%3A-tell-poeng">Ekstra 1: Tell poeng</h1>
  <p><em>Alle spill blir morsommere hvis man får poeng!</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <p>
      For å telle poeng skal vi bruke noe som kalles en variabel. En variabel er
      et navn på en verdi som kan variere.
    </p>
    <ul>
      <li>
        <p>
          Klikk på <code>Data</code>-kategorien og deretter på
          <code class="blocklightgrey">Lag en Variabel</code>.
        </p>
      </li>
      <li>
        <p>
          Gi variabelen navnet <code class="blockdata">Poeng</code>, og la den
          gjelde for alle figurer. Legg merke til at når du klikker
          <code>OK</code> dukker det opp en boks som heter
          <code class="blockdata">Poeng</code> på scenen, og flere nye klosser
          under <code class="blocklightgrey">Lag en Variabel</code>.
        </p>
      </li>
    </ul>
    <p>
      Vi vil nå at <code class="blockdata">Poeng</code> skal settes til
      <code>0</code> når spillet starter. Deretter skal vi få ett poeng hver
      gang vi returnerer ballen.
    </p>
    <ul>
      <li>
        <p>Legg på to nye klosser i skriptet som styrer ballen:</p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (0) y: (0)
sett [Poeng v] til [0]
gjenta for alltid
    gå (3) steg
    hvis &lt;berører [Katt v] ?&gt;
        pek i retning (((180) - (retning)) + ((2) * (retning av katt)))
        endre [Poeng v] med (1)
    slutt
    hvis &lt;berører fargen [#ff0000] ?&gt;
        stopp [alle v] :: control
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="ekstra-2%3A-%C3%B8k-hastigheten">
    Ekstra 2: Øk hastigheten
  </h1>
  <p>
    <em
      >Vi skal nå lage spillet vanskeligere etterhvert som tiden går, ved at
      ballen beveger seg stadig raskere.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-8">Sjekkliste</h2>
    <p>Hastigheten på ballen styres nå av klossen</p>
    <pre><code class="blocks">gå (3) steg
</code></pre>
    <p>
      Ved å endre på <code>3</code>-tallet endrer vi hastigheten på ballen. Prøv
      dette selv!
    </p>
    <ul>
      <li>
        <p>
          For å endre hastigheten underveis i spillet trenger vi en variabel.
          Lag en ny variabel som du kaller
          <code class="blockdata">Hastighet</code>. Du kan la denne gjelde kun
          for denne figuren.
        </p>
      </li>
      <li>
        <p>
          Hastigheten er ikke så interessant å vise på scenen. Du kan skjule
          boksen på scenen ved å fjerne avhukingen ved siden av
          <code class="blockdata">Hastighet</code>.
        </p>
        <figure>
          <img
            src="lessons/soloball/variabel.png"
            alt='Bilde av hvordan skjule variabelen "Hastighet"'
          />
        </figure>
      </li>
      <li>
        <p>
          Vi vil nå sette hastigheten til <code>3</code> (du kan bruke et annet
          tall om du vil) når spillet starter. Deretter vil vi øke denne
          littegrann hver gang katten berører ballen. Dette gjør vi på samme
          måte som når vi teller poeng.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (0) y: (0)
sett [Poeng v] til [0]
sett [Hastighet v] til [3]
gjenta for alltid
    gå (hastighet) steg
    hvis &lt;berører [Katt v] ?&gt;
        pek i retning (((180) - (retning)) + ((2) * (retning av katt)))
        endre [Poeng v] med (1)
        endre [Hastighet v] med (0.1)
    slutt
    hvis &lt;berører fargen [#ff0000] ?&gt;
        stopp [alle v] :: control
    slutt
slutt
</code></pre>
        <p>
          Pass på at du også endrer
          <code class="blockmotion">gå steg</code>-klossen.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="ekstra-3%3A-unng%C3%A5-at-katten-fanger-ballen">
    Ekstra 3: Unngå at katten fanger ballen
  </h1>
  <p>
    <em
      >Du har sikkert opplevd at katten av og til &quot;fanger&quot; ballen. Vi
      skal nå fikse slik at den ikke gjør det.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-9">Sjekkliste</h2>
    <p>
      Av og til virker det som om katten &quot;fanger&quot; ballen. Dette skjer
      fordi ballen ikke flytter seg langt nok etter at den har snudd. Den
      fortsetter å berøre katten og blir derfor snudd igjen ... og igjen ... og
      igjen.
    </p>
    <ul>
      <li>
        Vi skal nå lage nok en variabel. Denne skal hete
        <code class="blockdata">Flytt</code>, kun gjelde for denne figuren, og
        heller ikke vises på scenen.
      </li>
    </ul>
    <p>
      <code class="blockdata">Flytt</code>-variabelen vil vi bruke til å telle
      hvor mange flytt ballen har gjort siden den sist berørte katten. Deretter
      kan vi si at ballen skal snu kun hvis den har flyttet mange ganger siden
      den sist snudde.
    </p>
    <ul>
      <li>
        <p>
          Utvid skriptet ditt som under. Legg spesielt merke til at
          <code class="blockcontrol">hvis</code>-testen har blitt utvidet.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (0) y: (0)
sett [Poeng v] til [0]
sett [Hastighet v] til [3]
gjenta for alltid
    gå (hastighet) steg
    endre [Flytt v] med (1)
    hvis &lt;&lt;berører [Katt v] ?&gt; og &lt;(Flytt) &gt; [20]&gt;&gt;
        pek i retning (((180) - (retning)) + ((2) * (retning av katt)))
        endre [Poeng v] med (1)
        endre [Hastighet v] med (0.1)
        sett [Flytt v] til [0]
    slutt
    hvis &lt;berører fargen [#ff0000] ?&gt;
        stopp [alle v] :: control
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="pr%C3%B8v-selv">Prøv selv</h2>
    <p>
      I disse ekstrastegene har vi sett på noen måter vi kan gjøre spillet bedre
      og mer spennende på. Her er enda flere ideer:
    </p>
    <ul>
      <li>
        <p>
          Du kan bytte kattefiguren med en annen figur. Dette gjør du enklest
          ved å gå til <code>Drakter</code>-fanen fordi da beholder du skriptet
          du allerede har laget på figuren. Her kan du velge en av de ferdige
          figurene eller tegne en ny figur selv.
        </p>
      </li>
      <li>
        <p>
          Prøv å legg på lyder, for eksempel når katten berører ballen eller når
          ballen treffer nettet. Se på de forskjellige klossene i
          <code class="blocksound">Lyder</code>-kategorien, og lydene som finnes
          under <code>Lyder</code>-fanen.
        </p>
      </li>
    </ul>
    <p>Det finnes mange andre ting å prøve også. Du bestemmer!</p>
  </section>
</section>
