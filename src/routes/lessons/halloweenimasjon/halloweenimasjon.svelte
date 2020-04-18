<!-- generated from src/lessons/halloweenimasjon/halloweenimasjon.md -->

<svelte:head>
  <title>Halloweenimasjon</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Vi vil her se på hvordan vi kan lage forskjellige animasjoner med et
    Halloween-tema. Disse kan vi enten dele med vennene våre gjennom Scratch,
    eller kanskje enda morsommere: Vi kan projisere dem på en gardin, et laken
    eller en vegg under Halloween.
  </p>
  <figure>
    <img
      src="lessons/halloweenimasjon/halloweenimasjon.jpg"
      alt="Bilde av et skummelt halloween ansikt"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-en-f%C3%B8rste-animasjon">
    Steg 1: En første animasjon
  </h1>
  <p>
    <em
      >Vi begynner med å la et skummelt spøkelse fly fram og tilbake over
      skjermen.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Start et nytt prosjekt. Slett kattefiguren, ved for eksempel å
          høyreklikke på kattefiguren og velge <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          Velg en ny figur ved å klikke
          <img
            src="lessons/halloweenimasjon/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />. Finn noe skummelt, for eksempel et spøkelse! Vi har brukt
          <code>Fantasi/Ghost</code>.
        </p>
      </li>
      <li>
        <p>
          Trykk på navne-feltet over figuren din. Gi den navnet
          <code>Spøkelse</code>.
        </p>
        <figure>
          <img
            src="lessons/halloweenimasjon/spokelse.png"
            alt="Bilde av et skummelt spøkelse"
          />
        </figure>
      </li>
      <li>
        <p>
          Nå skal vi lage et enkelt skript som får spøkelset til å fly over
          skjermen. Bygg sammen en <code class="blockcontrol">gjenta</code>- og
          en <code class="blockmotion">gå</code>-kloss på denne måten:
        </p>
        <pre><code class="blocks">gjenta (200) ganger
    gå (5) steg
slutt
</code></pre>
      </li>
      <li>
        <p>
          Klikk på skriptet ditt for å starte animasjonen. Flytter spøkelset
          ditt på seg? Ser du et problem?
        </p>
      </li>
      <li>
        <p>
          Spøkelset ser ut som om det setter seg fast når det kommer til kanten!
          Dette kan vi fikse med en
          <code class="blockmotion">sprett tilbake</code>-kloss:
        </p>
        <pre><code class="blocks">gjenta (200) ganger
    gå (5) steg
    sprett tilbake ved kanten
slutt
</code></pre>
      </li>
      <li>
        <p>Klikk på skriptet ditt igjen. Virker det bedre nå?</p>
      </li>
      <li>
        <p>
          Hmm ... Spøkelset flyr opp-ned ... Det ser litt rart ut. Vi kan si at
          spøkelset bare skal snu seg sidelengs med en
          <code class="blockmotion">begrens rotasjon</code>-kloss. Denne legger
          vi helt først i skriptet på denne måten:
        </p>
        <pre><code class="blocks">begrens rotasjon [vend sideveis v]
gjenta (200) ganger
    gå (5) steg
    sprett tilbake ved kanten
