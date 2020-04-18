<!-- generated from src/lessons/3d_flakser_del1/3d_flakser_del1.md -->

<svelte:head>
  <title>3D-flakser, del 1</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I dette prosjektet skal vi lage en versjon av Flaksefugl (som er en kopi av
    Flappy Bird) i <em>tre dimensjoner</em>! Spillet går ut på at du styrer en
    flyvende figur gjennom ringer som kommer mot deg. Du må styre figuren opp og
    ned og side til side. Hovedutfordringen i dette spillet er å få det til å
    virke som om ringene faktisk kommer mot flakseren, og så forsvinner forbi.
    Prosjektet er delt inn i to deler siden det er ganske mye vi skal igjennom.
    I denne første delen skal vi få ringene til å fungere som de skal. La oss
    sette i gang!
  </p>
  <figure>
    <img
      src="lessons/3d_flakser_del1/3d_flakser.png"
      alt="Illustrasjon av 3d-flakser med fungerende ringer"
    />
  </figure>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-1%3A-lag-ringer%2C-og-f%C3%A5-dem-til-%C3%A5-komme-mot-deg"
  >
    Steg 1: Lag ringer, og få dem til å komme mot deg
  </h1>
  <p>
    Spillet skal bestå av tre figurer: <strong>Ring</strong>,
    <strong>Flakser</strong> og <strong>Bakken</strong>.
  </p>
  <p>
    Vi begynner med å lage ringfiguren. Du kan enkelt tegne den selv som to
    sirkler inni hverandre, fylt med en farge imellom.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>[ ] Tegn figuren <strong>Ring</strong>. Jo enklere jo bedre.</p>
      </li>
      <li>
        <p>[ ] Gi ringfiguren disse skriptene:</p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
skjul
gjenta for alltid
    lag klon av [meg v]
    vent (1) sekunder
slutt

når jeg starter som klon
gå til x: (0) y: (0)
vis
gjenta (10) ganger
    endre størrelse med (5)
    vent (0.1) sekunder
slutt
slett denne klonen
</code></pre>
      </li>
    </ul>
    <p>
      Du må også lage et skript som sørger for at meldingen
      <code>Nytt spill</code> sendes når det grønne flagget klikkes.
    </p>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <ul>
      <li>
        [ ] Hva gjør de to skriptene over? Ser det ut som om ringene kommer mot
        deg?
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <p>
      De to skriptene vi har foreløpig er en OK start, men de er ikke gode nok
      til å virkelig kalles 3D! Tenk litt på hvordan det virker som om noe
      vokser i størrelse når det kommer mot deg. Når det er langt unna så vokser
      det ganske sakte, mens når det er nærme så vokser det mye fortere. Dette
      skal vi få til ved hjelp av en <em>variabel</em> som vi kaller
      <code class="blockdata">distanse</code>. Når
      <code class="blockdata">distanse</code> er stor, så er ringen langt borte,
      og skal vokse sakte. Når <code class="blockdata">distanse</code> er liten
      så betyr det at ringen er nærme, og den skal vokse fort.
    </p>
    <ul>
      <li>
        <p>
          [ ] Lag en variabel som heter <code class="blockdata">distanse</code>.
          Pass på at den kun gjelder for denne figuren.
        </p>
      </li>
      <li>
        <p>[ ] Endre skriptet over til dette:</p>
        <pre><code class="blocks">når jeg starter som klon
gå til x: (0) y: (0)
vis
sett [distanse v] til [10]
gjenta til &lt;(distanse) &lt; [1]&gt;
    sett størrelse til ((150) / (distanse)) %
    endre [distanse v] med (-0.5)
    vent (0.1) sekunder
