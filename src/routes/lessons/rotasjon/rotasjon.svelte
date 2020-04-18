<!-- generated from src/lessons/rotasjon/rotasjon.md -->

<svelte:head>
  <title>Rotasjon rundt egen akse</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I denne oppgaven skal vi importere en geometrisk figur og deretter
    <code class="blockmotion">rotere</code> den.
  </p>
  <figure>
    <img src="lessons/rotasjon/Geometri.png" alt="Bilde av en trollmann hatt" />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-vi-roterer-en-likebeint-trekant">
    Steg 1: Vi roterer en likebeint trekant
  </h1>
  <p>
    <em
      >For å gjøre det enkelt å komme i gang, henter vi inn en ferdig figur fra
      biblioteket til Scratch. Denne figuren ligner på en likebeint trekant</em
    >.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt prosjekt.</p>
      </li>
      <li>
        <p>
          Slett kattefiguren ved å høyreklikke på den og velge
          <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          Legg til en ny figur. Klikk på
          <img
            src="lessons/rotasjon/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur frabiblioteket"
          />-knappen og velg trollmannshatten. Vi har brukt
          <code>Ting/Wizard Hat</code>-figuren.
        </p>
      </li>
      <li>
        <p>Gi den nye figuren navnet <code>Hattulf</code>.</p>
      </li>
      <li>
        <p>
          Før vi begynner med selve oppgaven, skal vi legge inn en liten
          hjelpefunksjon om noe uventet skulle skje:
        </p>
        <pre><code class="blocks">når [n v] trykkes
vis
pek i retning [90 v]
gå til x: (0) y: (0)
</code></pre>
      </li>
      <li>
        <p>
          Skulle noe uventet skje nå, trenger du bare å trykke på tasten N på
          tastaturet, så vil Hattulf gå tilbake til utgangspunktet, slik at du
          kan prøve på nytt.
        </p>
      </li>
    </ul>
    <p>
      Vi skal nå gi Scratch beskjed om å
      <code class="blockmotion">rotere</code> hatten 90 grader.
    </p>
    <ul>
      <li>
        <p>Legg til følgende skript på <code>Hattulf</code>-figuren din.</p>
        <pre><code class="blocks">når @greenFlag klikkes
snu @turnRight (90) grader
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Hva skjer når du trykker på det grønne flagget?</p>
      </li>
      <li>
        <p>Roterer hatten som forventet?</p>
      </li>
      <li>
        <p>
          Hva tror du skjer om du trykker på det grønne flagget en gang til? I
          hvilken retning vil toppen av hatten peke?
        </p>
      </li>
      <li>
        <p>
          Hvor mange ganger må du be hatten om å rotere før den er tilbake til
          utgangspunktet?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <p>
      Rotasjon er jo gøy! Men at ting roterer med 90 grader av gangen er jo litt
      kjedelig, og litt unaturlig.
    </p>
    <ul>
      <li>
        <p>Halver antall grader hatten skal rotere per gang:</p>
        <pre><code class="blocks">når @greenFlag klikkes
snu @turnRight (45) grader
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
          Hvor mange ganger må du trykke på hatten for at den skal rotere hele
          veien rundt nå?
        </p>
      </li>
      <li>
        <p>
          Fortsett å halvere antall grader hatten skal rotere. Prøv å finne en
          sammenheng mellom hvor mange grader den roteres, og hvor mange ganger
          du må trykke på det grønne flagget for at den skal roteres helt rundt.
        </p>
      </li>
    </ul>
    <p>
      Du oppdager kanskje at det begynner å bli veldig mange klikk etterhvert?
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-a-little-more-action%2C-please!">
    Steg 2: A little more action, please!
  </h1>
  <p>
    Heldigvis kan vi ved hjelp av litt programmeringsmagi få datamaskinen til å
    gjøre jobben for oss!
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi legger til en <code class="blockcontrol">styring</code>-kloss som
          ber hatten om å rotere et bestemt antall ganger:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta (8) ganger
snu @turnRight (45) grader
</code></pre>
      </li>
      <li>
        <p>
          Tips: For hver gang du halverer vinkelen, må du doble antall
          repetisjoner for at hatten skal snurre like langt.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-the-final-countdown">
    Steg 3: The final countdown
  </h1>
  <ul>
    <li>
      <p>
        Du vet kanskje at vi vanligvis omtaler en sirkel som 360 grader. Hvis du
        fortsetter å halvere antall grader forbi 1,40625, vil du oppdage at
        gradene blir mindre enn 1, og vi må gjenta roteringen 512 ganger. Selv
        om dette selvfølgelig er mulig, og absolutt nødvendig i enkelte
        sammenhenger, er det ikke nøvendig for oss nå. Vi tar derfor en snarvei
        her, og røper at Hattulf skal rotere 1 grad 360 ganger.
      </p>
      <pre><code class="blocks">når @greenFlag klikkes
gjenta (360) ganger
snu @turnRight (1) grader
</code></pre>
    </li>
  </ul>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønnet flagget.</strong></p>
    <ul>
      <li>
        <p>
          Roterer hatten hele veien rundt seg selv når du trykker på grønt
          flagg?
        </p>
      </li>
      <li>
        <p>
          Ved å sette antall grader du roterer pr gang til 1, hvor mange ganger
          må du rotere <code>Hattulf</code> for at han skal gjøre to fulle
          roteringer? Hva med tre og en halv rotasjon? Ser disse tallene kjent
          ut?
        </p>
      </li>
    </ul>
  </section>
  <section>
    <h2 id="avslutning">Avslutning</h2>
    <ul>
      <li>
        Lagre prosjektet ved å gi det et navn, for eksempel &quot;Geometri
        1&quot;
      </li>
    </ul>
  </section>
</section>
