<!-- generated from src/lessons/tegneprogram/tegneprogram.md -->

<svelte:head>
  <title>Tegneprogram</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I dette prosjektet lager vi et tegneprogram slik at du etterpå kan lage din
    egen kunst. Du kan tegne med forskjellige farger, bruke viskelær, lage
    stempler og mye mer!
  </p>
  <figure>
    <img
      src="lessons/tegneprogram/tegneprogram.png"
      alt="Bilde av et tegneprogram"
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
          Last ned zip-filen
          <a href="lessons/tegneprogram/tegneprogram_bildefiler.zip"
            >tegneprogram_bildefiler.zip</a
          >
          og legg den på skrivebordet på datamaskinen din eller en annen plass
          du finner igjen.
        </p>
      </li>
      <li>
        <p>
          Pakk ut zip-filen ved å høyreklikke på den og velge
          <code>Extract All</code>, <code>Pakk ut filer</code> eller noe
          lignende.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-dra-og-tegn!">Steg 1: Dra og tegn!</h1>
  <p>
    <em
      >Vi starter med å lage en blyant som tegner når du drar den rundt på
      scenen.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Start et nytt Scratch-prosjekt. Slett katten ved å høyreklikke på den
          og velge <code>slett</code>.
        </p>
      </li>
      <li>
        <p>
          Klikk på <code>Scene</code> og deretter på
          <code>Bakgrunner</code>-fanen. Klikk
          <img
            src="lessons/tegneprogram/../bilder/hent-fra-fil.png"
            alt="hent frafil"
          />
          for å laste opp bakgrunnen som heter <code>frame.png</code> i
          katalogen du hentet under forberedelsene.
        </p>
      </li>
      <li>
        <p>
          Klikk
          <img
            src="lessons/tegneprogram/../bilder/hent-fra-fil.png"
            alt="hent fra fil"
          />
          ved siden av <code>Ny figur</code>-teksten. Velg filen
          <code>green-pencil.png</code> som ligger i den nedlastede katalogen.
          Kall den nye figuren <code>Blyant</code>.
        </p>
      </li>
      <li>
        <p>
          Bytt til <code>Drakter</code>-fanen og velg senterpunkt for figuren
          ved hjelp av
          <img
            src="lessons/tegneprogram/../bilder/velg_senterpunkt.png"
            alt="Velg senterpunkt"
          />. Flytt korset slik at det markerer blyantspissen. Da vil spissen
          tegne og ikke midten av blyanten.
        </p>
        <figure>
          <img
            src="lessons/tegneprogram/senterpunkt.png"
            alt="Bilde av en blyant med flyttet senterpunkt"
          />
        </figure>
      </li>
      <li>
        <p>
          Få blyanten til å følge musepekeren rundt på scenen ved å bruke
          <code class="blockcontrol">for alltid</code>- og
          <code class="blockmotion">gå til musepeker</code>-klossene.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
for alltid
    gå til [musepeker v]
slutt
</code></pre>
      </li>
    </ul>
    <p>
      Nå vil vi bruke denne blyantfiguren som en ordentlig blyant. Om du ser
      under <code class="blockpen">Penn</code>-kategorien kan du se mange slags
      tegnefunksjoner. De vi er interessert i nå er
      <code class="blockpen">penn på</code> og
      <code class="blockpen">penn av</code>.
    </p>
    <ul>
      <li>
        <p>
          Vi vil bruke museknappen til å kontrollere blyanten - når museknappen
          er nede tegner blyanten og når museknappen er oppe tegner den ikke. Vi
          kan gjøre dette ved å bruke enn
          <code class="blockcontrol">hvis ellers</code>- og en
          <code class="blocksensing">museknappen er nede?</code>-kloss. Utvid
          skriptet som følger.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
for alltid
    gå til [musepeker v]
    hvis &lt;museknappen er trykket?&gt;
        penn på
    ellers
        penn av
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Følger blyanten musa rundt?</p>
      </li>
      <li>
        <p>
          Hva skjer om du holder museknappen nede og flytter på musa? Ikke bry
          deg om fargen enda.
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Etterhvert vil skjermen bli ganske full av rabbel. Vi kan bruke
          <code class="blockpen">slett</code>-klossen til å fjerne dette.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