slutt
</code></pre>
      </li>
      <li>
        <p>
          Til slutt, det ser skumlere ut med en svart bakgrunn! Klikk på
          <code>Scene</code> helt til høyre på skjermen, deretter på
          <code class="blocklightgrey">Bakgrunner</code>-fanen nesten øverst på
          skjermen. Trykk til slutt på <code>Gjør om til pikselgrafikk</code>.
        </p>
      </li>
      <li>
        <p>
          Klikk på malingsspannet,
          <img
            src="lessons/halloweenimasjon/../bilder/fyll-med-farge.png"
            alt="Fyll med farge"
          />, og deretter på bakgrunnen for å male denne svart.
        </p>
      </li>
      <li>
        <p>Gi bakgrunnen navnet <code>Svart</code>.</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-enda-en-animasjon">
    Steg 2: Enda en animasjon
  </h1>
  <p>
    <em>For vår andre animasjon vil en flaggermus komme flyvende mot oss.</em>
  </p>
  <figure>
    <img
      src="lessons/halloweenimasjon/flaggermus.png"
      alt="Bilde av en skummel flaggermus"
    />
  </figure>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny figur ved å klikke
          <img
            src="lessons/halloweenimasjon/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />. Vi har brukt <code>Fantasi/Bat</code>. Endre navnet på figuren til
          <code>Flaggermus</code>.
        </p>
      </li>
      <li>
        <p>
          For at det skal se ut som flaggermusen kommer flyvende mot oss, vil vi
          at den skal starte veldig liten, og deretter bli større. Lag dette
          skriptet.
        </p>
        <pre><code class="blocks">sett størrelse til (0) %
gjenta (100) ganger
    endre størrelse med (4)
slutt
</code></pre>
      </li>
      <li>
        <p>Trykk på skriptet for å se om det virker.</p>
      </li>
      <li>
        <p>
          Et lite problem er at spøkelset også ligger på skjermen. Det vil være
          bedre å skjule spøkelset når det ikke animeres. Klikk på
          spøkelsesfiguren, og legg til en <code class="blocklooks">vis</code>-
          og en <code class="blocklooks">skjul</code>-kloss i skriptet:
        </p>
        <pre><code class="blocks">begrens rotasjon [vend sideveis v]
vis
gjenta (200) ganger
    gå (5) steg
    sprett tilbake ved kanten
slutt
skjul
</code></pre>
      </li>
      <li>
        <p>
          Klikk på spøkelset sitt skript. Skjules spøkelset etter at det er
          ferdig med å fly frem og tilbake?
        </p>
      </li>
      <li>
        <p>
          Vi kan også gjøre det samme med flaggermusen sitt skript. Klikk på
          flaggermus-figuren, og endre skriptet til
        </p>
        <pre><code class="blocks">sett størrelse til (0) %
vis
gjenta (100) ganger
    endre størrelse med (4)
slutt
skjul
</code></pre>
      </li>
      <li>
        <p>
          For å få litt variasjon vil vi at flaggermusen skal animeres over en
          skummel skog-bakgrunn. Klikk på
          <img
            src="lessons/halloweenimasjon/../bilder/velg-bakgrunn.png"
            alt="Velg en ferdig bakgrunn"
          />
          helt nede til høyre på skjermen, og velg bakgrunnen
          <code>Utendørs/Woods</code>. Gi bakgrunnen navnet <code>Skog</code>.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-bytte-bakgrunner">
    Steg 3: Bytte bakgrunner
  </h1>
  <p>
    <em
      >Vi vil nå se på hvordan vi lett kan bytte bakgrunn når vi starter en
      animasjon.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <p>
      Hvis vi for eksempel vil vise spøkelsesanimasjonen på svart bakgrunn må vi
      først klikke <code>Scene</code>, deretter <code>Bakgrunner</code>-fanen og
      den svarte bakgrunnen. Videre må vi klikke på spøkelsesfiguren,
      <code>Kode</code>-fanen og til slutt på selve skriptet. Dette er veldig
      tungvint! Vi vil nå se hvordan vi kan bruke meldinger for å gjøre dette
      mye enklere.
    </p>
    <p>
      Meldinger gjør det lett å få flere ting til å skje samtidig. Vi skal nå
      først lage en melding, <code>Animer spøkelse</code>. Vi vil at denne
      meldingen skal både bytte bakgrunnen og starte spøkelsesanimasjonen.
    </p>
    <ul>
      <li>
        <p>Klikk på <code>Scene</code> og lag dette skriptet:</p>
        <pre><code class="blocks">når jeg mottar [Animer spøkelse v]
