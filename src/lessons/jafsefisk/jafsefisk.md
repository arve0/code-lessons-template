---
title: JafseFisk
level: 2
author: "Oversatt fra [Code Club UK](//codeclub.org.uk)"
translator: "Anne-Marit Gravem"
language: nb
---

# Introduksjon {.intro}

Vi skal nå lage et JafseFisk-spill! Målet i spillet er å hjelpe JafseFisk med å
spise alle byttedyrene som svømmer rundt i havet.

![Illustrasjon av et ferdig JafseFisk spill](jafsefisk.png)

# Steg 1: JafseFisk følger musepekeren {.activity}

_Først skal vi lage JafseFisk som svømmer rundt i havet!_

## Sjekkliste {.check}

- Start et nytt Scratch prosjekt.

- **Riktig bakgrunn** får du ved å trykke på ![Velg en ferdig bakgrunn](../bilder/velg-bakgrunn.png) nederst til høyre på skjermen .
  Velg bakgrunnen `Natur/underwater2`.

- Slett Figur1 og legg til en ny figur `Dyr/Shark 2`ved å trykke på ![Velg drakt
fra biblioteket](../bilder/hent-fra-bibliotek.png). Gi figuren navnet `Jafsefisk`.

- Pass på at figuren
  bare kan bevege seg fra side til side ved å velge rotasjonsmåte
  ![Høyre/Venstre](../bilder/rotasjonsmate-hv.png).

- Få fisken til å følge musepekeren rundt i sjøen ved å lage dette skriptet:

  ```blocks
  når grønt flagg klikkes
  bytt drakt til [shark2-b]
  gjenta for alltid
      pek mot [musepeker v]
      gå (3) steg
  slutt
  ```

## Test Prosjektet {.flag}

**Klikk på det grønne flagget.**

- Flytt musepekeren rundt i sjøen. Følger fisken etter?

- Hva skjer hvis du ikke flytter musepekeren og fisken når den igjen?
  Hvordan ser den ut? Hvorfor gjør den dette?

## Sjekkliste {.check}

- Du kan stoppe flippingen til JafseFisk hvis du sørger for at den bare
  flytter seg når den ikke er for nær
  musepekeren (`avstand til [musepeker v]`{.b}
  ligger i `Sansning`{.blocksensing}-kategorien).

  ```blocks
  når grønt flagg klikkes
  bytt drakt til [shark2-b]
  gjenta for alltid
      hvis <(avstand til [musepeker v]) > [10]>
          pek mot [musepeker v]
          gå (3) steg
      slutt
  slutt
  ```

## Ting å prøve {.challenge}

Hvis du vil kan du forandre tallene i skriptet, og se hvordan det forandrer
bevegelsene.

- Sett avstandsgrensen til et stort tall (f.eks. 100), eller et lite tall
  (f.eks. 1).

- Sett antall steg fisken flytter seg til et stort tall (f.eks. 20) eller et
  lite tall (f.eks. 1, eller til og med 0, hva skjer?).

# Steg 2: Legg til byttedyr {.activity}

_Det er på tide å gi JafseFisk noe å spise!_

## Sjekkliste {.check}

- Legg til en ny figur fra biblioteket ved å bruke `Dyr/Fish`. Gi figuren
  navnet `Byttedyr`.

- Få byttedyret til å bevege seg i tilfeldige retninger. Først skal vi la
  det bevege seg litt framover, og så snu en tilfeldig valgt vinkel med eller
  mot klokka, og deretter gjenta.

  ```blocks
  når grønt flagg klikkes
  sett størrelse til (40) %
  gjenta for alltid
      gå (2) steg
      snu @turnLeft (tilfeldig tall fra (-20) til (20)) grader
      sprett tilbake ved kanten
  slutt
  ```

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Svømmer byttedyret rundt slik du forventet?

- Ser bevegelsene naturlige ut?

_For øyeblikket samspiller ikke JafseFisk og byttedyret med hverandre. Det skal
vi gjøre noe med i neste steg._

## Ting å prøve {.challenge}

- Prøv å forandre tallene for `gå (2) steg`{.b} og `tilfeldig tall fra (-20) til (20)`{.b}. Hvordan forandrer det byttedyrets bevegelser?

- Hva gjør `sprett tilbake ved kanten`{.b}? Fjern klossen og se hva som
  skjer.

# Steg 3: JafseFisk spiser byttet {.activity}

_Nå skal vi la JafseFisk spise byttet!_

Når JafseFisk har fanget byttet i munnen skal to ting skje: JafseFisk må lukke
munnen og lage en gomlelyd. Videre må byttet forsvinne, for så å dukke opp igjen
en liten stund senere.

## Sjekkliste {.check}

