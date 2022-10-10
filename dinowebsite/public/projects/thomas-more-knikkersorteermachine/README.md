---
title: Knikkersorteermachine
image: thomas-more-knikkersorteermachine.jpg
date: 24-05-2022
summary: Knikkersorteermachine for Thomas More
featured: true
---
## Wat is de knikkersorteermachine?

De knikkersorteermachine is een kleine machine die verschillende kleuren knikkers sorteert op 7 verschillende banen.
Dit wordt gedaan met een servomotor, stappenmotor en Arduino.
Deze worden verbonden met een computer of een Raspberry Pi of iets dergelijks.

## Over de opdracht

De bedoeling van de opdracht was om de Arduino te programmeren en een Python client (package/library) te bouwen.
Hoe je dit deed maakte niet uit, het moest gewoon intuitief zijn om te gebruiken voor andere studenten.

## Uitwerking

### Arduino

Ik ben begonnen met de Arduino code te schrijven.
Ik heb wat structuur aangebracht door alles op te delen in modules.
Bijvoorbeeld een Chute module en een Feeder module, die komen dan overeen met de glijbaan met servomotor en het feederwiel met stappenmotor.
Deze modules hebben enkele handige functies als public members om de modules aan te sturen.  

Daarna heb ik een custom 2-byte protocol gebouwd.
Dit protocol bestaat uit volgende informatie:

- Byte 1: Commando (None, Chute, Feeder)
- Byte 2: Amount (Naar welke baan moet de Chute? Hoeveel knikkers moet de Feeder feeden?)  

Dit protocol wordt dan ingelezen en stuurt de modules aan.  

### Python

Daarna heb ik met Python een library gebouwd die een wrapper is rond de seriele verbinding met pyserial.
Deze library wrapt dan in simpele functies wat de machine moet doen.
Hieronder vind je een lijst met mogelijkheden:

- move_to(int chute): Deze functie verplaatst de chute naar een baan
- feed_one(): Deze functie feed 1 knikker
- feed(int amount): Deze functie feed een aantal knikkers

Deze library heb ik dan op PyPi gepubliceerd zodat studenten deze makkelijk kunnen installeren en gebruiken.  
Je kan de library hier vinden: <a href="https://pypi.org/project/knikkersorteermachine/" target="_blank" rel="noreferrer">knikkersorteermachine</a>

## Links

GitHub repository met alle code: <a href="https://github.com/Thomas-More-Digital-Innovation/1-015-knikkersorteermachine" target="_blank" rel="noreferrer">Thomas-More-Digital-Innovation/1-015-knikkersorteermachine</a>