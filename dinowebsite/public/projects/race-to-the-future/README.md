---
title: Race To The Future
image: /projects/race-to-the-future/race-to-the-future.jpg
date: 13-05-2022
summary: Race To The Future for Thomas More
featured: true
---
## Wat is "Race To The Future"?

Race To The Future is een race evenement, georganiseerd door PXL Digital.
De race bestaat uit 2 heats die gereden worden op tijd.
De middelbare scholen mogen dit telegeleid doen met een afstandsbediening, hogescholen en bedrijven lossen dit op met AI en/of computer vision.
De racetrack bestaat uit rode buizen van 110mm dikte, waar de kleine racewagens tussen moeten rijden.
Iedere keer dat je auto vast komt te zitten en je deze moet los maken, krijg je een straftijd van 15 seconden toegewezen.

## Hardware

De racewagen wordt standaard geleverd door PXL met volgende componenten in de doos:

- Racewagen
  - Servo
  - Motor
  - Electronic Speed Controller (ESC)
  - Batterij 1800mAh
  - Spektrum RF Receiver
  - RF Sender met stuurwiel, throttle en E-stop
- Raspberry Pi 4B 4GB
  - 32 GB SD kaart
- Arduino Pro Micro
- USB <--> Micro USB-kabel
- Adafruit PCA9685 16-kanaals PWM module
- Buck-Boost converter
- Dupont-draden
- Montageplaat voor alle onderdelen
- Schroefjes, moertjes, varia...

We zijn begonnen met de auto volledig in elkaar te zetten en de verschillende onderdelen te monteren op de montageplaat.
Daarna kwamen wij erachter dat de dupont-draden te dun waren om een Raspberry Pi 4B fatsoenlijk te voorzien van stroom.
Wij hebben als oplossing zelf draden genomen die dik genoeg waren en daar dupont connectors op gesoldeerd.  

Daarnaast hebben we bij de Thomas More Create Cave een bumper laten maken en 3D-printen zodat de auto vrij bleef van beschadigingen en we niet zo makkelijk vast kwamen zitten in de rode buizen.

## Software

We zijn begonnen met bestaande software te gebruiken van PXL Digital.
Deze was gebaseerd op Docker containers en ROS1 (Robot Operating System).
Na enkele dagen kwamen we erachter dat dit allemaal nog draaide op Python 2 en we dus niet gebruik konden maken van de nieuwste features.
Hierna ben ik begonnen met een groot deel van de software te herschrijven naar Python 3.  

In de tussentijd zijn 2 collega-studenten hard aan het werk geweest om een AI-model te trainen op opgenomen data.
In het begin kregen we hier geen resultaten uit, maar richting het einde van het project begon er dan toch data uit te komen.
Deze data was jammer genoeg te inaccuraat voor een race mee te rijden.
Daarom hebben we nog een OpenCV backup voorbereid zodat we toch de race konden uitrijden.

## Verloop race

Op de race dag, vrijdag 13 mei 2022, waren we al vroeg van de partij.
We hebben de gehele ochtend rondes gereden met de auto en gefinetuned om zo goed mogelijk te kunnen rijden.
Tijdens de eerste heat sloeg ons succes jammer genoeg om in enorm veel problemen.
De auto reageerde plots niet meer op onze instructies, en toen we hem toch aan het rijden kregen, liep er enorm veel fout in het stuurmanschap.
Deze heat hebben we uitgereden om daarna uit te zoeken wat er mis was gegaan.
Bij het herstarten van de auto trad er een kortsluiting op in een lower-level component, waardoor onze Raspberry Pi stuk is gegaan.
We hebben toen nog proberen een oplossing te zoeken, waardoor we een nieuwe Raspberry Pi wisten te bemachtigen.
Op dat moment wisten we nog niet dat er een kortsluiting aanwezig was, en hebben we op een mum van tijd de auto herbouwd met de nieuwe Raspberry Pi.
Maar deze effort was jammer genoeg teniet gedaan door de aanwezige kortsluiting, waarop we een tweede Raspberry Pi stuk gedaan hebben.  

Hierna hebben we de handoek in de ring gegooid en zijn we gaan netwerken met de verschillende aanwezige bedrijven en scholieren.
Dit was achteraf gezien heel erg waardevol aangezien we alle 3 meteen een stageplaats aangeboden hebben gekregen bij Eurofins Digital Testing.

## Hardware diagnose

Na de race, tussen de examens door, hebben we de auto component per component individueel bekeken, uitgemeten en getest. Hierna zijn we erachter gekomen dat de buck-boost converter gefaald heeft doordat de spanningsregeling langzaam omhoog is verschoven. Dit heeft uiteindelijk een voedingsspanning van 7.2 volt geleverd aan een 5 volt Raspberry Pi, wat ultiem de doodsteek was voor de Raspberry Pi.

## Conclusie

Editie 2023 zullen we sterker terug komen en we hebben nu al zicht op wat we willen veranderen tegen dan. We hebben van Eurofins Digital Testing ook enorm veel trainingsdata gekregen, waardoor we die editie 100% op AI willen gaan rijden.
Ook zullen we enkele hardware aanpassingen maken die een betere totaalwerking zou moeten garanderen.
