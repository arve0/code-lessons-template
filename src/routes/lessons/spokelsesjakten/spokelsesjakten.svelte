<!-- generated from src/lessons/spokelsesjakten/spokelsesjakten.md -->

<svelte:head>
  <title>Spøkelsesjakten</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Dette prosjektet er inspirert av tivolispillet
    <strong>Whack-a-mole</strong>, hvor man slår muldvarper ned igjen i hullene
    sine. I vårt spill er det spøkelsene som blir borte når vi klikker på dem.
    Målet er å klikke bort flest mulig i løpet av 30 sekunder.
  </p>
  <figure>
    <img
      src="lessons/spokelsesjakten/spokelsesjakten.png"
      alt="Illustrasjon av et ferdig spøkelsejakt spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-lag-et-flyvende-sp%C3%B8kelse">
    Steg 1: Lag et flyvende spøkelse
  </h1>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt Scratch-prosjekt.</p>
      </li>
      <li>
        <p>
          Slett kattefiguren ved å høyreklikke på den og velge
          <code>slett</code>
        </p>
      </li>
      <li>
        <p>Endre bakgrunnen til <code>Utendørs/Woods</code>.</p>
      </li>
      <li>
        <p>
          For å legge til et spøkelse klikker du på
          <img
            src="lessons/spokelsesjakten/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur fra biblioteket"
          />-knappen. Velg <code>Fantasi/Ghost</code>-figuren.
        </p>
      </li>
      <li>
        <p>Gi spøkelset navnet <code>spøkelse1</code>.</p>
      </li>
    </ul>
    <p>
      Du skal nå <strong>lage en variabel</strong> som styrer hvor fort
      spøkelset beveger seg. Denne kan vi senere bruke til å endre hastigheten
      når spillet er i gang.
    </p>
    <ul>
      <li>
        <p>
          Under <code class="blocklightgrey">Kode</code>, trykk på
          <code class="blockdata">Variabler</code> og så
          <code>Lag en variabel</code>. Kall variabelen <code>hastighet</code>.
          Huk av der det står <code>For denne figuren</code>.
        </p>
      </li>
      <li>
        <p>
          På scenen skal variabelen hete <code>spøkelse1: hastighet</code>. Hvis
          den bare heter <code>hastighet</code>, så slett den og legg den til en
          gang til.
        </p>
      </li>
      <li>
        <p>
          Fjern avhukingen ved siden av variabelen, slik at den ikke vises på
          scenen:
          <img
            src="lessons/spokelsesjakten/hastighet.png"
            alt="Bilde av hvordan ikke vise hastighet variabelen"
          />
        </p>
      </li>
      <li>
        <p>
          Vi vil at spøkelset skal bevege seg når spillet starter. Det gjør vi
          ved å lage følgende skript:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett [hastighet v] til [5]
for alltid
    gå (hastighet) steg
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test Prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Flyr spøkelset over skjermen?</p>
      </li>
      <li>
        <p>Hvorfor sitter spøkelset fast når det treffer kanten på skjermen?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          For å unngå at spøkelset sitter fast i kanten må vi få det til å snu
          når det treffer den. Dette gjøres ved å legge til klossen
          <code class="blockmotion">sprett tilbake ved kanten</code>. Skriptet
          ser da slik ut:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
sett [hastighet v] til [5]
for alltid
    gå (hastighet) steg
    sprett tilbake ved kanten
