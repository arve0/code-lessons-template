<!-- generated from src/lessons/snurrige_figurer/snurrige_figurer.md -->

<svelte:head>
  <title>Snurrige figurer</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="introduksjon">Introduksjon</h1>
  <p>
    Det er ganske enkelt å lage interessante animasjoner i Scratch. Her skal vi
    se hvordan vi kan flytte og snurre på figurer for å skape spennende mønstre.
  </p>
  <figure>
    <img
      src="lessons/snurrige_figurer/snurrige_figurer.png"
      alt="Bilde av et spennende mønster rundt en sirkel"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="steg-1%3A-en-snurrig-figur">
    Steg 1: En snurrig figur
  </h1>
  <p>
    <em
      >La oss begynne enkelt. Vi vil først se hvordan vi kan flytte og snurre på
      en figur.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Start et nytt prosjekt, for eksempel ved å klikke
          <code>Programmering</code> i menyen. Hvis du allerede har startet et
          prosjekt kan du begynne på et nytt ved å velge <code>Fil</code> og
          deretter <code>Ny</code>.
        </p>
      </li>
      <li>
        <p>[ ] Slett kattefiguren.</p>
      </li>
      <li>
        <p>
          [ ] Vi vil starte med en enkel trekant-figur. Denne kan vi lage på
          forskjellige måter. Først tegner vi denne selv, men nedenfor vil vi
          også vise deg hvordan du kan lage en trekant fra en av de eksisterende
          figurene.
        </p>
        <p>
          Gå til
          <img
            src="lessons/snurrige_figurer/../bilder/hent-fra-bibliotek.png"
            alt="Velg drakt fra biblioteket"
          />
          nede i høyre hjørne og klikk på
          <img
            src="lessons/snurrige_figurer/../bilder/tegn-ny.png"
            alt="Tegn ny figur"
          />
          for å tegne din egen figur. Bruk linjeverktøyet,
          <img
            src="lessons/snurrige_figurer/../bilder/tegn-linje.png"
            alt="Linje"
          />, til å tegne en trekant.
        </p>
        <figure>
          <img
            src="lessons/snurrige_figurer/tegn_trekant.png"
            alt="Bilde av en trekant i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>[ ] Nå skal vi få trekanten til å flytte seg! Skriv denne koden:</p>
        <pre><code class="blocks">når [a v] trykkes
gå til x: (0) y: (120)
pek i retning (90 v)
gjenta (90) ganger
    snu @turnRight (4) grader
    gå (8) steg
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet">Test prosjektet</h2>
    <p><strong>Trykk på A-tasten.</strong></p>
    <ul>
      <li>
        <p>[ ] Flytter trekanten seg rundt på skjermen?</p>
      </li>
      <li>
        <p>[ ] Legg merke til at trekanten snurrer mens den flytter seg.</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="lagre-prosjektet">Lagre prosjektet</h2>
    <p>
      Du har nå skrevet et lite program! Scratch lagrer alt du gjør med jevne
      mellomrom. Det er likevel en god vane å lagre selv også innimellom.
    </p>
    <ul>
      <li>
        <p>
          [ ] Over scenen er det et tekstfelt hvor du kan gi et navn til
          prosjektet ditt. Kall det for eksempel <code>Snurrige figurer</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] I menyen <code>Fil</code> kan du velge <code>Lagre nå</code> for å
          lagre prosjektet.
        </p>
      </li>
    </ul>
  </section>
  <section class="challenge">
    <h2 class="challenge" id="endre-en-eksisterende-figur">
      Endre en eksisterende figur
    </h2>
    <p>
      Selv om det ikke finnes en trekant i figurbiblioteket, kan vi gjøre om en
      av de andre figurene til en trekant. Om du allerede har laget en trekant
      trenger du ikke gjøre dette. Men det viser deg en morsom måte å leke med
      Scratchfigurene på.
    </p>
    <ul>
      <li>
        <p>
          [ ] Velg en ny figur og klikk på forstørrelsesglasset for å hente en
          eksisterende figur. Velg figuren <code>Party Hats</code> i
          Mote-kategorien.
        </p>
      </li>
      <li>
        <p>
          [ ] Gå til <code>Drakter</code>-fanen. Ser du at denne hatten består
          av en trekant sammen med forskjellige andre former?
        </p>
      </li>
      <li>
        <p>
          [ ] Klikk forskjellige steder på hatten. Du vil da se at blå firkanter
          merker forskjellige deler av hatten. Disse delene kalles grupper.
        </p>
        <figure>
          <img
            src="lessons/snurrige_figurer/hattegruppe.png"
            alt="Viser grupper på hattefiguren i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          [ ] Du kan slette grupper ved å trykke på <code>delete</code>-tasten
          på tastaturet. Slett gruppene som ikke er en del av trekanten.
        </p>
      </li>
      <li>
        <p>
          [ ] Trekanten består egentlig av en gruppe figurer den også. Den
          grønne trekanten i bakgrunnen, og flere sirkelfigurer i forskjellige
          farger. Om du vil endre på disse kan du bruke knappen
          <code>Del opp gruppe</code>.
        </p>
        <figure>
          <img
            src="lessons/snurrige_figurer/del_opp_hattegruppe.png"
            alt="Viser  verktøyet i Scratch"
          />
        </figure>
      </li>
      <li>
        <p>
          [ ] Du kan leke videre med trekant-figuren! Bruk gjerne
          <code>Fyll farge</code>-verktøyet,
          <img
            src="lessons/snurrige_figurer/../bilder/fyll-med-farge.png"
            alt="Fyll farge"
          />
          for å endre farge på trekanten!
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-2%3A-mange-trekanter">
    Steg 2: Mange trekanter
  </h1>
  <p><em>Mye morsomt kan skje når vi lager mange trekanter!</em></p>
  <section class="check">
    <h2 class="check" id="sjekkliste-2">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Vi skal nå lage mange trekanter. Dette gjør vi ved hjelp av noe
          som heter <strong>kloning</strong>. I Scratch er en
          <strong>klon</strong> en kopi av en figur.
        </p>
        <p>
          Kopier koden du skrev tidligere ved å høyreklikke på den og velg
          <code>lag en kopi</code>. Endre tasten som starter skriptet til
          <code>b</code> og legg klossen
          <code class="b">lag klon av [meg v]</code> nederst i
          <code class="blockcontrol">gjenta</code>-løkken. Det nye skriptet skal
          da se slik ut:
        </p>
        <pre><code class="blocks">når [b v] trykkes
