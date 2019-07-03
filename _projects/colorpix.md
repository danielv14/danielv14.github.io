---
title: ColorPix
desc: Webbapp som hjälper användaren hitta intressanta färgpaletter utifrån bilder
thumbnail: "/assets/img/projects/colorpix.png"
card-layout: left
image: "/assets/img/projects/colorpix.png"
tags: [Vue, Nuxt, Express, Node, API, Jest]
github: https://github.com/danielv14/ColorPix
website: http://colorpix.herokuapp.com/
order: 1
---
ColorPix är en webbapplikation skapad med ramverket [Nuxt](https://nuxtjs.org/) som är ett ramverk för att bygga Vue-baserade webbappar med SSR-stöd, SPA's och statiskt genererade siter. Syftet med ColorPix är att inspireras och hitta intressanta färgpaletter utifrån bilder från [Unsplash](https://unsplash.com/).

ColorPix visar bilder från Unsplash och visar även bildernas sex dominanta färger och dess hex-värden. Det går även att leka med färgpaletternas saturering och ljusstyrka för att finjustera. När man hittat den perfekta färgpaletten hjälper ColorPix användaren att kopiera hex-värdena för användning.

Applikationen består av både en Vue frontend och en Node/Express backend där Vue på frontend sidan gör anrop till Node servern, som via Unsplash officiella JavaScript API modul serverar bilder tillbaka till Vue frontend.

{% include heroku-info.html %}

## Utmaningar
En av utmaningarna jag stod inför när jag utvecklade ColorPix var att använda den request-module som Nuxt erbjöd out-of-the-box, axios. Nuxt använder inte en vanlig axios modul utan utför lite magi ovanpå en vanlig axios modul, såsom automatiskt "bas-URL" för både klient och server (modulen går att använda i bägge kontexterna). Jag ville inte göra anrop mot node servern direkt i vue komponenterna utan ville "wrappa" axios modulen i någon slags API med diverse metoder som vue komponenterna kunde använda sig av istället. 

Som tur är så har Nuxt ett bra plugin system och jag skapade ett api plugin som vue komponenterna kunde använda för att hämta bilder. På så sätt kunde jag separera vue komponenterna från själva request-logiken och kunde ändå använda den axios modul som Nuxt tillhandahåller. Jag har skrivit lite mer om hur jag skapade pluginet [här]({% post_url 2019-06-15-skapa-ett-request-plugin-i-nuxtjs %})
