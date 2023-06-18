---
title: Race to the Future
path: race-to-the-future
image: /projects/race-to-the-future/race-to-the-future.jpg
date: 16-05-2023
summary: Race to The Future voor Thomas More
featured: true
---
### Race To The Future: De Verbluffende Transformatie van een RC-car naar Autonoom Rijdend Racemonster


### Introductie
Race To The Future is een project waarbij we een RC-car transformeren tot een autonoom rijdend voertuig dat kan deelnemen aan races. We kregen een standaard RC-car zonder enige aanpassingen, samen met een aantal componenten die we op de auto mochten installeren. In dit blogartikel zal ik het concept en doel van het project bespreken, evenals het ontwikkelingsproces dat we hebben doorlopen.

### Het Concept en Doel
Het doel van het Race To The Future-project is om een RC-car om te vormen tot een volledig autonoom rijdend voertuig dat kan concurreren in races. We wilden de uitdaging aangaan om de auto zelfstandig op de baan te laten rijden, zonder menselijke tussenkomst. Dit zou ons inzicht verschaffen in de mogelijkheden en beperkingen van autonome voertuigtechnologieën.

### Ontwikkelingsproces
Het ontwikkelingsproces van het autonome RC-car project omvatte zowel hardware- als softwareaspecten. Allereerst hebben we een Raspberry Pi aan de auto toegevoegd om als het brein te fungeren. Deze Raspberry Pi stuurde de gehele auto aan en coördineerde de werking van de verschillende componenten.

Om ervoor te zorgen dat de auto autonoom op de baan kon blijven, hebben we een camera aan de voorkant van de auto geïnstalleerd. Deze camera speelde een cruciale rol bij het detecteren van de rijstrookmarkeringen en het bepalen van de positie van de auto op de baan. We hebben gebruik gemaakt van OpenCV Lane Detection, een computer vision-techniek, om real-time de camerabeelden te verwerken en de auto in het juiste spoor te houden.

Daarnaast hebben we een PWM-bord geïntegreerd om de motoren van de auto aan te sturen. Dit bord regelde de snelheid en de richting van de motoren, waardoor de auto nauwkeurig kon manoeuvreren op de racebaan. Door middel van een zorgvuldige kalibratie en testen hebben we ervoor gezorgd dat de auto soepel en responsief reageerde op de signalen van de Raspberry Pi en de cameradetectie.

### Conclusie
Het eindresultaat van ons Race To The Future-project is een opmerkelijke prestatie. We zijn erin geslaagd om een standaard RC-car te transformeren tot een volledig autonoom rijdend voertuig dat kan deelnemen aan races. Door de integratie van de Raspberry Pi als het brein, de camera met behulp van OpenCV Lane Detection en het PWM-bord voor de motorbesturing, hebben we de auto in staat gesteld om zelfstandig op de baan te blijven en te reageren op veranderende omstandigheden.

Dit project heeft ons waardevolle inzichten gegeven in de wereld van autonome voertuigen en de technologieën die daarbij betrokken zijn. Het ontwikkelingsproces heeft ons uitgedaagd om onze kennis en vaardigheden op het gebied van hardware en software integratie te vergroten. We zijn trots op wat we hebben bereikt en kijken uit naar toekomstige uitdaging.

Link naar [Github](https://github.com/Thomas-More-Digital-Innovation/2223-DI-005-Race-To-The-Future) of meer info over de [componenten](https://github.com/Thomas-More-Digital-Innovation/2223-DI-005-Race-To-The-Future/wiki).