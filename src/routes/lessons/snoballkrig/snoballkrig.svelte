<!-- generated from src/lessons/snoballkrig/snoballkrig.md -->

<svelte:head>
  <title>Snøballkrig</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I denne oppgaven vil vi lage et spill hvor det er om å gjøre å jage bort de
    slemme guttene ved å kaste snøball på dem. Underveis vil vi lære hvordan vi
    kan gjøre et spill mer utfordrende etterhvert ved at figurene vi spiller mot
    blir raskere og vanskeligere å jage bort.
  </p>
  <figure>
    <img
      src="lessons/snoballkrig/snoballkrig.png"
      alt="Illustrasjon av et ferdig snøballkrig spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-en-sn%C3%B8ballkaster">
    Steg 1: En snøballkaster
  </h1>
  <p>
    <em
      >Vi begynner med å lage oss en passelig bakgrunn, samt snøballkasteren som
      vi skal styre.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt prosjekt. Slett kattefiguren.</p>
      </li>
      <li>
        <p>
          La oss lage en bakgrunn. Til dette spillet trenger vi en ganske enkel
          bakgrunn med litt vinterfølelse. Den kan vi tegne selv:
        </p>
        <p>
          Velg
          <img
            src="lessons/snoballkrig/../bilder/tegn-ny.png"
            alt="Tegn ny bakgrunn"
          />
          for å tegne en ny bakgrunn. Pass på at du bruker vektorgrafikk, og
          tegn en stor firkant som dekker hele bakgrunnen. Velg så en mørkeblå
          forgrunnsfarge og en lysere bakgrunnsfarge. Klikk på malingsspannet
          for å fylle firkanten med farge, og velg en overgang nederst til
          venstre. Klikk på bakgrunnen for å fylle den med farge.
        </p>
        <p>
          Velg nå hvit som forgrunnsfarge, og lag en litt mindre boks som dekker
          nedre del av bakgrunnen. Fyll også denne med passende farger.
        </p>
        <figure>
          <img
            src="lessons/snoballkrig/bakgrunn.png"
            alt="Bilde av en mulig snøballkrig bakgrunn"
          />
        </figure>
        <p>Kall bakgrunnen for <code>Spill</code>.</p>
      </li>
      <li>
        <p>Legg følgende lille skript på scenen:</p>
        <pre><code class="blocks">når @greenFlag klikkes
send melding [start v]
</code></pre>
        <p>
          Du har kanskje sett dette trikset tidligere. Dette gjør det enklere
          for oss å senere komme tilbake og legge på en startmeny og lignende.
        </p>
      </li>
      <li>
        <p>
          Neste steg er å finne en passende figur som vi kan styre rundt og
          kaste snøballer med. Vi har brukt snømannen,
          <code>Fantasi/Snowman</code>, men du kan bruke en figur du liker. Gi
          figuren navnet <code>Helten</code>.
        </p>
      </li>
      <li>
        <p>
          Lag en ny variabel, <code class="blockdata">hastighet</code>, som
          gjelder kun for denne figuren, og lag dette skriptet:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett størrelse til (75) %
begrens rotasjon [vend sideveis v]
sett [hastighet v] til [5]
</code></pre>
        <p>
          På det grønne flagget legger vi innstillinger som skal gjelde for
          <code>Helten</code> gjennom hele spillet. Endre gjerne på størrelsen
          og hastigheten etterhvert som du tester spillet, slik at du finner
          innstillinger du liker.
        </p>
      </li>
      <li>
        <p>
          Nå kan vi lage selve hovedløkken til <code>Helten</code>. Lag først en
          løkke som starter på meldingen <code>start</code>:
        </p>
        <pre><code class="blocks">når jeg mottar [start v]
