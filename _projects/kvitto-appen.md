---
title: Kvitto Appen
desc: Webbapp för att reda ut kvitton och skulder
thumbnail: "/assets/img/projects/thumbnails/kvitto-appen.png"
card-layout: right
image: "/assets/img/projects/kvitto-appen.png"
tags: [Ionic, Angular, NoSQL]
github: https://github.com/danielv14/Kvitto-Appen
website: http://receipt-counter.herokuapp.com
order: 3
---
Kvitto Appen är en webbaserad applikation som växte ur ett behov av att förenkla min egen vardag. Jag insåg att jag många gånger manuellt behövde räkna ut och hålla koll på kvitton och skulder inom hemmet. Det är just det som Kvitto Appen hjälper mig med. Kvitton sparas i appen, håller koll på vem som betalade, vad det var för typ av inköp och det går även att knyta en kommentar till kvittot om ytterliga information behövs för att sätta kvittot i en kontext. Utifrån de sparade kvittona räknar Kvitto Appen ut den aktuella skulden och vem som är skyldig vem helt enkelt. När skulden sen betald är bockas kvittona som lösta och kan antingen tas bort helt eller sparas.

Applikationen har genomgått olika versioner där skulderna först sparades i cookies och där själva webbappen skapades med diverse jQuery-lösningar till att slutligen bli en hybridapplikation skapad med hjälp av [Ionic](https://ionicframework.com) och  [AngularJS](https://angularjs.org) där kvittona och skulderna sparas med hjälp [Firebase](https://www.firebase.com). Kvitto Appen skyddas nu även av autentisering och inloggning vilket öppnar upp applikationen för fler användare.

{% include heroku-info.html %}