bytt bakgrunn til [Svart v]
</code></pre>
      </li>
      <li>
        <p>
          Klikk på spøkelsesfiguren og endre skriptet ved å legge til en kloss
          på toppen:
        </p>
        <pre><code class="blocks">når jeg mottar [Animer spøkelse v]
begrens rotasjon [vend sideveis v]
vis
gjenta (200) ganger
    gå (5) steg
    sprett tilbake ved kanten
slutt
skjul
</code></pre>
      </li>
      <li>
        <p>
          Nå venter skriptene våre på meldingen. For å teste kan vi dra klossen
        </p>
        <pre><code class="blocks">send melding [Animer spøkelse v]
</code></pre>
        <p>ut ved siden av det store skriptet til spøkelset.</p>
      </li>
      <li>
        <p>
          Send meldingen ved å klikke på
          <code class="blockevents">send melding</code>-klossen. Animeres
          spøkelset over en svart bakgrunn?
        </p>
      </li>
      <li>
        <p>
          Vi vil nå gjøre det samme for flaggermusen. Legg til et nytt skript på
          scenen:
        </p>
        <pre><code class="blocks">når jeg mottar [Animer flaggermus v]
bytt bakgrunn til [Skog v]
</code></pre>
      </li>
      <li>
        <p>Klikk på flaggermusfiguren og endre skriptet slik</p>
        <pre><code class="blocks">når jeg mottar [Animer flaggermus v]
sett størrelse til (0) %
vis
gjenta (100) ganger
    endre størrelse med (4)
slutt
skjul
</code></pre>
      </li>
      <li>
        <p>Legg også til klossen</p>
        <pre><code class="blocks">send melding [Animer flaggermus v]
</code></pre>
        <p>for å teste at animasjonen fungerer.</p>
      </li>
      <li>
        <p>
          Send meldingene som animerer spøkelset og flaggermusen. Starter
          animasjonene når du klikker på meldingene? Byttes bakgrunnene riktig?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-koble-sammen-animasjonene">
    Steg 4: Koble sammen animasjonene
  </h1>
  <p>
    <em
      >Nå skal vi se hvordan vi kan koble sammen animasjonene slik at de vises i
      sekvens etter hverandre.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi begynner med å lage en
          <code class="blockcontrol">gjenta for alltid</code>-løkke på scenen,
          som sender meldinger:
        </p>
        <pre><code class="blocks">gjenta for alltid
    send melding [Animer spøkelse v] og vent
    send melding [Animer flaggermus v] og vent
slutt
</code></pre>
      </li>
      <li>
        <p>
          Klikk på skriptet for å teste det. Trykk den røde stopp-sirkelen for å
          stoppe animasjonen. Vises animasjonene etter hverandre om og om igjen?
        </p>
      </li>
      <li>
        <p>
          Det vil se litt bedre ut med en kort pause mellom animasjonene. Legg
          til et par <code class="blockcontrol">vent</code>-klosser i skriptet.
        </p>
        <pre><code class="blocks">gjenta for alltid
    send melding [Animer spøkelse v] og vent
    vent (1) sekunder
    send melding [Animer flaggermusen v] og vent
    vent (1) sekunder
slutt
</code></pre>
      </li>
      <li>
        <p>
          For å gjøre det enklere å starte animasjonen legger vi til en kloss
          som gjør at animasjonen starter når det grønne flagget øverst på
          skjermen klikkes.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    send melding [Animer spøkelse v] og vent
    vent (1) sekunder
    send melding [Animer flaggermus v] og vent
    vent (1) sekunder
slutt
</code></pre>
      </li>
      <li>
        <p>
          Vi kan også bruke grønt flagg-klosser på figurene for å være sikre på
          at de starter animasjonen på riktig måte. Legg dette skriptet på
          spøkelset:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
gå til x: (0) y:(0)
</code></pre>
      </li>
      <li>
        <p>Legg et tilsvarende skript på flaggermusen:</p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
