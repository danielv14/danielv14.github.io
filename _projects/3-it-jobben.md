---
title: IT Jobben
desc: Webbplats som konsumerar Arbetsförmedlingens API för att hitta IT-jobb
thumbnail: "/assets/img/projects/thumbnails/it-jobben.png"
thumb-layout: left
image: "/assets/img/projects/it-jobben.png"
tech: [Node, Angular, NoSQL, API]
github: https://github.com/danielv14/IT-Jobben
website: http://itjobben.herokuapp.com/
---
IT Jobben är webbapplikation som består av Angular på frontend-sidan och en Node server på backend-sidan. Webbapplikationen använder sig av Arbetsförmedlingens API för att visa alla IT-relaterade yrken som finns på just arbetsförmedlingen. På IT jobben kan besökaren söka fritt efter yrken relaterade till IT, hitta IT-jobb i specifika kommuner och hitta lediga IT-jobb inom specifik yrkesgrupp och yrke. Om besökaren skapar ett konto, via Facebook-inloggning, kan denne även spara sökord och annonser i sin profil.

{% include heroku-info.html %}

## Utmaningar
En av de kanske största utmaningarna var att studera hur Arbetsförmedlingens API fungerade och lära mig vilka sorters anrop till API:t som behövdes göras för att hela tiden komma åt rätt sorts information. En del anrop till API:t returnerar data som först måste behandlas i IT Jobbens Node-server innan de kan skickas vidare till Angular på frontend-sidan. Detta är en av anledningarna till att en egen Node-server ligger emellan Angular applikationen och arbetsförmedlingens API då Angular egentligen skulle ha kunnat göra API-anropen själv. Att skapa en Node-server emellan gjorde även att jag fick lära mig mer under själva IT Jobbens skapande.

En annan utmaning var att använda Angular.js i den skala som krävs för att skapa den funktionalitet som finns i webbapplikationen. Tidigare var jag knappt varse om vad Angular.js var och hur ramverket kunde användas för att skapa interaktionsrika webbapplikationer
