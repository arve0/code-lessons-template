<!-- generated from src/lessons/kingkong/kingkong.md -->

<svelte:head>
  <title>King Kong</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I dette spillet inspirert av historien om King Kong, skal vi se hvor lett
    det er å bruke grafikk som ikke allerede ligger i Scratch-biblioteket. I
    spillet styrer vi King Kong som må passe seg for flyene som angriper ham.
  </p>
  <figure>
    <img
      src="lessons/kingkong/kingkong.png"
      alt="Bilde av King Kong som passer seg for fly"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-hente-grafikk-fra-nettet">
    Steg 1: Hente grafikk fra nettet
  </h1>
  <p>
    Vi skal først se på hvordan vi kan hente bilder og figurer fra nettet og
    bruke dem i våre egne spill. Til dette spillet trenger vi en skyskraper, et
    fly og en gorilla.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Åpne en ny fane i nettleseren din og gjør et søk, for eksempel etter
          <code>skyscraper icon</code>. Velg gjerne <em>Bildesøk</em> eller
          lignende for å bare se søkeresultatene som er bilder.
        </p>
        <p>
          Finn en skyskraper som du liker. Velg deretter <em>Se bildet</em> for
          å få bildet i full størrelse. Høyreklikk på bildet og velg
          <em>Lagre bildet som</em> og lagre det på din datamaskin et sted du
          finner det igjen.
        </p>
      </li>
    </ul>
    <section class="protip">
      <h3 class="protip" id="tips-for-s%C3%B8king">Tips for søking</h3>
      <ul>
        <li>
          <p>
            Når du søker etter bilder er det best å søke på engelsk fordi det er
            det mest brukte språket på internett.
          </p>
        </li>
        <li>
          <p>
            For å finne grafikk i stedet for bilder kan det være lurt å ta med
            ord som <code>icon</code>, <code>pixel</code> eller
            <code>drawing</code> i søket ditt.
          </p>
        </li>
        <li>
          <p>
            De fleste søkemotorene har også muligheten for å gjøre
            <em>avansert bildesøk</em>. Da kan du som regel begrense søket til å
            bare lete etter tegninger eller tilsvarende.
          </p>
        </li>
      </ul>
    </section>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>Søk også opp figurer for fly og King Kong.</p>
        <p>Her er noen eksempler, men bruk gjerne bilder du finner selv:</p>
        <figure>
          <img
            src="lessons/kingkong/eksempel.png"
            alt="Bilde av en skyskraper, et fly og King Kong"
          />
        </figure>
        <p>
          Skyskraper fra
          <a
            href="http://www.iconarchive.com/show/home-sweet-home-icons-by-iconka/Home-Skyscraper-icon.html"
            >www.iconka.com</a
          >, fly fra
          <a
            href="http://hellraz3r.deviantart.com/art/Plane-Pixel-Art-193480982"
            >hellraz3r.deviantart.com</a
          >
          og King Kong fra
          <a
            href="http://www.flaticon.com/free-icon/small-monkey-with-long-tail_28726"
            >www.freepik.com</a
          >.
        </p>
      </li>
      <li>
        <p>
          Etter at du har lastet ned bildene fra nettet er det på tide å ta dem
          inn som nye figurer i Scratch. Gå tilbake til Scratch. Klikk på
          <img
            src="lessons/kingkong/../bilder/hent-fra-fil.png"
            alt="Last opp figurfra fil"
          />
          ved siden av <strong>Ny figur</strong> og velg et av bildene du har
          lastet ned. Gjør det samme med de andre bildene, slik at du har tre
          figurer, en skyskraper, et fly og en King Kong-figur.
        </p>
      </li>
      <li>
        <p>
          Figurene får navn fra bildefilene. Endre gjerne navnet på figurene i
          figurlisten til <code>skyskraper</code>, <code>fly</code> og
          <code>kong</code> slik at det blir enklere å holde oversikten.
        </p>
      </li>
    </ul>
    <section class="protip">
      <h3 class="protip" id="hvilke-bilder-kan-du-bruke%3F">
        Hvilke bilder kan du bruke?
      </h3>
      <p>
        Når du henter bilder fra nettet bør du sjekke at du har tillatelse til å
        bruke dem. Selv om bilder ligger på Internett betyr ikke det at du kan
        kopiere dem og bruke de som du selv vil!
      </p>
      <p>
        Mange bilder har en <em>lisens</em> som sier at andre kan bruke dem.
        Dette står ofte på nettsiden i nærheten av bildet (på samme måte som det
        står Lisens nederst i denne oppgaven). Vanligvis vil de som eier bildet
        at du forteller at du har kopiert bildet fra dem. Dette er veldig lett i
        Scratch, da man kan skrive hvor bildene kommer fra på Prosjektsiden
        under <em>Merknader og Bidragsytere</em>.
      </p>
    </section>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-tegn-litt-selv">Steg 2: Tegn litt selv</h1>
  <p>Like morsomt som å finne bilder på nettet er det å tegne litt selv.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          La oss først tegne en enkel bakgrunn. Klikk på
          <img
            src="lessons/kingkong/../bilder/tegn-ny.png"
            alt="Tegn nybakgrunn"
          />
          ved <strong>Ny bakgrunn</strong> nederst til venstre.
        </p>
      </li>
      <li>
        <p>
          Velg Malingsbøtte-verktøyet (<em>Fyll med farge</em>) for å fargelegge
          bakgrunnen. Finn et par fine himmelfarger, for eksempel en overgang
          fra blå øverst til noe lysere nederst. Klikk på bakgrunnen slik at den
          blir fargelagt.
        </p>
        <figure>
          <img
            src="lessons/kingkong/tegn_bakgrunn.png"
            alt="Bilde av malingsbøtte-verktøyet"
          />
        </figure>
      </li>
      <li>
        <p>
          For en litt enkel gresseffekt skal vi nå velge
          <em>Rektangel</em>-verktøyet, og en helt svart farge. Tegn et svart
          rektangel på den nederste delen av bakgrunnen.
        </p>
      </li>
      <li>
        <p>
          Velg så en ganske lys grønn farge og tegn et grønt rektangel som
          dekker det meste av det svarte rektangelet, slik at det blir en svart
          strek mellom gresset og himmelen.
        </p>
        <figure>
          <img
            src="lessons/kingkong/gronn_bakgrunn.png"
            alt="Viser en grønn bakgrunn, et svart skille og blå himmel"
          />
        </figure>
      </li>
      <li>
        <p>
          Velg deretter en litt mørkere grønn farge, og tegn et nytt grønt
          rektangel som dekker den nedre delen av det forrige rektangelet.
          Gjenta dette med stadig mørkere grønnfarger til du har et passende
          antall striper som forestiller gresset. Se
          <a href="lessons/kingkong/kingkong#introduksjon">øverst i oppgaven</a>
          for et ferdig eksempel.
        </p>
      </li>
      <li>
        <p>
          Du kan også tegne litt på figurene du har lastet ned. For eksempel, om
          du lastet ned skyskraperen fra lenken over er den gjennomsiktig! Det
          ser litt rart ut. Det blir bedre om du velger en farge og fargelegger
          skyskraperen!
        </p>
      </li>
    </ul>
    <p>
      Til spillet vårt vil vi behøve to drakter til <strong>King Kong</strong>.
      En drakt der han står på venstre side av skyskraperen og en der han står
      på høyre side.
    </p>
    <ul>
      <li>
        <p>
          Klikk på <code>kong</code>-figuren og velg <code>Drakter</code>-fanen.
          Høyreklikk på <code>kong</code>-drakten og velg
          <code>Lag en kopi</code>.
        </p>
      </li>
      <li>
        <p>
          Klikk på kopien og bruk knappen
          <img
            src="lessons/kingkong/../bilder/speilvend.png"
            alt="speilvend"
            title="Speilvend høyre-venstre"
          />
          i øverste høyre hjørne til å speilvende denne nye drakten.
        </p>
      </li>
      <li>
        <p>
          Gi de to draktene navnene <code>Høyre</code> og <code>Venstre</code>.
        </p>
      </li>
    </ul>
    <section class="protip">
      <h3 class="protip" id="utforsk-tegneverkt%C3%B8yene">
        Utforsk tegneverktøyene
      </h3>
      <p>
        Prøv gjerne de forskjellige tegneverktøyene på egen hånd. Vet du hva
        alle gjør?
      </p>
      <p>
        Legg merke til at nede i høyre hjørnet velger du mellom å jobbe med
        <em>pikselgrafikk</em> og <em>vektorgrafikk</em>. I pikselgrafikk jobber
        vi med nettopp pikslene (hvert punkt bildet består av kalles en piksel)
        i bildet. Typisk vil du gjøre dette med bilder du laster ned fra nettet.
        Med vektorgrafikk kan vi jobbe med direkte med linjer og former. Mange
        av figurene i Scratchbiblioteket bruker dette, og det er ofte bedre når
        vi skal tegne selv.
      </p>
    </section>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-king-kong-flytter-seg">
    Steg 3: King Kong flytter seg
  </h1>
  <p>
    Nå har vi tatt inn grafikken vi trenger. Det er på tide å begynne å
    programmere!
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          La oss begynne med <code>skyskraper</code>-figuren. Denne er ganske
          enkel. Vi vil bare passe på at den står i ro midt på skjermen i en
          passende størrelse. Det kan vi gjøre med et skript som ligner dette:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett størrelse til (200) %
