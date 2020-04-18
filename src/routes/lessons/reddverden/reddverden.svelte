<svelte:head>
  <title>Redd verden</title>
</svelte:head>
<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Kildesortering er viktig for å begrense hvor mye avfallet vårt påvirker
    miljøet. I dette spillet skal vi kildesortere og samtidig lære en hel del om
    meldinger i programmering.
  </p>
  <figure>
    <img
      src="lessons/reddverden/reddverden.png"
      alt="Illustrasjon av et ferdig kildesorterings spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-legg-til-ronny-og-s%C3%B8ppelet">
    Steg 1: Legg til Ronny og søppelet
  </h1>
  <p>
    Vi starter spillet med å introdusere Ronny, som er vår hjelper underveis, og
    søppelet som vi skal kaste.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Start et nytt prosjekt. Legg til en ny figur, enten fra
          biblioteket, slik vi har gjort, eller tegn din helt egen hjelper! Vi
          valgte figuren <code>nano</code>, da han har flere drakter som vi
          tenker å bruke i utfordrings-delene.
        </p>
        <figure>
          <img src="lessons/reddverden/ronny.png" alt="Viser figuren nano" />
        </figure>
      </li>
      <li>
        <p>
          [ ] Målet med spillet er å få all søppelet i bøttene de hører til.
          Hver gang vi fjerner en søppel-figur så får vi et poeng. Målet vårt er
          å få så mange poeng som det er søppel-biter.
        </p>
        <p>
          I første omgang vet ikke Ronny om noe av søppelet, så vi lar Ronny
          sette både poeng og mål til null. For å legge til variabler trykker vi
          på <code class="blockdata">Data</code>-kategorien og trykk på
          <code>Lag en Variabel</code>.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett [Mål v] til [0]
sett [Poeng v] til [0]
</code></pre>
      </li>
      <li>
        <p>
          [ ] Legg til seks figurer som representerer søppel. Her kan du igjen
          velge eksisterende figurer fra biblioteket, tegne dine egne, eller
          finne noen bilder på nettet du syns passer. Selv valgte vi noen
          bananer, et eple, en ballong, et helikopter, en melkekartong, og en
          avis.
        </p>
        <style>
          figure.inline > img {
            width: 100px;
            display: inline;
          }
        </style>
        <figure class="inline">
          <img src="lessons/reddverden/bananer.png" alt="Bilde av bananer" />
          <img src="lessons/reddverden/eple.png" alt="Bilde av et eple" />
          <img src="lessons/reddverden/ballong.png" alt="Bilde av en ballong" />
          <img
            src="lessons/reddverden/helikopter.png"
            alt="Bilde av et helikopter"
          />
          <img src="lessons/reddverden/melk.png" alt="Bilde av en melk" />
          <img src="lessons/reddverden/avis.png" alt="Bilde av en avis" />
        </figure>
      </li>
      <li>
        <p>
          [ ] Velg så en bakgrunn som vi kan plassere figurene våre rundt i. Vi
          valgte kjøkken fra biblioteket, men tegn gjerne noe eget eller finn et
          annet bilde du heller har lyst til å bruke.
        </p>
        <figure>
          <img
            src="lessons/reddverden/kitchen.png"
            alt="Bildet av et kjøkken fra Scratch biblioteket"
          />
        </figure>
      </li>
      <li>
        <p>
          [ ] Vi kommer til å flytte rundt på søppel-figurene, så det er viktig
          at vi plasserer dem på nytt hver gang vi starter spillet.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gå til x: (78) y: (5)
</code></pre>
        <p>
          Søppel-figurene må ha hver sin plass, så det er viktig at du finner
          noen x- og y-koordinater for hver av dem.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <ul>
      <li>
        [ ] Om du flytter rundt på søppel-bitene, blir de satt tilbake når du
        trykker på det grønne flagget?
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-sett-opp-spillet">
    Steg 2: Sett opp spillet
  </h1>
  <p>
    Ronny trenger å vite hvor mange søppel-figurer som er på brettet. For å
    finne ut av det, så ber vi om hjelp fra søppel-figurene selv.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Ronny kan kommunisere med søppelet ved hjelp av meldinger. Start
          med å sende meldingen <code>Forbered spill</code>.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett [Mål v] til [0]
