<!-- generated from src/lessons/hvor_i_all_verden_del1/hvor_i_all_verden_del1.md -->

<svelte:head>
  <title>Hvor i All Verden? Del 1</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Hvor i All Verden? er et reise- og geografispill hvor man raskest mulig skal
    fly innom reisemål spredt rundt i Europa. I denne første leksjonen vil vi se
    på hvordan vi styrer figurer rundt omkring på skjermen, og hvordan vi får
    forskjellige figurer til å reagere på hverandre.
  </p>
  <p>
    I senere leksjoner vil vi utvide kartet vi flyr over ved å lage en bakgrunn
    som flytter seg. Vi vil også se på hvordan vi kan lage lister som holder
    oversikt over alle stedene vi kan besøke.
  </p>
  <figure>
    <img
      src="lessons/hvor_i_all_verden_del1/hvor_i_all_verden_1.png"
      alt="Illustrasjon av et enkelt Hvor-i-All-Verden spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-styr-et-helikopter">
    Steg 1: Styr et helikopter
  </h1>
  <p>
    <em
      >Vi begynner med å lage et lite program som gjør at vi kan styre et
      helikopter med piltastene.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Start et nytt Scratch-prosjekt. Slett kattefiguren, for eksempel ved å
          høyreklikke på den og velge <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          Legg til en ny figur ved å klikke
          <img
            src="lessons/hvor_i_all_verden_del1/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur frabiblioteket"
          />
          under <code>Figurer</code>. Vi har brukt
          <code>Transport/Helicopter</code>, men du kan gjerne bruke en annen
          figur å reise rundt med.
        </p>
      </li>
      <li>
        <p>
          Klikk <code class="blockmotion">i</code> og skift navn på figuren til
          <code>Helikopter</code>.
        </p>
      </li>
      <li>
        <p>
          Klikk på scenen til venstre for figurene, og lag det følgende
          skriptet:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
send melding [Nytt spill v]
</code></pre>
        <p>
          Vi skal diskutere hvorfor vi gjør dette i mer detalj senere. Kort sagt
          gir det oss mer fleksibilitet i forhold til hvordan vi starter og
          avslutter spillet.
        </p>
      </li>
      <li>
        <p>
          Klikk på helikopteret igjen. Klikk deretter
          <code class="blockdata">Data</code> og lag en variabel som heter
          <code class="blockdata">hastighet</code> og som gjelder for denne
          figuren.
        </p>
      </li>
      <li>
        <p>
          Deretter bygger vi noen klosser hvor vi bestemmer egenskaper ved
          helikopteret som ikke forandrer seg i løpet av spillet, for eksempel
          størrelsen og hastigheten.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