legg [foran alt v]
gå til x: (0) y: (-50)
</code></pre>
        <p>
          Du må eksperimentere litt med tallene slik at de passer til din
          skyskrapergrafikk.
        </p>
      </li>
      <li>
        <p>
          Neste steg er <strong>King Kong</strong>. Vi vil at han skal stå på
          skyskraperen, og at vi kan flytte ham fra høyre til venstre side og
          tilbake igjen med piltastene. Dette er heller ikke så veldig
          vanskelig. Du må sikkert forandre litt på tallene, men et lite skript
          som ser omtrent slik ut gjør jobben:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (-45) y: (30)
bytt drakt til [venstre v]
gjenta for alltid
    hvis &lt;tast [pil venstre v] trykket?&gt;
        gli (0.2) sekunder til x: (-45) y: (30)
        bytt drakt til [venstre v]
    slutt
    hvis &lt;tast [pil høyre v] trykket?&gt;
        gli (0.2) sekunder til x: (45) y: (30)
        bytt drakt til [høyre v]
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
          Er <code>kong</code> og skyskraperen bra plassert i forhold til
          hverandre?
        </p>
      </li>
      <li>
        <p>
          Flytter <strong>King Kong</strong> seg slik han skal når du trykker på
          piltastene?
        </p>
      </li>
    </ul>
    <p>Endre på figurene og skriptene slik at det ser bra ut!</p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-flyene-flyr">Steg 4: Flyene flyr</h1>
  <p>
    Nå skal vi kopiere flyet vårt slik at vi har mange fly som flyr rundt
    skyskraperen.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          For å kopiere det ene flyet skal vi bruke det som kalles kloning for å
          lage nye fly med ujevne mellomrom. Lag først et skript som stadig
          lager nye fly:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