gå til x: (0) y: (120)
pek i retning (90 v)
gjenta (90) ganger
    snu @turnRight (4) grader
    gå (8) steg
    lag klon av [meg v]
slutt
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-2">Test prosjektet</h2>
    <p><strong>Trykk på B-tasten.</strong></p>
    <ul>
      <li>
        <p>[ ] Nå skal det tegnes mange trekanter på skjermen i en sirkel.</p>
      </li>
      <li>
        <p>
          [ ] Om du stopper skriptet (klikk på den røde knappen ved siden av det
          grønne flagget) blir trekantene borte! Dette er fordi trekantene var
          kopier som bare lever så lenge programmet kjører, de er ikke egne
          figurer.
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-3">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Vi kan også få trekantene til å røre på seg. Skriv først denne
          enkle koden:
        </p>
        <pre><code class="blocks">når jeg mottar [snurr v]
for alltid
    snu @turnRight (4) grader
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] Legg til klossen
          <code class="b">send melding [snurr v]</code> nederst i
          <em>B</em>-skriptet (etter
          <code class="blockcontrol">gjenta</code>-løkken).
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-3">Test prosjektet</h2>
    <p><strong>Trykk på B-tasten.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Begynner trekantene å røre på seg etter at de er tegnet opp? Blir
          mønsteret levende?
        </p>
      </li>
      <li>
        <p>
          [ ] Prøv å endre på <code>4</code>-tallet i <em>snurr</em>-skriptet.
          Hva skjer? Alt dette skjer bare fordi mange trekanter snurrer sammen!
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-4">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Vi kan også la trekantene flytte litt på seg. Skriv et nytt
          skript:
        </p>
        <pre><code class="blocks">når jeg mottar [flytt og snurr v]
for alltid
    gå (3) steg
    snu @turnRight (4) grader
slutt
</code></pre>
      </li>
      <li>
        <p>
          [ ] Endre <code class="b">send melding [ v]</code>-klossen nederst i
          <em>B</em>-skriptet slik at den starter dette nye
          <em>flytt og snurr</em>-skriptet.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-4">Test prosjektet</h2>
    <p><strong>Trykk på B-tasten.</strong></p>
    <ul>
      <li>
        <p>[ ] Hvordan endrer mønsteret seg?</p>
      </li>
      <li>
        <p>[ ] Prøv igjen å endre på tallene i det siste skriptet.</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-3%3A-mer-variasjon">Steg 3: Mer variasjon</h1>
  <p>
    <em
      >Vi skal nå se hvordan vi kan lage mer variasjon blant de snurrende
      figurene, ved å endre på hvordan de starter.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="sjekkliste-5">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Lag en ny variabel, <code class="b">retning :: variables</code>.
          Det er viktig at du merker av at variabelen gjelder kun
          <strong>For denne figuren</strong>. Dette gjør nemlig at hver klon kan
          ha sin egen verdi for <code class="b">retning :: variables</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Lag en kopi av <em>B</em>-skriptet. Endre tasten som starter
          skriptet til <code>c</code>, og legg også til de to
          <code class="b">retning :: stack variables</code>-klossene.
        </p>
        <pre><code class="blocks">når [c v] trykkes
sett [retning v] til (0)
gå til x: (0) y: (120)
pek i retning (90 v)
gjenta (90) ganger
    snu @turnRight (4) grader
    gå (8) steg
    endre [retning v] med (-4)
    lag klon av [meg v]
slutt
send melding [flytt og snurr v]
</code></pre>
      </li>
      <li>
        <p>
          [ ] Nå skal vi sette retningen på hver klon i det den lages. Lag dette
          nye skriptet:
        </p>
        <pre><code class="blocks">når jeg starter som klon
