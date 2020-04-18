<!-- generated from src/lessons/hvor_i_all_verden_del2/hvor_i_all_verden_del2.md -->

<svelte:head>
  <title>Hvor i All Verden? Del 2</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Hvor i All Verden? er et reise- og geografispill hvor man raskest mulig skal
    fly innom reisemål spredt rundt i Europa. Dette er den andre leksjonen av
    tre. Her skal vi spesielt se på hvordan vi kan gjøre kartet større enn
    skjermen, ved å la kartet rulle i bakgrunnen. Underveis vil vi se litt
    nærmere på hva et koordinatsystem er.
  </p>
  <p>
    I den siste leksjonen vil lage lister som gjør det enklere å legge til mange
    reisemål. Vi vil også lage en skikkelig intro til spillet.
  </p>
  <figure>
    <img
      src="lessons/hvor_i_all_verden_del2/hvor_i_all_verden_2.png"
      alt="Illustrasjon av et forbedret Hvor-i-All-Verden spill"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-0%3A-forrige-gang">Steg 0: Forrige gang</h1>
  <p><em>Vi vil nå fortsette med det programmet vi laget i del 1.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <p>
      Siden vi skal forandre og videreutvikle flere ting trenger ikke spillet du
      laget i del 1 være helt perfekt. Sjekk likevel at
    </p>
    <ul>
      <li>
        <p>
          du har et helikopter som du kan styre rundt på skjermen med
          piltastene, og
        </p>
      </li>
      <li>
        <p>du har en stedfigur som kan bli funnet av helikopteret.</p>
      </li>
    </ul>
    <p>
      Hvis ikke disse tingene fungerer så gå tilbake til del 1 og gjør dem
      ferdige.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-bakgrunnen-som-figur">
    Steg 1: Bakgrunnen som figur
  </h1>
  <p>
    <em
      >Vi vil nå at bakgrunnen skal bli flyttbar. Vanlige bakgrunner i Scratch
      kan ikke flyttes. Vi må derfor &quot;jukse litt&quot;, og la bakgrunnen
      være en figur.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Slett <code>Europakart</code>-bakgrunnen din. En helt hvit bakgrunn
          vil passe bra nå.
        </p>
      </li>
      <li>
        <p>
          Lag en ny figur ved å klikke
          <img
            src="lessons/hvor_i_all_verden_del2/../bilder/hent-fra-fil.png"
            alt="Last opp figur frafil"
          />
          ved siden av <code>Ny figur</code>. Velg filen
          <code>europakart.png</code> som du lastet ned forrige gang. Hvis du
          ikke har denne lett tilgjengelig kan du laste den ned på nytt fra
          <a href="lessons/hvor_i_all_verden_del2/europakart.png"
            >europakart.png</a
          >.
        </p>
      </li>
      <li>
        <p>Gi denne nye kartfiguren navnet <code>Kart</code>.</p>
      </li>
      <li>
        <p>
          For å være sikre på at denne figuren ligger bakerst som en bakgrunn
          kan vi starte med følgende kode:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
flytt bakover (50) lag
</code></pre>
      </li>
      <li>
        <p>
          Vi vil nå lage denne figuren så stor som mulig. Dessverre har Scratch
          en begrensning på hvor store figurer kan være. Du kan se dette om du
          først krysser av for at <code class="blocklooks">størrelse</code> skal
          vises på kart-figuren. Deretter kan du endre størrelsen med
        </p>
        <pre><code class="blocks">sett størrelse til (9999) %
