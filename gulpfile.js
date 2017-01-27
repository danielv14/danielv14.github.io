const gulp = require('gulp');
const image = require('gulp-image');


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