begrens rotasjon [vend sideveis v]
sett størrelse til (30) %
sett [hastighet v] til [5]
</code></pre>
        <p>
          Eksperimenter gjerne med andre verdier for disse klossene, slik at du
          finner de verdiene du mener er best for ditt spill!
        </p>
      </li>
      <li>
        <p>
          Nå skal vi lage en av de viktigste delene av spillet, nemlig hvordan
          helikopteret flytter seg rundt. Dette legger vi inn i en løkke som
          alltid kjører.
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
gå til x: (0) y: (0)
vis
gjenta for alltid
    hvis &lt;tast [pil høyre v] trykket?&gt;
        pek i retning (90 v)
        gå (hastighet) steg
    slutt
    hvis &lt;tast [pil venstre v] trykket?&gt;
        pek i retning (-90 v)
        gå (hastighet) steg
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
          Kan du bruke piltastene til å styre helikopteret rundt omkring? Vi har
          bare bestemt hva som skal skje når <code>pil høyre</code> og
          <code>pil venstre</code> trykkes. Prøv selv å legge inn kode for hva
          som skal skje når <code>pil opp</code> og
          <code>pil ned</code> trykkes.
        </p>
      </li>
      <li>
        <p>
          Hva gjør klossen
          <code class="blockmotion">begrens rotasjon vend sideveis</code>? Prøv
          å endre verdiene i nedtrekksmenyen for å se hva som skjer.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-et-enkelt-kart">Steg 2: Et enkelt kart</h1>
  <p>
    <em
      >Vi legger nå inn et kart som en bakgrunn. Dette vil vi i denne leksjonen
      bruke til å fly over. I senere leksjoner vil vi også lære hvordan vi kan
      få dette bakgrunnskartet til å bevege seg.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi vil først laste ned kartet fra nettet. Åpne lenken
          <a href="lessons/hvor_i_all_verden_del1/europakart.png"
            >europakart.png</a
          >
          i en ny fane i nettleseren din. Dette vil åpne et bilde av et
          europakart. Høyreklikk på bildet, og velg
          <code>Lagre bildet som</code> eller noe som ligner. Lagre bildet et
          sted du finner det igjen.
        </p>
      </li>
      <li>
        <p>
          Velg
          <img
            src="lessons/hvor_i_all_verden_del1/../bilder/hent-fra-fil.png"
            alt="Last opp bakgrunn fra fil"
          />
          under <code>Ny bakgrunn</code> helt til venstre på skjermen. Velg
          filen <code>europakart.png</code> du nettopp lastet ned.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        Ser det ut som om helikopteret flyr rundt i Europa? Prøv gjerne å
        eksperimentere mer med egenskapene til helikopteret: størrelse,
        hastighet og så videre.
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-legg-til-et-reisem%C3%A5l">
    Steg 3: Legg til et reisemål
  </h1>
  <p><em>Vi skal nå gi helikopteret et mål det kan fly til.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi begynner med å tegne en liten figur som kan markere reisemålet i
          kartet. Velg
          <img
            src="lessons/hvor_i_all_verden_del1/../bilder/tegn-ny.png"
            alt="Tegn ny figur"
          />
          under <code>Figurer</code>.
        </p>
      </li>
      <li>
        <p>
          Velg en passende farge. For eksempel vil rød synes ganske godt på
          kartet. Velg deretter sirkeverktøyet, og marker den fyllte sirkelen
          (ellipsen) til venstre under tegnevinduet.
        </p>
      </li>
      <li>
        <p>
          Før du begynner å tegne kan du forstørre tegningen din ved å trykke på
          forstørrelsesglasset nederst til høyre. For eksempel vil 800%
          forstørrelse passe bra. Hold inne <code>skift</code>-knappen mens du
          drar ut en sirkel som er omtrent fire ruter stor.
          <code>skift</code>-knappen hjelper deg til å lage en helt rund sirkel.
        </p>
        <figure>
          <img
            src="lessons/hvor_i_all_verden_del1/sirkel.png"
            alt="Bilde av helt rund rød sirkel"
          />
        </figure>
      </li>
      <li>
        <p>Gi denne nye figuren navnet <code>Sted</code>.</p>
      </li>
      <li>
        <p>
          Dra denne nye sted-figuren til et sted på kartet du vil at skal være
          reisemålet. Vi har brukt <code>Barcelona</code> her, men du kan velge
          et annet sted om du vil.
        </p>
      </li>
      <li>
        <p>
          Vi trenger nå posisjonen til sted-figuren vår. Denne finner vi enklest
          ved å se på figurinformasjonen etter tallene som står bak
          <code>x</code> og <code>y</code>. Disse tallene kalles koordinater. I
          eksempelet under er koordinatene <code>x: -98</code> og
          <code>y: -120</code>. Koordinatene forteller hvor på kartet vi har
          lagt reisemålet vårt.
        </p>
        <figure>
          <img
            src="lessons/hvor_i_all_verden_del1/reisemaal.png"
            alt="Bilde av x- og y koordinatene i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Vi lager nå litt kode som passer på at reisemålet ligger riktig
          plassert på kartet, og som sier i fra hvis vi finner veien til
          Barcelona.
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
send melding [Nytt sted v]

