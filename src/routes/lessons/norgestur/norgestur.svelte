<!-- generated from src/lessons/norgestur/norgestur.md -->

<svelte:head>
  <title>Norgestur</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Bli med på en rundreise i Norge! Vi skal lage et spill hvor du styrer et
    helikopter rundt omkring et kart over Norge, mens du prøver å raskest mulig
    finne steder og byer du blir bedt om å besøke.
  </p>
  <figure>
    <img
      src="lessons/norgestur/norgestur.png"
      alt="Illustrasjon av et Norgestur spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-et-norgeskart">Steg 1: Et norgeskart</h1>
  <p>
    <em
      >Vi legger først inn et norgeskart som en bakgrunn. Dette vil vi senere
      bruke helikopteret til å besøke.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi må først laste ned filen som inneholder kartet fra nettet. Hvis du
          allerede har fått denne filen på datamaskinen din kan du hoppe over
          det neste punktet.
        </p>
      </li>
      <li>
        <p>
          Høyreklikk på lenken
          <a href="lessons/norgestur/norgeskart.png">norgeskart.png</a> og velg
          at den skal åpnes i en ny fane. Klikk på den nye fanen som blir åpnet.
          Dette vil vise et bilde av et norgeskart. Høyreklikk på bildet, og
          velg <code>Lagre bildet som</code> eller noe som ligner. Lagre bildet
          et sted du finner det igjen, for eksempel på Skrivebordet.
        </p>
      </li>
      <li>
        <p>
          Start et nytt Scratch-prosjekt. Slett kattefiguren, for eksempel ved å
          høyreklikke på den og velge <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          Legg inn norgeskartet som bakgrunn ved å velge
          <img
            src="lessons/norgestur/../bilder/hent-fra-fil.png"
            alt="Last opp bakgrunn frafil"
          />
          under <code>Ny bakgrunn</code> helt til venstre på skjermen. Velg
          filen <code>norgeskart.png</code> du lastet ned tidligere.
        </p>
      </li>
    </ul>
    <section class="protip">
      <h3 class="protip" id="norgeskart">Norgeskart</h3>
      <p>
        Det finnes mengder av kart på internett. Det kartet vi bruker i denne
        oppgaven er laget av Kartverket og delt slik at alle kan bruke det til
        hva de ønsker. Bakerst i denne oppgaven beskrives hvordan du kan bruke
        andre kart.
      </p>
    </section>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-styr-helikopteret">
    Steg 2: Styr helikopteret
  </h1>
  <p>
    <em
      >Vi skal nå lage et helikopter som vi kan styre rundt over kartet. Vi
      begynner med å programmere et skript som lar oss kontrollere helikopteret
      med piltastene.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Legg til en ny figur ved å klikke
          <img
            src="lessons/norgestur/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur frabiblioteket"
          />
          under <code>Figurer</code>. Vi har brukt
          <code>Transport/Helicopter</code>, men du kan eventuelt bruke en annen
          figur du vil reise rundt med.
        </p>
      </li>
      <li>
        <p>
          Klikk <code class="blockmotion">i</code> og skift navn på figuren til
          <code>Helikopter</code>. Sett også rotasjonsmåten til
          <img
            src="lessons/norgestur/../bilder/rotasjonsmate-hv.png"
            alt="vend sideveis"
          />
          for å unngå at helikopteret flyr opp-ned.
        </p>
      </li>
      <li>
        <p>
          Vi begynner med å gjøre helikopteret mindre, samt sikre oss at det
          alltid starter på samme sted. Lag dette skriptet:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett størrelse til (25) %
gå til x: (0) y: (0)
</code></pre>
      </li>
      <li>
        <p>
          Vi skal nå programmere at helikopteret kontrolleres med piltastene. Vi
          gjør dette ved å starte en løkke som vi gjentar for alltid. Inne i
          denne evige løkken tester vi om piltastene er trykket og i så fall
          flytter vi helikopteret. Først lager vi koden som flytter helikopteret
          oppover:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett størrelse til (25) %