begrens rotasjon [vend sideveis v]
gjenta for alltid
    vent (tilfeldig tall fra (0.5) til (4)) sekunder
    lag klon av [meg v]
slutt
</code></pre>
      </li>
      <li>
        <p>
          Om du kjører spillet ditt skjer det ikke noe spennende enda, fordi vi
          ikke har sagt hva alle flyklonene skal gjøre. La oss begynne med å la
          dem fly skrått over skjermen:
        </p>
        <pre><code class="blocks">når jeg starter som klon
pek i retning (45 v)
gå til x: (-280) y: (-140)
vis
gjenta til &lt;(y-posisjon) &gt; [190]&gt;
    gå (10) steg
slutt
slett denne klonen
</code></pre>
      </li>
      <li>
        <p>
          Igjen må du justere tallene slik at de passer for deg. Vi vil at flyet
          skal fly slik at det kommer borti <code>kong</code> om han står på
          venstre side av skyskraperen, men vi vil ikke at flyet krasjer i
          skyskraperen selv (se bildet
          <a href="lessons/kingkong/kingkong#introduksjon">øverst i oppgaven</a
          >).
        </p>
      </li>
      <li>
        <p>
          Om du vil kan du klikke på <code>drakter</code> og rotere flyet litt
          slik at det flyr i riktig retning.
        </p>
        <figure>
          <img
            src="lessons/kingkong/roter_fly.png"
            alt="Bilde av fly som er rotert i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Vi kan også få flyene til å komme fra begge retninger! Ved å bruke et
          tilfeldig tall kan vi bestemme om flyet kommer fra høyre eller
          venstre. Endre koden din slik at den blir som følger:
        </p>
        <pre><code class="blocks">når jeg starter som klon
