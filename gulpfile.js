const gulp = require('gulp');
const image = require('gulp-image');
const shell = require('gulp-shell');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// Path object containing asset paths
const paths = {
  'img': {
    'base': 'assets/img/*'
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
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.js.dest));
});

// Task to compress all images inside asset folder
gulp.task('img:compress', () => {
  gulp.src(paths.img.base)
    .pipe(image())
    .pipe(gulp.dest('./assets/img'));
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

// Default task triggers gulp watch
gulp.task('default', ['watch']);
