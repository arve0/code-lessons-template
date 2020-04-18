<!-- generated from src/lessons/straffespark/straffespark_is.md -->

<svelte:head>
  <title>Vítaspyrna</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="kynning">Kynning</h1>
  <p>
    Við ætlum að gera einfaldan fótboltaleik, þar sem þú verður að reyna að
    skora eins margar vítaspyrnur og hægt er.
  </p>
  <figure>
    <img
      src="lessons/straffespark/straffespark.png"
      alt="Mynd af tilbúnum vítaspyrnuleik"
    />
  </figure>
</section>
<section class="activity">
  <h1
    class="activity"
    id="skref-1%3A-k%C3%B6tturinn-og-f%C3%B3tboltav%C3%B6llurinn"
  >
    Skref 1: Kötturinn og fótboltavöllurinn
  </h1>
  <p>
    <em
      >Við byrjum á því að búa til kött sem getur hreyft sig á
      fótboltavelli.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti">Gátlisti</h2>
    <ul>
      <li>
        <p>
          Byrjaðu nýtt verkefni, til dæmis með því að smella á
          <code>Smiða</code> efst á síðunni. Ef þú hefur nú þegar hafið verkefni
          geturðu byrjað nýtt með því að velja <code>Skrá</code> og síðan
          <code>Ný</code>.
        </p>
      </li>
      <li>
        <p>Smelltu á köttinn, og kallaðu köttinn <code>Leo</code>.</p>
      </li>
      <li>
        <p>
          Smelltu á
          <img
            src="lessons/straffespark/../bilder/velg-bakgrunn.png"
            alt="Velja nýjan bakgrunn"
          />
          neðst til hægri á skjánum til að sækja nýjan bakgrunn. Veldu til dæmis
          bakgrunninn <code>Soccer 2</code> til þess að fá fótboltavöll með
          marki.
        </p>
      </li>
      <li>
        <p>
          Nú skulum við skrifa örforrit sem færir köttinn <code>Leo</code> þegar
          við smellum á hann. Smelltu á <code>Leo</code> í myndglugganum neðst á
          skjánum til þess að kóða hvað hann á að gera. Settu saman eftirfarandi
          kubba í kóðunargluggann til vinstri:
        </p>
        <pre><code class="blocks">þegar smellt er á þennan karakter
fara (10) skref
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>
        <p>Fer <code>Leo</code> áfram þegar þú smellir á hann?</p>
      </li>
      <li>
        <p>
          Hvað gerist þegar þú smellir á <code>Leo</code> þangað til hann fer út
          á enda?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-2">Gátlisti</h2>
    <ul>
      <li>
        <p>
          Þú getur flutt <code>Leo</code> aftur á skjáinn með því að smella á
          hann og draga hann þar sem þú vilt.
        </p>
      </li>
      <li>
        <p>
          Við munum forrita auðveldari leið til að fá <code>Leo</code> aftur á
          völlinn. Búðu til nýtt örforrit við hliðina á því sem þú hefur þegar
          búið til, sem lítur svona út:
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
fara til x: (-90) og y: (-60)
</code></pre>
      </li>
      <li>
        <p>
          Nú mun <code>Leo</code> koma aftur á völlinn í hvert skipti sem þú
          smellir á græna fánann.
        </p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="vista-verkefni%C3%B0">Vista verkefnið</h2>
    <p>
      Þú hefur nú skrifað lítið forrit! Scratch vistar allt sem þú gerir
      reglulega. Það er engu að síður góð venja að vista inni á milli.
    </p>
    <ul>
      <li>
        <p>
          Yfir senunni er textareitur þar sem þú getur gefið leiknum þínum nafn.
          Til dæmis geturðu kallað hann <code>Vítaspyrna</code>.
        </p>
      </li>
      <li>
        <p>
          Í valmyndinni <code>Skrá</code> er hægt að velja
          <code>Vista núna</code> til að vista verkefnið.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="skref-2%3A-leo-sparkar-boltanum">
    Skref 2: Leo sparkar boltanum
  </h1>
  <p><em>Það næsta sem við þurfum í leik okkar er bolti!</em></p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-3">Gátlisti</h2>
    <ul>
      <li>
        <p>
          Við munum nú bæta við bolta í leik okkar. Smelltu á
          <img
            src="lessons/straffespark/../bilder/hent-fra-bibliotek.png"
            alt="Veldu mynd úrsafni"
          />
          og veldu fótboltann <code>Sports/Soccer Ball</code>.
        </p>
      </li>
      <li>
        <p>Kallaðu boltann <code>Bolti</code>.</p>
      </li>
      <li>
        <p>
          Gerðu boltann minni með því að ýta fyrst á <code>Stærð</code> reitinn
          og breyta númerinu frá 100 til 60.
        </p>
      </li>
      <li>
        <p>
          Við munum nú skrifa örlítið lengra örforrit fyrir boltann. Í þessu
          örforriti setjum við fyrst boltann fyrir framan köttinn. Eftir að
          boltinn snertir <code>Leo</code> (þ.e. <code>Leo</code> sparkar í
          boltann) byrjar boltinn að hreyfa sig. Sjáðu hvort þú þekkir hvar í
          örforritinu mismunandi hlutir eru gerðir:
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
fara til x: (0) og y: (-80)
bíða þangað til &lt;snertir [Leo v] ?&gt;
endalaust
  fara (6) skref
