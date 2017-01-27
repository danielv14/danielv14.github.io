const gulp = require('gulp');
const image = require('gulp-image');
const shell = require('gulp-shell');


const paths = {
  'img': {
    'base': 'assets/img/*'
  }
};

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
