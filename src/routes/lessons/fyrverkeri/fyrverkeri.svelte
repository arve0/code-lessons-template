<!-- generated from src/lessons/fyrverkeri/fyrverkeri.md -->

<svelte:head>
  <title>Fyrverkeri</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>I dette prosjektet skal vi skyte opp fyrverkeri over en by.</p>
  <figure>
    <img
      src="lessons/fyrverkeri/fyrverkeri.png"
      alt="Bilde av en rakett over en by"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="forberedelser%3A-last-ned-bildefiler">
    Forberedelser: Last ned bildefiler
  </h1>
  <p>Denne første delen kan du godt få hjelp fra en voksen til å gjøre!</p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Last ned zip-filen
          <a href="lessons/fyrverkeri/fyrverkeri_lydogbilder.zip"
            >fyrverkeri_lydogbilder.zip</a
          >
          og legg den på skrivebordet på datamaskinen din eller en annen plass
          du finner igjen.
        </p>
      </li>
      <li>
        <p>
          [ ] Pakk ut zip-filen ved å høyreklikke på den og velge
          <code>Extract All</code>, <code>Pakk ut filer</code> eller noe
          lignende.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-lag-en-rakett-som-flyr-mot-musepekeren">
    Steg 1: Lag en rakett som flyr mot musepekeren
  </h1>
  <p>
    <em
      >Vi starter med å importere forskjellige bilder vi skal bruke i
      spillet</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Lag et nytt Scratch-prosjekt. Fjern katten ved å høyreklikke på
          den og velge <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Bytt bakgrunnsbilde til for eksempel
          <code>utendørs/city-with-water</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Klikk på <em>Ny figur: Last opp figur fra fil</em>,
          <img
            src="lessons/fyrverkeri/../bilder/hent-fra-fil.png"
            alt="Last opp figur frafil"
          />, for å legge til en rakett-figur i prosjektet,
          <code>fyrverkeri_lydogbilder/rocket.png</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Vi vil at raketten skal skjules når du klikker på det grønne
          flagget.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul
</code></pre>
      </li>
    </ul>
    <p>
      Nå vil vi gjerne at raketten skal bevege seg mot musepekeren når du
      trykker på mellomromstasten.
    </p>
    <ul>
      <li>
        <p>
          [ ] Legg til en kloss
          <code class="blockevents">når mellomrom trykkes</code>. Deretter lager
          vi to klosser som gjør raketten synlig og lar den bevege seg mot
          musepekeren.
        </p>
        <pre><code class="blocks">når [mellomrom v] trykkes
vis
gli (1) sekunder til x: (mus x) y: (mus y)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Plasser musepekeren over scenen og trykk mellomromstasten.</p>
      </li>
      <li>
        <p>[ ] Ser du raketten som beveger seg mot musepekeren?</p>
      </li>
      <li>
        <p>
          [ ] Hva skjer hvis du flytter på musepekeren og trykker
          mellomromstasten igjen?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <p>
      Fyrverkeri pleier ikke å fly fra side til side, så du bør gjøre det slik
      at raketten alltid flyr mot musepekeren fra bunnen av skjermen.
    </p>
    <ul>
      <li>
        <p>
          [ ] Før du fyrer opp raketten: bruk klossen
          <code class="blockmotion">gå til</code> for å få raketten til å flytte
          seg til bunnen av skjermen, men slik at den er samme sted horisontalt.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul

når [mellomrom v] trykkes
gå til x: (mus x) y: (-200)
vis
gli (1) sekunder til x: (mus x) y: (mus y)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Trykk mellomromstasten.</p>
      </li>
      <li>
        <p>[ ] Flyr raketten mot musepekeren fra bunnen av skjermen?</p>
      </li>
      <li>
        <p>
          [ ] Hva skjer hvis du flytter på musa og trykker mellomromstasten
          igjen?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Endelig, prøv å få til det samme ved å bruke museknappen i stedet
          for mellomromstasten. For å gjøre dette kan vi pakke skriptet vårt inn
          i <code class="blockcontrol">for alltid</code>- og
          <code class="blockcontrol">hvis museknappen er trykket</code>-klosser.
        </p>
      </li>
      <li>
        <p>
          [ ] Flytt skriptet fra
          <code class="blockevents">når mellomrom trykkes</code> til
          <code class="blockevents">når grønt flagg klikkes</code>, slik at det
          blir seende slik ut:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul
for alltid
    hvis &lt;museknappen er trykket?&gt;
        gå til x: (mus x) y: (-200)
        vis
        gli (1) sekunder til x: (mus x) y: (mus y)
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Klikk musknappen over scenen. Klikk igjen et annet sted.</p>
      </li>
      <li>
        <p>[ ] Kommer det raketter flyvende?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordringer">Utfordringer</h2>
    <ul>
      <li>
        <p>
          [ ] Prøv å få noen raketter til å bevege seg litt saktere eller
          fortere enn andre.
        </p>
      </li>
      <li>
        <p>
          [ ] Prøv å endre måten raketten flyr mot musepekeren på: få den for
          eksempel til å bue seg litt.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-f%C3%A5-raketten-til-%C3%A5-eksplodere">
    Steg 2: Få raketten til å eksplodere
  </h1>
  <p><em>Nå skal vi få raketten til å eksplodere med et digert smell!</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Første steg for å få raketten til å eksplodere er å spille av en
          bang-lyd før den begynner å bevege seg, og deretter gjemme seg når den
          når musepekeren. For å importere en lyd gå til fanen
          <code class="blocklightgrey">Lyder</code> og klikk på
          <em>Last opp lyd fra fil</em>,
          <img
            src="lessons/fyrverkeri/../bilder/hent-fra-fil.png"
            alt="Last opp lyd fra fil"
          />. Last opp lyden <code>fyrverkeri_lydogbilder/bang.wav</code>.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul
for alltid
    hvis &lt;museknappen er trykket?&gt;
        gå til x: (mus x) y: (-200)
        start lyden [bang v]
        vis
        gli (1) sekunder til x: (mus x) y: (mus y)
        skjul
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] Neste steg er å få raketten til å sende en melding til resten av
          spillet når den eksploderer. Vi skal lytte etter meldingen senere. Lag
          en ny melding som heter <code>Eksploder</code>.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul
for alltid
    hvis &lt;museknappen er trykket?&gt;
        gå til x: (mus x) y: (-200)
        start lyden [bang v]
        vis
        gli (1) sekunder til x: (mus x) y: (mus y)
        skjul
        send melding [Eksploder v]
    slutt
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
        <p>
          [ ] Sørg for at raketten spiller av lyden og gjemmer seg når den når
          musepekeren.
        </p>
      </li>
      <li>
        <p>
          [ ] Prøv å endre tallet i <code class="blockmotion">gli</code>-klossen
          slik at raketten skjules akkurat samtidig som det smeller.
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Last opp en ny figur fra fil,
          <code>fyrverkeri_lydogbilder/firework1.png</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Når denne figuren får meldingen <code>Eksploder</code> passer vi
          på at den er gjemt, flytter den til raketten ved bruk av klossen
          <code class="blockmotion">gå til</code>, viser den og skjuler den
          igjen 1 sekund senere.
        </p>
        <pre><code class="blocks">når jeg mottar [Eksploder v]
skjul
gå til x: ([x-posisjon v] av [rocket v]) y: ([y-posisjon v] av [rocket v])
vis
vent (1) sekunder
skjul
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Blir raketten erstattet av et eksplosjonsbilde når den
          eksploderer?
        </p>
      </li>
      <li>
        <p>
          [ ] Hva skjer hvis du holder musknappen nede mens du beveger på musa?
          (Ikke bekymre deg, vi skal fikse det senere.)
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-gj%C3%B8r-hver-eksplosjon-unik">
    Steg 3: Gjør hver eksplosjon unik
  </h1>
  <p>
    <em
      >Nå skal vi lage litt variasjon slik at ikke alle eksplosjonene ser helt
      like ut.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Vi kan gjøre hver eksplosjon unik ved å bruke klossen
          <code class="blocklooks">sett fargeeffekt</code> og velge en tilfeldig
          farge før eksplosjonen vises.
        </p>
        <pre><code class="blocks">når jeg mottar [Eksploder v]
