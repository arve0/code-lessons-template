<!-- generated from src/lessons/flagg/flagg.md -->

<svelte:head>
  <title>Flagg</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    I denne oppgaven vil vi se litt nærmere på hvordan vi kan lage spennende
    mønstre og animasjoner ved hjelp av litt matematikk. Spesielt skal vi tegne
    et flagg som ser ut som om det vaier i vinden.
  </p>
  <figure>
    <img
      src="lessons/flagg/flagg.png"
      alt="Bilde av Norges flagg som vaier i vind"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-g%C3%A5-i-sirkel">Steg 1: Gå i sirkel</h1>
  <p>
    Vi har tidligere sett flere måter vi kan få figurer til å gå i sirkel på.
    For eksempel flyttet vi i
    <a href="lessons/flagg/../soloball/soloball.html">Soloball</a> figuren vekk
    fra sentrum og brukte <code class="b">pek mot [musepeker v]</code> for å
    flytte figuren i sirkel.
  </p>
  <p>
    I denne oppgaven skal vi bruke to funksjoner, <em>sinus</em> og
    <em>cosinus</em>, for å ta litt mer kontroll over hvordan sirkelbevegelsen
    skjer. Du har kanskje ikke hørt om <em>sinus</em> og <em>cosinus</em>? Disse
    er tall som forteller hvor lange sidene i en rettvinklet trekant er i
    forhold til hverandre. I figuren nedenfor forteller for eksempel
    <em>cosinus</em>, <code>cos(vinkel)</code> oss hvor lang den vannrette
    streken er i forhold til den skrå streken.
  </p>
  <figure>
    <img
      src="lessons/flagg/../lunar_lander/sinus_cosinus.png"
      alt="Bilde av sammenhengen mellom vinkel, sinus og cosinus"
    />
  </figure>
  <p>La oss se hvordan vi kan bruke dette til å tegne sirkler!</p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>Start et nytt prosjekt.</p>
      </li>
      <li>
        <p>Skriv det følgende skriptet på kattefiguren:</p>
        <pre><code class="blocks">når @greenFlag klikkes
begrens rotasjon [ikke roter v]
gjenta for alltid
    sett x til ((100) * ([cos v] av (retning)))
    sett y til ((100) * ([sin v] av (retning)))
    snu @turnLeft (5) grader
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>
        <p>
          Hva skjer? Skjønner du hvorfor kattefiguren flytter seg rundt i en
          sirkel?
        </p>
        <p>
          Tallet <code>100</code> forteller hvor stor sirkelen skal være (det er
          lengden av den skrå streken i figuren over). Prøv å endre på tallet
          (begge steder) for å se hva som skjer.
        </p>
      </li>
      <li>
        <p>
          Hva skjer om du bruker forskjellige tall de to stedene i stedet for
          <code>100</code>?
        </p>
      </li>
      <li>
        <p>
          Hvordan forandrer bevegelsen til katten seg om du forandrer tallet
          <code>5</code> i <code class="b">snu @turnLeft (5) grader</code>? Prøv
          gjerne med negative tall også!
        </p>
      </li>
    </ul>
  </section>
  <section class="tip">
    <h2 class="tip" id="retning-p%C3%A5-sirkelbevegelsen">
      Retning på sirkelbevegelsen
    </h2>
    <p>
      Du legger kanskje merke til at katten flytter seg i motsatt retning av
      hvordan pilen i <code class="b">snu @turnLeft (5) grader</code> klossen
      peker? Dette er fordi Scratch måler vinkler i motsatt retning av hva som
      er vanlig i matematikken (og som vi har tegnet over).
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-flytt-sirkelen">Steg 2: Flytt sirkelen</h1>
  <p>
    Så langt har vi bare tegnet en sirkel midt på skjermen. La oss se om vi kan
    flytte den!
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Siden vi allerede flytter figuren langs en sirkel kan vi ikke bruke
          <code class="b">gå til x: () y: ()</code>-klosser for å flytte hele
          sirkelen. I stedet vil vi bruke variabler. Lag to variabler som heter
          <code class="b">(sentrumX)</code> og
          <code class="b">(sentrumY)</code> og som gjelder kun
          <em>for denne figuren</em>.
        </p>
      </li>
      <li>
        <p>
          Vi kan nå flytte sirkelen over ved å sette
          <code class="b">(sentrumX)</code>- og
          <code class="b">(sentrumY)</code>-variablene:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
