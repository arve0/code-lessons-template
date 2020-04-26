<!-- generated from src/lessons/pingviner_pa_tur/pingviner_pa_tur.md -->

<svelte:head>
  <title>Pingviner på tur</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Velkommen til Scratch. Vi skal sammen lage et enkelt spill hvor pingvinene
    har rømt fra akvariet i Bergen, og det er din jobb å hjelpe dem hjem igjen.
  </p>
  <figure>
    <img
      src="lessons/pingviner_pa_tur/pingviner_pa_tur.png"
      alt="Bilde av pingviner på rømmen"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="velkommen-til-scratch">Velkommen til Scratch</h1>
  <p>
    <em
      >Om du allerede kjenner Scratch og har en Scratchbruker kan du gå videre
      til
      <a
        href="lessons/pingviner_pa_tur/pingviner_pa_tur#steg-1-en-pingvin-pa-tur"
        >Steg 1</a
      >.</em
    >
  </p>
  <p>
    <a href="https://scratch.mit.edu/">Scratch</a> er et programmeringsspråk
    laget spesielt for at det skal være raskt å komme i gang med, og for at man
    raskt skal kunne lage sine egne spill og animasjoner. Scratch kjører i
    nettleseren og er helt gratis å bruke. Før du begynner å programmere er det
    lurt å lage seg en Scratchbruker fordi dette gjør det enklere å lagre
    spillene dine og dele dem med andre.
  </p>
  <section class="check">
    <h2 class="check" id="lag-en-scratchbruker">Lag en Scratchbruker</h2>
    <ul>
      <li>
        <p>
          Gå til nettsiden
          <a href="https://scratch.mit.edu/">scratch.mit.edu</a> i en nettleser.
        </p>
      </li>
      <li>
        <p>
          Om siden er på engelsk kan du endre språk til norsk (bokmål eller
          nynorsk) i nedtrekksmenyen nederst på siden.
        </p>
      </li>
      <li>
        <p>
          Klikk <strong>Bli Scratch-bruker</strong> øverst til høyre, og fyll ut
          skjemaet som dukker opp.
        </p>
      </li>
      <li>
        <p>
          Etter at du har blitt Scratchbruker kan du klikke
          <strong>Programmering</strong> øverst til venstre for å begynne å
          programmere.
        </p>
        <p>
          Videre gir vi deg en oppskrift på hvordan du kan lage et enkelt spill
          hvor du skal hjelpe pingvinene å finne veien tilbake til akvariet i
          Bergen.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-en-pingvin-p%C3%A5-tur">
    Steg 1: En pingvin på tur
  </h1>
  <p>
    <em
      >Vi begynner med å se på hvordan vi kan lage en figur og få denne til å
      bevege seg.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Når du starter et nytt Scratch-prosjekt ser du en kattefigur. I dette
          spillet skal vi ikke bruke denne. Vi begynner derfor med å slette
          kattefiguren. Høyreklikk på kattefiguren, og klikk <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          Vi skal nå legge til en pingvinfigur. Klikk på
          <img
            src="lessons/pingviner_pa_tur/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />
          nede til høyre på skjermen. Skroll nedover skjermen til du finner en
          pingvinfigur (det er flere å velge mellom). Klikk en av dem.
        </p>
      </li>
      <li>
        <p>
          Du har nå fått en pingvin inn i spillet ditt. La oss programmere den!
        </p>
        <pre><code>	Trykk på `Kode`-fanen oppe til venstre.
</code></pre>
        <p>
          Til venstre på skjermen ser du mange fargede klosser, for eksempel
          <code class="b">gå (10) steg</code>. Disse er kommandoer vi kan gi til
          figurene våre. For å skrive et program pusler vi sammen flere klosser
          ved å dra dem over til høyre delen av skjermen.
        </p>
      </li>
      <li>
        <p>Pusle sammen denne koden for pingvinen din:</p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta for alltid
    gå (10) steg
    sprett tilbake ved kanten