gå til x: (0) y: (0)
for alltid
    hvis &lt;tast [pil opp v] trykket?&gt;
        pek i retning (0 v)
        gå (2) steg
    slutt
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
        <p>
          Starter en liten utgave av helikopteret omtrent midt på skjermen (litt
          nordvest for Trondheim)?
        </p>
      </li>
      <li>
        <p>Flytter helikopteret seg oppover når du trykker pil opp-tasten?</p>
      </li>
      <li>
        <p>Skjer det noe når du trykker de andre piltastene?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <p>Vi skal nå programmere de andre piltastene også.</p>
    <ul>
      <li>
        <p>
          Koden for å flytte helikopteret med de andre piltastene er veldig lik
          koden som flytter helikopteret oppover. Vi kan derfor kopiere denne!
          Høyreklikk på klossen <code class="blockcontrol">hvis</code
          ><code class="blocksensing">tast pil opp trykket?</code>, og velg
          <code>lag en kopi</code>. Slipp disse klossene inn i
          <code class="blockcontrol">for alltid</code>-løkken. Gjenta til du har
          fire <code class="blockcontrol">hvis</code>-klosser. Endre på skriptet
          ditt slik at det ser ut som følger:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett størrelse til (25) %
gå til x: (0) y: (0)
for alltid
    hvis &lt;tast [pil opp v] trykket?&gt;
        pek i retning (0 v)
        gå (2) steg
    slutt
    hvis &lt;tast [pil høyre v] trykket?&gt;
        pek i retning (90 v)
        gå (2) steg
    slutt
    hvis &lt;tast [pil ned v] trykket?&gt;
        pek i retning (180 v)
        gå (2) steg
    slutt
    hvis &lt;tast [pil venstre v] trykket?&gt;
        pek i retning (-90 v)
        gå (2) steg
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
        <p>Kan du bruke alle fire piltastene til å flytte helikopteret?</p>
      </li>
      <li>
        <p>
          Hva er det som bestemmer hvor fort helikopteret beveger seg? Prøv å
          forandre på skriptet ditt slik at helikopteret flyr raskere eller
          saktere.
        </p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring%3A-hastighetsvariabel">
      Utfordring: Hastighetsvariabel
    </h2>
    <p>
      Hvis du ser i skriptet så har vi gjentatt tallet <code>2</code> hele fire
      ganger. Dette gjør det vanskeligere for oss om vil endre hvor fort
      helikopteret beveger seg.
    </p>
    <p>
      Hvis du vil kan du prøve å lage en ny variabel som heter
      <code class="blockdata">hastighet</code>. Deretter kan du sette denne
      variabelen lik 2 etter at det grønne flagget klikkes. Til slutt kan du
      bytte ut <code class="blockmotion">gå 2 steg</code>-klossene med
      <code class="blockmotion">gå</code><code class="blockdata">hastighet</code
      ><code class="blockmotion">steg</code>-klosser.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-legg-til-et-reisem%C3%A5l">
    Steg 3: Legg til et reisemål
  </h1>
  <p>
    <em
      >Nå som helikopteret kan fly rundt omkring i Norge kan vi gi spilleren et
      mål med reisen.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi skal nå tegne vår egen figur som vi vil bruke til å markere et sted
          på kartet. Klikk
          <img
            src="lessons/norgestur/../bilder/tegn-ny.png"
            alt="Tegn ny figur"
          />
          under <code>Figurer</code>.
        </p>
      </li>
      <li>
        <p>
          Vi trenger bare en ganske liten sirkel. Velg en passende farge, for
          eksempel vil rød synes ganske godt på kartet. Velg deretter
          sirkelverktøyet, og marker den fyllte sirkelen (ellipsen) til venstre
          under tegnevinduet.
        </p>
      </li>
      <li>
        <p>
          Før vi begynner å tegne kan du forstørre tegningen din ved å trykke på
          forstørrelsesglasset nederst til høyre. For eksempel vil 800%
          forstørrelse passe bra. Hold inne <code>skift</code>-knappen mens du
          drar ut en sirkel som er omtrent fire ruter stor.
          <code>skift</code>-knappen hjelper deg til å lage en helt rund sirkel.
        </p>
        <figure>
          <img
            src="lessons/norgestur/sirkel.png"
            alt="Bilde av en helt rund rød sirkel"
          />
        </figure>
      </li>
      <li>
        <p>
          Klikk på <code class="blockmotion">i</code> og gi denne nye figuren
          navnet <code>Sted</code>.
        </p>
      </li>
      <li>
        <p>
          Dra denne nye sted-figuren til et sted på kartet du vil at skal være
          første reisemål. Vi har brukt <code>Hønefoss</code> som første
          reisemål, men du kan velge et annet sted om du vil.
        </p>
      </li>
      <li>
        <p>
          Vi trenger nå posisjonen til reisemålet vårt. Denne finner vi ved se
          på figurinformasjonen etter tallene som står bak <code>x</code> og
          <code>y</code>. Disse tallene kalles koordinater. I eksempelet under
          er koordinatene <code>x: 6</code> og <code>y: -112</code>. Disse
          forteller hvor på kartet vi har lagt reisemålet.
        </p>
        <figure>
          <img
            src="lessons/norgestur/reisemaal.png"
            alt="Bilde av x- og y koordinatene i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Klikk på <code class="blocklightgrey">Skript</code>-fanen. Vi skal nå
          lage koden som legger <code>Sted</code>-figuren på riktig sted, og
          senere oppdager om helikopteret reiser dit.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
