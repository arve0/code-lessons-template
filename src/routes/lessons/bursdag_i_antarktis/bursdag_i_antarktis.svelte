<!-- generated from src/lessons/bursdag_i_antarktis/bursdag_i_antarktis.md -->

<svelte:head>
  <title>Bursdag i Antarktis</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Bursdag i Antarktis er en interaktiv animasjon som forteller historien om en
    liten katt som har gått seg bort på bursdagen sin. Heldigvis treffer han
    noen hyggelige pingviner han kan feire sammen med.
  </p>
  <figure>
    <img
      src="lessons/bursdag_i_antarktis/bursdag_i_antarktis.png"
      alt="Bilde av Felix, ett pepperkake hus og to pingviner"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-en-katt-p%C3%A5-villspor">
    Steg 1: En katt på villspor
  </h1>
  <p><em>Vi lager en katt som kan gå rundt i Antarktis på egen hånd.</em></p>
  <p>
    Vi skal etterhvert fortelle en ganske spennende historie om katten som møter
    dansende pingviner på bursdagen sin. Men som alltid er det greit å begynne
    med noe ganske enkelt, for deretter å bygge videre på det.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Start et nytt prosjekt. Gi kattefiguren navnet <code>Felix</code>, og
          sett rotasjonsmåten hans til
          <img
            src="lessons/bursdag_i_antarktis/../bilder/rotasjonsmate-hv.png"
            alt="sideveis"
          />.
        </p>
      </li>
      <li>
        <p>
          Lag en ny bakgrunn ved å klikke
          <img
            src="lessons/bursdag_i_antarktis/../bilder/velg-bakgrunn.png"
            alt="velg en ferdigbakgrunn"
          />
          nede til venstre på skjermen. Velg <code>Holiday/winter</code>.
        </p>
      </li>
      <li>
        <p>Legg også til bakgrunnen <code>Holiday/winter-lights</code>.</p>
      </li>
      <li>
        <p>
          Vi begynner med et skript på scenen, som passer på at vi viser
          <code>winter</code>-bakgrunnen når animasjonen starter. Gå til
          <code class="blocklightgrey">Skript</code>-fanen og legg til
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
bytt bakgrunn til [winter v]
</code></pre>
      </li>
      <li>
        <p>
          Da kan vi få katten til å flytte på seg. Klikk på
          <code>Felix</code> og gi ham dette skriptet:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-100) y: (-50)
</code></pre>
        <p>
          Her kan du eksperimentere litt med tallene for <code>x</code> og
          <code>y</code> til du finner noe som du synes ser bra ut.
        </p>
      </li>
      <li>
        <p>
          La oss nå få Felix til å bevege seg over skjermen. Vi skifter mellom
          de to draktene hans for at det skal se ut som om han går. Utvid
          skriptet til Felix på denne måten:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-100) y: (-50)
pek i retning (100 v)
gjenta til &lt;(x-posisjon) &gt; [240]&gt;
    gå (10) steg
    neste drakt
    vent (0.1) sekunder
slutt
</code></pre>
        <p>
          Tallet 100 i <code class="blockmotion">pek i retning</code>-klossen
          gjør at Felix går litt nedover mens han går over skjermen. Prøv gjerne
          med noen andre tall for å se effekten av dem.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Vandrer Felix over skjermen?</p>
      </li>
      <li>
        <p>Stopper han når kommer til kanten på skjermen?</p>
      </li>
      <li>
        <p>
          Starter han på nytt på venstre side av skjermen om du klikker på det
          grønne flagget igjen?
        </p>
      </li>
    </ul>
    <section class="protip">
      <h3 class="protip" id="antarktis">Antarktis</h3>
      <p>
        Antarktis er navnet på området der Sydpolen ligger. Selv om det ikke bor
        hverken mennesker eller katter fast på Antarktis finnes det veldig mange
        pingviner der.
      </p>
    </section>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <p>
      Vi vil nå få bakgrunnen til å endre seg når katten kommer til enden av
      skjermen. Vi begynner med noe enkelt, men som dessverre ikke fungerer så
      veldig bra.
    </p>
    <ul>
      <li>
        <p>Lag et nytt skript på Scenen.</p>
        <pre><code class="blocks">når grønt flagg klikkes