end
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0-2">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>
        <p>Sparkar <code>Leo</code> í boltann þegar þú smellir á hann?</p>
      </li>
      <li>
        <p>
          Getur <code>Leo</code> sparkað í boltann aftur ef þú smellir á græna
          fánann aftur?
        </p>
      </li>
      <li>
        <p>
          Ef <code>Leo</code> snertir boltann áður en þú smellir á hann (þegar
          þú smellir á græna fánann) þarftu að breyta tölunum í
          <code class="b">fara til x: () og y: ()</code>-kubbnum þannig að
          boltinn er í hvild fyrir framan <code>Leo</code>.
        </p>
      </li>
      <li>
        <p>
          Stundum hreyfist boltinn aftur <em>áður en</em> <code>Leo</code> er á
          réttum stað, þannig að hann snertir boltann aftur og boltinn byrjar
          hreyfast. Þá hjálpar það að bæta við einu
          <code class="b">bíða í (1) sekúndur</code>-kubba fyrir
          <code class="b">bíða þangað til &lt;snertir [Leo v]?&gt;</code
          >-kubbann.
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="skref-3%3A-vi%C3%B0-%C3%BEurfum-markv%C3%B6r%C3%B0!">
    Skref 3: Við þurfum markvörð!
  </h1>
  <p>
    <em
      >Við munum nú gera leikinn svolítið erfiðari með því að forrita
      markvörð.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-4">Gátlisti</h2>
    <ul>
      <li>
        <p>
          Bættu við fígúru sem getur verið markvörður. Við höfum notað kolkrabba
          <code>Animals/Octopus</code>, en þú getur líka notað aðrar fígúrur ef
          þú vilt.
        </p>
      </li>
      <li>
        <p>
          Settu fígúruna inn í markið. Það er hægt að snúa fígúrunni með því að
          smella á <code>Búningar</code> og síðan á táknið sem er hægra megin
          við eyða-takkann.
        </p>
      </li>
      <li>
        <p>Gefðu fígúrunni nafnið <code>Markvörður</code>.</p>
      </li>
      <li>
        <p>Gerðu eftirfarandi örforrit fyrir markvörðinn:</p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
fara til x: (200) og y: (-50)
stefna í (0 v) gráður
endalaust
  fara (15) skref
  ef á kanti snúðu við
end
</code></pre>
        <p>
          Það eru nokkrir nýir kubbar í þessu örforriti. Lestu forritið
          vandlega. Hvað heldurðu að nýju kubbarnir geri?
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0-3">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>
        <p>Byrjar markvörðurinn í markinu?</p>
      </li>
      <li>
        <p>Fer <code>Markvörður</code> til hægri og vinstri á skjánum?</p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-5">Gátlisti</h2>
    <ul>
      <li>
        <p>
          Finnst þér kannski markvörðurinn vera svolítið stór? Þú getur breytt
          stærð hans eins og þú gerðir áður. Önnur leið til að breyta stærð er
          með því að nota kubba úr flipanum
          <code class="blocklooks">Útlit</code>.
        </p>
        <p>
          Settu inn kubbinn <code class="b">stærð verður (100)%</code> í
          <code class="blockcontrol">endalaust</code>-slaufuna. Þú getur prófað
          að breyta <code>100%</code> í aðrar tölur þar til þú finnur viðeigandi
          stærð fyrir markvörðinn. Ef þú notar kolkrabbann sem
          <code>Markvörður</code> passar <code>50%</code> nokkuð vel. Prófaðu
          það!
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0-4">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>
        Hvað gerist þegar <code>Leo</code> skýtur á markið? Getur markvörðurinn
        varið markið?
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="skref-4%3A-markv%C3%B6r%C3%B0urinn-ver!">
    Skref 4: Markvörðurinn ver!
  </h1>
  <p><em>Nú er kominn tími á að markvörðurinn verji markið!</em></p>
  <p>
    Við munum nú gera nokkrar <em>prófanir</em> sem segja okkur hvort
    markvörðurinn verji boltann eða hvort boltinn fari í mark.
  </p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-6">Gátlisti</h2>
    <ul>
      <li>
        <p>
          Við byrjum á að finna út hvort markvörðurinn ver boltann. Smelltu á
          <code>Bolti</code>. Bættu við einum
          <code class="blockcontrol">ef annars</code>-kubbi í örforritið:
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
fara til x: (0) og y: (-50)
bíða þangað til &lt;snertir [Leo v] ?
endalaust
fara (6) skref
  ef &lt;snertir [Markvörður v] ?&gt; þá
    senda [Varið v]
  end