send melding [Sted: Hønefoss v]

når jeg mottar [Sted: Hønefoss v]
gå til x: (6) y: (-112)
vent til &lt;berører [Helikopter v]?&gt;
si [Fant Hønefoss!] i (2) sekunder
</code></pre>
        <p>
          Legg merke til at i <code class="blockmotion">gå til</code>-klossen
          bruker vi samme koordinater som de vi fant ovenfor. Det betyr at om du
          bruker ditt eget reisemål må du bytte disse tallene med de du fant.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Er <code>Sted</code>-figuren der den skal være på kartet?</p>
      </li>
      <li>
        <p>
          Sier den <code>Fant Hønefoss!</code> (eller ditt reisemål) når
          helikopteret flyr til reisemålet?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-et-nytt-reisem%C3%A5l">
    Steg 4: Et nytt reisemål
  </h1>
  <p>
    <em
      >La oss legge til et nytt reisemål vi kan reise til etter å ha besøkt det
      første!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Flytt <code>Sted</code>-figuren til et nytt sted på kartet. Vi bruker
          <code>Tromsø</code>. Finn koordinatene til dette nye stedet på samme
          måte som sist.
        </p>
      </li>
      <li>
        <p>
          Legg til en melding nederst i <code>Hønefoss</code>-skriptet som
          kaller et nytt reisemål. Lag deretter et nytt skript for det nye
          stedet. Dette nye skriptet er veldig likt det første, så du bør
          høyreklikke på
          <code class="blockevents">når jeg mottar Sted: Hønefoss</code>-klossen
          og velge <code>lag en kopi</code>.
        </p>
        <pre><code class="blocks">når jeg mottar [Sted: Hønefoss v]
gå til x: (6) y: (-112)
vent til &lt;berører [Helikopter v]?&gt;
si [Fant Hønefoss!] i (2) sekunder
send melding [Sted: Tromsø v]

når jeg mottar [Sted: Tromsø v]
gå til x: (103) y: (121)
vent til &lt;berører [Helikopter v]?&gt;
si [Fant Tromsø!] i (2) sekunder
</code></pre>
        <p>
          Bruk dine egne koordinater (og navn) også for det andre reisemålet.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Flytter reisemålet seg etter at du har funnet det første?</p>
      </li>
      <li>
        <p>Oppdager også det andre reisemålet at du finner det?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-skjul-reisem%C3%A5lene">
    Steg 5: Skjul reisemålene
  </h1>
  <p>
    <em
      >Foreløpig er ikke spillet veldig vanskelig: Alt du behøver å gjøre er å
      styre helikopteret til den røde sirkelen. For å lage et skikkelig spill
      vil vi skjule den røde sirkelen, og heller bare fortelle spilleren til
      hvilket sted hun skal fly!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <p>Vi vil først fortelle spilleren hvor han skal fly.</p>
    <ul>
      <li>
        <p>
          Lag en ny variabel, ved å klikke på
          <code class="blockdata">Data</code> og deretter
          <code>Lag en variabel</code>. Kall variabelen
          <code class="blockdata">Reis til</code> og velg at den skal gjelde
          <code>For alle figurer</code>.
        </p>
      </li>
      <li>
        <p>
          Legg merke til at det dukket opp en boks på kartet,
          <code class="blocklightgrey">Reis til</code
          ><code class="blockdata">0</code>. Flytt denne boksen til et passende
          sted slik at den er lett å lese.
        </p>
      </li>
      <li>
        <p>
          Nå kan vi oppdatere koden til <code>Sted</code> slik at den setter
          denne <code class="blockdata">Reis til</code>-variabelen. Endre først
          <code>Hønefoss</code>-skriptet som følger:
        </p>
        <pre><code class="blocks">når jeg mottar [Sted: Hønefoss v]