</code></pre>
        <p>
          Du vil se at størrelsen ikke blir satt til <code>9999</code>, men til
          et mindre tall. Legg på en kloss som setter så stor størrelse som
          mulig på kartet når det grønne flagget klikkes.
        </p>
      </li>
      <li>
        <p>
          Til bruk senere, når vi skal lage en intro til spillet, er det greit å
          <code class="blocklooks">skjule</code> kartfiguren når det grønne
          flagget klikkes.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="koordinatsystemer">Koordinatsystemer</h1>
  <p>
    I del 1 så vi såvidt hvordan vi bruker koordinater for å beskrive hvor
    helikopteret og reisemålet er på skjermen (og på kartet). Om du trykker
    <code class="blockmotion">i</code> på en figur vil du alltid se koordinatene
    til figuren, som to tall <code>x</code> og <code>y</code>.
  </p>
  <figure>
    <img
      src="lessons/hvor_i_all_verden_del2/reisemaal.png"
      alt="Bilde av x- og y koordinatene i Scratch"
    />
  </figure>
  <p>
    Midt på skjermen har koordinatene <code>x: 0</code> og <code>y: 0</code>.
    Ellers beskriver <code>x</code> hvor et punkt er sideveis. Dersom
    <code>x</code> er mindre enn null er punktet til venstre for midten, mens om
    <code>x</code> er positivt er punktet til høyre for midten. På samme måte
    sier <code>y</code> hvor høyt på skjermen et punkt er. <code>y</code> større
    enn null betyr at punktet er over midten, mens et punkt med negativ
    <code>y</code> vil være nedenfor midten av skjermen.
  </p>
  <figure>
    <img
      src="lessons/hvor_i_all_verden_del2/koordinatsystem.png"
      alt="Bilde av et koordinatsystem"
    />
  </figure>
  <p>
    Vanligvis passer Scratch på disse koordinatene for oss, slik at vi ikke
    trenger å tenke så mye på dem.
  </p>
  <p>
    Men nå skal vi gjøre noe litt spesielt. Vi vil skape en illusjon hvor det
    ser ut som om helikopteret flytter på seg, mens det egentlig er bakgrunnen
    som flytter seg. For å gjøre dette må vi lage våre egne <code>X</code>- og
    <code>Y</code>-variabler som vi bruker til å koble helikopteret, stedet og
    bakgrunnen.
  </p>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-nye-kontroller-for-helikopteret">
    Steg 2: Nye kontroller for helikopteret
  </h1>
  <p><em>Vi vil først endre hva som skjer når vi trykker på piltastene.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag to nye variabler som gjelder for alle figurer. Disse skal hete
          <code>X</code> og <code>Y</code>, og vil beskrive hvor helikopteret er
          i forhold til kartet.
        </p>
      </li>
      <li>
        <p>
          Vi skal nå endre hva som skjer når du trykker på piltastene. I stedet
          for at helikopteret skal
        </p>
        <pre><code class="blocks">gå (hastighet) steg
</code></pre>
        <p>
          vil vi endre <code class="blockdata">X</code> eller
          <code class="blockdata">Y</code> med
          <code class="blockdata">hastighet</code> eller med
        </p>
        <pre><code class="blocks">((0) - (hastighet))
</code></pre>
        <p>Oppdater alle fire hvis-løkkene på helikopteret.</p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          Helikopteret skal nå <strong>ikke</strong> flytte seg når du trykker
          på piltastene. Hvis helikopteret flytter seg må du slette
          <code class="blockmotion">gå</code>-klossene.
        </p>
      </li>
      <li>
        <p>
          Helikopteret skal fortsatt snu seg til høyre eller venstre når du
          trykker på piltastene.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-flytt-kartet">Steg 3: Flytt kartet</h1>
  <p><em>Vi kan nå flytte kartet når helikopteret flyr rundt omkring.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <p>
      Dette steget er egentlig ganske lett. Det eneste vi må passe er at vi skal
      flytte kartet <strong>motsatt</strong> vei av hva helikopteret skal fly.
      For eksempel, om vi vil at det skal se ut som om helikopteret flytter seg
      oppover må vi flytte kartet nedover.
    </p>
    <ul>
      <li>
        <p>Legg til denne koden på kartet:</p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
vis
gjenta for alltid
    gå til x: ((0) - (X)) y: ((0) - (Y))
