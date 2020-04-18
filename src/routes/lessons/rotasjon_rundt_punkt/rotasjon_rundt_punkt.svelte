<svelte:head>
  <title>Rotasjon rundt et punkt</title>
</svelte:head>
<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I denne oppgaven skal vi importere en geometrisk figur og deretter
    <code class="blockmotion">rotere</code> den. OBS! Har du allerede løst
    oppgaven med rotasjon rundt egen akse kan du hoppe over Steg 1 og heller
    bare laste inn den forrige oppgaven din fra &quot;Mine ting&quot;-mappen.
  </p>
  <figure>
    <img
      src="lessons/rotasjon_rundt_punkt/../rotasjon/Geometri.png"
      alt="Bilde av en trollmann hatt"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-forberedelser">Steg 1: Forberedelser</h1>
  <p>
    <em
      >For å gjøre det enkelt å komme i gang, henter vi inn en ferdig figur fra
      biblioteket til Scratch. Denne figuren er tilnærmet lik en likebeint
      trekant</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>[ ] Start et nytt prosjekt.</p>
      </li>
      <li>
        <p>
          [ ] Slett kattefiguren ved å høyreklikke på den og velge
          <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Legg til en ny figur. Klikk på
          <img
            src="lessons/rotasjon_rundt_punkt/../bilder/hent-fra-bibliotek.png"
            alt="Velg figur frabiblioteket"
          />-knappen og velg trollmannshatten. Vi har brukt
          <code>Ting/Wizard Hat</code>-figuren.
        </p>
      </li>
      <li>
        <p>[ ] Gi den nye figuren navnet <code>Hattulf</code>.</p>
      </li>
      <li>
        <p>
          [ ] Før vi begynner med selve oppgaven, skal vi legge inn en liten
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
          [ ] Skulle noe uventet skje nå, trenger du bare å trykke på tasten N
          på tastaturet, så vil Hattulf gå tilbake til utgangspunktet, slik at
          du kan prøve på nytt.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <ul>
      <li>
        <p>[ ] Bruk musepekeren og flytt Hattulf til et nytt sted i bildet.</p>
      </li>
      <li>
        <p>
          [ ] Trykk N på tastaturet ditt. Hopper Hattulf tilbake til midten av
          bildet? Hvis ja: Gå videre til steg 2. Hvis nei: Feilsøk koden din,
          fiks den, test på nytt.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-rotasjon-i-et-koordinatsystem">
    Steg 2: Rotasjon i et koordinatsystem
  </h1>
  <ul>
    <li>
      <p>[ ] Importer bakgrunnen 'xy-grid'</p>
    </li>
    <li>
      <p>[ ] Velg Hattulf. I scriptet</p>
      <pre><code class="blocks">når [n v] trykkes
vis
pek i retning [90 v]
gå til x: (0) y: (0)
</code></pre>
      <p>endrer vi x-verdien til -100, og y-verdien til 100.</p>
    </li>
    <li>
      <p>
        [ ] Legg merke til punktet der x-aksen (vannrett) og y-aksen (loddrett)
        krysses. Det punktet kalles origo og er det stedet hvor både x = 0 og y
        = 0.
      </p>
    </li>
  </ul>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <ul>
      <li>
        <p>
          [ ] Trykk N på tastaturet. Hattulf skal havne akkurat der de to grå
          linjene for X = -100 og Y = 100 krysses.
        </p>
      </li>
      <li>
        <p>[ ] Hvis alt ser greit ut, fortsett til neste steg.</p>
      </li>
      <li>
        <p>
          [ ] Hvis noe ikke ser riktig ut, prøv å finne ut om du har gjort en
          feil i koden din og prøv å trykke N på nytt.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-hattulf-roteres-rundt-origo">
    Steg 3: Hattulf roteres rundt origo
  </h1>
  <p>Nå skal vi altså rotere Hattulf rundt origo på en ganske enkel måte.</p>
  <ul>
    <li>
      <p>[ ] Lag dette skriptet til Hattulf:</p>
      <pre><code class="blocks">når [pil høyre v] trykkes
gå (200) steg
snu @turnRight (90) grader
</code></pre>
    </li>
  </ul>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <ul>
      <li>
        <p>
          [ ] Trykk tasten &quot;pil høyre&quot; på tastaturet. Hva skjer?
          Fortsett til Hattulf er tilbake ved startpunktet sitt.
        </p>
      </li>
      <li>
        <p>
          [ ] Hvis du studerer koden vi nettopp laget til Hattulf, ser du at vi
          ber Hattulf gå 200 steg. Hvorfor må vi gå så langt?
        </p>
      </li>
      <li>
        <p>
          [ ] Prøv å endre på antall steg Hattulf tar. Ender Hattulf opp på
          samme sted som han startet etter at du har trykket &quot;pil
          høyre&quot; fire ganger?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-en-ny-venn!">Steg 4: En ny venn!</h1>
  <ul>
    <li>
      <p>
        [ ] Legg til en ny figur. Denne gangen skal du få velge figur selv. Hvis
        den blir veldig stor i forhold til alt det andre, kan du krympe den ned
        til en passelig størrelse. Kall den nye figuren for &quot;Venn&quot;
      </p>
    </li>
    <li>
      <p>
        [ ] Lag en kopi av &quot;Når N trykkes&quot;-skriptet fra Hattulf til
        Venn, men endre y-verdien til 50.
      </p>
    </li>
    <li>
      <p>
        [ ] Kopier også over &quot;Når pil høyre trykkes&quot;-skriptet fra
        Hattulf, men halver både antall steg og antall grader i skriptet.
      </p>
    </li>
    <li>
      <p>
        [ ] For litt mer moro kan du legge til en linje med kode som skrur på
        <code class="blockpen">pennen</code> for begge figurene. Øverste del av
        pil høyre-skriptet skal da se slik ut:
      </p>
      <pre><code class="blocks">når [pil høyre v] trykkes
penn på
</code></pre>
    </li>
  </ul>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <ul>
      <li>
        <p>[ ] Trykk pil høyre. Hva skjer?</p>
      </li>
      <li>
        <p>
          [ ] Trykk pil høyre slik at Hattulf kommer tilbake til utgangspunktet.
          Hvor langt har Venn kommet nå?
        </p>
      </li>
      <li>
        <p>
          [ ] Hvor mange ganger på du trykke for at Venn kommer tilbake til
          utgangspunktet?
        </p>
      </li>
      <li>
        <p>
          [ ] Klarer du å justere utgangspunktet til Venn, slik at figuren har
          like lang avstand til origo for hver gang du trykker pil høyre?
        </p>
      </li>
    </ul>
  </section>
</section>
