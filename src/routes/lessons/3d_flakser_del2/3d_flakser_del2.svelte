<!-- generated from src/lessons/3d_flakser_del2/3d_flakser_del2.md -->

<svelte:head>
  <title>3D-flakser, del 2</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Velkommen til andre og siste del av <strong>3D-Flakser</strong>! I denne
    delen skal vi få Flakse til å flakse som en fugl, og snu seg i luften når vi
    svinger med piltastene. Til slutt skal vi gjøre det slik at man får poeng
    når man flyr igjennom en ring og taper hvis man treffer en ring. Etter det
    er det opp til deg; lag en meny, lag flere vanskelighetsgrader eller lag noe
    helt annet!
  </p>
  <figure>
    <img
      src="lessons/3d_flakser_del2/3d_flakser.png"
      alt="Illustrasjon av et ferdig 3D-Flakser spill"
    />
  </figure>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-1%3A-lag-bakken-og-f%C3%A5-den-til-f%C3%B8lge-med"
  >
    Steg 1: Lag bakken og få den til følge med
  </h1>
  <p>
    Vi begynner med et enkelt steg som gjør spillet litt mer realistisk. Siden
    figuren flyr så kan vi forvente at hvis man ikke flakser, så treffer man før
    eller siden bakken. Dette gjør vi med en ny figur som vi kaller
    <code>bakken</code>.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Lag en ny figur som heter <code>bakken</code>. Tegn en drakt til den.
          Det enkleste er å bare fylle den nederste tredjeparten av tegneområdet
          med grønt. Vi starter med å gi den følgende skript
        </p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
gå til x: (0) y: (-300)
sett størrelse til (200) %
</code></pre>
        <p>
          Nå bør bakken ligge nederst i scenen når spillet begynner. Hvis den
          ikke gjør det kan du endre litt på tallene.
        </p>
      </li>
      <li>
        <p>
          Nå vil vi at bakken skal følge med Flakse, det vil si: når Flakse er
          høyt oppe (<code class="blockdata">y</code> er stor) så skal bakken gå
          nedover, og når Flakse er langt nede så er bakken tilsvarende høyt
          oppe. Hvis Flakse berører bakken skal spilleren tape. Vi legger til
          følgende <code class="blockcontrol">for alltid</code>-løkke i skriptet
          til bakken,
        </p>
        <pre><code class="blocks">gjenta for alltid
    sett y til ((20) - (y))
    hvis &lt;berører [Flakse v]&gt;
        si [du tapte!] i (2) sekunder
        stopp [alle v] :: control
    slutt
slutt
</code></pre>
      </li>
      <li>
        <p>
          Til slutt så vil vi helst at bakken skal forsvinne når Flakse flyr
          veldig høyt. Det kan vi gjøre med
          <code class="blocklooks">skjul</code> og
          <code class="blocklooks">vis</code> kommandoene, slik
        </p>
        <pre><code class="blocks">hvis &lt;(y) &lt; [150]&gt;
    vis
ellers
    skjul
slutt
</code></pre>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-f%C3%A5-flakse-til-%C3%A5-flakse">
    Steg 2: Få Flakse til å flakse
  </h1>
  <p>
    Hvis du har gjort del en av 3D-Flakser riktig så kan du nå styre
    flakse-figuren gjennom ringene med piltastene. Det er to ulemper med dette:
    det er et veldig lett spill, og det er ikke sånn fugler flyr. Vi vil at
    Flakse faktisk må flakse for å holde seg i luften. Derfor endrer vi litt på
    skriptene til flakse-figuren slik at den flakser med vingene når vi trykker
    mellomromtasten.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          For å holde styr på hvor mange ganger spilleren har trykket på
          mellomrom så lager vi en variabel
          <code class="blockdata">flaks</code> som gjelder kun for
          flakse-figuren.
        </p>
      </li>
      <li>
        <p>
          Vi må slette testene som sjekker om <code>pil opp</code>eller
          <code>pil ned</code> tastene trykkes og erstatte dem med
        </p>
        <pre><code class="blocks">hvis &lt;tast [mellomrom v] trykket?&gt;
    endre [flaks v] med (1)
    vent (0.01) sekunder
slutt
</code></pre>
        <p>
          Alt som skjer nå er at <code class="blockdata">flaks</code> økes med
          én hver gang mellomrom trykkes. Vi lager et nytt skript hos Flakse som
          tar seg av flaksingen.
        </p>
      </li>
      <li>
        <p>
          Lag en ny variabel. Kall den <code class="blockdata">løft</code>, og
          la den gjelde kun for denne figuren. Denne variabelen skal fortelle
          oss hvor fort flakse skal flyttes opp eller ned.
        </p>
      </li>
      <li>
        <p>
          Legg inn en <code class="blockdata">sett løft til 0</code>-kloss et
          sted før spillet starter.
        </p>
      </li>
      <li>
        <p>Sett inn disse klossene først i hovedløkken til Flakse:</p>
        <pre><code class="blocks">endre [y v] med (løft)
hvis &lt;(løft) &gt; [-5]&gt;
    endre [løft v] med (-0.5)
slutt
</code></pre>
      </li>
      <li>
        <p>Til slutt lager vi et nytt skript hos Flakse slik:</p>
        <pre><code class="blocks">når jeg mottar [Nytt spill v]