begrens rotasjon [ikke roter v]
sett [sentrumX v] til [-100]
sett [sentrumY v] til [50]
gjenta for alltid
    sett x til ((sentrumX) + ((100) * ([cos v] av (retning)))
    sett y til ((sentrumY) + ((100) * ([sin v] av (retning)))
    snu @turnLeft (5) grader
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Klikk på det grønne flagget.</strong></p>
    <ul>
      <li>Flytter sirkelen seg til det nye sentrumet?</li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="pr%C3%B8v-selv">Prøv selv</h2>
    <ul>
      <li>
        <p>
          Legg til en ny variabel, <code class="b">(radius)</code>, som også
          gjelder kun <em>for denne figuren</em>. Kan du bruke denne til å styre
          hvor stor sirkelen er? Det vil si,
          <code class="b">(radius)</code> skal fortelle lengden av den skrå
          streken i figuren i begynnelsen av oppgaven.
        </p>
        <p>
          Du trenger en <code class="b">sett [radius v] til []</code>-kloss i
          tillegg til å bruke <code class="b">(radius)</code> to steder i koden
          din.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-dansende-disker">
    Steg 3: Dansende disker
  </h1>
  <p>Nå skal vi prøve å få mange figurer til å gå i sirkel samtidig.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Tegn en ny drakt på figuren din. Bruk vektorgrafikk til å tegne en rød
          fyllt sirkel (disk). Denne kan være ganske liten, for eksempel
          <code>20 x 20</code> piksler.
        </p>
        <figure>
          <img
            src="lessons/flagg/rod_disk.png"
            alt="Bilde av en liten rød fyllt disk i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Vi kan lage mange røde disker ved å klone denne ene disken. Del koden
          din i to deler, og endre den på denne måten:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
gjenta (99) ganger
    sett [sentrumX v] til (tilfeldig tall fra (-150) til (150))
    sett [sentrumY v] til (tilfeldig tall fra (-100) til (100))
    sett [radius v] til [50]
    lag klon av [meg v]
slutt

når jeg starter som klon
gjenta for alltid
    sett x til ((sentrumX) + ((radius) * ([cos v] av (retning)))
    sett y til ((sentrumY) + ((radius) * ([sin v] av (retning)))
    snu @turnLeft (5) grader
slutt
</code></pre>
      </li>
      <li>
        <p>
          Om du kjører programmet ditt nå vil du se 99 disker som danser (og 1
          som står i ro) rundt på skjermen i et herlig kaos!
        </p>
        <p>
          Kaoset kommer faktisk av at Scratch bruker litt tid på å starte hver
          klon. Vi kan lage en mindre kaotisk dans på denne måten:
        </p>
        <p>
          Bytt <code class="b">når jeg starter som klon</code> med
          <code class="b">når jeg mottar [dans v]</code>, og legg til en
          <code class="b">send melding [dans v]</code>-kloss etter
          <code class="b">gjenta (99) ganger</code>-løkken.
        </p>
        <p>
          Om du kjører programmet ditt igjen vil du se at alle diskene danser i
          takt. Hva liker du best?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-flagrende-flagg">
    Steg 4: Flagrende flagg
  </h1>
  <p>
    Vi skal nå se hvordan vi kan gjøre om denne kaotiske dansen til noe som
    ligner på et flagrende flagg.
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          I forrige steg klonet vi disker til tilfeldige steder. Nå skal vi
          legge dem ut litt mer organisert. Skriv om skriptet som legger ut
          diskene dine slik:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
vis
sett [radius v] til [25]
sett [sentrumX v] til [-160]
gjenta (19) ganger
    sett [sentrumY v] til [-100]
    gjenta (14) ganger
        lag klon av [meg v]
        endre [sentrumY v] med (16)
    slutt
    endre [sentrumX v] med (16)
slutt
send melding [flagre v]
skjul
</code></pre>
      </li>
      <li>
        <p>
          La så <code>flagre</code>-skriptet være det samme som du brukte til å
          danse tidligere:
        </p>
        <pre><code class="blocks">når jeg mottar [flagre v]
gjenta for alltid
    sett x til ((sentrumX) + ((radius) * ([cos v] av (retning)))
    sett y til ((sentrumY) + ((radius) * ([sin v] av (retning)))
    snu @turnLeft (5) grader
slutt
</code></pre>
      </li>
      <li>
        <p>
          Kjør programmet ditt. Du vil nå se et flagg bestående av mange røde
          disker som beveger seg i sirkel. Men nå kommer det morsomme: Vi kan la
          de røde diskene bevege seg litt i utakt!
        </p>
        <p>
          Legg til klossen
          <code class="b">snu @turnRight (1) grader</code> etter
          <code class="b">lag klon av [meg v]</code>-klossen, og prøv programmet
          ditt igjen. Hva har skjedd?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-5%3A-det-norske-flagget">
    Steg 5: Det norske flagget
  </h1>
  <p>Nå skal vi se hvordan vi kan tegne flagget i forskjellige farger.</p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          Tegn først to nye drakter, begge kopier av den røde disken. Den første
          skal være en hvit disk mens den andre skal være en blå disk. Gi de tre
          diskfigurene dine navnene <code>r</code>, <code>h</code> og
          <code>b</code> slik at navnet er første bokstaven i fargen på disken:
          <code>r</code>ød, <code>h</code>vit og <code>b</code>lå.
        </p>
        <figure>
          <img
            src="lessons/flagg/tre_disker.png"
            alt="Bilde av en rød, hvit og blå disk i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          Vi skal nå bruke en ny variabel <code class="b">(flagg)</code> som
          beskriver fargene i flagget. Lag variabelen
          <em>for alle figurer</em> og legg deretter til koden:
        </p>
        <pre><code class="blocks">når @greenFlag klikkes
sett [flagg v] til [rrrrrhbbhrrrrr]
</code></pre>
        <p>
          Bokstavene <code>rrrrrhbbhrrrrr</code> beskriver at vi først vil ha 5
          røde disker, deretter 1 hvit, 2 blå, 1 hvit og 5 røde disker.
        </p>
      </li>
      <li>
        <p>
          For å kunne bruke den nye <code class="b">(flagg)</code>-variabelen må
          også hver disk vite hvilket nummer den har. Lag en ny variabel
          <code class="b">(nummer)</code> som gjelder kun
          <em>for denne figuren</em>.
        </p>
      </li>
      <li>
        <p>
          Legg til <code class="b">sett [nummer v] til [1]</code> rett under
          <code class="b">vis</code> og
          <code class="b">endre [nummer v] med (1)</code> rett under
          <code class="b">lag klon av [meg v]</code>-klossen.
        </p>
      </li>
      <li>
        <p>Til slutt skal vi endre drakt på diskene. Legg til</p>
        <pre><code class="blocks">bytt drakt til (bokstav (nummer) i (flagg))
</code></pre>
        <p>
          øverst i <code class="blockcontrol">gjenta for alltid</code>-løkken i
          <code>flagre</code>-skriptet.
        </p>
      </li>
      <li>
        <p>
          Kjør programmet ditt. Den venstre delen av flagget ditt skal nå ha
          fått fargene til det norske flagget. For å fargelegge hele flagget må
          vi gi mange flere bokstaver til
          <code class="b">(flagg)</code>-variabelen. Hele det norske flagget vil
          ha bokstavene
        </p>
        <pre><code><span class="hljs-attribute">rrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrr
hhhhhhbbhhhhhhbbbbbbbbbbbbbbbbbbbbbbbbbbbbhhhhhhbbhhhhhhrrrrrhbbhrrrrr
rrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrr
rrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrrrrrrrhbbhrrrrr</span>
</code></pre>
      </li>
      <li>
        <p>
          En enklere måte å tegne flagg på er å si at vi vil at mønsteret skal
          gjenta seg selv. Da trenger vi ikke skrive en bokstav for hver disk.
          Til dette kan vi bruke <code class="b">() mod ()</code>-klossen.
        </p>
        <p>
          Bytt <code class="b">(bokstav (nummer) i (flagg))</code> med
          <code class="b"
            >(bokstav ((nummer) mod (lengden av (flagg))) i (flagg))</code
          >
          i <code class="b">bytt drakt til [ v]</code>-klossen. Om du prøver
          programmet igjen vil du se at flaggmønsteret gjentas (sett for
          eksempel <code class="b">(flagg)</code> til <code>rhb</code> for å se
          dette).
        </p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="pr%C3%B8v-selv-2">Prøv selv</h2>
    <ul>
      <li>
        <p>
          Tegn egne flagg. Om du trenger flere farger er det bare å lage flere
          drakter. Pass på at hver drakt har en bokstav eller tall som navn.
        </p>
      </li>
      <li>
        <p>
          Du kan også leke litt med de forskjellige tallene for en litt
          annerledes animasjon. Prøv for eksempel med
          <code class="b">snu @turnRight (25) grader</code> i klossen etter
          <code class="b">lag klon av [meg v]</code>.
        </p>
      </li>
      <li>
        <p>
          Du kan endre utseendet på flagget underveis. For eksempel om du bruker
          en <code class="b">når [ v] trykkes</code>-kloss kan du endre verdien
          av <code class="b">(flagg)</code> basert på hvilke taster som trykkes.
          Fargene i flagget vil da også oppdatere seg.
        </p>
      </li>
    </ul>
  </section>
</section>