end
</code></pre>
        <p>
          Í kubbnum <code class="b">senda [message1 v]</code> verður þú að velja
          <code>Ný skilaboð</code> og síðan skrifa <code>Varið</code> sem
          skilaboð.
        </p>
        <p>
          Fígúrurnar geta sent skilaboð í leiknum á milli sín án þess að þú
          sjáir það í raun. Þetta gerir það einfaldara fyrir margar fígúrur að
          bregðast við því sem gerist.
        </p>
      </li>
      <li>
        <p>
          Nú viljum við að bæði boltinn og markvörðurinn hætti að hreyfa sig ef
          boltinn verður varinn. Bættu þessu við sem nýju örforriti bæði á
          <code>Bolti</code> og <code>Markvörður</code>:
        </p>
        <pre><code class="blocks">þegar ég fæ sent [Varið v]
stöðva [önnur forrit á karakter v]
</code></pre>
        <p>
          Eitt ráð er að skrifa fyrst þennan kóða fyrir boltann. Síðan er hægt
          að afrita það til <code>Markvörður</code> með því að draga kóðann í
          <code>Markvörður</code>-fígúruna í myndglugganum neðst á skjánum.
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0-5">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>
        Hættir bæði boltinn og markvörðurinn að hreyfa sig ef markvörðurinn ver
        boltann?
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-7">Gátlisti</h2>
    <p>
      Nú munum við einnig athuga hvort boltinn hafi farið í mark. Við gerum
      þetta með því að skoða hversu langt til hægri á skjánum boltinn hefur
      farið. Staða fígúru í Scratch er lýst með hnitum:
      <code class="b">(x hnit)</code> segir hvar fígúran er á skjánum frá
      vinstri til hægri en <code class="b">(y hnit)</code> segir hversu langt
      upp eða niður á skjánum hún er. Rétt fyrir neðan leikinn eru tvær tölur
      merktar <code>x</code> og <code>y</code>. Þetta sýnir hnit
      músarbendilsins. Þær breytast sjálfkrafa þegar hann færist.
    </p>
    <figure>
      <img
        src="lessons/straffespark/koordinater.png"
        alt="Mynd af því hvar x og y hnitin birtast í Scratch"
      />
    </figure>
    <ul>
      <li>
        <p>
          <code>Leo</code> skorar ef boltinn fer nógu langt til hægri án þess að
          hann sé varinn. Ef þú reynir að setja músarbendilinn á markið sérðu að
          marklínan er þar sem <code>x</code> er 230. Breyttu örforriti boltans
          svolítið meira þannig að það líti svona út:
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
fara til x: (0) og y: (-50)
bíða þangað til &lt;snertir [Leo v]?&gt;
endalaust
    fara (6) skref
    ef &lt;snertir [Markvörður v]?&gt; þá
        senda [Varið v]
    annars
        ef &lt;(x hnit) &gt; [230]&gt; þá
            senda [Mark v]
        end
    end
end
</code></pre>
      </li>
      <li>
        <p>
          A sama hátt og boltinn er varinn er hægt að stoppa hreyfingu
          <code>Bolti</code> og <code>Markvörður</code> með því að setja þetta
          örforrit á báðar fígúrurnar.
        </p>
        <pre><code class="blocks">þegar ég fæ sent [Mark v]
stöðva [önnur forrit á karakter v]
</code></pre>
      </li>
      <li>
        <p>
          Við getum líka látið <code>Leo</code> fagna smá þegar hann skorar
          mörk. Smelltu á köttinn og gefðu honum eftirfarandi örforrit:
        </p>
        <pre><code class="blocks">þegar ég fæ sent [Mark v]