slutt
</code></pre>
        <p>
          Legg merke til at fargene på klossene samsvarer med kategoriene helt
          til venstre på siden. For eksempel finner du
          <code class="b">når @greenFlag klikkes</code> i
          <code class="blockevents">Hendelser</code>-kategorien.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p>
      <strong
        >Klikk på det grønne flagget øverst midt på skjermen for å prøve spillet
        ditt.</strong
      >
    </p>
    <ul>
      <li>
        <p>
          Pingvinen skal nå begynne å flytte seg frem og tilbake over skjermen.
        </p>
      </li>
      <li>
        <p>
          Du merker kanskje at pingvinen snur seg på hodet når den går mot
          venstre? Det er fordi scratchfigurer i utgangspunktet roterer når de
          skifter retning. Vi kan forbedre dette ved å legge til klossen
          <code class="b">begrens rotasjon [vend sideveis v]</code> rett under
          <code class="b">når @greenFlag klikkes</code>-klossen i programmet
          vårt.
        </p>
      </li>
    </ul>
    <p>
      Du kan bruke den røde knappen ved siden av det grønne flagget om du ønsker
      at pingvinen skal slutte å bevege seg. Etterhvert som du lager mer kode
      bør du klikke på det grønne flagget for å se hva som skjer.
    </p>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p>
      Du har nå laget et lite program! Scratch lagrer alt du gjør automatisk med
      jevne mellomrom. Det kan likevel være lurt å lagre selv også innimellom.
    </p>
    <ul>
      <li>
        <p>
          Øverst på skjermen er det et tekstfelt hvor du kan gi navn til
          prosjektet ditt. Der står det kanskje noe sånt som
          <code>Untitled</code> nå. Kall det for eksempel
          <code>Pingviner på tur</code>.
        </p>
      </li>
      <li>
        <p>
          I menyen <code>Fil</code> kan du velge <code>Lagre nå</code> for å
          lagre prosjektet.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-p%C3%A5-kryss-og-tvers">
    Steg 2: På kryss og tvers
  </h1>
  <p>
    <em>La oss se hvordan vi kan kontrollere hvordan pingvinen beveger seg.</em>
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Se nærmere på koden du har laget. Vi har fortalt pingvinen at den
          <em>for alltid</em> skal <em>gå</em> og
          <em>sprette tilbake ved kanten</em>. Ser du hvordan pingvinen gjør
          akkurat som den har blitt fortalt?
        </p>
        <p>
          Vi kan gjøre forandringer i koden vår. For eksempel sier tallet
          <code>10</code> i <code class="b">gå (10) steg</code>-klossen noe om
          hvor fort pingvinen skal bevege seg. Prøv å forandre dette tallet!
        </p>
      </li>
      <li>
        <p>
          Vi kan også endre størrelsen på pingvinen. Endre koden din slik at den
          nå ser slik ut:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett størrelse til (40) %
begrens rotasjon [vend sideveis v]
gjenta for alltid
    gå (4) steg
    sprett tilbake ved kanten
slutt
</code></pre>
      </li>
      <li>
        <p>
          Til slutt skal vi la pingvinen gå <em>tilfeldig</em> på kryss og tvers
          på skjermen. Legg til flere klosser slik at koden nå ser slik ut:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett størrelse til (40) %
begrens rotasjon [vend sideveis v]
gå til [tilfeldig sted v]
pek i retning (tilfeldig tall fra (1) til (360))
gjenta for alltid
    gå (4) steg
    sprett tilbake ved kanten
slutt
</code></pre>
        <p>
          For å lage
          <code class="b"
            >pek i retning (tilfeldig tall fra (1) til (360))</code
          >
          må du først legge til
          <code class="b">pek i retning (90 v)</code>-klossen og deretter pusle
          <code class="b">tilfeldig tall fra (1) til (10)</code>-klossen inn i
          denne og forandre <code>10</code> til <code>360</code>.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Går pingvinen mer på kryss og tvers?</p>
      </li>
      <li>
        <p>
          Starter pingvinen forskjellige steder på skjermen om du klikker på det
          grønne flagget flere ganger?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-bergen">Steg 3: Bergen</h1>
  <p>
    <em
      >Pingvinen har rømt fra akvariet i Bergen, så da burde den jo springe
      rundt i Bergens gater.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi skal nå legge til en bakgrunn på spillet vårt som viser et kart
          over Bergen. Last ned filen
          <a href="lessons/pingviner_pa_tur/bergen.png">bergen.png</a> til
          datamaskinen din.
        </p>
        <p>
          Alternativt kan du
          <a href="lessons/pingviner_pa_tur/../kart/kart.html"
            >lage ditt eget kart</a
          >
          ved å gå til
          <a href="lessons/pingviner_pa_tur/../kart/kart.html">denne siden</a>.
        </p>
      </li>
      <li>
        <p>
          For å legge til en ny bakgrunn klikker du
          <code>Last opp bakgrunn</code>:
        </p>
        <pre><code>	![Last opp bilde](../bilder/scratch3-last-opp-bakgrunn.png)

	Velg deretter filen du nettopp lastet ned.
