<!-- generated from src/lessons/data_navn/data_navn.md -->

<svelte:head>
  <title>Bruk data: Jente- og guttenavn</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Vi skal her se hvordan vi kan bruke navnelister fra
    <a href="http://www.ssb.no/navn">Statistisk Sentralbyrå</a> i Scratch.
    Kanskje katten klarer å finne forskjellen på jente- og guttenavn?
  </p>
  <figure>
    <img
      src="lessons/data_navn/data_navn.png"
      alt="Illustrer katten Felix som skiller mellom jente- og guttenavn"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-statistisk-sentralbyr%C3%A5s-navnelister">
    Steg 1: Statistisk Sentralbyrås navnelister
  </h1>
  <p>
    <em
      >La oss se litt på navnelistene til Statistisk Sentralbyrå. Disse viser
      hvor mange i Norge som får hvilke navn, både i dag og tidligere.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Gå til navnesidene hos Statistisk Sentralbyrå:
          <a href="http://www.ssb.no/navn">ssb.no/navn</a>. Klikk litt rundt på
          dem for å bli kjent med hvilke data som er tilgjengelige. Prøv å søke
          på ditt eget navn og se på
          <strong>Historisk utvikling (graf)</strong>.
        </p>
        <p>
          Prøv også andre navn: Her er en liten utfordring; Se på grafen over
          historisk utvikling for navnet <strong>Sonja</strong>. Det har to
          veldig tydelige topper, en på 1920-tallet og en til på 1960-tallet.
          Kan du forklare dette?
        </p>
      </li>
      <li>
        <p>
          Vi vil hente ut lister med alle jente- og guttenavnene. Disse finner
          vi ved å klikke på fanen <strong>Tabeller</strong>. På denne siden
          finner du blant annet to tabeller som heter
          <strong>Jentenavn, alfabetisk</strong> og
          <strong>Guttenavn, alfabetisk</strong> (med årstall). Last ned disse
          to tabellene enten i <strong>Excel</strong> eller
          <strong>CSV</strong>-format.
        </p>
      </li>
      <li>
        <p>
          Åpne filene du nettopp lastet ned i Excel eller et tilsvarende
          regnearkprogram.
        </p>
        <p>
          Vi er her bare interessert i selve navnelistene, ikke alle tallene som
          sier noe om hvor mange som fikk hvert navn. Du kan derfor slette alle
          kolonnene som inneholder tall.
        </p>
      </li>
      <li>
        <p>
          Legg begge listene inn i det samme regnearket, og gi dem beskrivende
          overskrifter. Dette vil se ut omtrent som dette:
        </p>
        <figure>
          <img
            src="lessons/data_navn/navnelister_regneark.png"
            alt="Bilde av regneark med kolonne for jente- og guttenavn"
          />
        </figure>
      </li>
      <li>
        <p>
          Dette er viktig! Lagre regnearket som CSV. Du gjør dette ved å velge
          <strong>Lagre som</strong> eller <strong>Eksporter</strong> fra menyen
          og deretter velge formatet <strong>CSV</strong>. Gi filen din et navn
          du vil kjenne igjen, for eksempel <code>navnelister.csv</code>.
        </p>
      </li>
      <li>
        <p>
          Gå til verktøyet for å
          <a href="lessons/data_navn/../data/data.html"
            >lese data inn i Scratch</a
          >. Trykk på knappen <strong>Last opp datafil</strong>, og velg
          CSV-filen du nettopp laget. Dette vil laste ned et Scratchprosjekt på
          datamaskinen din, sannsynligvis en fil som heter
          <code>data.sb2</code> i <code>Nedlastinger</code>-katalogen din.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-hent-navnelistene-inn-i-scratch">
    Steg 2: Hent navnelistene inn i Scratch
  </h1>
  <p><em>Vi kan nå lese navnelistene inn i Scratch.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt Scratchprosjekt.</p>
      </li>
      <li>
        <p>
          Velg <strong>Fil</strong> i menyen og klikk på
          <strong>Last opp fra maskinen</strong>. Velg filen som ble lastet ned
          i forrige steg, sannsynligvis heter den <code>data.sb2</code> og
          ligger i katalogen <code>Nedlastinger</code>.
        </p>
      </li>
      <li>
        <p>
          Klikk <strong>OK</strong>. Navnelistene vil nå lastes inn. Det skal se
          omtrent slik ut:
        </p>
        <figure>
          <img
            src="lessons/data_navn/navnelister_scratch.png"
            alt="Bilde av navnelistene i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Navnelistene er eksempler på noe som rett og slett kalles
          <strong>lister</strong> i Scratch. De programmeres ved hjelp av
          klosser som ligger i <code class="blockdata">Data</code>-kategorien.
          Som for variabler kan du ta listene vekk fra Scenen ved å fjerne
          avhukingen, høyreklikke på den eller bruke klossen
          <code class="b">skjul liste [ v]</code>.
        </p>
      </li>
    </ul>
  </section>
  <section class="tip">
    <h2 class="tip" id="data-i-scratch">Data i Scratch</h2>
    <p>
      Vanligvis må man skrive inn alle dataene i lister selv, om man vil bruke
      dem i Scratch. Ved hjelp av
      <a href="lessons/data_navn/../data/data.html">dataverktøyet</a> kan du
      lese inn kjempemasse data som du eller noen andre allerede har laget.
    </p>
    <p>Har du noen ideer til andre data du vil lese inn på samme måte?</p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-bruk-navnelistene">
    Steg 3: Bruk navnelistene
  </h1>
  <p>
    <em
      >Vi skal nå skrive et lite program som bruker navnelistene. Kanskje vi kan
      få katten vår til å se forskjellen på jente- og guttenavn?</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi begynner med å la katten spørre om et navn. Til dette kan vi bruke
          <code class="b">spør [Skriv et navn] og vent</code>-klossen.
        </p>
      </li>
      <li>
        <p>
          For at katten skal kunne huske navnet vi forteller den vil vi bruke en
          variabel. Klikk på <code class="blockdata">Data</code> og deretter
          <code>Lag en variabel</code>. Kall variabelen
          <code class="b">(Navn)</code>.
        </p>
      </li>
      <li>
        <p>
          Vi kan nå ta vare på svaret i
          <code class="b">(Navn)</code>-variabelen.
        </p>
        <pre><code class="blocks">spør [skriv et navn] og vent