- Vi starter med å la byttet forsvinne hvis det berører JafseFisk, og så
  komme tilbake etter 3 sekunder. Bruk `berører [JafseFisk v]?`{.b} for å sjekke
  om byttet kommer borti JafseFisk. Utvid skriptet på byttedyret slik som dette:

  ```blocks
  når grønt flagg klikkes
  vis
  gjenta for alltid
      gå (2) steg
      snu  @turnLeft (tilfeldig tall fra (-20) til (20)) grader
      sprett tilbake ved kanten
      hvis <berører [JafseFisk v]?>
          skjul
          vent (3) sekunder
          vis
      slutt
  slutt
  ```

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Legg merke til at byttet forsvinner uansett hvor det berører JafseFisk.

- Dessuten kan JafseFisk bare vente 3 sekunder og så spise byttet i samme
  øyeblikk som det dukker opp igjen, det er ikke særlig rettferdig!

## Sjekkliste {.check}

_Hvordan kan vi sikre at byttet bare forsvinner hvis det berører JafseFisks
munn? Tja, vi kan bruke `<berører fargen [#FFFFFF]?>`{.b} og se om den berører
det hvite på fiskens tenner._

- Legg til `<berører fargen [#FFFFFF]?>`{.b} i tillegg til `<berører [JafseFisk v]?>`{.b} i skriptet ditt. For å velge hvit klikker du på fargen i
  klossen og deretter på fiskens tenner.

- Nå kan vi la byttet flytte seg til et tilfeldig punkt på skjermen før det
  dukker opp igjen ved å bruke `gå til x: (tilfeldig tall fra (-220) til (220)) y: (tilfeldig tall fra (-170) til (170))`{.b} som vi gir tilfeldige verdier
  for `x` og `y`.

Slik skal skriptet til byttedyret se ut:

```blocks
når grønt flagg klikkes
vis
gjenta for alltid
    gå (2) steg
    snu  @turnLeft (tilfeldig tall fra (-20) til (20)) grader
    sprett tilbake ved kanten
    hvis <<berører [JafseFisk v]?> og <berører fargen [#FFFFFF]?>>
        skjul
        vent (3) sekunder
        gå til x: (tilfeldig tall fra (-220) til (220)) y: (tilfeldig tall fra (-170) til (170))
        vis
    slutt
slutt
```

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Forsvinner byttet bare når det berører fiskens tenner?

- Kommer det tilbake et tilfeldig sted på skjermen – altså ikke samme
  sted som det ble spist?

# Steg 4: JafseFisk reagerer {.activity}

_JafseFisk må vite når den har spist noe slik at den kan gi fra seg en lyd og
bytte drakt._

## Sjekkliste {.check}

- For at JafseFisk skal vite hva som skjer kan vi la byttet `send melding [Du tok meg! v]`{.b} om at det er spist, før det forsvinner.

  ```blocks
  når grønt flagg klikkes
  vis
  gjenta for alltid
      gå (2) steg
      snu  @turnLeft (tilfeldig tall fra (-20) til (20)) grader
      sprett tilbake ved kanten
      hvis <<berører [JafseFisk v]?> og <berører fargen [#FFFFFF]?>>
          send melding [Du tok meg! v]
          skjul
          vent (3) sekunder
          gå til x: (tilfeldig tall fra (-220) til (220)) y: (tilfeldig tall fra (-170) til (170))
          vis
      slutt
  slutt
  ```

Nå vil vi at JafseFisk reagerer på denne meldingen ved å lage en gomlelyd og
klikke med kjevene.

- Legg så til et nytt skript til JafseFisk slik at han kan svare på
  meldingen `Du tok meg!` fra byttedyret. Dette skriptet gjør at fisken spiller
  av en bitelyd og `bytt drakt til [Shark2-a v]`{.b} drakten, venter litt og så
  bytter tilbake.

  ```blocks
  når jeg mottar [Du tok meg! v]
  start lyden [bite v]
  gjenta (2) ganger
      bytt drakt til [Shark2-a v]
      vent (0.3) sekunder
      bytt drakt til [Shark2-b v]
      vent (0.3) sekunder
  slutt
  ```

Nå er JafseFisk klar til å spise, så la oss fylle havet med byttedyr.

- Høyreklikk på byttedyret og velg `lag kopi` til du føler at du har fått
  nok fisk.

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Spiser JafseFisk byttet?

- Spiser den alle byttedyrene?

## Noe å tenke på {.protip}

Hvorfor bør vi legge til `vis`{.b} i starten av byttedyrets skript? Tenk på hva
som vil skje om byttet blir spist og spillet stoppes før det dukker opp igjen.
Og hva vil skje om spillet deretter blir startet igjen?

## Lagre prosjektet {.save}

**Godt gjort!** Du har i grunn fullført spillet! Men det finnes flere muligheter
for utvidelse av spillet. Er du klar for en utfordring?

## Utfordring 1: Forandre bevegelsene til byttedyrene {.challenge}

For øyeblikket beveger alle byttedyrene seg likt. **Kan du få ett av dem til å
bevege seg annerledes?**

