var gulp = require('gulp');
var jade = require('gulp-jade');
var bump = require('gulp-bump');
var header = require('gulp-header');
var stylus = require('gulp-stylus');
var coffee = require('gulp-coffee');
var reload = require('gulp-livereload');

var build = './build';
var example = './example/';

gulp.task('bump', function(){
  gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
});


gulp.task('coffee', function(){
  gulp.src('./src/*.coffee')
  .pipe(coffee())
  .pipe(gulp.dest(build))
  .pipe(reload());
});

gulp.task('stylus', function(){
  gulp.src('./src/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest(build))
  .pipe(reload());
});

gulp.task('jade', function(){
  gulp.src('./src/*.jade')
  .pipe(jade())
  .pipe(gulp.dest(build))
  .pipe(reload());
});

// example
gulp.task('example:coffee', function(){
  gulp.src(example +'src/*.coffee')
  .pipe(coffee())
  .pipe(gulp.dest(example))
  .pipe(reload());
});

gulp.task('example:stylus', function(){
  gulp.src(example + 'src/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest(example))
  .pipe(reload());
});

gulp.task('example:jade', function(){
  gulp.src(example + 'src/*.jade')
  .pipe(jade())
  .pipe(gulp.dest(example))
  .pipe(reload());
});


// copy

gulp.task('copy', function(){
  gulp.src(['./src/**/*', '!./src/*.jade', '!./src/*.styl', '!./src/*.coffee'])
  .pipe(gulp.dest(build));
});

// example
gulp.task('example:copy', function(){
  gulp.src(['./example/**/*', '!./example/src/*.jade', '!./example/src/*.styl', '!./example/src/*.coffee'])
  .pipe(gulp.dest(example));

});


gulp.task('watch', function(){
  gulp.watch(['./src/*.jade'], ['jade']);
  gulp.watch(['./src/*.styl'], ['stylus']);
  gulp.watch(['./src/*.coffee'], ['coffee']);
  gulp.watch(['./src/*', '!./src/*.jade', '!./src/*.styl', '!./src/*.coffee'], ['copy']);

  // example
   
  gulp.watch(['./example/src/*.jade'], ['example:jade']);
  gulp.watch(['./example/src/*.styl'], ['example:stylus']);
  gulp.watch(['./example/src/*.coffee'], ['example:coffee']);
  //gulp.watch(['./example/src/*', '!./example/src/*.jade', '!./example/src/*.styl', '!./example/src/*.coffee'], ['example:copy']);
});


gulp.task('default', ['coffee', 'stylus', 'jade', 'copy', 'watch']);


gulp.task('publish', ['bump'], function(){
   setTimeout(
    function() {
      var pkg = require('./package.json');
      var date = new Date();
      var year = date.getFullYear();
      var banner = [
      '/**',
      ' * <%= pkg.name %> v<%= pkg.version %>',
      ' * <%= pkg.repository.url %>',
      ' * <%= pkg.description %> ',
      ' * Copyright <%= year %> - <%= pkg.author %> ',
      ' * License: <%= pkg.licenses[0].type %>',
      '**/',
      ''
      ].join('\n');
      gulp.src('./src/modalify.coffee')
      .pipe(coffee())
      .pipe(header(banner, {pkg: pkg, year: year}))
      .pipe(gulp.dest(build));
    }, 200);
});