sett [Poeng v] til [0]
send melding [Forbered spill v]
</code></pre>
      </li>
      <li>
        <p>
          [ ] Hver av søppel-bitene må nå svare på beskjeden ved å øke
          <code>Mål</code> med en.
        </p>
        <pre><code class="blocks">når jeg mottar [Forbered spill v]
endre [Mål v] med (1)
</code></pre>
      </li>
      <li>
        <p>
          [ ] Før spillet kan starte må vi gi Ronny litt tid til å kommunisere
          og la søppelet telle opp målet vi skal nå. En ting vi kan gjøre er å
          la Ronny snakke litt. Når Ronny er ferdig med å prate, så kan vi
          starte spillet.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett [Mål v] til [0]
sett [Poeng v] til [0]
send melding [Forbered spill v]
si [Hei, jeg heter Ronny, kan du hjelpe meg med å redde verden?] i (3) sekunder
send melding [Start spill v]
si [Vi må sortere avfallet til hver sin kilde, kan du hjelpe meg med det?] i (3) sekunder
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
          [ ] Blir mål satt til riktig antall søppel-biter? I vårt tilfelle skal
          det bli seks.
        </p>
      </li>
      <li>
        <p>[ ] Snakker Ronny?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring">Utfordring</h2>
    <ul>
      <li>
        <p>
          Ronny har flere drakter som viser han blid og sur. Klarer du å bytte
          drakt på Ronny når han snakker, og tilbake når han er ferdig med å
          snakke?
        </p>
        <p>
          <img
            src="lessons/reddverden/ronny_prater.png"
            alt="Bilde av Ronny som prater"
          />
          <!-- ikke figur -->
        </p>
      </li>
      <li>
        <p>
          Istedenfor snakkebobler, klarer du spille inn din egen stemme?
          <strong>Hint:</strong> Bruk blokken under.
        </p>
        <pre><code class="blocks">spill lyden [opptak 1 v] til den er ferdig
</code></pre>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-start-spillet">Steg 3: Start spillet</h1>
  <p>Nå som vi vet antall poeng vi skal nå, kan vi sette opp bøttene våre.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Tegn en ny figur for hver av bøttene <code>Mat</code>,
          <code>Plast</code> og <code>Papir</code>.
        </p>
        <figure class="inline">
          <img
            src="lessons/reddverden/mat.png"
            alt="Bilde av søpelbøtte for mat"
          />
          <img
            src="lessons/reddverden/plast.png"
            alt="Bilde av søpelbøtte for plast"
          />
          <img
            src="lessons/reddverden/papir.png"
            alt="Bilde av søpelbøtte for papir"
          />
        </figure>
      </li>
      <li>
        <p>
          [ ] Vi ønsker ikke å vise bøttene før spillet er i gang. For å få til
          dette kan vi benytte oss av <code>Start spill</code>-meldingen.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
</code></pre>
        <pre><code class="blocks">når jeg mottar [Start spill v]
vis
</code></pre>
      </li>
      <li>
        <p>
          [ ] Dette trikset kan vi også gjøre for søppelet, som også er greit å
          skjule før spillet er i gang.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
skjul
gå til x: (78) y: (5)
</code></pre>
        <pre><code class="blocks">når jeg mottar [Start spill v]
vis
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Skjules bøttene i starten? Blir de vist når Ronny er ferdig å
          snakke?
        </p>
      </li>
      <li>
        <p>[ ] Skjer det samme med søppel-bitene?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-sortering">Steg 4: Sortering</h1>
  <p>
    Nå må vi få til poeng-giving når vi flytter søppel-bitene opp i bøttene.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Måten vi flytter på søppel-bitene er at vi lar dem bevege seg
          etter musepekeren til de er flyttet til sin passende bøtte.
        </p>
        <pre><code class="blocks">når denne figuren klikkes
gjenta til &lt;berører [Mat v] ?&gt;
  gå til [musepeker v]
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] Når søppelet er lagt i sin passende bøtte, trenger vi å legge til
          ett poeng og skjule søppelet.
        </p>
        <pre><code class="blocks">når denne figuren klikkes
gjenta til &lt;berører [Mat v] ?&gt;
  gå til [musepeker v]