slutt
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
          Ser det ut som om helikopteret flytter på seg når du trykker på
          piltastene?
        </p>
      </li>
      <li>
        <p>
          Se nøye etter. Ser du at helikopteret faktisk står på samme sted hele
          tiden?
        </p>
      </li>
      <li>
        <p>Hva skjer om du flyr ut av kartet?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring">Utfordring</h2>
    <p>
      Hvordan kan du begrense hvor helikopteret flyr? Kan du legge på kode slik
      at helikopteret ikke kan fly ut av kartet?
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-la-stedet-f%C3%B8lge-med">
    Steg 4: La stedet følge med
  </h1>
  <p><em>Vi må nå la reisemålet også flytte seg med kartet.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Det er litt vanskelig å teste når vi har gjort reisemålet usynlig.
          Endre derfor på gjennomsiktigheten til sted-figuren. For eksempel kan
          du sette
        </p>
        <pre><code class="blocks">sett [gjennomsiktig v] effekt til (50)
</code></pre>
      </li>
      <li>
        <p>
          For at det skal se ut som om stedet ligger i ro på kartet må faktisk
          sted-figuren flytte seg sammen med kartet. Vi behøver da to variabler
          som holder rede på hvor stedet skal ligge i forhold til kartet. Lag to
          variabler som heter <code>stedX</code> og <code>stedY</code>. Begge
          disse skal gjelde kun for sted-figuren.
        </p>
      </li>
      <li>
        <p>Bytt ut</p>
        <pre><code class="blocks">gå til x: (-98) y: (-120)
</code></pre>
        <p>med kode som setter variablene i stedet:</p>
        <pre><code class="blocks">sett [stedX v] til [-98]
sett [stedY v] til [-120]
</code></pre>
      </li>
      <li>
        <p>
          Vi kan nå lage en helt ny blokk som flytter stedet rundt på skjermen.
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
gjenta for alltid
    gå til x: ((stedX) - (X)) y: ((stedY) - (Y))
slutt
</code></pre>
        <p>Prøv spillet. Flytter den røde prikken seg rundt på kartet?</p>
      </li>
      <li>
        <p>
          Du ser kanskje at den røde prikken ikke lenger ligger ved Barcelona?
          Det er fordi vi har laget et større kart. Da stemmer ikke lengre de
          gamle koordinatene.
        </p>
        <p>
          Endre verdiene for <code>X</code> og <code>Y</code> til det ser ut som
          om reisemålet ligger omtrent på riktig sted igjen.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-flere-steder">Steg 5: Flere steder</h1>
  <p>
    <em
      >Vi skal nå se på hvordan vi relativt enkelt kan legge til flere reisemål
      i spillet vårt.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <p>
      Om du bare ser på koden vi har lagt på sted-figuren kan det se ut som om
      det er mye arbeid å legge til et nytt reisemål. Men om vi ser litt nøyere
      oppdager vi at om vi vil ha et nytt sted å reise til kan vi bruke mye av
      den samme koden. Vi må bare endre navnet (<code class="blockdata"
        >Reis til</code
      >) og koordinatene (<code class="blockdata">X</code> og
      <code class="blockdata">Y</code>).
    </p>
    <p>
      Dette er et bra eksempel på når det kan lønne seg å bruke funksjoner,
      eller lage egne klosser som man gjør i Scratch.
    </p>
    <ul>
      <li>
        <p>
          Klikk på <code class="blockmoreblocks">Flere klosser</code> og lag en
          kloss som ser slik ut:
        </p>
        <figure>
          <img
            src="lessons/hvor_i_all_verden_del2/nykloss.png"
            alt="Bilde av en ny kloss i Scratch"
          />
        </figure>
        <p>
          hvor <code>sted</code> er tekst, mens <code>x</code> og
          <code>y</code> er tallverdier:
        </p>
      </li>
      <li>
        <p>
          Etter at du klikker <code>OK</code> dukker det opp en ny kloss på
          skjermen:
        </p>
        <pre><code class="blocks">definer Reis til (sted) (x) (y)
