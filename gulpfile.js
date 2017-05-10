const gulp = require('gulp');
const shell = require('gulp-shell');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');


// Path object containing asset paths
const paths = {
  'img': {
    'src': [
      'assets/img/*',
      'assets/img/*/*'
    ]
  },
  'js': {
    'src': [
      '_scripts/jquery-3.1.1.min.js',
      '_scripts/main.js'
    ],
    'dest': './assets/javascript/'
  }
};

// Concat .js files and create sourcemaps
gulp.task('scripts:concat', () => {
  return gulp.src(paths.js.src)
  .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(minify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.js.dest));
});

// Task to compress all images inside asset folder
gulp.task('img:compress', () => {
  return gulp.src(paths.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(file => {
      return file.base;
    }));
});

// Task to serve with jekyll command
gulp.task('serve', shell.task([
  "bundle exec jekyll serve --incremental"
]));

// Task to serve jekyll with drafts
gulp.task('serve:drafts', shell.task([
  "bundle exec jekyll serve --incremental --drafts"
]));

// Gulp watching
gulp.task('watch', () => {
  // concat js files
  gulp.watch(paths.js.src, ['scripts:concat']);

});

// Default task triggers gulp watch and serve jekyll site
gulp.task('default', ['watch', 'serve:drafts']);
