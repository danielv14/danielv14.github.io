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
ColorPix är en webbapplikation skapad med ramverket [Nuxt](https://nuxtjs.org/). Syftet med ColorPix är att användare ska inspireras och hitta intressanta färgpaletter utifrån bilder från [Unsplash](https://unsplash.com/).

ColorPix visar bilder från Unsplash och visar även bildernas sex dominanta färger och dess hex-värden. Det går även att leka med färgpaletternas saturering och ljusstyrka för att finjustera. När man hittat den perfekta färgpaletten hjälper ColorPix användaren att kopiera hex-värdena för användning.

Applikationen består av både en Vue frontend och en Node/Express backend där Vue på frontend-sidan gör anrop till Node-servern, som via Unsplash officiella JavaScript API modul serverar bilder tillbaka till Vue frontend.

{% include heroku-info.html %}