gå til x: (0) y:(0)
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
          Kjøres begge animasjonene etter hverandre? Dukker figurene opp når de
          skal?
        </p>
      </li>
      <li>
        <p>
          Endre gjerne i animasjonene slik at du synes de ser bedre ut. Kanskje
          du vil ha litt andre figurer? Hvordan kan du få figurene til å bevege
          seg raskere? Kanskje litt mer tilfeldig? Prøv deg frem!
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-tegn-egne-figurer">
    Steg 5: Tegn egne figurer
  </h1>
  <p>
    <em
      >Vi vil nå lage en tredje animasjon hvor vi tegner en figur på egen
      hånd</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny figur ved å flytte pekeren over
          <img
            src="lessons/halloweenimasjon/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />, og klikk så <code>Tegn</code>. Du kan tegne hva du vil. Her har vi
          tegnet et Jack-O'-Lantern-gresskar.
        </p>
        <figure>
          <img
            src="lessons/halloweenimasjon/gresskar.png"
            alt="Bilde av gresskar med utskjært ansikt"
          />
        </figure>
      </li>
      <li>
        <p>
          Lag en kopi av drakten du nettopp tegnet ved å høyreklikke på
          miniatyren under <code>Ny drakt</code>-overskriften og velg
          <code>lag en kopi</code>.
        </p>
        <figure>
          <img
            src="lessons/halloweenimasjon/kopier_gresskar.png"
            alt="Bilde av hvordan lage en kopi av gresskaret i scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Endre litt på den kopierte drakten, slik at du får to drakter som er
          ganske, men ikke helt, like. Vi vil nå animere figuren ved å bytte
          mellom de to draktene.
        </p>
      </li>
      <li>
        <p>
          Klikk på <code class="blocklightgrey">Kode</code>-fanen og legg på
          dette skriptet:
        </p>
        <pre><code class="blocks">når jeg mottar [Animer gresskar v]
vis
gjenta (50) ganger
    neste drakt
    vent (tilfeldig tall fra (0.1) til (0.3)) sekunder
slutt
skjul
</code></pre>
        <p>
          Bytt gjerne ut meldingsnavnet <code>Animer gresskar</code> med noe som
          passer for din figur. Klikk på skriptet (eller send en melding) for å
          teste animasjonen. Ser det bra ut?
        </p>
      </li>
      <li>
        <p>Legg også til startposisjonen for den figuren:</p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
gå til x: (0) y: (0)
</code></pre>
      </li>
      <li>
        <p>
          Gå så til scenen og legg på et skript som bytter til riktig bakgrunn
          for den siste animasjonen. Her har vi brukt den svarte bakgrunnen.
        </p>
        <pre><code class="blocks">når jeg mottar [Animer gresskar v]
bytt bakgrunn til [Svart v]
</code></pre>
      </li>
      <li>
        <p>
          Til slutt legger vi denne siste animasjonen til i hovedløkken som
          viser animasjonene:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    send melding [Animer spøkelse v] og vent
    vent (1) sekunder
    send melding [Animer flaggermus v] og vent
    vent (1) sekunder
    send melding [Animer gresskar v] og vent
    vent (1) sekunder