gå til x: (0) y: (-75)
gjenta for alltid
slutt
</code></pre>
      </li>
      <li>
        <p>
          Inne i løkken trenger vi to
          <code class="blockcontrol">hvis</code>-klosser som flytter
          <code>Helten</code> <code class="blockdata">hastighet</code> steg mot
          høyre eller venstre når piltastene høyre og venstre er trykket. Lag
          disse selv.
        </p>
      </li>
      <li>
        <p>
          Til slutt lager du en <code class="blockcontrol">hvis</code>-kloss
          hvor du sender ut meldingen <code>kast</code> når mellomrom-tasten
          trykkes.
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
          Beveger figuren din seg rundt på scenen når du trykker høyre og
          venstre piltast? Det skal foreløbig ikke skje noe når du trykker
          mellomrom, siden ingen figurer svarer på <code>kast</code>-meldingen.
        </p>
      </li>
      <li>
        <p>
          Du må sannsynligvis endre litt på <code>y</code>-posisjonen figuren
          din starter på, slik at det ser naturlig ut i forhold til bakgrunnen.
        </p>
      </li>
      <li>
        <p>
          Hvis du har en figur med flere drakter kan du også bruke
          <code class="blocklooks">neste drakt</code>-klosser for å animere
          figuren din slik at den beveger seg mer naturlig.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-mange-sn%C3%B8baller">
    Steg 2: Mange snøballer
  </h1>
  <p>
    <em
      >Det blir ingen snøballkrig uten snøballer. La oss lage kjempemange av
      dem! Med kram snø!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Tegn en ny figur. Bruk sirkelverkøyet til å tegne en liten hvit
          sirkel, fargelegg den deretter slik at den blir helt hvit. Trykk på
          <img
            src="lessons/snoballkrig/../bilder/velg_senterpunkt.png"
            alt="Velgsenterpunkt"
          />
          og pass på at senterpunktet er satt midt på snøballen. Kall figuren
          <code>Snøball</code>.
        </p>
      </li>
      <li>
        <p>
          På samme måte som for <code>Helten</code> setter vi først opp noen
          standardinnstillinger for snøballen. Lag en variabel
          <code class="blockdata">hastighet</code> som kun gjelder for denne
          figuren:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
sett størrelse til (40) %
sett [hastighet v] til [10]
</code></pre>
      </li>
      <li>
        <p>
          Vi bruker <code class="blocklooks">skjul</code> fordi vi vil lage
          kloner (kopier) av denne snøballen som vi kaster av gårde. Dette er et
          veldig nyttig triks i Scratch. Selve koden som reagerer på
          <code>kast</code>-meldingen er veldig enkel.
        </p>
        <pre><code class="blocks">når jeg mottar [kast v]
lag klon av [meg v]
</code></pre>
      </li>
      <li>
        <p>
          Selve oppførselen til hver enkelt snøball programmerer vi så på en
          <code class="blockcontrol">når jeg starter som klon</code>-kloss.
        </p>
        <pre><code class="blocks">når jeg starter som klon
gå til [Helten v]
pek i retning ([retning v] av [Helten v])
vis
gjenta til &lt;berører [kant v]&gt;
    gå (hastighet) steg
slutt
slett denne klonen
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
          Hva skjer når du trykker mellomrom-tasten? Kastes det snøballer i
          riktig retning?
        </p>
      </li>
      <li>
        <p>
          Det ser kanskje ikke ut som om <code>Helten</code> kaster snøballene
          med hendene? Du kan legge på noen
          <code class="blockmotion">Bevegelse</code>-klosser rett før du
          <code class="blocklooks">vis</code>er snøballen for at det skal se
          bedre ut.
        </p>
      </li>
      <li>
        <p>
          Som en liten utfordring kan du også prøve å legge på litt effekt av
          tyngdekraften på snøballen ved å endre litt på <code>y</code> mens
          snøballen flyr.
        </p>
      </li>
      <li>
        <p>
          Et lite problem er at <code>Helten</code> vår er <em>for</em> flink
          til å kaste snøball! Hver gang vi trykker mellomrom blir det kastet
          mange snøballer. Dette kan vi løse ganske enkelt ved å vente til
          mellomrom-tasten er sluppet før vi kaster snøballen. Legg til
        </p>
        <pre><code class="blocks">vent til &lt;ikke &lt;tast [mellomrom v] trykket?&gt;&gt;