vent (3) sekunder
bytt bakgrunn til [winter-lights v]
</code></pre>
      </li>
      <li>
        <p>
          Legg også til en kloss som flytter Felix inn til veien etter at
          bakgrunnen er byttet.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-100) y: (-50)
pek i retning (100 v)
gjenta til &lt;(x-posisjon) &gt; [240]&gt;
    gå (10) steg
    neste drakt
    vent (0.1) sekunder
slutt
gå til x: (-20) y: (-100)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Skifter bakgrunnen når Felix kommer til enden av skjermen?</p>
      </li>
      <li>
        <p>
          Klarer du å endre tallet i klossen
          <code class="blockcontrol">vent 3 sekunder</code> slik at det ser
          bedre ut?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-det-blir-enklere-med-meldinger">
    Steg 2: Det blir enklere med meldinger
  </h1>
  <p>
    <em
      >Vi skal nå begynne å bruke meldinger for å få ting til å skje på
      likt.</em
    >
  </p>
  <p>
    Vi har sett at vi kan klare å få ting til å skje samtidig ved å bruke
    <code class="blockcontrol">vent</code>-klosser. Men det er vanskelig å finne
    ut akkurat hvor lenge vi bør vente, og det er kjedelig å måtte endre på
    denne tiden om vi forandrer for eksempel hvor fort Felix går.
  </p>
  <p>
    Vi skal derfor i stedet bruke <strong>meldinger</strong>. Slike meldinger er
    noe figurene kan sende til hverandre eller til scenen uten at de er synlige
    for oss som ser på.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>La katten sende en melding når han når kanten av skjermen.</p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-100) y: (-50)
pek i retning (100 v)
gjenta til &lt;(x-posisjon) &gt; [240]&gt;
    gå (10) steg
    neste drakt
    vent (0.1) sekunder
slutt
send melding [Scene 2 v]
</code></pre>
      </li>
      <li>
        <p>
          Vi kan nå slette det gamle skriptet på scenen som byttet bakgrunn til
          <code>winter-lights</code>, og heller bruke dette:
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 2 v]
bytt bakgrunn til [winter-lights v]
</code></pre>
      </li>
      <li>
        <p>
          Felix kan også motta meldinger han sender selv. Vi kan bruke dette til
          å flytte ham inn på veien samtidig som vi bytter bakgrunn. Legg til
          følgende som et nytt skript på Felix:
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 2 v]
gå til x: (-20) y: (-100)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Går Felix fortsatt over skjermen?</p>
      </li>
      <li>
        <p>
          Hva skjer når han kommer til kanten av skjermen? Vi har laget to
          skript som sier at bakgrunnen skal endre seg og katten skal flytte til
          midten av skjermen. Skjer dette?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-felix-introduserer-seg-selv">
    Steg 3: Felix introduserer seg selv
  </h1>
  <p>
    <em>Før Felix vandrer i vei synes vi at han burde introdusere seg selv!</em>
  </p>
  <p>
    Som alle høflige katter introduserer Felix seg når han treffer nye
    mennesker.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt skript på Felix:</p>
        <pre><code class="blocks">når jeg mottar [Si hei v]
si [Å nei! Hvor er jeg?] i (2) sekunder
tenk [Jeg har gått meg bort ... også på bursdagen min] i (2) sekunder
spør [Hvor gammel blir jeg igjen?] og vent
</code></pre>
      </li>
      <li>
        <p>
          For å teste hvordan skriptet virker kan du bare klikke på for eksempel
          klossen <code class="blockevents">når jeg mottar Si hei</code>.
          Snakker og tenker Felix?
        </p>
      </li>
      <li>
        <p>
          Når du svarer på Felix spørsmål blir svaret ditt tatt vare på i en
          variabel som heter <code class="blocksensing">svar</code>. Vi vil lage
          en ny variabel med et bedre navn som kan ta vare på dette svaret. Lag
          en ny variabel som heter <code class="blockdata">alder</code>. La
          denne variabelen gjelde for alle figurer, og fjern avhuking slik at
          variabelen ikke vises.
        </p>
      </li>
      <li>
        <p>Legg til en kloss nederst i skriptet:</p>
        <pre><code class="blocks">når jeg mottar [Si hei v]
