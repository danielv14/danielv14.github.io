---
title: IMDb CLI
desc: TypeScript-baserat CLI för att söka efter information om film och serier
thumbnail: "/assets/img/projects/thumbnails/imdb-cli.png"
card-layout: right
image: "/assets/img/projects/imdb-cli-project.png"
tags: [TypeScript, Jest, Node]
github: https://github.com/danielv14/imdb-cli
order: 2
---
IMDb CLI är ungefär vad det låter som - ett CLI-verktyg som använder sig av ett underliggande API för att få fram information om filmer och serier. Verktyget är skrivet i TypeScript och är väl testat med hjälp av Jest.

Värt att påpeka är att verktyget heter IMDb CLI men hämtar egentligen sin data via OMDb API:et. I ett tidigare stadie av verktyget och repot så skrapades faktiskt imdb.com på information - men i en senare version så skrevs verktyget om att använda sig av OMDb API:et då det vart helt gratis att använda.

## Användning
CLI-verktyget går att använda på egentligen två olika sätt:

* `imdb` - skriver man endast imdb i terminalen så är verktyget något interaktivt och frågar efter input att söka efter
* `imdb -t 'harry potter' -m` - skriver man med diverse argument direkt så kan exempelvis söka direkt efter något men bara, som i det här fallet, efter filmer (-m flaggan)
* `imdb -t 'Lost' -i` - skriver man med -i flaggan så kommer verktyget räkna ut betyget för varje avsnitt i en series säsong och presentera trenden för en serie, alltså huruvida en serie blir bättre eller sämre med tiden
* `imdb -h` - skriver man med -h flaggan så får man upp information om verktygets alla argument och flaggor.