når jeg mottar [Nytt sted v]
gå til x: (-98) y: (-120)
vent til &lt;berører [Helikopter v]?&gt;
si [Fant Barcelona!] i (2) sekunder
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Ligger den røde sirkelen der den skal være?</p>
      </li>
      <li>
        <p>Hva skjer om du styrer helikopteret til den røde sirkelen?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-skjul-reisem%C3%A5let">
    Steg 4: Skjul reisemålet
  </h1>
  <p>
    <em
      >Dette er så langt et veldig enkelt spill, siden spilleren bare trenger å
      fly til den røde sirkelen. For å gjøre det litt vanskeligere vil vi nå
      skjule sirkelen, og heller bare fortelle spilleren hvilken by hun skal fly
      til!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          En måte å gi beskjed til spilleren på, er ved å bruke variabler. Lag
          en ny variabel som du kaller <code class="blockdata">Reis til</code>.
          La denne variabelen gjelde <em>for alle figurer</em>.
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
          Oppdater skriptet til <strong>Sted</strong> slik at
          <code class="blockdata">Reis til</code>-variabelen blir satt til
          <code>Barcelona</code> rett etter
          <code class="blockmotion">gå til</code>-klossen.
        </p>
      </li>
    </ul>
    <p>
      Vi vil nå skjule den røde sirkelen. La oss først prøve det enkleste og
      mest opplagte:
    </p>
    <ul>
      <li>
        Legg til en <code class="blocklooks">skjul</code>-kloss etter
        <code class="blockevents">når jeg mottar Nytt spill</code>.
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Blir den røde sirkelen borte?</p>
      </li>
      <li>
        <p>Hva skjer om du reiser til Barcelona?</p>
      </li>
    </ul>
    <p>
      Hmm ... spillet oppdager ikke lengre at vi reiser til Barcelona. Problemet
      er at siden vi skjuler sirkelen vil den ikke lengre berøre
      <strong>Helikopter</strong>. Vi må finne en annen måte å gjøre sirkelen
      usynlig på!
    </p>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          I stedet for å skjule sirkelen helt vil vi heller gjøre den
          gjennomsiktig. Bytt ut <code class="blocklooks">skjul</code>-klossen
          med en <code class="blocklooks">sett effekt</code>-kloss:
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
vis
sett [gjennomsiktig v] effekt til (100)
send melding [Nytt sted v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Er den røde sirkelen fortsatt borte?</p>
      </li>
      <li>
        <p>Hva skjer nå om du flyr til Barcelona?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-vis-reisem%C3%A5let-igjen">
    Steg 5: Vis reisemålet igjen
  </h1>
  <p>
    <em
      >Det vil være kult å faktisk vise hvor reisemålet er etter at det er
      funnet.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          La oss lage en liten animasjon når spilleren flyr til Barcelona. Først
          må vi vise den røde sirkelen igjen. Det gjør vi ved å sette
          gjennomsiktig effekt til 0 etter at sirkelen berører
          <strong>Helikopter</strong>.
        </p>
      </li>
      <li>
        <p>Animasjonen kan vi for eksempel lage med den følgende koden:</p>
        <pre><code class="blocks">gjenta (5) ganger
    gjenta (10) ganger
        endre størrelse med (10)
    slutt
    gjenta (10) ganger
        endre størrelse med (-10)
    slutt
slutt
</code></pre>
        <p>Hvor må du legge denne koden for at du skal se animasjonen?</p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Vises den røde sirkelen etter at du har flydd til Barcelona?</p>
      </li>
      <li>
        <p>Animeres sirkelen etter at den er funnet?</p>
      </li>
      <li>
        <p>Hva skjer med snakkeboblen <code>Fant Barcelona!</code>?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <p>
      Det vil kanskje se bedre ut om sirkelen sier
      <code>Fant Barcelona!</code> samtidig som vi animerer? For å få til dette
      må vi bruke <code class="blocklooks">si</code>-klossen i stedet for
      <code class="blocklooks">si i 2 sekunder</code>, fordi den sistnevnte lar
      hele skriptet vente i 2 sekunder.
    </p>
    <ul>
      <li>
        <p>Legg til klossen</p>
        <pre><code class="blocks">si [Fant Barcelona!]
</code></pre>
        <p>
          rett før den ytre <code class="blockcontrol">gjenta</code>-løkken.
        </p>
      </li>
      <li>
        <p>
          For at sirkelen skal slutte å si <code>Fant Barcelona!</code> etter at
          animasjonen er slutt må du legge klossen
        </p>
        <pre><code class="blocks">si [ ]
</code></pre>
        <p>til slutt i skriptet ditt.</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="neste-gang">Neste gang</h1>
  <p>
    Vi har nå kommet i gang med en enkel utgave av spillet vårt. Neste gang skal
    vi se på hvordan vi kan lage et større kart ved å få bakgrunnen til å flytte
    på seg. Vi skal også gjøre spillet vanskeligere ved å legge til flere
    reisemål.
  </p>
  <section class="challenge">
    <h2 class="challenge" id="pr%C3%B8v-selv">Prøv selv</h2>
    <ul>
      <li>
        <p>
          Tenk over hvordan du kan legge til flere reisemål! Prøv å lage kode
          som gjør dette!
        </p>
      </li>
      <li>
        <p>
          For å gjøre spillet litt mer spennende kan vi følge med på hvor lang
          tid spilleren bruker på å fly til reisemålet. Se om du klarer å lage
          et skript som gjør dette! Et hint er at du kan lage en ny variabel,
          f.eks. <code class="blockdata">Tid</code>, og et skript som går i
          løkke og endrer <code class="blockdata">Tid</code> med 1 for deretter
          å vente 1 sekund.
        </p>
      </li>
    </ul>
  </section>
</section>