si [Å nei! Hvor er jeg?] i (2) sekunder
tenk [Jeg har gått meg bort ... også på bursdagen min] i (2) sekunder
spør [Hvor gammel blir jeg igjen?] og vent
sett [alder v] til (svar)
</code></pre>
      </li>
      <li>
        <p>
          Nå vil vi at Felix skal si og gjøre alt dette før han vandrer gjennom
          skogen. Legg til en
          <code class="blockevents">send melding</code>-kloss i det første
          skriptet til Felix:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-100) y: (-50)
pek i retning (100 v)
send melding [Si hei v]
gjenta til &lt;(x-posisjon) &gt; [240]&gt;
    gå (10) steg
    neste drakt
    vent (0.1) sekunder
slutt
send melding [Scene 2 v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Snakker Felix som han skal?</p>
      </li>
      <li>
        <p>
          Det er kanskje litt uhøflig at Felix bare springer av gårde mens han
          snakker med oss?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi vil at Felix snakker ferdig før han begynner å gå. Dette er
          heldigvis ganske enkelt. Hvis vi bytter ut
          <code class="blockevents">send melding</code>-klossen med en
          <code class="blockevents">send melding og vent</code>-kloss, vil ikke
          Felix begynne å gå før han er ferdig å snakke (og vi har svart på
          spørsmålet hans):
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
gå til x: (-100) y: (-50)
pek i retning (100 v)
send melding [Si hei v] og vent
gjenta til &lt;(x-posisjon) &gt; [240]&gt;
    gå (10) steg
    neste drakt
    vent (0.1) sekunder
slutt
send melding [Scene 2 v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>Venter Felix med å gå til du har svart på spørsmålet hans?</li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-g%C3%A5-opp-mot-husene">
    Steg 4: Gå opp mot husene
  </h1>
  <p>
    <em
      >Da er vi klare til å hjelpe Felix med å finne veien opp til de to
      husene.</em
    >
  </p>
  <p>
    Vi skal nå la Felix gå langs veien opp til husene. For at det skal se ut som
    om han går oppover mot husene vil vi la han bli mindre og mindre mens han
    går.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi skal nå fortsette på skriptet til Felix som begynner med at han
          mottar meldingen <code>Scene 2</code>. Legg til en liten
          <code class="blocklooks">si</code>-kloss først:
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 2 v]
gå til x: (-20) y: (-100)
si [Å! Der er det noen hus!] i (2) sekunder
</code></pre>
      </li>
      <li>
        <p>
          Nå skal vi la Felix følge veien oppover. Prøv først med følgende
          skript:
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 2 v]
gå til x: (-20) y: (-100)
si [Å! Der er det noen hus!] i (2) sekunder
pek i retning (20 v)
gjenta (6) ganger
    gå (9) steg
    neste drakt
    endre størrelse med (-2)
    vent (0.1) sekunder
slutt
</code></pre>
      </li>
      <li>
        <p>
          Følger Felix veien oppover? Blir han mindre mens han går? Husk at om
          du vil teste dette skriptet uten å se hele animasjonen kan du klikke
          på <code class="blockevents">når jeg mottar Scene 2</code>-klossen. Du
          bør også klikke på
          <code class="blocklooks">sett størrelse til 100%</code>-klossen i
          <code class="blocklooks">Utseende</code>-kategorien innimellom, slik
          at Felix får tilbake sin vanlige størrelse.
        </p>
      </li>
      <li>
        <p>
          Nå vil vi at Felix skal forandre retning slik at han følger veien. Et
          triks er at vi kan gange retningen hans med -1. Da blir det som om han
          snur seg rundt. Siden vi vil gjøre dette fire ganger lager vi også en
          ny <code class="blockcontrol">gjenta</code>-kloss:
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 2 v]
gå til x: (-20) y: (-100)
si [Å! Der er det noen hus!] i (2) sekunder
pek i retning (20 v)
gjenta (4) ganger
    gjenta (6) ganger
        gå (9) steg
        neste drakt
        endre størrelse med (-2)
        vent (0.1) sekunder
    slutt
    pek i retning ((retning) * (-1))
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>Følger Felix veien oppover mot de to husene?</li>
    </ul>
    <p>
      Hvis du ser litt nærmere på veien ser du at den flater ut. Dette kan vi
      etterligne for Felix med å gange med et tall som er litt forskjellig fra
      -1 i retningen.
    </p>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Endre <code>-1</code> i
          <code class="blockmotion">pek i retning</code>-klossen til
          <code>-1.5</code>.
        </p>
      </li>
      <li>
        <p>
          For å skjønne bedre hva som skjer kan du klikke på
          <code class="blockmotion">i</code> på Felix og følge med på
          <code>retning</code> mens skriptet kjører.
        </p>
      </li>
      <li>
        <p>
          Når Felix kommer fram til huset kan vi skjule ham, og skifte til en ny
          scene.
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 2 v]
gå til x: (-20) y: (-100)
si [Å! Der er det noen hus!] i (2) sekunder
pek i retning (20 v)
gjenta (4) ganger
    gjenta (6) ganger
        gå (9) steg
        neste drakt
        endre størrelse med (-2)
        vent (0.1) sekunder
    slutt
    pek i retning ((retning) * (-1.5))
