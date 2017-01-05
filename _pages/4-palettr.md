---
layout: project
permalink: "/palettr/"
title: Palettr
desc: Skapa och upptäck färgpaletter
thumbnail: "/assets/img/thumbnails/palettr.png"
thumb-layout: left
image: "/assets/img/projects/palettr.png"
tech: [Laravel, PHP, Vue.js, PostgreSQL]
github: https://github.com/danielv14/Palettr
website: http://palettr.herokuapp.com/
---
Palettr är en webbplats skapad med PHP-ramverket [Laravel](https://laravel.com/). På Palettr kan besökare inspireras av färgpaletter, gilla färgpaletter se de allra ta del av de färgpaletter som har gillats mest. Om man skapar ett konto på Palettr kan man dessutom skapa egna färgpaletter som andra besökare kan ta del av och gilla om de så vill.

Idén till webbplatsen kom från alla de gånger då jag själv har behövt inspiration om färger till olika webbplatser och projekt. Jag har då många gånger besökt liknande webbplatser och i samband med att jag ville lära mig mer om PHP-ramverket Laravel skapade jag således denna webbplats.

{% include heroku-info.html %}

## Utmaningar
Den kanske största utmaningen med Palettr var att skapa en bra upplevelse för användarna när de skapar och redigerar sina färgpaletter. Jag ville inte endast ha formulärfält där användaren matade in hexkoder då det upplägget innebär att användarna inte kan experimentera med olika färger på samma sätt. Tillslut landade jag i en lösning med ett javascript-plugin och en del css-kod för att göra själva upplevelsen kring att skapa och redigera färgpaletter så bra och utforskande som möjligt.

Ytterligare en utmaning var att skapa funktionaliteten bakom "gilla-knapparna" till varje färgpalett på ett så bra sätt som möjligt, utan att hela webbplatsen behövdes laddas om efter att en besökare gillat en färgpalett. Detta implementerades med hjälp av [Vue.js](https://vuejs.org/) som är ett javascript-bibliotek som kan användas för bland annat skapa sådana typer av interaktioner.