slutt
slett denne klonen
</code></pre>
      </li>
      <li>
        <p>
          [ ] Det kan hende du må endre litt på tallene i skriptet over for at
          det skal se bra ut. Prøv deg frem!
        </p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring%3A-gjennomsiktig-effekt">
      Utfordring: Gjennomsiktig effekt
    </h2>
    <p>
      Dette er ikke viktig for å kunne fortsette med spillet, men prøv hvis du
      vil. For at det skal se enda mer ut som at ringene først er langt borte og
      så nærme, så kan du bruke klossen
    </p>
    <pre><code class="blocks">sett [gjennomsiktig v] effekt til ((100)-((150)/(distanse))
</code></pre>
    <p>
      for å gjøre ringene mer gjennomsiktig når de er langt borte. Hvilke tall
      må du putte i denne klossen for at det skal se bra ut?
    </p>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-2%3A-f%C3%A5-ringene-til-%C3%A5-dukke-opp-tilfeldige-steder"
  >
    Steg 2: Få ringene til å dukke opp tilfeldige steder
  </h1>
  <p>
    <em
      >For at spillet skal bli mest mulig utfordrende så burde ringene dukke opp
      på forskjellige steder hver gang.</em
    >
  </p>
  <p>
    Å først få dem til å dukke opp på forskjellige steder er ikke så vanskelig,
    men å få dem til å vokse på riktig måte er litt vrient.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>[ ] Prøv først å endre på blokken som plasserer ring-klonene til</p>
        <pre><code class="blocks">gå til x: (tilfeldig tall fra (-100) til (100)) y: (tilfeldig tall fra (-100) til (100))
</code></pre>
        <p>
          Det ser ganske bra ut, men ikke helt riktig, eller hva? Det er fordi
          <em>midtpunktet</em> til ringen er på samme sted hele tiden mens
          ringen er på vei mot deg. For at det skal se ut som at den suser
          <em>forbi deg</em> så må du hele tiden flytte på ringen mens den er på
          vei mot deg. For å få det til å fungere må ringklonen huske hvor den
          dukket opp til å begynne med.
        </p>
      </li>
      <li>
        <p>
          [ ] Lag variabler <code class="blockdata">ringX</code> og
          <code class="blockdata">ringY</code> som
          <em>kun gjelder for ringfiguren</em>.
        </p>
      </li>
      <li>
        <p>[ ] Erstatt blokken som først plasserer ringen med dette:</p>
        <pre><code class="blocks">sett [ringX v] til (tilfeldig tall fra (-100) til (100)
sett [ringY v] til (tilfeldig tall fra (-100) til (100)
gå til x: (ringX) y: (ringY)
</code></pre>
        <p>
          Forhåpentligvis har ikke oppførselen til ringene endret seg ennå. For
          å få midtpunktet til ringene til å flytte på seg mens ringene kommer
          mot deg kan du putte følgende blokk et sted inni løkken hvor ringen
          vokser:
        </p>
        <pre><code class="blocks">gå til x: ((ringX) / (distanse)) y: ((ringY) / (distanse))
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p>
      Trykk på det grønne flagget. Nå burde det se ut som om ringene virkelig
      kommer mot deg! Nå kan du ta et pust i bakken og se over det du har
      skrevet så langt.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-styr-en-flaksefigur-med-piltastene">
    Steg 3: Styr en flaksefigur med piltastene
  </h1>
  <p>
    <em
      >I neste del av dette kurset skal vi få en figur til å fly gjennom
      ringene. I dette steget skal vi lage den figuren, men ikke kode all
      flyveoppførselen dens.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Lag en ny figur. Det er best om den er symmetrisk, slik at det kan
          se ut som om den flyr innover i skjermen uten at det ser teit ut, bruk
          for eksempel flaggermus-figuren. Kall den <strong>Flakse</strong>.
        </p>
      </li>
      <li>
        <p>
          [ ] Lag to nye variabler, <code class="blockdata">x</code> og
          <code class="blockdata">y</code>. La dem gjelde
          <em>for alle figurer</em>.
        </p>
      </li>
      <li>
        <p>[ ] Gi Flakse følgende skript:</p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
sett [x v] til [0]
sett [y v] til [0]
gjenta for alltid
    hvis &lt;tast [pil høyre v] trykket&gt;
        endre [x v] med (10)
        vent (0.05) sekunder
    slutt
    hvis &lt;tast [pil venstre v] trykket&gt;
        endre [x v] med (-10)
        vent (0.05) sekunder
    slutt
    hvis &lt;tast [pil opp v] trykket&gt;
        endre [y v] med (10)
        vent (0.05) sekunder
    slutt
    hvis &lt;tast [pil ned v] trykket&gt;
        endre [y v] med (-10)
        vent (0.05) sekunder
    slutt
slutt
</code></pre>
        <p>
          Nå endres <code class="blockdata">x</code> og
          <code class="blockdata">y</code> når du styrer med piltastene. Vi
          venter litt inni hver <code class="blockcontrol">hvis</code>-test slik
          at <code class="blockdata">x</code> og
          <code class="blockdata">y</code> ikke plutselig vokser over alle
          grenser. Test gjerne hva som skjer dersom vi ikke venter.
        </p>
      </li>
      <li>
        <p>
          [ ] Nå vil vi at posisjonen til ringene skal endre seg når vi styrer.
          Det kan vi få til ved å endre klossen
        </p>
        <pre><code class="blocks">gå til x: ((ringX) / (distanse)) y: ((ringY) / (distanse))
</code></pre>
        <p>til dette:</p>
        <pre><code class="blocks">gå til x: (((ringX)-(x)) / (distanse)) y: (((ringY) - (y)) / (distanse))
</code></pre>
        <p>
          Ser det riktig ut nå? Nå er vi igrunn ferdig med det som trengs for å
          gå videre til del 2. I del 2 skal vi få det til å virke som om Flakse
          flakser når vi trykker på mellomromstasten, akkurat som i Flappy Bird
          og Flaksefugl. Prøv deg på disse utfordringene hvis du har mer tid
          igjen.
        </p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="ting-%C3%A5-pr%C3%B8ve">Ting å prøve</h2>
    <ul>
      <li>
        <p>
          [ ] Er det mulig å styre figuren gjennom alle ringene? Husk at spillet
          skal være akkurat passe vanskelig, og ihvertfall ikke umulig. Gå
          gjennom alle skriptene og endre på verdiene slik at spillet er gøy å
          spille, og slik at det ser bra ut. Kanskje du må endre på størrelsen
          til ringen, hvor mye ringene skal vokse, hvor mye <code>x</code> og
          <code>y</code> endrer seg når pilene trykkes, hvor lenge vi venter
          eller noen av de andre verdiene.
        </p>
      </li>
      <li>
        <p>
          [ ] Tegn din egen figur! Flaggermusfiguren er kanskje ikke helt
          perfekt. Prøv å se om du kan finne noen bilder på nettet du kan bruke,
          eller tegn din helt egen figur (den burde være et fugleliknende dyr).
          Husk at det ser mye bedre ut om figuren er symmetrisk. Det er lurt å
          gi figuren to drakter; en med vingene ned og en med vingene opp. Da
          kan vi senere få Flakse til å flakse!
        </p>
      </li>
    </ul>
  </section>
</section>