slutt
skjul
vent (1) sekunder
send melding [Scene 3 v]
</code></pre>
      </li>
      <li>
        <p>
          For den scenen trenger vi en ny bakgrunn. Klikk
          <img
            src="lessons/bursdag_i_antarktis/../bilder/velg-bakgrunn.png"
            alt="velg en ferdig bakgrunn"
          />
          og legg til bakgrunnen <code>Holiday/gingerbread</code>. Gi scenen
          dette skriptet:
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 3 v]
bytt bakgrunn til [gingerbread v]
</code></pre>
      </li>
      <li>
        <p>
          I det vi skifter til den nye scenen vil vi også at Felix skal få
          tilbake sin vanlige størrelse. Klikk på Felix og start et nytt skript:
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 3 v]
sett størrelse til (100)%
gå til x: (-160) y: (-65)
vis
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-7">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          Har Felix blitt flinkere til å følge veien oppover mot de to husene?
        </p>
      </li>
      <li>
        <p>Skifter bakgrunnen over til huset som det skal?</p>
      </li>
      <li>
        <p>
          Får Felix riktig størrelse igjen på slutten av animasjonen? Og når du
          starter animasjonen på nytt?
        </p>
      </li>
      <li>
        <p>
          Hvordan kan du sørge for at Felix alltid dukker opp i full størrelse
          når det grønne flagget klikkes på nytt?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-si-hei-til-pingvinene">
    Steg 5: Si hei til pingvinene
  </h1>
  <p>
    <em
      >Felix skal nå møte to pingviner som bor inne i pepperkakehuset. De skal
      komme ut av huset og snakke litt med Felix</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-8">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag to nye figurer ved å trykke på
          <img
            src="lessons/bursdag_i_antarktis/../bilder/hent-fra-bibliotek.png"
            alt="velg figur fra biblioteket"
          />. Velg <code>Dyr/Penguin1</code> og <code>Dyr/Penguin2</code>. Gi
          pingvinene navn du liker, vi har valgt å kalle dem
          <code>Pingu</code> og <code>Pappa Pingu</code>.
        </p>
      </li>
      <li>
        <p>
          For at pingvinene først skal dukke opp i <code>Scene 3</code>, må vi
          skjule dem når animasjonen starter. Legg til følgende skript på begge
          figurene:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul
</code></pre>
      </li>
      <li>
        <p>
          Først skal Felix spørre om det er noen hjemme, og så skal han sende en
          melding hvor han ber pingvinene om å komme ut. Endre Felix sitt skript
          ved å legge til to klosser på slutten:
        </p>
        <pre><code class="blocks">når jeg mottar [Scene 3 v]
sett størrelse til (100)%
gå til x: (-160) y: (-65)
vis
si [Oj, så flott hus! Er det noen hjemme?] i (2) sekunder
send melding [Kom ut v]
</code></pre>
      </li>
      <li>
        <p>
          Pingu skal nå komme ut av døra og gå litt til siden. Sjekk med
          musepekeren hva <code>x</code> og <code>y</code>-posisjonen til døren
          er. Legg til følgende skript på Pingu:
        </p>
        <pre><code class="blocks">når jeg mottar [Kom ut v]