slett
for alltid
    gå til [musepeker v]
    hvis &lt;museknappen er trykket?&gt;
        penn på
    ellers
        penn av
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-2">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>Forsvinner tegningene dine når du klikker på det grønne flagget?</li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-rydde-opp">Steg 2: Rydde opp</h1>
  <p>
    <em
      >I stedet for å måtte starte og stoppe prosjektet for å slette tavla kan
      vi lage en knapp som sletter alt i stedet.</em
    >
  </p>
  <p>Vi kan fortsatt bruke <code class="blockpen">slett</code>-klossen.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny figur fra ressurskatalogen du lastet ned i begynnelsen av
          prosjektet. Velg <code>cancel-button.png</code>.
        </p>
      </li>
      <li>
        <p>Bytt navn på figuren til <code>Slett</code>.</p>
      </li>
      <li>
        <p>Flytt figuren til nederste høyre hjørne av scenen.</p>
      </li>
      <li>
        <p>Gi slette-figuren dette skriptet:</p>
        <pre><code class="blocks">når denne figuren klikkes
slett
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-3">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>Fjerner sletteknappen alle tegningene dine?</li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-bytte-farge">Steg 3: Bytte farge</h1>
  <p>
    <em
      >Til nå har vi bare kunnet tegne blå streker. Vi kan bruke andre farger
      også!</em
    >
  </p>
  <p>
    Vi legger til noen figurer på bunnen av skjermen. Figurene vil se ut som
    fargede knapper. Når vi klikker på en knapp endres blyantfargen til den
    fargen knappen har. For å vise at vi har byttet farge skal vi gjøre det slik
    at blyanten også skifter farge.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>Lag en ny figur ved å laste opp <code>red-selector.gif</code>.</p>
      </li>
      <li>
        <p>
          Gi figuren navnet <code>Rød</code> og flytt den ned i venstre hjørne
          av skjermen.
        </p>
      </li>
      <li>
        <p>Gi den et skript som sender meldingen <code>Rød</code>.</p>
        <pre><code class="blocks">når denne figuren klikkes
send melding [Rød v]
</code></pre>
        <p>
          Dette er alt denne figuren gjør. Det vanskelige arbeidet gjøres av
          blyanten.
        </p>
      </li>
      <li>
        <p>
          Klikk på blyanten, og deretter på
          <code class="blocklightgrey">Drakter</code>-fanen. Importer drakten
          <code>red-pencil.png</code>. Sett midtpunktet til blyantspissen for
          denne drakten også.
        </p>
      </li>
      <li>
        <p>
          Legg til et nytt skript. Når blyanten får meldingen <code>Rød</code>,
          skal den forandre drakt til <code>red-pencil</code>. Og så skal den
          selvsagt også begynne å tegne rødt. Slik bygger du skriptet:
        </p>
        <pre><code class="blocks">når jeg mottar [Rød v]