slutt
</code></pre>
      </li>
      <li>
        <p>
          For å hindre at spøkelset snur seg opp-ned, klikk på
          <code>Retning</code> boksen over figuren. Velg den midterste
          rotasjonsmåten (&quot;frem og tilbake&quot;).
        </p>
        <figure>
          <img
            src="lessons/spokelsesjakten/../bilder/rotasjonsmate-hv.png"
            alt="venstre/høyre"
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
        <p>Flyr spøkelset fram og tilbake?</p>
      </li>
      <li>
        <p>Flyr spøkelset riktig vei?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="ting-%C3%A5-pr%C3%B8ve">Ting å prøve</h2>
    <ul>
      <li>
        <p>
          <strong>Endre hastighetsvariabelen</strong>, slik at spøkelset går
          raskere eller saktere.
        </p>
      </li>
      <li>
        <p>
          Hvordan kan vi få spøkelset til å
          <strong>fly fortere jo lenger det flyr?</strong> (Dette er nokså
          vanskelig, så ikke vær bekymret hvis du ikke skjønner hvordan. Du vil
          få flere hint underveis.)
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-2%3A-f%C3%A5-sp%C3%B8kelset-til-%C3%A5-dukke-opp-og-forsvinne"
  >
    Steg 2: Få spøkelset til å dukke opp og forsvinne
  </h1>
  <p>
    <em
      >For å gjøre spillet morsommere vil vi få spøkelset til å dukke opp og
      forsvinne.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi lager et nytt skript, som skal kjøre samtidig med skriptet som
          beveger på spøkelset. Det nye skriptet
          <strong>viser spøkelset en tilfeldig periode</strong> og
          <strong>gjemmer det deretter bort i en tilfeldig periode</strong>.
          Dette skal skje om og om igjen, frem til spillet er slutt. Slik lager
          du skriptet:
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
for alltid
    vis
    vent (tilfeldig tall fra (3) til (5)) sekunder
    skjul
    vent (tilfeldig tall fra (2) til (4)) sekunder
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
        <p>Flytter spøkelset seg fra side til side?</p>
      </li>
      <li>
        <p>Forsvinner det og dukker opp igjen helt tilfeldig?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="ting-%C3%A5-pr%C3%B8ve-2">Ting å prøve</h2>
    <ul>
      <li>
        Prøv å <strong>endre tallene i koden</strong> der det står
        <code class="blockoperators">tilfeldig tall fra _ til _</code>. Hva
        skjer hvis du velger veldig store eller små tall? (Dette gir deg kanskje
        et nytt hint for hvordan vi skal få spøkelset til å gå fortere jo lenger
        man spiller.)
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-tryll-bort-sp%C3%B8kelset-med-et-klikk!">
    Steg 3: Tryll bort spøkelset med et klikk!
  </h1>
  <p>
    <em
      >For å gjøre dette til et ordentlig spill må vi gi spilleren noe å gjøre -
      for eksempel å klikke bort spøkelset. Når det skjer vil vi også at det
      skal komme en stilig tryllelyd!</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Gå inn på <code class="blocklightgrey">Lyder</code>-fanen, legg til en
          ny lyd med ikonet nede til venstre. Søk opp lyden
          <code>Fairydust</code> i søkefeltet, og velg den. Nå er den
          tilgjengelig for skriptene i spøkelset.
        </p>
      </li>
      <li>
        <p>
          Lag skriptet som får <strong>spøkelset til å forsvinne</strong> når
          det blir klikket på:
        </p>
        <pre><code class="blocks">når denne figuren klikkes