</code></pre>
      </li>
      <li>
        <p>
          La oss nå markere Akvariet i Bergen på kartet. Hent en ny figur ved å
          klikke på
          <img
            src="lessons/pingviner_pa_tur/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />. Velg figuren <code>Button5</code>, og plasser denne ytterst på
          Nordnes for å vise hvor Akvariet er.
        </p>
        <figure>
          <img
            src="lessons/pingviner_pa_tur/nordnes.png"
            alt="Bilde av Nordnes i Bergen med kryss på akvariet"
          />
        </figure>
      </li>
      <li>
        <p>
          Vi vil nå endre navn på akvariefiguren slik at vi enklere husker hva
          den er. Trykk på figuren, og så på navnefeltet over figuren. Endre
          navnet fra <code>Button5</code> til <code>Akvariet</code>.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-hjelp-pingvinen-hjem">
    Steg 4: Hjelp pingvinen hjem
  </h1>
  <p>
    <em
      >Vi skal prøve å kontrollere pingvinen slik at vi kan hjelpe den tilbake
      til Akvariet.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <p>
      I dette spillet skal vi kontrollere pingvinen ved å klikke på kartet.
      Pingvinen skal da snu seg vekk fra der vi holder musepekeren før den går
      videre.
    </p>
    <ul>
      <li>
        <p>
          Klikk på <strong>Scene</strong> nede til venstre på skjermen. Dette
          gir oss muligheten til å skrive kode som gjelder for bakgrunnen og
          ikke for pingvinen.
        </p>
      </li>
      <li>
        <p>Lag den følgende nye koden på Scenen:</p>
        <pre><code class="blocks">når scenen klikkes :: hat events
send melding [snu retning v]
trommeslag (1 v) som varer (0.25) takter
</code></pre>
        <p>
          Blokken <code>trommeslag</code> er i Scratch 3 flyttet til
          tilleggsfunksjoner. Du finner den ved å trykke på
          <code>Hent tilleggsfunksjon</code> nederst til venstre, og så legge
          til tilleggsfunksjonen <code>Musikk</code>. En slik
          <em>melding</em> er en beskjed programmet ditt sender til alle
          figurene. Du vil ikke se disse meldingene, men figurene dine kan
          reagere på dem. Her vil vi fortelle pingvinen at den skal snu når vi
          klikker på kartet (scenen).
        </p>
      </li>
      <li>
        <p>
          Klikk på pingvinen. Vi skal nå skrive et nytt skript. Lag denne koden
          ved siden av koden du skrev tidligere:
        </p>
        <pre><code class="blocks">når jeg mottar [snu retning v]
pek mot [musepeker v]
vend venstre (180) grader
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>Snur pingvinen seg vekk fra musepekeren om du klikker på kartet?</li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-pingvinen-kommer-hjem!">
    Steg 5: Pingvinen kommer hjem!
  </h1>
  <p>
    <em
      >Vi skal til slutt se hvordan pingvinen kan oppdage at den har kommet
      hjem!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Klossen <code class="b">berører [ v]</code> kan brukes for å oppdage
          om to figurer berører hverandre. Legg til en
          <code class="blockcontrol">hvis</code>-test i koden som flytter
          pingvinen:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett størrelse til (40) %
begrens rotasjon [vend sideveis v]
gå til [tilfeldig sted v]
pek i retning (tilfeldig tall fra (1) til (360))
gjenta for alltid
    gå (4) steg
    sprett tilbake ved kanten
    hvis &lt;berører [Akvariet v] ?&gt;
        si [Hurra!] i (7) sekunder
        gå til [tilfeldig sted v]
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
        <p>Hva skjer når pingvinen kommer til Akvariet?</p>
      </li>
      <li>
        <p>
          Etter at pingvinen har vært hjemme i 7 sekunder tar den seg en ny tur.
          Dukker den opp på et nytt tilfeldig sted?
        </p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="pr%C3%B8v-selv">Prøv selv</h2>
    <p>
      Vi har nå laget et lite spill sammen, men prøv gjerne å utvikle det
      videre. Her er noen ideer:
    </p>
    <ul>
      <li>
        <p>
          Legg til flere pingviner! Dette er ganske enkelt. Høyreklikk på
          pingvin-figuren og klikk deretter på <code>lag en kopi</code> for å
          lage en kopi av den.
        </p>
      </li>
      <li>
        <p>
          Kan du lage en test for om alle pingvinene har kommet hjem? Denne
          lager du enklest på akvariefiguren. Du bør bruke en
          <code class="blockcontrol">gjenta for alltid</code>-løkke, en
          <code class="blockcontrol">hvis</code>-test samt
          <code class="b">&lt; &gt; og &lt; &gt;</code>- og
          <code class="b">berører [ v]</code>-klosser.
        </p>
      </li>
      <li>
        <p>
          Kanskje vi kan telle poeng hver gang en pingvin finner veien til
          Akvariet? Til dette trenger du noe som heter variabler. Disse finner
          du under <code class="blockdata">Data</code>. Prøv selv om du får til
          noe!
        </p>
      </li>
    </ul>
  </section>
</section>