bytt drakt til [red-pencil v]
velg pennfarge [#FF0000]
</code></pre>
        <p>
          For å velge fargen i
          <code class="blockpen">velg pennfarge</code>-klossen kan du først
          klikke i fargeruten på klossen, og deretter på den røde knappen du
          lagde på scenen tidligere.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-4">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Begynn å tegne en strek.</p>
      </li>
      <li>
        <p>Bytt til rødt, og se om fargen forandres.</p>
      </li>
      <li>
        <p>Kommer streken fra blyantspissen nå også?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        Gjenta punktene over for å lage blå, gule og grønne knapper og blyanter.
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-5">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Fungerer alle knappene?</p>
      </li>
      <li>
        <p>Skifter de til en annen farge på blyanten?</p>
      </li>
      <li>
        <p>Tegner de med riktig farge?</p>
      </li>
      <li>
        <p>Tegner alle figurene fra tuppen av blyanten?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-bare-tegne-p%C3%A5-tavla">
    Steg 4: Bare tegne på tavla
  </h1>
  <p>
    <em
      >Du har sikkert lagt merke til at man kan tegne over hele scenen, og det
      blir jo litt rotete. Skal vi begrense skriblingen til bare den lysegrå
      tavla må vi sette grenser for hvor blyanten kan gå.</em
    >
  </p>
  <p>
    Du husker kanskje at Scratch definerer punkter på scenen ved hjelp av
    <code>x</code>- og <code>y</code>-koordinater. Når du flytter musepekeren
    rundt omkring vil du se disse verdiene nedenfor det høyre hjørnet av scenen.
  </p>
  <p>
    For å finne ut hvor grensene for tavla går kan vi begynne nede i det venstre
    hjørnet. Da står det <code>x</code>: <em>-230</em> og <code>y</code>:
    <em>120</em>. Flytter vi pekeren rett bort til det høyre hjørnet ser vi at
    <code>y</code> er uforandret, mens <code>x</code> har blitt til
    <em>230</em>. Da vet vi at <code>x</code>-koordinatene går fra
    <em>-230</em> til <em>230</em>. <code>y</code>-koordinatene finner vi ved å
    flytte pekeren opp til toppen av tavla. Da kan vi lese av at
    <code>y</code>-koordinatene går fra <em>-120</em> til <em>170</em>.
  </p>
  <p>
    Disse verdiene kan vi bruke inne i en
    <code class="blockcontrol">hvis</code>-kloss, og si at når musepekeren er
    utenfor tavlas <code>x</code>- og <code>y</code>-koordinater, så virker ikke
    blyanten.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Legg til testene som sier at blyanten bare får følge musepekeren hvis
          <code>y</code> er større enn <em>-120</em> og mindre enn
          <em>170</em> og <code>x</code> er større enn <em>-230</em> og mindre
          enn <em>230</em>. For å få plass til alle testene må du først legge
          inn en <code class="blockoperators">_ og _</code>-kloss, og deretter
          legge til to nye <code class="blockoperators">_ og _</code>-klosser
          inni denne.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
slett
for alltid
    hvis &lt;&lt;&lt;(mus x) &gt; [-230]&gt; og &lt;(mus x) &lt; [230]&gt;&gt; og &lt;&lt;(mus y) &gt; [-120]&gt; og &lt;(mus y) &lt; [170]&gt;&gt;&gt;
        gå til [musepeker v]
        hvis &lt;museknappen er trykket?&gt;
            penn på
        ellers
            penn av
        slutt
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>
          Siden vi ikke kan tegne utenfor tavla, er det like greit at blyanten
          bare blir borte når musepekeren går utenfor tavla. For å gjøre dette
          må vi erstatte <code class="blockcontrol">hvis</code>-klossen ovenfor
          med en <code class="blockcontrol">hvis - ellers</code>-kloss. Reglene
          blir nå: <strong>Hvis</strong> musepekeren er innenfor tavlas
          <code>x</code>- og <code>y</code>-koordinater følger blyanten pekeren,
          <strong>ellers</strong> skjules blyanten.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
slett
for alltid
    hvis &lt;&lt;&lt;(mus x) &gt; [-230]&gt; og &lt;(mus x) &lt; [230]&gt;&gt; og &lt;&lt;(mus y) &gt; [-120]&gt; og &lt;(mus y) &lt; [170]&gt;&gt;&gt;
        gå til [musepeker v]
        vis
        hvis &lt;museknappen er trykket?&gt;
            penn på
        ellers
            penn av
        slutt
    ellers
        skjul
        penn av
    slutt
slutt
</code></pre>
        <p>
          Fordi blyanten vil skjules når pekeren går utenfor tavla, må vi få den
          til å vises igjen når den kommer innenfor. Pass derfor på at du får
          lagt inn en <code class="blocklooks">vis</code>-kommando innenfor
          <code class="blockcontrol">hvis</code>-klossen.
        </p>
        <p>
          Vi har også lagt på en <code class="blockpen">penn av</code>-kloss når
          blyanten er utenfor tavla, for at den ikke skal tegne en strek akkurat
          i det den kommer tilbake inn på tavla.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-6">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Kan du fremdeles tegne på tavla?</p>
      </li>
      <li>
        <p>Kan du tegne utenfor tavla?</p>
      </li>
      <li>
        <p>Hva skjer med blyanten når musepekeren går ut og inn av tavla?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-viskel%C3%A6r">Steg 5: Viskelær</h1>
  <p><em>Nå kan vi tegne hva vi vil. Men hva om vi trenger et viskelær?</em></p>
  <p>
    Hmm… da kan vi jo bare få blyanten til å tegne med samme farge som tavla! Og
    så gir vi blyanten en viskelærdrakt!
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-8">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Last opp en figur fra fil. Velg filen <code>eraser.png</code> fra
          katalogen du lastet ned i starten. Kall figuren <code>Viskelær</code>.
        </p>
      </li>
      <li>
        <p>
          Gjør figuren litt mindre med krympeknappen,
          <img src="lessons/tegneprogram/../bilder/krymp.png" alt="krymp" />, og
          deretter drar du den ned i høyre hjørne, ved siden av slett-knappen.
        </p>
      </li>
      <li>
        <p>
          Gi viskelær-figuren et skript som sender meldingen <code>Visk</code>.
        </p>
        <pre><code class="blocks">når denne figuren klikkes
send melding [Visk v]
</code></pre>
      </li>
      <li>
        <p>
          For å få blyanten til å viske må du legge til viskelæret også som en
          drakt på denne. Klikk blyantfiguren. Gå til <code>Drakter</code>-fanen
          og importer <code>eraser.png</code> igjen. Husk å sette senterpunktet
          til viskelæret foran.
        </p>
      </li>
      <li>
        <p>
          Blyanten svarer på <code>Visk</code>-meldingen med å bytte pennfarge
          til grå (bruk fargevelgeren for å velge bakgrunnsfargen til tavla).
        </p>
        <pre><code class="blocks">når jeg mottar [Visk v]
bytt drakt til [eraser v]
velg pennfarge [#606060]
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-7">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Klarer viskelæret å viske?</p>
      </li>
      <li>
        <p>Fungerer det helt ut til kantene av tavla?</p>
      </li>
      <li>
        <p>Går det greit å veksle mellom blyant og viskelær?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-6%3A-stempel">Steg 6: Stempel</h1>
  <p><em>Nå skal vi lage et stempel som kan lage små avtrykk på tavla.</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-9">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Legg til en ny figur med valgfritt utseende og kall den
          <code>Stempel</code>. Vi valgte Scratch-logoen fra
          <code>Ting</code>-mappen i biblioteket. Krymp figuren og plasser den
          nederst på skjermen ved siden av de andre verktøyene. Når figuren
          klikkes skal den sende meldingen <code>Stempel</code>.
        </p>
        <pre><code class="blocks">når denne figuren klikkes
send melding [Stempel v]
</code></pre>
      </li>
      <li>
        <p>
          Legg til en ny drakt for blyantfiguren. Det skal være samme drakt som
          du nettopp ga stempelet.
        </p>
      </li>
      <li>
        <p>
          Velg blyanten og lag en variabel. Kall variabelen
          <code class="blockdata">stempelmodus</code> og la den gjelde
          <code>For denne figuren</code>. Fjern avhukingen foran variabelen slik
          at den ikke vises på scenen. Oppgaven til denne variabelen er å holde
          styr på om vi skal tegne eller stemple.
        </p>
      </li>
      <li>
        <p>
          Legg til et skript for blyanten som responderer på
          <code>Stempel</code>-meldingen. Skriptet skal skifte drakt til den
          samme drakten du valgte for stempelet. Deretter skal det sette verdien
          til <code class="blockdata">stempelmodus</code> lik <code>på</code>.
        </p>
        <pre><code class="blocks">når jeg mottar [Stempel v]
bytt drakt til [scratch logo v]
sett [stempelmodus v] til [på]
</code></pre>
      </li>
      <li>
        <p>
          Forandre de andre skriptene som er knyttet til fargevelgerne og
          viskelæret slik at de setter
          <code class="blockdata">stempelmodus</code> lik <code>av</code>. For
          eksempel blir viskelærskriptet slik:
        </p>
        <pre><code class="blocks">når jeg mottar [Visk v]
bytt drakt til [eraser v]
velg pennfarge [#606060]
sett [stempelmodus v] til [av]
</code></pre>
      </li>
      <li>
        <p>
          Til slutt må vi sjekke variabelen inne i
          <code class="blockcontrol">hvis</code
          ><code class="blocksensing">museknappen er nede?</code> for å se om vi
          skal tegne eller stemple. Hvis
          <code class="blockdata">stempelmodus</code> er satt til
          <code>på</code> skal vi stemple, hvis ikke skal vi bruke den
          eksisterende <code class="blockpen">penn på</code>-klossen.
        </p>
        <pre><code class="blocks">når grønt flagg klikkes
slett
for alltid
    hvis &lt;&lt;&lt;(mus x) &gt; [-230]&gt; og &lt;(mus x) &lt; [230]&gt;&gt; og &lt;&lt;(mus y) &gt; [-120]&gt; og &lt;(mus y) &lt; [170]&gt;&gt;&gt;
        gå til [musepeker v]
        vis
        hvis &lt;museknappen er trykket?&gt;
            hvis &lt;(stempelmodus) = [på]&gt;
                stemple avtrykk
            ellers
                penn på
            slutt
        ellers
            penn av
        slutt
    ellers
        skjul
        penn av
    slutt
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-8">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Klarer du å stemple avtrykk?</p>
      </li>
      <li>
        <p>Hva skjer når du skifter tilbake til en av blyantene?</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p><strong>Veldig bra jobba! Du er nå ferdig med programmet.</strong></p>
    <p>Du kan også prøve disse utfordringene!</p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring-1%3A-regnbueblyant">
      Utfordring 1: Regnbueblyant
    </h2>
    <p>
      I denne utfordringen skal du legge til en blyant som kan forandrer farge
      mens du tegner. Kult, ikke sant?
    </p>
    <p>Først må du legge til regnbue-knappen og regnbue-drakten:</p>
    <ul>
      <li>
        <p>
          Legg til regnbue-knappen som figur. Du finner den i katalogen du
          lastet ned i starten. Den heter <code>rainbow-selector.gif</code>.
          Kall den <code>Regnbue</code> og sett den ved siden av de andre
          knappene nederst til venstre. Figuren skal sende meldingen
          <code>Regnbue</code> når den klikkes.
        </p>
      </li>
      <li>
        <p>
          Legg til regnbue-blyanten fra filen
          <code>rainbow-pencil.png</code> som en ny drakt til blyanten. Husk å
          justere senterpunktet.
        </p>
      </li>
      <li>
        <p>
          Nå må du lage et skript som får pennfargen til å skifte mange ganger i
          sekundet. Vi fant ut at å endre fargen med 5 hvert 0.05 sekunder
          fungerer fint, men du bør prøve ut egne verdier også.
        </p>
      </li>
    </ul>
    <p>
      <strong>Hint:</strong> Du har sikkert fått ting til å forandre seg med
      jevne mellomrom i tidligere prosjekter, for eksempel tid eller poeng. I
      dette tilfellet kan du gjøre nesten det samme, men passe på at det er
      pennfarge som endrer seg.
    </p>
    <p>
      Klossen som endrer pennfargen må legges inn i en løkke. Men du trenger
      også noe å kontrollere løkken med, slik at den bare endrer farge når
      regnbueblyanten er valgt.
    </p>
    <p>
      <strong>Hint:</strong> Du kan gjøre dette på en måte som ligner på hvordan
      <code class="blockdata">stempelmodus</code> styrer når stempelet skal
      skrues av og på. Prøv å lage en variabel som du kaller
      <code class="blockdata">regnbuemodus</code>. La denne skrues på når
      regnbueblyanten klikkes, og av når de andre fargene velges.
    </p>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-9">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Virker regnbueblyanten?</p>
      </li>
      <li>
        <p>Hva skjer når du skifter tilbake til en av de andre blyantene?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring-2%3A-snarveier">
      Utfordring 2: Snarveier
    </h2>
    <p>
      Nå skal du prøve deg på å lage snarveier på tastaturet. Det betyr at man i
      stedet for å klikke på knappene på skjermen kan bruke tastene for å bytte
      farge, stemple og viske ut.
    </p>
    <p>
      Du kan bruke <code class="blockcontrol">hvis</code
      ><code class="blocksensing">tast _ trykket?</code> for å benytte
      tastaturet. For hver tast du legger til trenger du en ny
      <code class="blockcontrol">hvis</code
      ><code class="blocksensing">tast _ trykket?</code>-kloss som sender de
      samme meldingene som verktøy-valgene gjør når de klikkes. Legg til
      skriptene på scenen.
    </p>
    <p>Vi har brukt disse snarveiene:</p>
    <p>
      Rød blyant - <code>r</code>, Grønn blyant - <code>g</code>, Blå blyant -
      <code>b</code>, Gul blyant - <code>y</code>, Regnbue blyant -
      <code>w</code>, Stempel - <code>s</code>, Visk - <code>v</code>, Slett alt
      - <code>a</code>
    </p>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-10">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Virker alle snarveiene?</p>
      </li>
      <li>
        <p>Virker knappene på skjermen fremdeles også?</p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="utfordring-3%3A-st%C3%B8rre-og-mindre">
      Utfordring 3: Større og mindre
    </h2>
    <p>
      En annen funksjon som tegneprogrammer gjerne har er å forandre størrelsen
      på blyantstreken. Prøv å se om du får til dette.
    </p>
    <p>
      Det er en ting som gjør dette vanskelig. Noen ganger trenger vi å endre
      størrelsen på blyantstreken og noen ganger trenger vi å forandre
      størrelsen på drakten. Det er avhengig av om du bruker blyanten eller
      stemplet.
    </p>
    <ul>
      <li>
        <p>
          Lag to nye figurer ved å importere <code>bigger-selector.gif</code> og
          <code>smaller-selctor.gif</code> fra katalogen med ressurser. Kall
          figurene <code>Større</code> og <code>Mindre</code>.
        </p>
      </li>
      <li>
        <p>
          La figurene sende ut meldingene <code>Større</code> og
          <code>Mindre</code>.
        </p>
      </li>
      <li>
        <p>
          Blyanten kan svare på meldingen ved å enten
          <code class="blockpen">endre pennebredde</code> med 1 eller
          <code class="blocklooks">endre størrelse</code> med 10, avhengig av
          verdien på <code>stempelmodus</code>.
        </p>
        <p>
          <strong>Hint:</strong> Du kan bruke noen av
          <code>endre</code>-klossene under
          <code class="blockpen">Penn</code> eller
          <code class="blocklooks">Utseende</code>. For å forminske setter du
          bare et minustegn foran tallet.
        </p>
        <p>
          <strong>Hint:</strong> For å holde styr på om det er blyantstreken
          eller stempelet som skal endres må du bruke en
          <code class="blockcontrol">hvis - ellers</code>-kloss.
        </p>
      </li>
      <li>
        <p>
          Glem ikke å lage snarveier for disse funksjonene også. For eksempel
          <code>pil opp</code> for større og <code>pil ned</code> for mindre.
        </p>
      </li>
      <li>
        <p>
          Har du lagt merke til at også blyantfiguren blir større når du
          forstørrer stempelet? For å unngå dette kan vi sette størrelsen til
          100% hver gang en ny farge klikkes.
        </p>
      </li>
      <li>
        <p>
          For å gjøre det enda mer avansert kan du få stempelet til å huske
          størrelsen sin fra gang til gang. Den enkleste måten å gjøre dette på
          er å opprette en ny variabel som du kaller
          <code class="blockdata">stempelstørrelse</code>. Denne må oppdateres
          hver gang størrelsen på stempelet endres. Når man skifter fra blyant
          til stempel settes så størrelsen fra denne variabelen.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-ditt-11">Test prosjektet ditt</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>Fungerer forstørrelsesknappen?</p>
      </li>
      <li>
        <p>Fungerer forminskingsknappen?</p>
      </li>
      <li>
        <p>
          Hva skjer om du bytter til stempelet, endrer størrelsen og så
          forandrer tilbake til blyanten?
        </p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet-2">Lagre prosjektet</h2>
    <p>
      <strong>Veldig, veldig bra! Nå kan du tegne akkurat det du vil!</strong>
    </p>
    <p>
      Ikke glem å del spillet ditt med venner og familie ved å trykke på
      <code>Legg ut</code> i menyen!
    </p>
  </section>
</section>
