<!-- generated from src/lessons/felix_og_herbert/felix_og_herbert_is.md -->

<svelte:head>
  <title>Felix og Herbert</title>
</svelte:head>

<section class="intro">
  <h1 class="intro" id="kynning">Kynning</h1>
  <p>
    Við munum búa til tölvuleik þar sem kötturinn Felix ætlar að elta músina
    Herbert. Þú stýrir Herbert með músarbendlinum og átt að reyna lifa af eins
    lengi og hægt er. Því lengra sem þú heldur út, því fleiri stig færðu.
  </p>
  <figure>
    <img
      src="lessons/felix_og_herbert/felix_og_herbert.png"
      alt="Mynd af Felix og Herbert"
    />
  </figure>
</section>
<section class="activity">
  <h1 class="activity" id="skref-1%3A-felix-eltir-m%C3%BAsarbendilinn">
    Skref 1: Felix eltir músarbendilinn
  </h1>
  <p><em>Við viljum að Felix elti músarbendilinn.</em></p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti">Gátlisti</h2>
    <ul>
      <li>
        <p>[ ] Hefja nýtt verkefni.</p>
      </li>
      <li>
        <p>
          [ ] Smelltu á köttinn niðri til hægri og kallaðu hann
          <code>Felix</code>.
        </p>
        <figure>
          <img
            src="lessons/felix_og_herbert/navn_figur.png"
            alt="Breyta nafni"
          />
        </figure>
      </li>
      <li>
        <p>
          [ ] Settu snúningsgerð vinstri-hægri þannig að Felix horfi alltaf til
          vinstri eða hægri:
          <code class="b">snúningsgerð verður [vinstri-hægri v]</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Smelltu á
          <img
            src="lessons/felix_og_herbert/../bilder/velg-bakgrunn.png"
            alt="Velja bakgrunn"
          />
          neðst til hægri til að velja bakgrunn. Veldu eitthvað viðeigandi.
        </p>
      </li>
      <li>
        <p>
          [ ] Smelltu á Felix, veldu <code>Kóði</code>-flipann og gerðu þetta
          örforrit:
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
endalaust
    stefna í átt að [músarbendill v]
    fara (10) skref
    næsti búningur
end
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
        <p>[ ] Fylgir Felix músarbendlinum?</p>
      </li>
      <li>
        <p>[ ] Virðist hann labba þegar hann hreyfir sig?</p>
      </li>
      <li>
        <p>[ ] Fer hann á réttum hraða?</p>
      </li>
      <li>
        <p>[ ] Smelltu á rauða stopp takkann þannig að Felix stoppi.</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="vista%C3%B0u-verkefni%C3%B0">Vistaðu verkefnið</h2>
    <p>
      Ef þú ert með Scratch-reikning geturðu vistað verkefnin þín. Scratch gerir
      þetta sjálfkrafa en þú getur líka gert það.
    </p>
    <ul>
      <li>[ ] Undir <code>Skrá</code>, veldu <code>Vista núna</code>.</li>
    </ul>
    <p>Ef þig vantar reikning geturðu því miður ekki vistað.</p>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="skref-2%3A-felix-eltir-herbert">
    Skref 2: Felix eltir Herbert
  </h1>
  <p>
    <em
      >Nú viljum við að Felix elti músina Herbert í staðinn fyrir
      músarbendilinn.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-2">Gátlisti</h2>
    <ul>
      <li>
        <p>
          [ ] Settu inn nýjan karakter með því að smella á
          <img
            src="lessons/felix_og_herbert/../bilder/hent-fra-bibliotek.png"
            alt="Velja karakter úrsafni"
          />
          og veldu músina <code>Dyr/Mouse1</code>.
        </p>
      </li>
      <li>
        <p>[ ] Breyttu nafni karaktersins í <code>Herbert</code>.</p>
      </li>
      <li>
        <p>
          [ ] Láttu Herbert vera minni en Felix með því að velja
          <code>Stærð</code> reitinn og setja inn minni tölu, til dæmis 30.
        </p>
      </li>
      <li>
        <p>[ ] Settu þetta örforrit fyrir Herbert:</p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
endalaust
    fara til [músarbendill v]
    stefna í átt að [Felix v]
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
        <p>[ ] Færir Herbert sig með músarbendlinum?</p>
      </li>
      <li>
        <p>[ ] Eltir Felix Herbert?</p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1
    class="activity"
    id="skref-3%3A-felix-segir-a%C3%B0-hann-hafi-n%C3%A1%C3%B0-herbert"
  >
    Skref 3: Felix segir að hann hafi náð Herbert
  </h1>
  <p><em>Við viljum að Felix segi okkur þegar hann nær Herbert.</em></p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-3">Gátlisti</h2>
    <ul>
      <li>
        <p>[ ] Breyttu örforriti Felix í það sem er hér fyrir neðan:</p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
endalaust
    stefna í átt að [músarbendill v]
    fara (10) skref
    næsti búningur
    ef &lt;snertir [Herbert v]&gt; þá
        segðu [Náði þér!] í (1) sekúndur
    end