**Hint:** Ikke bruke for lang tid på denne oppgaven uten å se på de andre
utfordringene i dette prosjektet.

**Velg deg ut et byttedyr å eksperimentere med.** Hvis de har samme drakt, bytt
farge med `sett [farge v] effekt til (0)`{.b}. Slik kan du se forskjell fra
resten av byttedyrene. Prøv nå å få dette byttedyret til å bevege seg saktere
enn de andre.

**Hint:** Se på klossen `gå (2) steg`{.b}.

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Beveger byttet seg saktere? Gjør dette spillet bedre?

- Hvis du klarte dette, prøv å gjøre et av byttedyrene **raskere enn de
  andre.**

- Beveger byttedyrene seg på en fornuftig måte? Gjør disse forandringene
  spillet bedre?

  **Hint:** Hvis byttet ditt svømmer rundt i sirkler, sjekk verdiene i `snu @turnLeft (tilfeldig tall fra (-20) til (20)) grader`{.b}.

- Hva om du lar alle byttedyrene bevege seg forskjellig, ved å bruke
  forskjellige kombinasjoner av disse bevegelsene?

- Gjør noen av disse forandringene spillet bedre? Gjør de spillet med
  interessant, morsommere, vanskeligere eller lettere? Er noe av dette bedre
  synes du?

## Utfordring 2: Hjelp byttet å unngå JafseFisk {.challenge}

Byttedyrene i dette spillet er skikkelig dumme! De svømmer bare tilfeldig rundt
til de blir spist. Ekte fisk svømmer vekk fra rovfisker. Nå vil vi **la ett av
byttedyrene svømme vekk fra JafseFisk.**

Det fins ingen kloss i Scratch som kan gi oss retningen vekk fra en annen figur.
Men du kan få en figur til å snu seg i retningen mot en annen, og deretter la
den snu seg i motsatt retning. Klossene du trenger er i
`Bevegelse`{.blockmotion}-kategorien.

Prøv nå å hjelpe et av byttedyrene med å **snu seg vekk fra JafseFisk**. La den
også virre litt mens den svømmer bort! Du vil kanskje oppdage at byttet setter
seg fast i et hjørne? Du vil kanskje at byttet bare ønsker å flykte dersom
JafseFisk kommer for nære? **Hint:** Se tilbake på hvordan vi brukte `(avstand til [musepeker v])`{.b} tidligere i spillet.

## Test prosjektet {.flag}

**Klikke på det grønne flagget.**

- Gjør dette at fisken blir vanskeligere å ta? Gjør det spillet bedre?

## Utfordring 3: Legg til poeng {.challenge}

Det er ikke nok bare å spise fisk. Hvordan vet du at du er en bedre spiller enn
vennene dine? Du må kunne **samle poeng**, så la oss legge til **en
poengtavle.** Lag en variabel som heter `(poeng)`{.b}, og endre denne når
JafseFisk spiser. Pass på at poengene går tilbake til null ved begynnelsen av
spillet. Hvor skal du legge inn disse endringene?

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Går poengsummen opp hver gang JafseFisk spiser byttedyr?

- Går den tilbake til null når spillet starter?

## Utfordring 4: Legg til en nedtelling {.challenge}

Gi deg selv **en tidsfrist**. Hvor mange fisk kan du spise på 30 sekunder?

Legg til en ny variabel, `(tid)`{.b}. Lag et nytt skript som setter variabelen
til for eksempel `30`, for deretter å endre denne med `-1`, vente 1 sekund, og
endre igjen, helt til den når null. Til slutt kan du bruke en `stop [alle v]`{.b}-kloss for å slutte spillet.

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Begynner tidtakeren på 30?

- Teller den ned med rett hastighet?

- Kan du fange fisk mens tiden telles ned?

- Stopper spillet når telleren når null?

## Utfordring 5: Legg til bonuspoeng {.challenge}

Legg til en belønning med mange bonuspoeng om du klarer å spise alle fiskene
samtidig. Hvordan kan du vite hvor mange som er spist?

**Hint:** En måte å gjøre dette på er å bruke en variabel for å
**telle** hvor mange byttedyr som svømmer i havet.

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Får du bonuspoeng for å spise opp alle fiskene?

## Utfordring 6: Forandre spillet: Hold byttedyrene i live! {.challenge}

Av og til kan man få glimrende nye idèer ved å gjøre det motsatte av det man
allerede har gjort.

Endre spillet slik at du i stedet **kontrollerer et byttedyr** i et hav av
**mange JafseFisker**. Hvor lenge kan du holde det gående før du blir spist? I
stedet for å bruke poeng kan du telle liv. Hva med å gi byttedyret 3 liv og
avslutte spillet når de er brukt opp?

## Lagre prosjektet {.save}

**Godt gjort, du er ferdig! Nå kan du nyte spillet ditt!**

Ikke glem at du kan dele spillet med alle vennene og familien din ved å klikke
på `Legg ut` i topp-menyen!