</code></pre>
        <p>
          på <code>Helten</code>-figuren før <code>kast</code>-meldingen sendes.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-slemme-gutter">Steg 3: Slemme gutter</h1>
  <p>
    <em
      >Nå skal vi se hvordan vi kan lage slemme gutter som prøver å ta oss. La
      oss jage dem bort med snøballer.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny figur. Vi har brukt <code>Mennesker/Boy3 walking</code>, men
          du kan bruke den figuren du liker. Kanskje det er morsommere å ha
          snøballkrig mot et monster? Kall figuren <code>Skumling</code>.
        </p>
      </li>
      <li>
        <p>
          På samme måte som for snøballene vil vi lage kloner av
          <code>Skumling</code>. Men først bestemmer vi hvordan han skal se ut.
          Lag igjen en variabel <code class="blockdata">hastighet</code> som
          gjelder kun for denne figuren. Deretter,
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
gå til x: (0) y: (-70)
begrens rotasjon [vend sideveis v]
sett størrelse til (30) %
sett [hastighet v] til [3]
</code></pre>
      </li>
      <li>
        <p>
          Vi vil la klonene dukke opp med litt tilfeldig mellomrom, og fra begge
          sider av skjermen.
        </p>
        <pre><code class="blocks">når jeg mottar [start v]
gjenta for alltid
    hvis &lt;(tilfeldig tall fra (0) til (1)) = [0]&gt;
        pek i retning (90 v)
        sett x til (-250)
    ellers
        pek i retning (-90 v)
        sett x til (250)
    slutt
    lag klon av [meg v]
    vent (tilfeldig tall fra (2) til (4)) sekunder
slutt
</code></pre>
      </li>
      <li>
        <p>
          På samme måte som for snøballene må vi også bestemme oppførselen til
          hver enkelt <code>Skumling</code>.
        </p>
        <p>
          Lag først en
          <code class="blockcontrol">når jeg starter som klon</code>-kloss hvor
          du først viser figuren, og deretter lager en
          <code class="blockcontrol">gjenta for alltid</code>-løkke hvor figuren
          beveger seg <code class="blockdata">hastighet</code> steg og deretter
          venter et lite øyeblikk, for eksempel 0.1 sekunder.
        </p>
      </li>
      <li>
        <p>
          Deretter lager vi en <em>ny</em>
          <code class="blockcontrol">når jeg starter som klon</code>-kloss hvor
          vi undersøker om vi treffer enten en <strong>snøball</strong> eller
          <code>Helten</code>.
        </p>
        <pre><code class="blocks">når jeg starter som klon
gjenta for alltid
    hvis &lt;berører [Helten v]?&gt;
        send melding [slutt v]
        slett denne klonen
    slutt
    hvis &lt;berører [Snøball v]?&gt;
        slett denne klonen
    slutt