sett [Navn v] til (svar)
</code></pre>
      </li>
      <li>
        <p>
          Om du ser på klossene som nå finnes i
          <code class="blockdata">Data</code>-kategorien er det en som sier
          <code class="b">&lt;[Guttenavn v] inneholder [thing]?&gt;</code>.
          Denne klossen kan vi bruke for å finne ut om et navn finnes i
          jentenavnlisten eller guttenavnlisten (eller begge eller ingen av
          dem).
        </p>
      </li>
      <li>
        <p>
          Lag en sjekk for om <code class="b">(Navn)</code> er et jentenavn:
        </p>
        <pre><code class="blocks">spør [skriv et navn] og vent
sett [Navn v] til (svar)
hvis &lt;[Jentenavn v] inneholder (Navn)?&gt;
    si (sett sammen (Navn) [ er et jentenavn]) i (2) sekunder
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på koden din.</strong></p>
    <ul>
      <li>
        <p>Spør katten deg om å skrive inn et navn?</p>
      </li>
      <li>
        <p>
          Skriv inn et jentenavn, for eksempel <code>Emma</code>. Sier katten at
          <code>Emma er et jentenavn</code>?
        </p>
      </li>
      <li>
        <p>
          Hva skjer om du skriver inn et guttenavn? Eller et ord som ikke er et
          navn?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en sjekk for om <code class="b">(Navn)</code> er et guttenavn.
          Prøv å lag denne selv. Du kan gjøre det på akkurat samme måte som for
          jentenavn. Legg den nye hvis-testen under den du allerede har.
        </p>
      </li>
      <li>
        <p>
          Legg til en <code class="b">for alltid</code>-løkke rundt hele koden
          din. På den måten vil katten stadig spørre deg om nye navn.
        </p>
      </li>
      <li>
        <p>
          Legg også en <code class="b">når grønt flagg klikkes</code>-kloss på
          toppen av koden din, slik at du kan starte programmet ved å klikke på
          det grønne flagget.
        </p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="pr%C3%B8v-selv">Prøv selv</h2>
    <ul>
      <li>
        <p>
          Dette er et veldig enkelt eksempel på hva man kan gjøre med
          navnelistene (og det har noen problemer: for eksempel finner ikke
          katten dobbeltnavn som <code>Geir Arne</code>). Har du noen ideer til
          hvordan du kan bruke navnelistene på en enda mer spennende måte?
        </p>
      </li>
      <li>
        <p>
          Kjenner du til andre datasett som du har lyst til å jobbe med i
          Scratch? Bruk
          <a href="lessons/data_navn/../data/data.html">dataverktøyet</a> for å
          lese inn dataene.
        </p>
      </li>
    </ul>
  </section>
</section>
