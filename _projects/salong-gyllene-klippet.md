---
title: Salong Gyllene Klippet
desc: Dynamisk webbplats åt en frisörsalong
thumbnail: "/assets/img/projects/thumbnails/salong-gyllene-klippet.png"
card-layout: left
image: "/assets/img/projects/salong-gyllene-klippet.png"
tags: [Ruby on Rails, PostgreSQL]
website: https://sheltered-river-12709.herokuapp.com
order: 2
---
Salong Gyllene klippet är en webbplats skapad åt en frisersalong i Umeå och är byggd med hjälp av ramverket Ruby on Rails. Webbplatsen skapades i samband med en [kurs](https://www.miun.se/utbildning/Kurser/Sok-kursplan/kursplan/?kursplanid=14417) där frisersalongens webbplats var slutresultatet av kursen.

Webbplatsen är byggd utifrån frisörens egna önskemål och krav om både utseende samt funktionalitet. Arbetet med webbplatsen var en iterativ process där frisören var involverad under hela processen, detta för att säkerställa att webbplatsen reflekterade hennes vision.

På webbplatsen kan frisören  publicera innehåll såsom nyheter med eller utan bilder, publicera "före- och efter" bilder på kunder och hantera prislistor. Frisören kan även loggföra sina kunder för att få en bättre bild över hur många kunder hon har, vilken typ av kunder hon har och fördelningen av behandlingstyper. 

## Demonstration
Även om frisören själv vart nöjd med slutresultatet togs webbplatsen aldrig officiellt i bruk på grund av att hon valde att börja studera och trappade ner frisörverksamheten något. Salongens webbplats finns dock fortfarande att [besöka](https://sheltered-river-12709.herokuapp.com) i demonstrationssyfte.

## Utmaningar

Webbplatsen är som tidigare nämnt byggd med hjälp av Ruby och webbramverket Ruby on Rails. Innan salongens webbplats byggdes var bägge programmeringsspråket och ramverket för mig okänt. Det var en utmaning i sig att arbeta utifrån en kunds krav med helt nya tekniker under en relativt kort tidsram. Efter att kundens krav och önskemål identifierades visade det sig att ramverket Ruby on Rails var en lämplig lösning då ramverkets många år på nacken innebar att det redan fanns många bra verktyg för att hantera inloggning, adminrättigheter, hantering och uppladdning av bilder och så vidare.

En annan utmaning var att skapa och presentera data från den loggbok däri frisören skulle kunna loggföra sina kunder. Loggboken presenterar data från webbplatsens PostgreSQL-databas på ett dynamiskt sätt med hjälp av olika diagram. Det innebär att frisören kan ta del av kund-data från den aktuella veckan, den aktuella månaden, det aktuella året och samtliga år sen första loggförd kund.