segðu [Já, ég skoraði!!] í (2) sekúndur
</code></pre>
      </li>
      <li>
        <p>
          Gerðu svipað örforrit þar sem <code>Leo</code> segir eitthvað um að
          hann sé leiður vegna þess að skotið hans var varið. Prófaðu þetta á
          eigin spýtur!
        </p>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0-6">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>
        <p>Geturðu skorað mörk?</p>
      </li>
      <li>
        <p>Getur markvörðurinn varið einhver skot?</p>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="breyttu-hra%C3%B0a">Breyttu hraða</h2>
    <p>
      Þú getur gert leikinn auðveldari eða erfiðari með því að breyta hraða
      boltans og hversu hratt markvörðurinn færir sig. Hraði fyrir bolta og
      markvörð ákvarðast af númerinu í
      <code class="b">fara () skref</code>-kubbunum fyrir <code>Bolti</code> og
      <code>Markvörður</code>.
    </p>
    <p>
      Prófaðu mismumandi tölur fyrir bæði boltann og markvörðinn þar til þú
      finnur samsetningu sem þér líkar best. Gakktu úr skugga um að það verði
      svolítið erfitt, en ekki ómögulegt.
    </p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="skref-5%3A-fyrri-til-a%C3%B0-n%C3%A1-10!">
    Skref 5: Fyrri til að ná 10!
  </h1>
  <p>
    <em
      >Við munum skoða hvernig við getum talið hversu mörg mörk eru skoruð.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-8">Gátlisti</h2>
    <p>
      Til að telja hversu mörg mörk þú hefur skorað og hversu mörgum sinnum
      <code>Markvörður</code> hefur varið markið munum við nota
      <em>breytur</em>.
    </p>
    <ul>
      <li>
        <p>Smelltu á senuna hægra megin við kóðunarsvæðið.</p>
      </li>
      <li>
        <p>
          Smelltu á flipann <code class="blockdata">Breytur</code> og búðu til
          nýja breytu. Gefðu nýju breytunni nafnið <code>Mörk</code>. Athugaðu
          að nýr kassi birtist á senunni sem merktur er <code>Mörk</code> og sem
          sýnir númerið <code class="blockdata">0</code>.
        </p>
      </li>
      <li>
        <p>
          Við munum nú telja mörkin. Búðu til nýtt örforrit sem breytir
          <code class="b">(Mörk)</code> í hvert skipti sem skilaboðin
          <code>Mark</code> eru send með því að búa til þetta örforrit á
          senunni:
        </p>
        <pre><code class="blocks">þegar ég fæ sent [Mark v]
breyttu [Mörk v] um (1)
</code></pre>
      </li>
      <li>
        <p>
          Við getum gert það sama til að telja hversu oft markmaðurinn varði.
          Búðu til nýja breytu sem heitir <code class="b">(Varin)</code>.
        </p>
      </li>
      <li>
        <p>Búðu til nýtt örforrit til að telja hversu mörg skot eru varin:</p>
        <pre><code class="blocks">þegar ég fæ sent [Varið v]
breyttu [Varin v] um (1)
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0-7">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>
        <p>Telur leikurinn hvert skipti sem þú skorar mörk?</p>
      </li>
      <li>
        <p>
          Telur leikurinn einnig hvert skipti sem markvörðurinn ver boltann?
        </p>
      </li>
    </ul>
  </section>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-9">Gátlisti</h2>
    <p>
      Að lokum munum við prófa hvort <code>Leo</code> tekst að skora 10 mörk eða
      hvort <code>Markvörður</code> tekst að verja hann 10 sinnum. Þetta er
      svolítið mikið.
    </p>
    <ul>
      <li>
        <p>
          Í fyrsta lagi munum við búa til tvo nýja bakgrunni, einn sem við getum
          notað ef leikmaðurinn vinnur (kötturinn skorar 10 sinnum) og einn sem
          við notum ef leikmaðurinn tapar (markvörðurinn ver 10 sinnum). Smelltu
          á flipann <code>Bakgrunnar</code>. Hægrismelltu á litlu útgáfuna af
          bakgrunninum þínum og veldu <code>Gerðu afrit</code>.
        </p>
      </li>
      <li>
        <p>
          Veldu viðeigandi lit og smelltu síðan á textaverkfærið. Veldu
          leturgerðina <code>Marker</code> neðst á skjánum. Skrifaðu texta eins
          og <code>Til hamingu, þú vannst!</code>
          svolítið hátt á afritinu af bakgrunninum. Gefðu þessum bakgrunni
          nafnið
          <code>Sigur</code>.
        </p>
      </li>
      <li>
        <p>
          Búðu til nýtt afrit af upprunalega bakgrunninum. Gefðu þessum
          bakgrunni nafnið <code>Tap</code> og skrifaðu viðeigandi texta.
        </p>
      </li>
      <li>
        <p>
          Búðu til örforrit á bakgrunninn sem setur breyturnar þínar í 0 í
          upphafi leiksins.
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
láttu [Mörk v] verða [0]
láttu [Varin v] verða [0]
bakgrunnur verður [Soccer 2]
senda [Nýtt spark v]
</code></pre>
      </li>
      <li>
        <p>
          Við munum spila án þess að þurfa að smella á græna fánann í hvert
          skipti sem við tökum vítaspyrnu. Fyrir þetta notum við skilaboðin
          <code>Nýtt spark</code>. Við verðum nú að skipta um
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
</code></pre>
        <p>með</p>
        <pre><code class="blocks">þegar ég fæ sent [Nýtt spark v]