slutt
endre [Poeng v] med (1)
skjul
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        [ ] Når du trykker på en søppel-bit, følger den etter musepekeren?
        Forsvinner søppelbiten når den går i den riktige bøtten? Husk at ikke
        alt skal i <code>Mat</code>, noe skal også i <code>Plast</code> eller
        <code>Papir</code>.
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring-2">Utfordring</h2>
    <ul>
      <li>
        <p>
          Klarer du å avslutte flyttinga hvis du flytter søppelet til feil
          bøtte? Kanskje til og med få Ronny sur hvis feil bøtte brukes?
        </p>
        <p>
          <img
            src="lessons/reddverden/ronny_sur.png"
            alt="Bilde av Ronny som er kjempesur!"
          />
          <!-- ikke figur -->
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-avslutt-spillet">
    Steg 5: Avslutt spillet
  </h1>
  <p>Når vi har fått alt søppelet på plass, må vi avslutte spillet.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] <code>Ronny</code> trenger å vite når spillet er over. Det kan vi
          gjøre ved å legge til <code>vent til</code>-blokk i skriptet hans.
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett [Mål v] til [0]
sett [Poeng v] til [0]
send melding [Forbered spill v]
si [Hei, jeg heter Ronny, kan du hjelpe meg med å redde verden?] i (3) sekunder
send melding [Start spill v]
vent til &lt;(Poeng) = (Mål)&gt;
send melding [Spill ferdig v]
si [Takk for at du hjelper meg med å redde verden!]
</code></pre>
      </li>
      <li>
        <p>
          [ ] I tillegg til at Ronny takker oss for at vi kildesorterte alt
          avfallet, så ber vi han også sende meldingen
          <code>Spill ferdig</code>. Dette gjør at vi kan fortelle de andre
          figurene at spillet er ferdig.
        </p>
        <p>
          Da kan vi for eksempel fortelle bøttene at de skal skjule seg selv når
          spillet er ferdig.
        </p>
        <pre><code class="blocks">når jeg mottar [Spill ferdig v]
skjul
</code></pre>
      </li>
      <li>
        <p>
          [ ] Til slutt kan vi forandre bakgrunnen når spillet avsluttes, for å
          gjøre avslutningen enda litt finere. Trykk på <code>Scene</code> og
          legg til en bakgrunn.
        </p>
        <p>
          Vi valgte <code>water and rocks</code> fra biblioteket, men det er
          bare å velge noe du syns er finere, evt lage noe selv.
        </p>
        <figure>
          <img src="lessons/reddverden/finale.png" alt="Bilde av en elv" />
        </figure>
      </li>
      <li>
        <p>
          [ ] Til slutt trenger vi å fortelle når bakgrunnen skal skiftes. Du
          kan gjøre det ved å legge til følgende på skriptet til
          <code>Scene</code>.
        </p>
        <pre><code class="blocks">når jeg mottar [Spill ferdig v]
bytt bakgrunn til [water and rocks v]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        [ ] Når alt søppelet er sortert, blir bakgrunnen byttet og Ronny takker
        for hjelpen?
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring-3">Utfordring</h2>
    <ul>
      <li>
        <p>
          Klarer du å sette en tredje bakgrunn når det grønne flagget klikkes?
          Husk at vi vil fortsatt ha kjøkkenbakgrunn når søppel-figurene skal
          flyttes.
        </p>
      </li>
      <li>
        <p>
          Klarer du å forandre draken til Ronny for å vise hvor glad han blir
          når du har reddet verden?
        </p>
        <p>
          <img
            src="lessons/reddverden/ronny_blid.png"
            alt="Bilde av Ronny som er kjempeglad!"
          />
          <!-- ikke figur -->
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="hva-har-vi-l%C3%A6rt%3F">Hva har vi lært?</h1>
  <p>
    I dette spillet har vi lært hvordan vi kan bruke meldinger til å bryte opp
    spillet i mange små biter. Mindre biter gjør programmet vårt mindre
    usikkert, og lettere å få oversikt over hvis noe går galt.
  </p>
  <p>
    I tillegg lærte vi å dele ansvaret på flere figurer. Ronny hadde ansvaret
    for å holde oversikt på poengene, men fikk hjelp av søppel-figurene til å
    finne ut hvor mange søppel-biter som fantes. Dette er også et viktig
    prinsipp i programmering, nemlig fordeling av ansvar.
  </p>
</section>