end
</code></pre>
      </li>
    </ul>
  </section>
  <section class="flag">
    <h2 class="flag" id="pr%C3%B3fa%C3%B0u-verkefni%C3%B0-3">
      Prófaðu verkefnið
    </h2>
    <p><strong>Smelltu á græna fánann.</strong></p>
    <ul>
      <li>[ ] Segir Felix að hann hafi náð Herbert?</li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="skref-4%3A-herbert-deyr">Skref 4: Herbert deyr</h1>
  <p>
    <em
      >Við viljum að Herbert breytist í draug þegar Felix nær honum og hann
      deyr</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-4">Gátlisti</h2>
    <ul>
      <li>
        <p>
          [ ] Breyttu örforriti Felix þannig að það sendi skilaboð og geri hljóð
          þegar hann nær Herbert:
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
endalaust
    stefna í átt að [músarbendill v]
    fara (10) skref
    næsti búningur
    ef &lt;snertir [Herbert v]?&gt; þá
        senda [Náð! v]
  	  spila hljóð [Meow]
        segðu [Náði þér!] í (1) sekúndur
        bíða í (1) sekúndur
    end
end
</code></pre>
      </li>
      <li>
        <p>[ ] Veldu Herbert og smelltu á <code>Búningar</code> flipann.</p>
      </li>
      <li>
        <p>
          [ ] Sæktu nýjan búning úr safni með því að smella á
          <img
            src="lessons/felix_og_herbert/../bilder/hent-fra-bibliotek.png"
            alt="Veldu búning úrsafni"
          />
          og veldu <code>Fantasy/Ghost</code>
        </p>
      </li>
      <li>
        <p>
          [ ] Breyttu nöfnunum þannig að músarbúningurinn heiti
          <code>lifandi</code> og draugabúningurinn heiti <code>dauður</code>.
        </p>
      </li>
      <li>
        <p>
          [ ] Smelltu á <code>Kóði</code> flipann og búðu til nýtt örforrit
          fyrir Herbert þannig að hann geti breyst í draug. Ekki eyða gamla
          örforritinu.
        </p>
        <pre><code class="blocks">þegar ég fæ sent [Náð! v]
breyttu í búning [dauður v]
bíða í (0.5) sekúndur
breyttu í búning [lifandi v]
</code></pre>
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
        <p>[ ] Breytist Herbert í draug þegar Felix nær honum?</p>
      </li>
      <li>
        <p>[ ] Kemur hljóð frá Felix á réttum tíma?</p>
      </li>
      <li>
        <p>
          [ ] Bíður Felix í nógu langan tíma þannig að Herbert nái að flýja?
        </p>
      </li>
    </ul>
  </section>
</section>
<section class="activity">
  <h1 class="activity" id="skref-5%3A-telja-stig">Skref 5: Telja stig</h1>
  <p>
    <em
      >Við bætum við stigum þannig að þú getir séð hve lengi Herbert lifir. Við
      byrjum á núlli en síðan bætist við eitt stig á hverri sekúndu. Ef Felix
      nær Herbert töpum við tíu stigum.</em
    >
  </p>
  <section class="check">
    <h2 class="check" id="g%C3%A1tlisti-5">Gátlisti</h2>
    <ul>
      <li>
        <p>
          [ ] Undir <code class="blockdata">Breytur</code> geturðu smiðað nýja
          breytu. Kallaðu hana <code>Stig</code> og láttu hana gilda fyrir alla
          karaktera.
        </p>
        <figure>
          <img
            src="lessons/felix_og_herbert/ny-variabel-poeng.png"
            alt="Mynd af nýju breytunni"
          />
        </figure>
        <p>Sérðu að <code>Stig 0</code> birtist uppi til vinstri?</p>
      </li>
      <li>
        <p>
          [ ] Smelltu á <code>Bakgrunninn</code> til hægri á skjánum, við
          hliðina á karakterunum. Bættu örforritunum við sem eru hér fyrir
          neðan:
        </p>
        <pre><code class="blocks">þegar smellt er á @greenFlag
láttu [Stig v] verða [0]
endalaust
    bíða í (1) sekúndur
    breyttu [Stig v] um (1)
end

þegar ég fæ sent [Náð! v]
breyttu [Stig v] um (-10)
</code></pre>
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
        <p>[ ] Bætist við eitt stig á hverri sekúndu?</p>
      </li>
      <li>
        <p>[ ] Fækkar stigunum um tíu þegar Herbert deyr?</p>
      </li>
      <li>
        <p>[ ] Hvað gerist ef Felix nær Herbert áður en þú færð tíu stig?</p>
      </li>
      <li>
        <p>[ ] Færðu 0 stig þegar þú byrjar aftur?</p>
      </li>
    </ul>
  </section>
  <section class="save">
    <h2 class="save" id="vista%C3%B0u-verkefni%C3%B0-2">Vistaðu verkefnið</h2>
    <p><em>Leikurinn er tilbúinn. Vel gert! Nú geturðu spilað!</em></p>
    <p>
      Ef þú forritaðir leikinn með Scratch-reikningnum þínum geturðu deilt honum
      með öðrum þegar þú smellir á <code>Deila</code> efst á skjánum.
    </p>
  </section>
</section>