gjenta for alltid
    gjenta til &lt;(flaks) = [0]&gt;
        endre [flaks v] med (-1)
        hvis &lt;(løft) &lt; [5]&gt;
            endre [løft v] med (2)
        slutt
        hvis &lt;(løft) &lt; [0]&gt;
            sett [løft v] til [0]
        slutt
    slutt
slutt
</code></pre>
        <p>
          Nå kan du justere litt på tallene i skriptene over for at Flakse flyr
          slik DU vil!
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="steg-3%3A-f%C3%A5-flakse-til-%C3%A5-snu-seg-i-luften"
  >
    Steg 3: Få Flakse til å snu seg i luften
  </h1>
  <p>
    For at spillet skal se best mulig ut så vil vi at flakse skal rotere i
    luften når vi holder piltastene inne. Litt som et fly som går inn for
    landing. Oppførselen vi ønsker når (for eksempel) høyre piltast trykkes er
    denne: når piltasten først trykkes skal figuren peke mot høyre, og der skal
    den holde seg så lenge piltasten holdes inne. Når piltast slippes skal
    figuren rotere sakte tilbake til sin vanlige posisjon.
  </p>
  <p>Dette får vi til ved å endre litt på hovedskriptet til flakse.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Legg til klossene
          <code class="blockmotion">pek i retning 135</code> og
          <code class="blockmotion">pek i retning 45</code> i testene som
          sjekker om henholdsvis høyre og venstre piltast trykkes. Prøv spillet.
          Peker figuren i riktig retning?
        </p>
      </li>
      <li>
        <p>
          Nå vil vi at figuren skal rotere tilbake til vannrett når piltastene
          ikke trykkes lenger. Det kan vi enkelt få til ved å legge til disse
          klossene under testene som sjekker om piltastene trykkes.
        </p>
        <pre><code class="blocks">hvis &lt;(retning) &lt; [90]&gt;
    snu @turnRight (1) grader
slutt
hvis &lt;(retning) &gt; [90]&gt;
    snu @turnLeft (1) grader
slutt
</code></pre>
        <p>
          Disse klossene sørger enkelt og greit for at figuren alltid prøver å
          peke mot retning 90 (som er vannrett for figuren). Når bør flyvningen
          til Flakse se ganske bra ut!
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-sjekk-om-flakse-treffer-ringene">
    Steg 4: Sjekk om Flakse treffer ringene
  </h1>
  <p>
    Nå ønsker vi at Flakse skal få poeng hver gang han flyr igjennom ringene, og
    taper om han treffer en ring. Denne oppførselen skal vi kode i
    <code class="blockcontrol">når jeg starter som klon</code>-skriptet til
    ring-figuren.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Vi begynner med å sjekke om Flakse berører den ringen som ligger
          nærmest. Husk at det er
          <code class="blockdata">distanse</code> variablen til ringen som
          forteller oss hvor nærme ringen er. Så vi må hele tiden sjekke om
          Flakse berører ringen, <em>og</em> om ringen faktisk er nærme. Du må
          legge til denne klossen et sted i skriptet til ring-klonene.
        </p>
        <pre><code class="blocks">hvis &lt;&lt;berører [Flakse v]&gt; og &lt;(distanse) &lt; [1.2]&gt;&gt;
    si [du tapte!] i (1) sekunder
    stopp [alle v] :: control
slutt
</code></pre>
        <p>
          Nå stopper spillet om man treffer en ring som er nærme. Hvis du vil
          kan du kode noe annen oppførsel når man treffer en ring (kanskje man
          bare mister et liv, eller det spilles en lyd?)
        </p>
      </li>
      <li>
        <p>
          Så ønsker vi å få poeng når vi fly gjennom ringene. Lag først en
          variabel <code class="blockdata">poeng</code> som gjelder for alle
          figurene. Nå må vi sjekke at variablene
          <code class="blockdata">x</code> og <code class="blockdata">y</code>,
          som sier hvor flakse-figuren er, ikke er altfor langt unna
          <code class="blockdata">ringX</code> og
          <code class="blockdata">ringY</code>. Vi legger til følgende klosser
          rett under hovedløkken til ringene, slik at det siste ringene gjør før
          de slettes er å sjekke om Flakse er inni.
        </p>
        <pre><code class="blocks">hvis &lt; &lt;(x) &lt; ((ringX) + (160))&gt; og &lt;(x) &gt; ((ringX) - (160))&gt; &gt;
    hvis &lt; &lt;(y) &lt; ((ringY) + (160))&gt; og &lt;(y) &gt; ((ringY) - (160))&gt; &gt;
        endre [poeng v] med (1)
    slutt
slutt
</code></pre>
        <p>
          Fungerer skriptet som det skal? Hva er det vi egentlig sjekker i den
          siste <code class="blockcontrol">hvis</code>-testen?
        </p>
      </li>
    </ul>
    <p>
      Nå er vi igrunn ferdig med det viktigste i spillet. Men det er fremdeles
      masse spennende igjen du kan prøve:
    </p>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="ting-%C3%A5-pr%C3%B8ve">Ting å prøve</h2>
    <ul>
      <li>
        <p>Lag en meny.</p>
      </li>
      <li>
        <p>
          Få ringene til å komme fortere mot deg etterhvert som du får flere
          poeng.
        </p>
      </li>
      <li>
        <p>
          Gi Flakse flere drakter å det ser ut som han flyr når han skifter
          drakt.
        </p>
      </li>
    </ul>
  </section>
</section>
