---
title: Movie Blogger
desc: WordPresstema byggt med SASS och Timber
card-layout: right
order: 7
tags: [WordPress, Gulp, SASS, Vagrant]
github: https://github.com/danielv14/wordpress-movie-blogger-theme
thumbnail: /assets/img/projects/thumbnails/movie-blogger.png
image: /assets/img/projects/movie-blogger.png
---
Movie Blogger är ett minimalistiskt WordPresstema byggt med hjälp av moderna verktyg för webbutveckling såsom Gulp och SASS. Temat använder sig av WordPress plugin [Timber](https://upstatement.com/timber/) som hjälper en att skapa hållbara teman där HTML kod, skapad med [Twig](http://twig.sensiolabs.org/), separeras från själva PHP-koden. Att separera HTML markup från PHP-koden på det sättet har inneburit mer överskådlig kod där själva markup-koden med hjälp av Twig blir avsevärt mer överskådlig och hanterbar i jämförelse med utvecklingen av WordPress teman på mer traditionellt vis.

> Se projektets [github-sida]({{ page.github }}) för mer bilder då det inte finns någon demo för projektet.

Temat bygger i grunden på [Bootstrap](http://getbootstrap.com/) där många av Bootstraps variabler har ändrats och egenskriven SASS har skrivits som komplement för att skapa ett minimalistiskt tema som fokuserar på innehållet.

## Custom post types
Wordpresstemat använder sig av [custom post types](https://codex.wordpress.org/Post_Types) med hjälp av ett plugin för att låta användaren skapa antingen nyhetsinlägg eller recensioner av antingen filmer eller tv-serier.

## Utveckling
Under utvecklandet har [Vagrant](https://www.vagrantup.com/) tillsammans med [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV) använts som lokal och virtuell utvecklingsmiljö. Gulp.js har använts för att hantera SASS och ladda om hemsidan i webbläsaren när förändring sker i filerna.