skjul
start lyden [fairydust v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>Forsvinner spøkelset med en tryllelyd når du klikker på det?</li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="ting-%C3%A5-pr%C3%B8ve-3">Ting å prøve</h2>
    <ul>
      <li>
        Spør de voksne om du kan ta opp en egen lyd. Denne kan du bruke i stedet
        for tryllelyden.
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-legg-til-tid-og-poeng">
    Steg 4: Legg til tid og poeng
  </h1>
  <p>
    <em
      >Vi har et spøkelse å trylle bort, så nå vil vi ha poeng for å gjøre det!
      Vi vil også ha en tidsfrist, slik at det er om å gjøre å få flest mulig
      poeng på denne tiden. Vi løser begge deler ved å bruke variabler.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny variabel som heter <code class="blockdata">Poeng</code>.
          Denne skal gjelde <code>For alle figurer</code>. Legg til en ny kloss
          som gjør at <code class="blockdata">Poeng</code>-variabelen økes med 1
          poeng for hver gang spilleren klikker på spøkelset.
        </p>
        <pre><code class="blocks">når denne figuren klikkes
skjul
start lyden [fairydust v]
endre [Poeng v] med (1)
</code></pre>
      </li>
      <li>
        <p>
          Klikk på <code>Scene</code> og lag en ny variabel som heter
          <code>Tid</code>. La variablen vises på skjermen.
        </p>
      </li>
      <li>
        <p>
          Lag et nytt skript som setter
          <code class="blockdata">Tid</code>-variabelen til
          <strong>30</strong> og <code>Poeng</code>-variablen til
          <strong>0</strong> når det grønne flagget klikkes.
        </p>
      </li>
      <li>
        <p>
          Bruk så en <code class="blockcontrol">gjenta til</code>-kloss for å
          vente i <strong>1</strong>
          sekund og deretter redusere tiden med 1 sekund. Denne skal kjøre fram
          til tiden er ute. Til slutt stopper du hele spillet med en
          <code class="blockcontrol">stopp alle</code>-kloss.
        </p>
        <pre><code class="blocks">Når grønt flagg klikkes
sett [Tid v] til [30]
sett [Poeng v] til [0]
gjenta til &lt;(tid) = [0]&gt;
    vent (1) sekunder
    endre [Tid v] med (-1)
slutt
stopp [alle v] :: control
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="ting-%C3%A5-pr%C3%B8ve-4">Ting å prøve</h2>
    <ul>
      <li>
        Hvordan kan du få spøkelset til å gå fortere etter at spillet er i gang?
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <ul>
      <li>
        <strong>Bra jobba!</strong> Nå er du egentlig ferdig med spillet, men
        prøv deg gjerne på neste steg også.
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="en-ekstra-utfordring%3A-flere-sp%C3%B8kelser!">
      En ekstra utfordring: Flere spøkelser!
    </h2>
    <p>
      <em
        >Hvis ett spøkelse er bra, må vel flere være enda bedre! La oss ha tre
        spøkelser flyvende rundt!</em
      >
    </p>
    <ul>
      <li>
        <p>
          <strong>Lag flere spøkelser</strong> ved å høyreklikke på det du
          allerede har, og så kopiere dette.
        </p>
      </li>
      <li>
        <p>
          <strong>La spøkelsene få ulik størrelse</strong>. Dette gjør du ved å
          velge et spøkelse, trykke <code>Størrelse</code>-boksen og endre
          tallet litt.
        </p>
      </li>
      <li>
        <p>
          Du kan også <strong>endre spøkelsenes flyvefart</strong>. Dette gjøres
          i <code class="blockdata">hastighet</code>-variabelen i det øverste
          skriptet for hver enkelt figur.
        </p>
      </li>
      <li>
        <p>
          Til slutt kan du <strong>spre spøkelsene</strong> litt bedre ut på
          scenen. Dette gjør du ved å klikke og dra figurene rundt i selve
          skjermbildet.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Har du nå tre spøkelser som flyr fra side til side?</p>
      </li>
      <li>
        <p>Som plutselig forsvinner og dukker opp igjen?</p>
      </li>
      <li>
        <p>Forsvinner de når du klikker på dem?</p>
      </li>
    </ul>
    <p>Gratulerer! Da har du gjort alt riktig!</p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="ting-%C3%A5-pr%C3%B8ve-5">Ting å prøve</h2>
    <ul>
      <li>
        <p>
          Hvor mange spøkelser synes du spillet fungerer best med?
          <strong>Legg til flere</strong> og prøv!
        </p>
      </li>
      <li>
        <p>
          Klarer du å få spøkelsene til <strong>å se forskjellige ut</strong>?
          Klikk på <code class="blocklightgrey">Drakter</code> og prøv deg frem.
          Du kan også velge noen av klossene under
          <code class="blocklooks">Utseende</code>.
        </p>
      </li>
      <li>
        <p>
          Kan du få spøkelsene til
          <strong>å bli verdt forskjellige antall poeng?</strong> Hva med å få
          den minste og raskeste til å gi 10 poeng?
        </p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet-2">Lagre prosjektet</h2>
    <p>
      Bra jobba! Nå er du ferdig, og det er på tide med litt seriøs spilling.
      Husk også at du kan dele spillet med vennene dine. Det gjør du ved å
      klikke på <code>Legg ut</code> i toppmenyen.
    </p>
  </section>
</section>
