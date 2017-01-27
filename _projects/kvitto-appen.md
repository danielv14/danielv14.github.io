---
title: Kvitto Appen
desc: Webbapp för att reda ut kvitton och skulder
thumbnail: "/assets/img/projects/thumbnails/kvitto-appen.png"
card-layout: right
image: "/assets/img/projects/kvitto-appen.png"
tags: [Ionic, Angular, NoSQL]
github: https://github.com/danielv14/Kvitto-Appen
website: http://receipt-counter.herokuapp.com
order: 2
---
Kvitto Appen är en webbaserad applikation som växte ur ett behov av att förenkla min egen vardag. Jag insåg att jag många gånger manuellt behövde räkna ut och hålla koll på kvitton och skulder inom hemmet. Det är just det som Kvitto Appen hjälper mig med. Kvitton sparas i appen, håller koll på vem som betalade, vad det var för typ av inköp och det går även att knyta en kommentar till kvittot om ytterliga information behövs för att sätta kvittot i en kontext. Utifrån de sparade kvittona räknar Kvitto Appen ut den aktuella skulden och vem som är skyldig vem helt enkelt. När skulden sen betald är bockas kvittona som lösta och kan antingen tas bort helt eller sparas.

Kvitto Appen har genomgått olika versioner där skulderna först sparades i cookies och där själva webbappen skapades med diverse jQuery-lösningar till att slutligen bli en hybridapplikation skapad med hjälp av [Ionic](https://ionicframework.com) och  [AngularJS](https://angularjs.org) där kvittona och skulderna sparas med hjälp [Firebase](https://www.firebase.com). Kvitto Appen skyddas nu även av autentisering och inloggning vilket möjliggör att fler än jag skulle kunna nyttja applikationen.

{% include heroku-info.html %}

## Utmaningar
Den största utmaningen med Kvitto Appen var att få alla tekniker att arbeta med varandra på ett bra sätt. Ionic, AngularJS och Firebase som databas och autentisering behövde fungera i samspel för att skapa en bra upplevelse där kvitton och skulder reds ut på ett effektivt sätt. En utmaning som så vitt jag vet är en bugg i versionen av Firebase jag använde är att inloggningen till applikationen ibland inte fungerar vid första försöket, även om inloggningsuppgifterna stämmer. Detta är dock endast ett problem när en så kallad `authWithOAuthRedirect` autentiseringsmetod används istället för `authWithOAuthPopup` metod.