slutt
</code></pre>
        <p>
          Grunnen til at disse må ligge i et eget skript er at det første
          skriptet venter litt mellom hver gang figuren tar et steg. Hadde vi
          lagt disse <code class="blockcontrol">hvis</code>-klossene på det
          skriptet ville vi bare sjekket om <strong>Skumlingen</strong> var
          truffet av en snøball innimellom ventingen. Ved å lage et eget skript
          sjekker vi dette hele tiden.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          Dukker det opp skumlinger? Kommer de fra begge sider? Går de mot
          midten?
        </p>
      </li>
      <li>
        <p>
          Hva skjer når en <code>Skumling</code> blir truffet av en
          <strong>Snøball</strong>? Du kan kanskje legge på en passende
          lydeffekt og animasjon før klonen slettes? Vi ser også at snøballen
          flyr videre etter at den har truffet en <code>Skumling</code>. Prøv å
          endre i skriptet for <strong>Snøball</strong> slik at snøballen også
          blir borte.
        </p>
      </li>
      <li>
        <p>Hva skjer når en <code>Skumling</code> tar <code>Helten</code>?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-telle-poeng-og-avslutte-spillet">
    Steg 4: Telle poeng og avslutte spillet
  </h1>
  <p><em>Nå som vi nesten har et ferdig spill, vil vi også ha poeng!</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Å telle poeng er ganske lett. Lag først en variabel som heter
          <code class="blockdata">Poeng</code> og la den gjelde for alle
          figurer. La variabelen også vises på scenen, slik at vi ser hvor mange
          poeng vi har fått.
        </p>
      </li>
      <li>
        <p>
          Pass på at <code class="blockdata">Poeng</code> blir satt til 0 når
          meldingen <code>start</code> sendes, for eksempel med et skript på
          scenen.
        </p>
      </li>
      <li>
        <p>
          Endre <code class="blockdata">Poeng</code> med 1 når en
          <code>Skumling</code> blir truffet av en snøball.
        </p>
      </li>
    </ul>
    <p>
      Vi har tidligere laget meldingen <code>slutt</code> som sendes ut når
      <code>Helten</code> blir tatt av en <code>Skumling</code>. Nå vil vi bruke
      denne til å avslutte spillet. Men først, la oss lage en meny og en
      bakgrunn som forteller oss at vi tapte.
    </p>
    <ul>
      <li>
        <p>
          Klikk på <code>Scene</code> til venstre for <code>Figurer</code>, og
          velg <code>Bakgrunner</code>-fanen. Lag to kopier av bakgrunnen din og
          kall dem henholdsvis <code>Meny</code> og <code>Slutt</code>.
        </p>
        <p>
          På <code>Meny</code>-bakgrunnen kan du lage en fin tittel. Skriv også
          <code>Trykk 'S' for å starte</code>.
        </p>
        <p>
          På <code>Slutt</code>-bakgrunnen kan du skrive en passende melding for
          når spillet er slutt. Skriv også
          <code>Trykk 'S' for å spille igjen</code>.
        </p>
      </li>
      <li>
        <p>
          Endre nå litt på skriptene på scenen. Først vil vi bare vise menyen
          når det grønne flagget klikkes:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
bytt bakgrunn til [Meny v]
</code></pre>
        <p>Deretter vil vi starte spillet når <code>S</code> trykkes:</p>
        <pre><code class="blocks">når [s v] trykkes
send melding [start v]
</code></pre>
        <p>
          Pass også på at du bytter til bakgrunnen <code>Spill</code> når
          meldingen <code>start</code> mottas, og til bakgrunnen
          <code>Slutt</code> når meldingen <code>slutt</code> mottas.
        </p>
      </li>
      <li>
        <p>
          Til slutt må vi passe på at spillet faktisk avsluttes etter at
          <code>slutt</code>-meldingen er sendt. Legg på skript for å
          <code class="blockcontrol">slette denne klonen</code> på
          <strong>Snøball</strong> og <code>Skumling</code>, og skript for å
          skjule <code>Helten</code> når <code>slutt</code> mottas.
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
          Fungerer programflyten? Starter spillet når du trykker <code>S</code>?
          Avsluttes spillet når <code>Helten</code> blir fanget? Vises de
          riktige bakgrunnene når de skal?
        </p>
      </li>
      <li>
        <p>
          Legg gjerne på litt lydeffekter og enkle animasjoner der det passer.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-store%2C-slemme-gutter">
    Steg 5: Store, slemme gutter
  </h1>
  <p>
    <em>Til slutt skal vi gjøre spillet vanskeligere jo lengre vi spiller</em>
  </p>
  <ul>
    <li>
      <p>
        Vi innfører først en ny variabel <code class="blockdata">Nivå</code> som
        skal gjelde for alle figurer. Denne styrer hvor vanskelig spillet skal
        være. La den gjerne være synlig.
      </p>
    </li>
    <li>
      <p>
        Vi regner ut nivå basert på <code class="blockdata">Poeng</code>. Utvid
        skriptet ditt som mottar <code>start</code>-meldingen på scenen med den
        følgende løkken:
      </p>
      <pre><code class="blocks">gjenta for alltid
    sett [Nivå v] til ((1) + ([gulv v] av ((Poeng) / (5))))
