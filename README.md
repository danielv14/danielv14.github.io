# Personal Portfolio
Repo for my personal portfolio build with the static site generator Jekyll

## Running locally
Application can be run in two ways:
* `npm run start` will start the application via jekyll serve command
* `npm run start:drafts` will start the application and also include the **_/drafts** folder when building markdown posts.

## Development
Portfolio is using gulp as asset pipeline and the following tasks is available:
* `gulp` will trigger gulp in watch mode and serve jekyll site with drafts
* `gulp watch` will trigger gulp js task and watch for changes in js files
* `gulp serve` will serve jekyll site
* `gulp serve:drafts` will serve jekyll site and include post drafts
* `gulp scripts:concat` will concat js files, create sourcemaps and bundle them at target destination
* `gulp img:compress` will compress all images inside assets folder.

## Deployment
Master branch is setup to be deployed through GitHub Pages. This means that commits, pull request etc to master branch will be auto-deployed through GitHub Pages.