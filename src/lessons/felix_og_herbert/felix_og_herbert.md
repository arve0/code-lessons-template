---
title: "Felix og Herbert"
level: 1
author: "Oversatt fra [Code Club UK](//codeclub.org.uk)"
translator: "Gudbrand Tandberg"
language: nb
---

# Introduksjon {.intro}

Vi skal lage et spill hvor katten Felix skal fange musa Herbert. Du
styrer Herbert med musepekeren og skal prøve å unngå å bli tatt av
Felix. Jo lenger du unngår ham jo flere poeng får du, men blir du
tatt, går poengsummen din ned.

![Bilde av katten Felix og musa Herbert](felix_og_herbert.png)

# Steg 1: Felix følger musepekeren {.activity}

_Vi ønsker at katten Felix skal følge etter musepekeren._

## Sjekkliste {.check}

- Start et nytt prosjekt.

- Trykk på kattefiguren nede i høyre del av skjermen og bytt navn
  på figuren til `Felix`.

  ![Skift navn](navn_figur.png)

- Sørg for at Felix kun ser til høyre og venstre ved å sette
  rotasjonsmåte til høyre-venstre.

  ![Høyre/Venstre](../bilder/rotasjonsmate-hv.png).

- Klikk på
  ![Velg en ferdig bakgrunn](../bilder/velg-bakgrunn.png) nederst til høyre på skjermen for å sette en bakgrunn.
  Velg den bakgrunnen du vil.

- Klikk på Felix, velg `Kode`-fanen og lag dette
  skriptet:

  ```blocks
  når grønt flagg klikkes
  gjenta for alltid
      pek mot [musepeker v]
      gå (10) steg
      neste drakt
  slutt
  ```

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Følger Felix musepekeren?

- Ser det ut som han går når han beveger seg?

- Beveger han seg med riktig hastighet?

- Klikk det røde stopp-symbolet for at Felix skal slutte å følge etter
  musepekeren.

## Lagre prosjektet {.save}

Hvis du er pålogget med din egen Scratchbruker lagrer scratch alle prosjektene dine automatisk med jevne mellomrom.
Det kan likevel være lurt å lagre manuelt innimellom.

- I filmenyen, velg `Lagre nå`.

Hvis du ikke har bruker kan du ikke lagre, bare fortsett til steg 2.

# Steg 2: Felix jager Herbert {.activity}

_Nå ønsker vi at Felix skal jage musa Herbert i stedet for musepekeren._

## Sjekkliste {.check}

- Lag en ny figur ved å trykke på
  ![Velg figur fra biblioteket](../bilder/hent-fra-bibliotek.png)
  og velg figuren `Dyr/Mouse1`.

- Bytt navn på figuren til `Herbert`.

- Gjør Herbert mindre enn Felix ved å velge `Størrelse` feltet
  rett over figuren, og skriv inn et mindre tall. Prøv å endre tallet
  fra 100 til 30.

- Gi Herbert dette skriptet:

  ```blocks
  når grønt flagg klikkes
  gjenta for alltid
      gå til [musepeker v]
      pek mot [Felix v]
  slutt
  ```

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Flytter Herbert seg med musepekeren?

- Jager Felix Herbert?

# Steg 3: Felix sier når han har fanget Herbert {.activity}

_Vi vil at Felix skal vite når han har fanget Herbert og fortelle det
til oss._

## Sjekkliste {.check}

- Endre skriptet til Felix til dette:

  ```blocks
  når grønt flagg klikkes
  gjenta for alltid
      pek mot [musepeker v]
      gå (10) steg
      neste drakt
      hvis <berører [Herbert v]?>
          si [Tok deg!] i (1) sekunder
      slutt
  slutt
  ```

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Sier Felix fra når han har fanget Herbert?

# Steg 4: Herbert blir et spøkelse når han fanges {.activity}

_I tillegg til at Felix sier noe, vil vi nå at Herbert blir forvandlet
til et spøkelse når han fanges._

## Sjekkliste {.check}

- Endre skriptet til Felix slik at det sender en melding og lager en
  lyd når han fanger Herbert:

  ```blocks
  når grønt flagg klikkes
  gjenta for alltid
      pek mot [musepeker v]
      gå (10) steg
      neste drakt
      hvis <berører [Herbert v]?>
          send melding [Fanget! v]
  ]
          si [Tok deg!] i (1) sekunder
          vent (1) sekunder
      slutt
  slutt
  ```

- Velg Herbert og gå til `Drakter`-fanen.

- Hent en ny drakt ved å trykke på
  ![Velg drakt fra biblioteket](../bilder/hent-fra-bibliotek.png)
  og velg `Fantasi/Ghost`

- Endre navnene på Herberts drakter slik at musedrakten heter
  `levende` og spøkelsesdrakten heter `død`.

- Gå til `Kode`-fanen, og lag et nytt skript for
  Herbert for å gjøre ham om til et spøkelse. Ikke slett det gamle
  skriptet:

  ```blocks
  når jeg mottar [Fanget! v]
  bytt drakt til [død v]
  vent (0.5) sekunder
  bytt drakt til [levende v]
  ```

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Forvandles Herbert til et spøkelse når han fanges?

- Spiller Felix lyden sin til riktig tid?

- Står Felix stille lenge nok til at Herbert kommer seg unna?

# Steg 5: Telle poeng {.activity}

_La oss legge til en poengsum slik at vi kan se hvor flink man er til
å holde Herbert i live. Vi begynner med poengsummen null og øker den
med en for hvert sekund. Hvis Felix fanger Herbert, minker vi
poengsummen med ti._

## Sjekkliste {.check}

- På `Kode`-fanen under kategorien `Variabler`{.blockdata}, lag en ny
  variabel. Kall variabelen for `Poeng`, og la den gjelde for alle
  figurer.

  ![Bilde av den nye poeng variabelen](ny-variabel-poeng.png)

  Legg merke til at `Poeng 0` dukket opp øverst til venstre i spillet
  ditt.

- Klikk på `Scene` helt til høyre på skjermen, ved siden av
  lista over figurene Felix og Herbert. Lag disse to skriptene på scenen:

  ```blocks
  når grønt flagg klikkes
  sett [Poeng v] til [0]
  gjenta for alltid
      vent (1) sekunder
      endre [Poeng v] med (1)
  slutt

  når jeg mottar [Fanget! v]
  endre [Poeng v] med (-10)
  ```

## Test prosjektet {.flag}

**Klikk på det grønne flagget.**

- Øker poengsummen med en hvert sekund?

- Går poengsummen ned med ti når Herbert blir fanget?

- Hva skjer om Herbert fanges før du har ti poeng?

- Går poengsummen tilbake til null når du starter spillet på nytt?

## Lagre prosjektet {.save}

_Du er ferdig. Godt gjort. Nå kan du spille spillet!_

Hvis du er logget inn med din scratchbruker kan du dele spillet med familie og venner ved å trykke `Legg ut` på
menylinjen.