pek i retning (retning :: variables)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-5">Test prosjektet</h2>
    <p><strong>Trykk på C-tasten.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Ser du at trekantene peker i andre retninger. Dette forandrer
          mønsteret helt!
        </p>
      </li>
      <li>
        <p>
          [ ] Det ser ut som om en enkelt trekant svever rundt litt utenfor
          mønsteret! Hva skjer med denne trekanten?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="sjekkliste-6">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Den ene trekanten som ikke passer helt inn i mønsteret er figuren
          vår. Alle de andre trekantene er kloner. Vi har ikke sett denne
          trekanten tidligere fordi den pekte i samme retning som klonene. Men
          nå snur vi jo på klonene!
        </p>
        <p>
          La oss skjule figuren så den ikke ødelegger mønsteret. Legg til en
          <code class="b">skjul</code>-kloss øverst i <em>C</em>-skriptet.
        </p>
      </li>
      <li>
        <p>
          [ ] Siden klonene er kopier av figuren vil de også skjules. Det vil vi
          jo ikke. Vi må derfor passe på at klonene vises. Legg til en
          <code class="b">vis</code>-kloss som dette:
        </p>
        <pre><code class="blocks">når jeg starter som klon
vis
pek i retning (retning :: variables)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="test-prosjektet-6">Test prosjektet</h2>
    <p><strong>Trykk på C-tasten.</strong></p>
    <ul>
      <li>
        <p>
          [ ] Er den flytende trekanten som ikke passet inn i mønsteret borte?
        </p>
      </li>
      <li>
        <p>
          [ ] Lek med tallet <code>-4</code> i
          <code class="b">endre [retning v] :: variables</code>-klossen. Hvilken
          effekt har det å endre dette tallet?
        </p>
        <p>
          Du oppdager kanskje at det fungerer best om tallet går opp i 4?
          Hvorfor henger ikke figuren sammen hvis tallet ikke går opp i 4? (Prøv
          for eksempel med <code class="b">endre [retning v] med (1)</code>.)
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="steg-4%3A-andre-figurer">Steg 4: Andre figurer</h1>
  <p><em>Vi kan også lage mønstre av andre figurer enn trekanter.</em></p>
  <figure>
    <img
      src="lessons/snurrige_figurer/dansende_sirkler.png"
      alt="Bilde av to mønstre som er laget ved å bruke sirkler"
    />
  </figure>
  <section class="check">
    <h2 class="check" id="sjekkliste-7">Sjekkliste</h2>
    <ul>
      <li>
        <p>
          [ ] Klikk på <code>Drakter</code>-fanen. Velg en ny drakt fra
          biblioteket ved å klikke på
          <img
            src="lessons/snurrige_figurer/../bilder/hent-fra-bibliotek.png"
            alt="Velg drakt fra biblioteket"
          />. Du kan for eksempel søke opp hjertefiguren <code>Heart</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Start programmet igjen ved å trykke på <strong>C</strong>-tasten.
          Dannes det nå et mønster av hjerter? Prøv å hente inn andre drakter
          eller tegn dine egne.
        </p>
      </li>
      <li>
        <p>
          [ ] For å lage spennende mønstre er det også andre ting du kan endre
          på. Prøv å legg til klosser for gjennomsiktig effekt og fargeeffekt
          som følger:
        </p>
        <pre><code class="blocks">når [c v] trykkes
skjul
sett [gjennomsiktig v] effekt til (70)
sett [retning v] til (0)
gå til x: (0) y: (120)
pek i retning (90 v)
gjenta (90) ganger
    snu @turnRight (4) grader
    gå (8) steg
    endre [retning v] med (-4)
    endre [farge v] effekt med (20)
    lag klon av [meg v]
slutt
send melding [flytt og snurr v]
</code></pre>
      </li>
    </ul>
    <section class="challenge">
      <h3 class="challenge" id="flere-ideer">Flere ideer</h3>
      <p>
        Tenk på andre ting du kan gjøre for å lage interessante snurrige
        figurer. Her er noen ideer:
      </p>
      <ul>
        <li>
          <p>[ ] Endre størrelsen på de forskjellige klonene.</p>
        </li>
        <li>
          <p>
            [ ] Tegn en figur som består av tekst. Kanskje du kan få navnet ditt
            til å danse rundt på skjermen?
          </p>
        </li>
        <li>
          <p>
            [ ] Endre senterpunktet til drakten: Klikk
            <code>Drakter</code>-fanen og dra figuren litt vekk fra sentrum av
            tegneområdet.
          </p>
        </li>
        <li>
          <p>
            [ ] Bruk penn-verktøyet for å tegne mønster på bakgrunnen samtidig.
            Legg for eksempel til klossen <code class="b">penn på</code> under
            <code class="b">når jeg starter som klon</code>.
          </p>
          <p>
            For å finne penn-verktøyet må du først aktivere det. Dette gjør du
            ved å klikke <code>Hent tilleggsfunksjon</code> nederst til venstre
            på skjermen, og deretter på <code>Penn</code>.
          </p>
        </li>
      </ul>
    </section>
  </section>
</section>