</code></pre>
        <p>
          á bæði <code>Leo</code>, <code>Bolti</code> og
          <code>Markvörður</code>. Sem dæmi verður örforritið hjá
          <code>Leo</code> svona:
        </p>
        <pre><code class="blocks">þegar ég fæ sent [Nýtt spark v]
fara til x: (-90) og y: (-60)
</code></pre>
      </li>
      <li>
        <p>
          Að lokum prófum við hvort við höfum skorað 10 mörk eða hvort
          markvörðurinn hefur varið 10 sinnum. Breyttu
          <code>Mark</code> örforritinu á senunni þannig að það líti svona út:
        </p>
        <pre><code class="blocks">þegar ég fæ sent [Mark v]
breyttu [Mörk v] um (1)
bíða í (2) sekúndur
ef &lt;(Mörk) &lt; [10]&gt; þá
    senda [Nýtt spark v]
annars
    bakgrunnur verður [Sigur v]
    stöðva [allt v]
end
</code></pre>
      </li>
      <li>
        <p>
          Á sama hátt skaltu breyta <code>Varið</code> örforritinu á senunni:
        </p>
        <pre><code class="blocks">þegar ég fæ sent [Varið v]
breyttu [Varin v] um (1)
bíða í (2) sekúndur
ef &lt;(Varin) &lt; [10]&gt; þá
    senda [Nýtt spark v]
annars
    bakgrunnur verður [Tap v]
    stöðva [allt v]
end
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0-8">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>
        <p>
          Færðu að taka margar vítaspyrnur án þess að þurfa að smella á græna
          fánann í hvert skipti?
        </p>
      </li>
      <li>
        <p>Breytist leikurinn í réttan bakgrunn ef þú skorar 10 mörk?</p>
      </li>
      <li>
        <p>
          Breytist leikurinn í réttan bakgrunn ef markvörðurinn ver 10 sinnum?
        </p>
      </li>
      <li>
        <p>
          Endurstillir þú breyturnar <code>mörk</code> og
          <code>varin</code> þegar þú smellir á græna fánann?
        </p>
      </li>
    </ul>
  </section>
  <section class="protip">
    <h2 class="protip" id="hlj%C3%B3%C3%B0brellur">Hljóðbrellur</h2>
    <p>
      Þú getur bætt við hljóðbrellum í leikinn með því að nota kubba undir
      <code class="blocksound">Hljóð</code>. Til dæmis geturðu reynt að bæta við
      hljóðum þegar sparkað er í boltann, markvörðurinn ver eða mark er skorað.
    </p>
    <p>
      Til að finna fleiri hljóð til að nota í leiknum geturðu valið flipann
      <code>Hljóð</code>. Hér geturðu fengið fleiri hljóð frá Scratch safninu
      eða jafnvel tekið upp eigin hljóð. Prófaðu það!
    </p>
  </section>
  <section class="save">
    <h2 class="save" id="vista-leikinn">Vista leikinn</h2>
    <p>
      Þá erum við búin með vítaspyrnuleikinn! Ef þú hefur einhverjar hugmyndir
      um hvernig á að gera leikinn enn skemmtilegri skaltu prófa það á eigin
      spýtur.
    </p>
    <p>
      Ef þú smellir á <code>Deila</code> verður leikurinn þinn settur á
      heimasíðu Scratch þannig að aðrir geti spilað hann!
    </p>
  </section>
</section>
