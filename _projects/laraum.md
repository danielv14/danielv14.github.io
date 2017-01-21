---
title: Laraum
desc: Webbapp för att skapa och ta del av innehållsrika artiklar
thumbnail: "/assets/img/projects/thumbnails/laraum.png"
thumb-layout: right
image: "/assets/img/projects/laraum.png"
tech: [Laravel, PHP, Vue.js, PostgreSQL]
github: https://github.com/danielv14/Laraum
in-progress: true
order: 5
---
Laraum är en webbplats skapad med PHP-ramverket [Laravel](https://laravel.com/) och som är inspirerad av webbplatsen [Medium](https://medium.com/) där man kan skapa och konsumera artiklar. Laraum är dock fortfarande under utveckling och utvecklingen fick ta en paus undertiden som ett examensarbete genomfördes. På Laraum kan besökare läsa och gilla artiklar och även skapa egna artiklar och skapa bokmärken för andra artiklar om de registrerar sig.

Just nu finns det ingen demo på Laraum, men det kommer förhoppningsvis inom en snar framtid. Undertiden går det att följa projektets utveckling på [github](https://github.com/danielv14/Laraum).

## Utmaningar
En av grundpelarna bakom Laraum är att användare ska enkelt kunna skapa innehåll, det vill säga artiklar. För att de ska kunna göra det måste verktyget för att skapa artiklar vara enkelt och användarvänligt. Jag har länge fascinerats över hur man kan använda [Markdown](https://sv.wikipedia.org/wiki/Markdown) för att enkelt skapa innehåll som konverteras till korrekta html-element. Jag bestämde mig för att använda mig av Markdown på grund av det men markdown i sig är inte speciellt användarvänligt om man inte sen innan vet den korrekta syntaxen för hur Markdown ska skrivas. För att göra skapandet av artiklar användarvänligt använder Laraum en markdown-editor däri användaren kan använda knappar för att få till den formatering som denne är ute efter samt se förhandsvisning för hur artikeln kommer se ut i slutändan.