slutt
</code></pre>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-6%3A-enda-flere-animasjoner%3F">
    Steg 6: Enda flere animasjoner?
  </h1>
  <section class="challenge">
    <h2 class="challenge" id="pr%C3%B8v-selv">Prøv selv</h2>
    <p>
      Vi har nå sett noen eksempler på hvordan vi kan lage skumle
      halloween-animasjoner. Prøv å bruk lignende teknikker for å lage dine egne
      animasjoner!
    </p>
  </section>
  <section class="save">
    <h2 class="save" id="legg-ut-prosjektet">Legg ut prosjektet</h2>
    <p>
      Når du er fornøyd med animasjonene dine kan du dele det med familie og
      venner, ved å trykke <code>Legg ut</code>.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="projiser-animasjonene">Projiser animasjonene</h1>
  <p>
    <em
      >Vi avslutter med å se på hvordan du kan skremme nabolaget med de skumle
      animasjonene dine slik at alle kan se dem.</em
    >
  </p>
  <p>
    Det enkleste er å sette skjermen i vinduet, og klikke på firkanten for
    fullskjermvisning øverst til venstre under Scratch-logoen. Men hvis du kan
    låne en prosjektør til Halloween kan du vise animasjonen utendørs, på en
    vegg eller på et gardin eller laken, slik bildet i begynnelsen viser. I
    begge tilfeller er det litt dumt at Scratch viser animasjonen med en hvit
    ramme på skjermen. For å få en bedre visning kan du følge tipsene nedenfor.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Først lager vi en fil som viser animasjonen din i et større vindu med
          svart bakgrunn. Dette gjør vi med litt HTML-kode. HTML er det språket
          som brukes til å lage nettsider.
        </p>
        <p>
          Last ned filen
          <a href="lessons/halloweenimasjon/projiser.html">projiser.html</a>.
          Etter at du har gått til denne adressen kan du velge
          <code>Fil &gt; lagre som</code>, eller noe som ligner, i menyen til
          nettleseren din. Legg filen et sted du finner den igjen.
        </p>
      </li>
      <li>
        <p>
          Åpne filen i Notepad eller et tilsvarende program. Du vil se en tekst
          som ser slik ut:
        </p>
        <pre><code class="html"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Halloweenimasjon<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">bgcolor</span>=<span class="hljs-string">"#000000"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">"overflow-y: hidden; height: 890px; margin-left: auto; margin-right: auto; width: 1180px;"</span>
      <span class="hljs-attr">id</span>=<span class="hljs-string">"applet"</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">iframe</span>
        <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top:-56px; margin-left: -10px"</span>
        <span class="hljs-attr">allowtransparency</span>=<span class="hljs-string">"true"</span>
        <span class="hljs-attr">width</span>=<span class="hljs-string">"1200"</span>
        <span class="hljs-attr">height</span>=<span class="hljs-string">"960"</span>
        <span class="hljs-attr">src</span>=<span class="hljs-string">"http://scratch.mit.edu/projects/embed/30923784/?autostart=true"</span>
        <span class="hljs-attr">frameborder</span>=<span class="hljs-string">"0"</span>
        <span class="hljs-attr">scrolling</span>=<span class="hljs-string">"no"</span>
        <span class="hljs-attr">seamless</span>=<span class="hljs-string">"seamless"</span>
        <span class="hljs-attr">allowfullscreen</span>=<span class="hljs-string">""</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">iframe</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
      </li>
      <li>
        <p>
          Gjemt inne i denne teksten står det et Scratch-prosjektnummer. I dette
          tilfelle er nummeret <code>30923784</code>. Du må bytte dette nummeret
          med prosjektnummeret ditt.
        </p>
      </li>
    </ul>
    <section class="protip">
      <h3 class="protip" id="prosjektnummer">Prosjektnummer</h3>
      <p>
        For å finne prosjektnummeret ditt kan du se i adressefeltet i
        nettleseren din mens du jobber med prosjektet. Som en del av adressen
        finner du et 8-sifret tall. Dette er ditt prosjektnummer.
      </p>
    </section>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Bytt <code>30923784</code> med ditt prosjektnummer og lagre filen.
        </p>
      </li>
      <li>
        <p>
          I nettleseren din kan du nå åpne filen du nettopp endret. Velg
          <code>Fil &gt; åpne fil</code>, eller noe som ligner, i nettleseren
          din. Velg den riktige filen.
        </p>
      </li>
      <li>
        <p>Du skal nå se animasjonen din på svart bakgrunn.</p>
      </li>
      <li>
        <p>
          Koble datamaskinen din til en prosjektør, og vis animasjonen din på et
          hvitt laken, en gardin eller kanskje en vegg!
        </p>
      </li>
    </ul>
  </section>
</section>