</code></pre>
        <p>
          Under denne klossen kan vi definere hva funksjonen vår skal gjøre.
        </p>
      </li>
      <li>
        <p>
          Flytt skriptet ditt fra
          <code class="blockevents">Nytt sted</code>-blokken til den nye
          funksjonen, og endre litt - spesielt i variablene - slik at funksjonen
          din ser slik ut:
        </p>
        <pre><code class="blocks">definer Reis til (sted) (x) (y)
sett [gjennomsiktig v] effekt til (100)
sett [stedX v] til (x)
sett [stedY v] til (y)
sett [Reis til v] til (sted)
vent til &lt;berører [Helikopter v]?&gt;
sett [gjennomsiktig v] effekt til (0)
si (sett sammen [Fant ] (sted))
gjenta (5) ganger
    gjenta (10) ganger
        endre størrelse med (10)
    slutt
    gjenta (10) ganger
        endre størrelse med (-10)
    slutt
slutt
si []
</code></pre>
      </li>
      <li>
        <p>
          Til slutt kan vi endre på
          <code class="blockevents">Nytt spill</code>-blokken slik at vi bruker
          den nye funksjonen. For eksempel
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
vis
Reis til [London] (-135) (-30) :: custom
Reis til [Oslo] (-30) (75) :: custom
Reis til [Barcelona] (-135) (-175) :: custom
</code></pre>
      </li>
      <li>
        <p>
          Om du prøver spillet nå vil du kanskje oppdage et lite problem. Dersom
          du ikke flytter deg etter å ha funnet det første reisemålet, vil det
          neste reisemålet bli funnet automatisk. Det er fordi vi ikke rekker å
          flytte sirkelen før vi tester om den berører helikopteret.
        </p>
        <p>Den enkleste måten å løse dette på er å legge på klossen</p>
        <pre><code class="blocks">vent til &lt;ikke &lt;berører [Helikopter v]?&gt;&gt;
</code></pre>
        <p>
          rett før vi venter til helikopteret berøres inne i funksjonen vår.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Flyr helikopteret rundt på kartet på en naturlig måte?</p>
      </li>
      <li>
        <p>
          Fungerer reisemålene slik de skal? Ligger de omtrent der de skal
          ligge?
        </p>
      </li>
      <li>
        <p>Kan du reise til flere reisemål på rad?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="neste-gang">Neste gang</h1>
  <p>
    Spillet vårt har blitt ganske mye kulere nå! Neste gang skal vi gjøre
    spillet ferdig ved å lage lister som gjør det enklere å lage en tilfeldig
    reiserute. Vi skal også se hvordan vi kan lage en intro til spillet, samt
    legge på en tidsbegrensning og poengsum.
  </p>
  <section class="challenge">
    <h2 class="challenge" id="pr%C3%B8v-selv">Prøv selv</h2>
    <ul>
      <li>
        <p>
          Kan du legge til flere reisemål på egen hånd? Husk at det er lurt å
          gjøre reisemålet synlig mens du tester. Da blir det enklere å finne
          koordinatene til reisemålet!
        </p>
      </li>
      <li>
        <p>
          Spillet blir morsommere hvis ikke reisemålene kommer i samme
          rekkefølge hver gang du spiller. Hvordan kan du få reisemålene til å
          komme i tilfeldig rekkefølge? Prøv å lage kode som gjør dette!
        </p>
      </li>
      <li>
        <p>
          Fortsatt er ikke kartet så veldig stort. En måte å komme seg rundt
          begrensningen på figurstørrelse i Scratch er å la bakgrunnen bestå av
          flere deler. Filen
          <a href="lessons/hvor_i_all_verden_del2/europakart.zip"
            >europakart.zip</a
          >
          inneholder 9 kartfliser du kan prøve å pusle sammen. Du må da laste
          inn hver av dem som en egen figur. Hver av dem trenger omtrent samme
          kode som kartet vi har brukt så langt. Du må bare endre litt i
          <code class="blockmotion">gå til</code>-klossene.
        </p>
      </li>
    </ul>
  </section>
</section>