slutt
</code></pre>
      <p>
        Funksjonen <code class="blockoperators">gulv</code> runder nedover.
        Dermed sier vi at <code class="blockdata">Nivå</code> skal øke for hver
        femte <code>Skumling</code> vi jager vekk.
      </p>
    </li>
    <li>
      <p>
        Nå kan vi bruke <code class="blockdata">Nivå</code> til å lage
        <strong>Skumlingene</strong> slemmere. For eksempel kan de bli større,
        gå raskere og kanskje trenge flere snøballer før de blir borte.
      </p>
      <p>
        Lag et par nye variabler som gjelder for denne figuren:
        <code class="blockdata">Slem</code> og
        <code class="blockdata">Liv</code>.
        <code class="blockdata">Slem</code> vil si noe om hvor stor og slem den
        enkelte <strong>Skumlingen</strong> er. Ved å la dette være et tall
        mellom 1 og <code class="blockdata">Nivå</code> blir spillet
        vanskeligere etterhvert som <code class="blockdata">Nivå</code> øker.
        For eksempel kan du legge til disse klossene på
        <code>Skumling</code> sitt hovedskript:
      </p>
      <pre><code class="blocks">når jeg starter som klon
sett [Slem v] til (tilfeldig tall fra (1) til (Nivå))
sett [Liv v] til (Slem)
endre [hastighet v] med (Slem)
endre [farge v] effekt med ((10) * (Slem))
endre størrelse med ((5) * (Slem))
vis
gjenta for alltid
    gå (hastighet) steg
    vent (0.1) sekunder
slutt
</code></pre>
    </li>
    <li>
      <p>
        For at en <code>Skumling</code> skal tåle flere snøballer må vi også
        endre litt på hva som skjer når han blir truffet. I stedet for å bare
        slette klonen vil vi endre <code class="blockdata">Liv</code> med -1, og
        deretter gi poeng og slette klonen bare om
        <code class="blockdata">Liv</code> er 0.
      </p>
    </li>
    <li>
      <p>
        Vi bør kanskje gi flere poeng for å jage bort de slemme
        <strong>Skumlingene</strong>? Dette gjør du ved å endre
        <code class="blockdata">Poeng</code> med
        <code class="blockdata">Slem</code> når en <code>Skumling</code> jages
        bort.
      </p>
    </li>
    <li>
      <p>
        Om vi får mer enn ett poeng for hver <code>Skumling</code> bør vi også
        endre på hvordan vi regner ut <code class="blockdata">Nivå</code>. Hvis
        ikke vil spillet bli veldig fort vanskeligere etterhvert. Du kan for
        eksempel bruke denne utregningen:
      </p>
      <pre><code class="blocks">gjenta for alltid
    sett [Nivå v] til ((1) + ([gulv v] av ([kvadratrot v] av ((Poeng) / (3)))))
slutt
</code></pre>
      <p>
        Da vil vi fortsatt øke nivået for omtrent hver femte
        <code>Skumling</code> som jages bort.
      </p>
    </li>
  </ul>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          Blir spillet vanskeligere etterhvert? Prøv å endre på de forskjellige
          variablene og innstilingene vi har laget slik at spillet blir passe
          vanskelig.
        </p>
      </li>
      <li>
        <p>
          Har du flere ideer til hvordan spillet kan gjøres enda morsommere?
          Prøv dem ut!
        </p>
      </li>
    </ul>
  </section>
</section>