skjul
sett [farge v] effekt til (tilfeldig tall fra (1) til (200))
gå til x: ([x-posisjon v] av [rocket v]) y: ([y-posisjon v] av [rocket v])
vis
vent (1) sekunder
skjul
</code></pre>
      </li>
      <li>
        <p>
          [ ] Legg til forskjellige bilder av eksplosjoner som drakter ved å
          velge <code class="blocklightgrey">Drakter</code>-fanen til
          <code>firework1</code>. Ved å klikke <em>Last opp drakt fra fil</em>,
          <img
            src="lessons/fyrverkeri/../bilder/hent-fra-fil.png"
            alt="Last opp drakt fra fil"
          />, kan du legge til <code>firework2.png</code>,
          <code>firework3.png</code> og <code>firework4.png</code> fra
          <code>fyrverkeri_lydogbilder</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Klarer du å få eksplosjonene til å bruke forskjellige drakter?
          (Hint: Du kan for eksempel bruke
          <code class="blocklooks">neste drakt</code> et passende sted i
          skriptet til Firework1.)
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Har hver eksplosjon en forskjellig farge?</p>
      </li>
      <li>
        <p>[ ] Ser hver eksplosjon forskjellig ut?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-8">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Til slutt, gjør eksplosjonen større etter at raketten eksploderer!
          I stedet for å vente i 1 sekund sett størrelsen til figuren til 5% før
          den vises, og etter at den blir synlig øk størrelsen med 5 tjue ganger
          ved bruk av klossen <code class="blockcontrol">gjenta</code>.
        </p>
        <pre><code class="blocks">når jeg mottar [Eksploder v]
skjul
neste drakt
sett [farge v] effekt til (tilfeldig tall fra (1) til (200))
gå til x: ([x-posisjon v] av [rocket v]) y: ([y-posisjon v] av [rocket v])
sett størrelse til (5) %
vis
gjenta (20) ganger
    endre størrelse med (5)
slutt
vent (1) sekunder
skjul
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-7">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>[ ] Sprer eksplosjonen seg ut fra midten av raketten?</p>
      </li>
      <li>
        <p>[ ] Vokser eksplosjonen gradvis?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordringer-2">Utfordringer</h2>
    <p>
      Prøv å gjøre hver eksplosjon enda mer unik: endre størrelsen og
      veksthastigheten for eksplosjonen.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-fiks-%22send-melding%22-feilen">
    Steg 4: Fiks &quot;send melding&quot;-feilen
  </h1>
  <p>
    Husker du at vi tidligere hadde et problem med å holde museknappen nede?
  </p>
  <p>
    Dette problemet oppstår fordi når raketten sender sin melding om
    eksplosjonen, gjentar den <code class="blockcontrol">hvis</code>-løkken med
    en gang. Dermed blir det sendt en eksplosjonsmelding før den forrige er
    ferdig med animasjonen.
  </p>
  <p>
    I programmeringsverden kaller vi denne type problemer for <em>bugs</em>,
    fordi man i gamle dager (da datamaskiner var mye større) kunne ha problemer
    med at innsekter ble fanget inne i datamaskinene og ødela programmer.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-9">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] For å fikse dette kan du erstatte klossen
          <code class="blockevents">send melding</code> med
          <code class="blockevents">send melding og vent</code>. Da vil ikke
          løkken gjentas før den forrige eksplosjonen er ferdig. Gå tilbake til
          <code>rocket</code> og endre skriptet:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
skjul
for alltid
    hvis &lt;museknappen er trykket?&gt;
        gå til x: (mus x) y: (-200)
        start lyden [bang v]
        vis
        gli (1.5) sekunder til x: (mus x) y: (mus y)
        skjul
        send melding [Eksploder v] og vent
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-8">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        [ ] Får du eksplosjonen til å dukke opp på riktig sted og til riktig
        tid?
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p>
      <strong>Gratulerer, du er ferdig! Nå kan du kose deg med spillet!</strong>
    </p>
    <p>
      Ikke glem å dele spillet ditt med alle dine venner og familien! Klikk på
      <code>Legg ut</code> i menylinjen.
    </p>
  </section>
</section>