gå til x: (45) y: (-70)
vis
gli (1) sekunder til x: (150) y: (-100)
</code></pre>
      </li>
      <li>
        <p>
          Pappa Pingu kommer ut litt senere, og stiller Felix et spørsmål. Legg
          til følgende script på Pappa Pingu:
        </p>
        <pre><code class="blocks">når jeg mottar [Kom ut v]
vent (2) sekunder
gå til x: (45) y: (-70)
vis
vent (1) sekunder
spør [Hva heter du?] og vent
send melding [Navn1]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-8">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Kommer pingvinene ut av huset som forventet?</p>
      </li>
      <li>
        <p>Hva tror du skjer med navnet du skrev inn?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-6%3A-pingvinene-danser">
    Steg 6: Pingvinene danser
  </h1>
  <p>
    <em
      >Pingvinene blir glade for å treffe Felix, og etter en liten samtale
      begynner den ene pingvinen å danse siden det er Felix sin bursdag.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-9">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Få Pappa Pingu til å sende en melding etter at han har spurt hva Felix
          heter. Kall for eksempel meldingen <code>Navn1</code>
        </p>
      </li>
      <li>
        <p>Legg til følgende skript på Pingu</p>
        <pre><code class="blocks">når jeg mottar [Navn1 v]
si (svar) i (2) sekunder
si [Det er et rart navn!] i (2) sekunder
send melding [Navn2 v]
</code></pre>
      </li>
      <li>
        <p>
          Legg til følgende skript på Felix for å få ham til å svare og si at
          han har bursdag:
        </p>
        <pre><code class="blocks">når jeg mottar [Navn2 v]
si [Jeg har bursdag i dag!] i (2) sekunder
si (sett sammen [Jeg blir ] (alder)) i (2) sekunder
send melding [Party v]
</code></pre>
      </li>
    </ul>
    <p>
      Legg merke til <code class="blockoperators">sett sammen</code>-klossen.
      Denne kan vi bruke for å sette sammen tekst. Pass på at du skriver et
      mellomrom etter ordet <code>blir</code>!
    </p>
    <ul>
      <li>
        <p>
          Nå skal vi få Pingu til å danse! Lag to nye drakter for Pingu ved å
          importere <code>Dyr/Penguin1</code> to ganger. Roter de to nye
          draktene litt i forhold til hverandre ved å klikke på draktene i
          tegnevinduet og rotere rundt med musen (du må kanskje bytte til
          vektorgrafikk).
        </p>
        <figure>
          <img
            src="lessons/bursdag_i_antarktis/roter_pingu.png"
            alt="Viser hvordan rotere pingvinen i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Legg til en lyd du liker under
          <code class="blocklightgrey">Lyder</code>, og lag følgende skript på
          Pingu (vi har brukt lyden <code>human beatbox1</code>):
        </p>
        <pre><code class="blocks">når jeg mottar [Party v]
start lyden [human beatbox1 v]
gjenta (20) ganger
    neste drakt
    vent (0.2) sekunder
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-9">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Danser pingvinen slik du forventet?</p>
      </li>
      <li>
        <p>
          Hvorfor tror du det kan være lurt å spare på svaret Pappa Pingu får i
          en variabel?
        </p>
      </li>
      <li>
        <p>
          Dukker Pingu opp i riktig drakt når du starter animasjonen på nytt
          igjen? Hvis ikke: finn ut hvordan du kan fikse det!
        </p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p>
      <em
        >Nå har vi begynt på historien om katten som feirer bursdagen sin i
        Antarktis. Men kanskje du kan fortelle mer om hva som skjer videre?</em
      >
    </p>
    <p>
      Eller om du heller vil vise fram historien din til familie og venner kan
      du velge <code>Legg ut</code> på toppen av skjermen.
    </p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring%3A-historien-fortsetter">
      Utfordring: Historien fortsetter
    </h2>
    <p>Kan du fortsette på historien? Hva skjer videre?</p>
    <p>
      Kanskje du kan introdusere flere figurer, eller flere bakgrunner? For
      eksempel kan det hende at pingvinene inviterer katten med seg inn i huset?
      Eller kanskje de sammen går videre på leting etter en båt som katten kan
      bruke for å komme seg hjem til Norge?
    </p>
    <p>
      Husk at du kan også blande animasjonen med et lite spill, og så gå tilbake
      til mer animasjon! Det er helt opp til deg!
    </p>
  </section>
</section>