hvis &lt;(tilfeldig tall fra (1) til (2)) = [1]&gt;
    pek i retning (45 v)
    gå til x: (-280) y: (-140)
ellers
    pek i retning (-45 v)
    gå til x: (280) y: (-140)
slutt
vis
gjenta til &lt;(y-posisjon) &gt; [190]&gt;
    gå (10) steg
slutt
slett denne klonen
</code></pre>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-king-kong-m%C3%A5-passe-seg">
    Steg 5: King Kong må passe seg
  </h1>
  <p>
    Oppgaven til <strong>King Kong</strong> er å passe seg slik at han ikke blir
    truffet av flyene.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          For at <code>kong</code> skal merke at han blir truffet av flyene
          lager vi et nytt skript på ham. Et enkelt utgangspunkt kan være:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    vent til &lt;berører [fly v] ?&gt;
    endre [farge v] effekt med (25)
    vent (0.5) sekunder
    fjern grafiske effekter
slutt
</code></pre>
        <p>
          Her venter vi 0.5 sekunder både for at fargeeffekten skal synes og for
          at da har flyet passert slik at ikke King Kong blir truffet flere
          ganger av det samme flyet.
        </p>
      </li>
    </ul>
    <p>
      Vi har nå laget et ganske enkelt spill. Men det er flere ting du kan prøve
      på egen hånd! Nedenfor er noen forslag, men du har kanskje egne ideer til
      hvordan spillet kan videreutvikles?
    </p>
    <section class="challenge">
      <h3 class="challenge" id="pr%C3%B8v-selv">Prøv selv</h3>
      <ul>
        <li>
          <p>
            Legg til lydeffekter! Kanskje litt motorlyd fra flyene, og så klart
            trenger vi en lyd når King Kong blir truffet av flyene.
          </p>
        </li>
        <li>
          <p>Tell poeng! Kanskje du kan få poeng for hvert fly som passerer?</p>
        </li>
        <li>
          <p>
            Tell liv! King Kong kan ikke bli truffet av flyene
            <code class="blockcontrol">for alltid</code>. Legg til en
            <code class="blockdata">liv</code>-variabel som teller hvor mange
            liv du har igjen. Kanskje <code>kong</code> ramler ned fra
            skyskraperen når han er tom for liv?
          </p>
        </li>
        <li>
          <p>
            Kan du utvide spillet? Kanskje kommer det fly i flere retninger og
            King Kong må dukke eller hoppe for å unngå dem? Kanskje King Kong
            kan fange flyene på en eller annen måte og få poeng for det?
          </p>
        </li>
        <li>
          <p>
            Kan du gjøre spillet vanskeligere etterhvert? For eksempel kan
            flyene komme raskere etterhvert som du får flere poeng?
          </p>
        </li>
      </ul>
    </section>
  </section>
</section>