gå til x: (6) y: (-112)
sett [Reis til v] til [Hønefoss]
vent til &lt;berører [Helikopter v]?&gt;
si [Fant Hønefoss!] i (2) sekunder
send melding [Sted: Tromsø v]
</code></pre>
      </li>
      <li>
        <p>Endre også det andre reisemål-skriptet på samme måte:</p>
        <pre><code class="blocks">når jeg mottar [Sted: Tromsø v]
gå til x: (103) y: (121)
sett [Reis til v] til [Tromsø]
vent til &lt;berører [Helikopter v]?&gt;
si [Fant Tromsø!] i (2) sekunder
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Fungerer fortsatt spillet som tidligere?</p>
      </li>
      <li>
        <p>
          Oppdaterer <code class="blockdata">Reis til</code>-variabelen seg slik
          du forventet?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <p>
      Vi er nå klare til å skjule den røde sirkelen. Vi prøver først det
      enkleste og mest opplagte:
    </p>
    <ul>
      <li>
        <p>
          Legg til en <code class="blocklooks">skjul</code>-kloss i
          oppstartskriptet på <code>Sted</code>-figuren.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul
send melding [Sted: Hønefoss v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Blir den røde sirkelen borte?</p>
      </li>
      <li>
        <p>Hva skjer om du reiser til Hønefoss?</p>
      </li>
    </ul>
    <p>
      Hmm ... spillet oppdager ikke lengre at vi reiser til Hønefoss. Problemet
      er at siden vi skjuler sirkelen vil den ikke lengre berøre
      <code>Helikopter</code>-figuren. Vi må finne en annen måte å gjøre
      sirkelen usynlig på!
    </p>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-8">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          I stedet for å skjule sirkelen helt vil vi heller gjøre den
          gjennomsiktig! Bytt ut <code class="blocklooks">skjul</code>-klossen
          med en <code class="blocklooks">sett effekt</code>-kloss.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
vis
sett [gjennomsiktig v] effekt til (100)
send melding [Sted: Hønefoss v]
</code></pre>
        <p>
          Vi har også lagt til en <code class="blocklooks">vis</code>-kloss for
          å være på den sikre siden (vi har jo oppdaget at spillet ikke virker
          om <code>Sted</code>-figuren er skjult).
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-7">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Er fortsatt den røde sirkelen usynlig?</p>
      </li>
      <li>
        <p>Hva skjer nå om du reiser til Hønefoss?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-6%3A-vis-reisem%C3%A5let-etter-at-det-blir-funnet"
  >
    Steg 6: Vis reisemålet etter at det blir funnet
  </h1>
  <p>
    <em
      >Det vil være kult å vise spilleren hvor reisemålet faktisk er etter at
      hun har funnet det!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-9">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          La oss lage en ny melding, <code>Fant sted</code>, som vi kan sende
          hver gang spilleren finner et reisemål. Denne meldingen kan vi så
          bruke til å kjøre et skript hver gang vi finner et reisemål. Endre
          <code>Sted</code>-skriptene som følger:
        </p>
        <pre><code class="blocks">når jeg mottar [Sted: Hønefoss v]
gå til x: (6) y: (-112)
sett [Reis til v] til [Hønefoss]
vent til &lt;berører [Helikopter v]?&gt;
send melding [Fant sted v] og vent
send melding [Sted: Tromsø v]

når jeg mottar [Sted: Tromsø v]
gå til x: (103) y: (121)
sett [Reis til v] til [Tromsø]
vent til &lt;berører [Helikopter v]?&gt;
send melding [Fant sted v] og vent
</code></pre>
      </li>
      <li>
        <p>
          Når vi mottar <code>Fant sted</code>-meldingen vil vi vise hvor
          reisemålet faktisk ligger. Siden sirkelen snart flyttes videre kan vi
          ikke bare gjøre figuren synlig, vi må også
          <code class="blockpen">stemple avtrykk</code> av figuren på
          bakgrunnen. Legg til dette skriptet:
        </p>
        <pre><code class="blocks">når jeg mottar [Fant sted v]
sett [gjennomsiktig v] effekt til (0)
stemple avtrykk
sett [gjennomsiktig v] effekt til (100)
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
          Dukker den røde sirkelen opp etterhvert som du finner reisemålene?
        </p>
      </li>
      <li>
        <p>
          Hva skjer om du starter spillet på nytt etter å ha funnet reisemålene?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-10">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          For å være sikker på at avtrykkene (de røde sirklene) blir borte når
          vi starter spillet på nytt kan vi bruke
          <code class="blockpen">slett</code>-klossen. Legg til en kloss på
          oppstart-skripet:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
slett
vis
sett [gjennomsiktig v] effekt til (100)
send melding [Sted: Hønefoss v]
</code></pre>
      </li>
      <li>
        <p>
          La oss også legge på en enkel lydeffekt når spilleren finner et
          reisemål. Siden vi har meldingen <code>Fant sted</code> er dette
          enkelt. Klikk først på <code class="blocklightgrey">Lyder</code>-fanen
          og velg en ny lyd fra biblioteket. Vi bruker
          <code>Effekter/rattle</code>, men du kan gjerne bruke en annen lyd.
        </p>
      </li>
      <li>
        <p>
          Spill lyden når et sted blir funnet. Klikk
          <code class="blocklightgrey">Skript</code>-fanen og legg til en
          <code class="blocksound">start lyden</code>-kloss.
        </p>
        <pre><code class="blocks">når jeg mottar [Fant sted v]
start lyden [rattle v]
sett [gjennomsiktig v] effekt til (0)
stemple avtrykk
sett [gjennomsiktig v] effekt til (100)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-9">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Blir de røde sirklene slettet når du starter spillet på nytt?</p>
      </li>
      <li>
        <p>Spilles det av en liten lyd når du finner et reisemål?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-7%3A-tiden-g%C3%A5r">Steg 7: Tiden går</h1>
  <p>
    <em
      >Vi skal nå gjøre spillet enda mere utfordrende ved å legge på en
      tidsbegrensning.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-11">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Klikk på <code>Scene</code> til venstre for figurene. Skript som skal
          gjelde for hele spillet, og ikke en spesiell figur kan man legge på
          scenen. I dette tilfellet vil vi ha en variabel som teller ned hvor
          mye tid spilleren har til å reise rundt. Denne er et bra eksempel på
          noe som tilhører hele spillet.
        </p>
      </li>
      <li>
        <p>
          Velg <code class="blockdata">Data</code> og
          <code class="blocklightgrey">Lag en variabel</code>. Kall variabelen
          <code class="blockdata">Tid</code>. Legg merke til at siden vi lager
          variabelen på scenen må den gjelde for alle figurer.
        </p>
      </li>
      <li>
        <p>
          Når spillet starter vil vi gi spilleren litt tid. Dette gjør vi ved å
          sette <code class="blockdata">Tid</code> til for eksempel
          <code>30</code>, du kan selvsagt eksperimentere med andre tall.
          Deretter starter vi en løkke som teller ned hvert sekund.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett [Tid v] til [30]
gjenta til &lt;(Tid) = [0]&gt;
    vent (1) sekunder
    endre [Tid v] med (-1)
slutt
send melding [Avslutt v]
</code></pre>
        <p>
          Legg merke til at vi også sender ut en ny melding
          <code>Avslutt</code> når tiden er ute. Denne bruker vi til å avslutte
          spillet.
        </p>
      </li>
      <li>
        <p>Lag et nytt skript på scenen som avslutter spillet.</p>
        <pre><code class="blocks">når jeg mottar [Avslutt v]
stopp [alle v] :: control
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-10">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Starter tiden på 30 når spillet begynner?</p>
      </li>
      <li>
        <p>Telles tiden ned etterhvert?</p>
      </li>
      <li>
        <p>
          Avsluttes spillet (helikopteret kan ikke fly rundt lengre) når tiden
          løper ut?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-12">Sjekkliste</h2>
    <p>
      Som en bonus kan vi også gi spilleren litt ekstra tid hver gang han finner
      et reisemål.
    </p>
    <ul>
      <li>
        <p>
          Lag et nytt skript på scenen som reagerer på meldingen
          <code>Fant sted</code>.
        </p>
        <pre><code class="blocks">når jeg mottar [Fant sted v]
endre [Tid v] med (10)
</code></pre>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-8%3A-flere-steder-%C3%A5-bes%C3%B8ke">
    Steg 8: Flere steder å besøke
  </h1>
  <p>
    <em
      >Til sist vil vi legge til litt flere steder å besøke for å gjøre spillet
      mer spennende!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-13">Sjekkliste</h2>
    <p>
      For å legge til nye steder må vi bare gjøre det samme som vi gjorde
      tidligere i oppgaven (under Steg 3 og 4). Det enkleste er å kopiere
      kodeklossene vi allerede har lagd, og deretter endre på dem.
    </p>
    <ul>
      <li>
        <p>Velg figuren <code>Sted</code>.</p>
      </li>
      <li>
        <p>
          Vi har gjort <code>Sted</code>-figuren helt gjennomsiktig. For å gjøre
          den synlig igjen, kan du bare klikke på (du trenger ikke legge den til
          i noe skript) klossen
          <code class="blocklooks">ta bort grafiske effekter</code> i
          <code class="blocklooks">Utseende</code>-kategorien. Det kan også være
          nyttig å klikke på <code class="blockpen">slett</code>-klossen i
          <code class="blockpen">Penn</code>-kategorien.
        </p>
      </li>
      <li>
        <p>
          Flytt den røde sirkelen til et nytt sted. Noter deg koordinatene ved å
          se på figurinformasjonen, <code class="blockmotion">i</code>.
        </p>
      </li>
      <li>
        <p>
          Høyreklikk på skriptet som begynner
          <code class="blockevents">når jeg mottar Sted: Hønefoss</code> og velg
          <code>lag en kopi</code>. Oppdater denne kopien med navnet og
          koordinatene du fant ovenfor.
        </p>
      </li>
      <li>
        <p>
          Nedenfor har vi lagt til tre nye steder (samt lagt til en melding for
          å reise videre fra Tromsø). Dine skript bør ligne på disse, men kan
          gjerne inneholde andre navn og koordinater.
        </p>
        <pre><code class="blocks">når jeg mottar [Sted: Hønefoss v]
gå til x: (6) y: (-112)
sett [Reis til v] til [Hønefoss]
vent til &lt;berører [Helikopter v]?&gt;
send melding [Fant sted v] og vent
send melding [Sted: Tromsø v]

når jeg mottar [Sted: Tromsø v]
gå til x: (103) y: (121)
sett [Reis til v] til [Tromsø]
vent til &lt;berører [Helikopter v]?&gt;
send melding [Fant sted v] og vent
send melding [Sted: Lillehammer v]

når jeg mottar [Sted: Lillehammer v]
gå til x: (14) y: (-94)
sett [Reis til v] til [Lillehammer]
vent til &lt;berører [Helikopter v]?&gt;
send melding [Fant sted v] og vent
send melding [Sted: Bergen v]

når jeg mottar [Sted: Bergen v]
gå til x: (-52) y: (-107)
sett [Reis til v] til [Bergen]
vent til &lt;berører [Helikopter v]?&gt;
send melding [Fant sted v] og vent
send melding [Sted: Narvik v]

når jeg mottar [Sted: Narvik v]
gå til x: (91) y: (90)
sett [Reis til v] til [Narvik]
vent til &lt;berører [Helikopter v]?&gt;
send melding [Fant sted v] og vent
send melding [Avslutt v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-11">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Kan du reise innom alle stedene?</p>
      </li>
      <li>
        <p>Virker stedene å være riktig plassert på kartet?</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p><em>Da er norgesturen vår ferdig!</em></p>
    <p>
      Du kan nå utfordre venner og familie til å reise rundt omkring i Norge
      sammen med deg! Hvis du vil dele spillet på internett kan du trykke
      <code>Legg ut</code> øverst til høyre på skjermen.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="flere-utfordringer">Flere utfordringer</h1>
  <p>
    <em
      >Det er alltid muligheter til å utvide spill, nedenfor har vi noen forslag
      som du kan prøve deg på!</em
    >
  </p>
  <section class="challenge">
    <h2 class="challenge" id="utfordring%3A-enda-flere-reisem%C3%A5l">
      Utfordring: Enda flere reisemål
    </h2>
    <p>
      Det er ingen begrensning på hvor mange reisemål du kan legge til i
      spillet. Har du reisemål fra alle deler av landet? Kanskje du kan besøke
      et sted i hvert fylke i Norge?
    </p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring%3A-en-skikkelig-avslutning">
      Utfordring: En skikkelig avslutning
    </h2>
    <p>
      Slik spillet er nå bare slutter helikopteret å fly enten når tiden er ute
      eller når spilleren har funnet alle reisemålene. Kan du legge til en
      skikkelig avslutning? Denne bør gi spilleren tilbakemelding på om hun vant
      ved å finne alle reisemålene eller tapte fordi tiden var ute.
    </p>
    <p>
      En måte å gjøre dette på vil være å lage to nye meldinger
      <code>Vant</code> og <code>Tapte</code> som sendes i stedet for
      <code>Avslutt</code> henholdsvis etter at siste reisemål er funnet, og
      etter at tiden er ute. Du kan så lage to nye bakgrunner ved å kopiere
      norgeskartet, og deretter skrive en passende tekst på de nye bakgrunnene.
      Disse kan så vises etter at spillet er enten vunnet eller tapt.
    </p>
  </section>
  <section class="challenge">
    <h2
      class="challenge"
      id="utfordring%3A-reisem%C3%A5l-i-tilfeldig-rekkef%C3%B8lge"
    >
      Utfordring: Reisemål i tilfeldig rekkefølge
    </h2>
    <p>
      Dette er en skikkelig utfordring! Slik det er nå kommer reisemålene alltid
      i samme rekkefølge, kan du gjøre det slik at rekkefølgen blir tilfeldig?
    </p>
    <p>
      Det finnes ingen måte å sende ut tilfeldige meldinger i Scratch. Det vi i
      stedet kan gjøre er å tilfeldig bestemme om vi skal be spilleren reise til
      et reisemål, eller bare gå videre til neste reisemål uten å spørre.
    </p>
    <ul>
      <li>
        <p>
          Nedenfor er noen hint om hvordan dette kan gjøres. Vær oppmerksom på
          at skriptene bruker noen variable du selv må lage.
        </p>
        <pre><code class="blocks">definer sjekk sted
hvis &lt;&lt;(tilfeldig tall fra (1) til (Antall steder totalt)) &gt; [1]&gt; eller &lt;berører fargen [#ff0000]?&gt;&gt;
    sett [bruk sted v] til [nei]
ellers
    sett [bruk sted v] til [ja]
slutt

når jeg mottar [Sted: Hønefoss v]
gå til x: (6) y: (-112)
sjekk sted
hvis &lt;(bruk sted) = [ja]&gt;
    sett [Reis til v] til [Hønefoss]
    vent til &lt;berører [Helikopter v]?&gt;
    send melding [Fant sted v] og vent
slutt
send melding [Sted: Tromsø v]
</code></pre>
        <p>
          Klossen <code class="blocksensing">berører fargen</code> brukes for å
          sjekke om vi allerede har besøkt et reisemål. I såfall vil vi jo ha
          stemplet rødfarge på kartet.
        </p>
      </li>
      <li>
        <p>
          Siden dette vil hoppe over reisemål, er det viktig at det siste
          reisemålet sender melding om at vi skal besøke det første reisemålet
          igjen, i stedet for at spillet avsluttes etter det siste reisemålet.
        </p>
      </li>
      <li>
        <p>
          Det blir også vanskeligere å vite når spilleren har funnet alle (eller
          mange nok) reisemål. En måte å gjøre dette på er å bruke en ny
          variabel, for eksempel
          <code class="blockdata">Antall steder funnet</code>, som teller hvor
          mange steder som er funnet. Når mange nok steder er funnet kan det
          sendes ut en <code>Avslutt</code>- (eller <code>Vant</code>-) melding.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="hvordan-lage-egne-kart">Hvordan lage egne kart</h1>
  <p>
    <em
      >Til sist vil vi se på hvordan du kan reise rundt i egne kart eller andre
      kart som du finner på internett.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-14">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Åpne nettleseren din og finn en søkemotor som for eksempel Google,
          Bing eller DuckDuckGo.
        </p>
      </li>
      <li>
        <p>
          Søk etter et kart du er interessert i, for eksempel
          <code>Europakart</code>. Velg å bare se bilderesultatene.
        </p>
      </li>
      <li>
        <p>
          Når du finner et kart du synes ser bra ut, klikk på det slik at du
          kommer til originalbildet. Deretter kan du prøve å høyreklikke på
          kartet, og velge Lagre bilde eller noe som ligner.
        </p>
      </li>
      <li>
        <p>
          Før du bruker kartet i et prosjekt du deler med andre, må du undersøke
          om du har rettigheter til å bruke kartet. Noen ganger vil det stå på
          nettsiden du fant kartet på at du kan bruke det (et eksempel på dette
          kan du se på
          <a href="http://no.wikipedia.org/wiki/Fil:EUR_location_NOR.PNG"
            >http://no.wikipedia.org/wiki/Fil:EUR_location_NOR.PNG</a
          >). Andre ganger må du ta kontakt med de som eier nettsiden (for
          eksempel ved å sende en e-post) for å undersøke om du kan bruke
          kartet. Se mer informasjon om opphavsrett nedenfor.
        </p>
      </li>
      <li>
        <p>
          Bakgrunner i Scratch skal helst ha oppløsningen 480 x 360
          bildepunkter. Som regel vil ikke kartene du finner på nettet ha denne
          oppløsningen. Det gjør som regel ingenting, fordi Scratch vil gjøre
          bildene mindre om de er for store. Om bildet er mindre enn 480 x 360
          vil Scratch fylle resten av bakgrunnen automatisk. Om du vil ha mer
          kontroll over denne konverteringen kan du endre oppløsningen selv i et
          bildebehandlingsprogram som for eksempel Paint, Gimp eller Photoshop
          (Elements).
        </p>
      </li>
      <li>
        <p>
          Les inn det nye kartet i Scratchprosjektet ditt på samme måte som du
          leste inn det opprinnelige norgeskartet i Steg 1, ved å velge
          <img
            src="lessons/norgestur/../bilder/hent-fra-fil.png"
            alt="Last opp bakgrunnfra fil"
          />
          under <code>Ny bakgrunn</code> helt til venstre på skjermen.
        </p>
      </li>
      <li>
        <p>Lag reisemål basert på det nye kartet!</p>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="opphavsrett">Opphavsrett</h2>
    <p>
      Noen har laget de kartene du finner på internett, og som regel vil de ha
      opphavsretten til disse kartene. I praksis betyr det at de eier kartene.
      Det betyr at dersom du vil bruke kartene i et spill du gjør tilgjengelig
      for andre (bruker <code>Legg ut</code>-knappen i Scratch), må du undersøke
      om dette er greit for de som har laget kartene.
    </p>
    <p>
      Mye materiell på internett, inkludert kartet vi har brukt i denne
      oppgaven, er lagt ut med en såkalt lisens som kan si at du kan bruke
      materiellet så lenge du referer til dem som opprinnelig lagde materiellet.
      Dette er lett å gjøre i Scratch. Klikk på
      <code>Se prosjektsiden</code> øverst til høyre. Du kommer da til en side
      hvor du kan beskrive prosjektet. En av boksene heter
      <code>Merknader og bidragsytere</code>. Her kan du nevne dem som
      opprinnelig har laget for eksempel kartet du bruker.
    </p>
  </section>
</section>
