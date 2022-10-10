---
title: Interactive Wall
path: van-roey-interactive-wall
image: /projects/van-roey-interactive-wall/van-roey.jpg
date: 31-05-2021
summary: Interactive Wall for Van Roey
featured: true
---
## Wat is de Interactive Wall?

De interactive wall is een muur, gemaakt uit hout, die beschilderd is met elektrisch geleidende verf. Deze verf is verbonden met draden naar een Raspberry Pi met een touch controller HAT. De Raspberry Pi is ook verbonden met een monitor die een custom website toont. Door één van deze vlakken aan te raken, zal de getoonde content zich aanpassen. Op die manier wordt er een tijdlijn weergegeven van Van Roey van begin tot einde.

## Over de opdracht

Van Roey.be had een projectidee om met geleidende verf iets te doen. Ze wisten alleen nog niet 100% wat. We hebben toen met 10 mensen de hoofden bij elkaar gestoken en hard nagedacht over wat de mogelijkheden zijn. We hadden verschillende ideeën maar de leukste was om een virtuele tijdlijn te maken, waar de bezoeker dan doorheen kon tikken om het zo te stellen.

## Uitwerking

Nadat we wisten wat we wouden maken, zijn we aan de slag gegaan met taakverdeling en planning. Het was duidelijk dat het bouwen van de muur veel tijd zou gaan kosten, en dat de website ontwikkelen tesamen met de hardware ook best wat tijd ging innemen. Om deze redenen hebben we de krachten gebundeld en 3 teams gemaakt. Team muur, team website en team hardware. Op die manier had ieder zijn eigen focus blok en konden we echt productief zijn.

Het muur-team ging meteen aan de slag door bij de klant de maten op te nemen. Deze hebben ze meteen doorgegeven aan een schrijnwerker waar Thierry Eeman nauw mee heeft samengewerkt. Nadat de muur gebouwd was is deze verplaatst naar een hal in de Thomas More gebouwen. Hier is de muur afgewerkt door een witte grondlaag erop te verven, afgewerkt met nog een witte laag verf. Nadat deze droog was is een andere student begonnen met stencils te plaatsen op de muur, zodat we de geleidende verf konden toepassen. Nadat de stencils geplaatst waren, zijn ze begonnen met enkele lagen geleidende verf toe te passen op de muur. Toen dit droog was hebben ze de bedrading naar de vlakken gelegd.

Het website-team is meteen aan de slag gegaan met ideeën uit te werken. Daarvan heeft de klant er 1 gekozen en die hebben ze dan meteen uitgewerkt. Tijdens het ontwikkelen zijn er enkele custom SVGs gemaakt om dit er allemaal mooi uit te laten zien. Ze hebben allemaal samengewerkt via GitHub. Nadat ze klaar waren met het design hebben ze nauw samengewerkt met het hardware team om de fysieke knoppen te koppelen aan de website. Hiervoor heeft het hardware team wat JavaScript code geschreven zodat dit achter de schermen gebeurd.

Het hardware-team is meteen aan de slag gegaan met de geleidende verf en de touch HAT om te kijken hoe deze het best werkt. Hierbij zijn er veel problemen aan het licht gekomen zoals "Ghost-touches". Dit hebben we uiteindelijk grotendeels kunnen oplossen met software. Er zijn 2 verschillende programmas gemaakt. 1 web server met Python en WebSockets, en 1 programma met Python voor de touch inputs. Het touch input programma runt als een eigen service op de Raspberry Pi, en registreert de aanrakingen, en verstuurt ze via een WebSocket naar de webserver. Zo blijft deze service apart draaien van de webserver. Het webserver programma draait uiteindelijk de website tesamen met de WebSocket server. De website krijgt uitendelijk commandos via de WebSocket over naar welke pagina de browser moet navigeren. Dit is een oplossing die op lange termijn ook zal blijven werken.
