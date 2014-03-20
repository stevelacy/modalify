var gulp = require('gulp');
var jade = require('gulp-jade');
var bump = require('gulp-bump');
var stylus = require('gulp-stylus');
var reload = require('gulp-livereload');

gulp.task('bump', function(){
  gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
});


gulp.task('stylus', function(){
  gulp.src('./src/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./css'))
  .pipe(reload());
});

gulp.task('jade', function(){
  gulp.src('./src/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./'))
  .pipe(reload());
});

// copy

gulp.task('copy', function(){
  gulp.src(['./src/**/*', '!./src/*.jade', '!./src/*.styl', '!./src/*.coffee'])
  .pipe(gulp.dest('./'));
});



gulp.task('watch', function(){
  gulp.watch(['./src/*.jade'], ['jade']);
  gulp.watch(['./src/*.styl'], ['stylus']);
  gulp.watch(['./src/*', '!./src/*.jade', '!./src/*.styl'], ['copy']);

});

gulp.task('default', ['stylus', 'jade', 'copy', 'watch']);