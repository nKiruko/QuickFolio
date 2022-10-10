---
title: Domotica met Arduino en Home Assistant
image: thomas-more.jpg
date: 11-01-2022
summary: Domotica met Arduino en Home Assistant for Jochen Mariën
featured: false
---
## Domotica met Arduino en Home Assistant

De bedoeling van dit project is om met kleine microcontrollers een domoticasturing te bouwen. Deze moet makkelijk te programmeren zijn, moet werken wanneer er geen internet is of bepaalde diensten niet werken en moet kunnen communiceren met andere apparaten.

De keuze voor Home Assistant spreekt dan ook voor zich. Dit is op het moment van schrijven 1 van de meeste populaire home automation platforms met duizenden open-source ontwikkelaars die er aan mee werken.

Voor de hardware kant gebruiken we onderandere een Arduino Mega en een Espressif ESP32\. De Arduino Mega heeft geen onboard Wi-Fi, waardoor we een ENC28J60 gebruiken, dit is een Ethernet controller. De ESP32 heeft wel onboard Wi-Fi, maar ook bij deze gebruiken we een ENC28J60 omdat de ESP32 enkel 2.4GHz Wi-Fi heeft. Dit is op zich niet zo een probleem, maar wanneer je een smarthome uitbouwt, is het toch altijd verstandig om zo min mogelijk apparaten via Wi-Fi te verbinden omdat meer apparaten gelijk is aan tragere snelheid. Daarnaast is Ethernet betrouwbaarder en overwegend veiliger.

## Uitwerking

Ik ben aan de slag gegaan met de Arduino Mega door een development omgeving op te zetten in Platform.io, dit is een extensie voor Visual Studio Code waarmee je makkelijk C++ code kan schrijven voor microcontrollers. Met deze omgeving kunnen we ook makkelijk verschillende build targets opzetten, waarmee we in principe dezelfde code kunnen compileren voor een ESP32 of andere microcontrollers. Op deze manier kan je een vrij simpele en modulaire codebase ontwerpen die op verschillende apparaten kan draaien.

Nadat dit allemaal gedaan was ben ik begonnen met de fysieke hardware. Ik heb alles gebouwd met C++, en heb zoveel mogelijk Object Oriented gewerkt. Dat houdt in dat bijvoorbeeld een schakelaar een class is en een drukknop een andere class is. Met dit principe heb ik het mogelijk gemaakt om een uitgang te definiëren met een class, die als inputs meerdere class instances neemt, zo kan je makkelijk schakelaars hergebruiken en programmeren.

Nadat dit af was, ben ik begonnen met de netwerk functionaliteit te schrijven. Voor de Arduino Mega was dit vrij makkelijk, maar initieel ondersteunt de ESP32 geen ENC28J60\. Hiervoor heb ik een library gezocht die dat wel kon, en na veel zoeken heb ik er ook effectief één gevonden. In de README stond dat dit niet mogelijk was, maar met een kleine aanpassing aan de library heb ik dit toch mogelijk gemaakt.

Toen ik het netwerk up and running had ben ik begonnen met de MQTT verbinding op te bouwen. Dit ging heel vlot met de PubSubClient library en de ENC28J60 netwerkcontroller.

De vraag van Jochen was ook om dit op een Arduino Uno te draaien. Helaas heeft deze te weinig geheugen om al deze functies te ondersteunen en zal deze dus niet binnen de scope vallen van dit project.
