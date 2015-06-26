var gulp = require('gulp')  
var webserver = require('gulp-webserver')  
var stylus = require('gulp-stylus')  
var source = require('vinyl-source-stream')  
var nib = require('nib')  
var minify = require('gulp-minify-css')

var wiredep = require('wiredep').stream

gulp.task('server', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      host: '0.0.0.0',
      port: 8080,
      open: true
    }));
});

gulp.task('bower', function () {
  gulp.src('./app/bower_components/**')
    .pipe(wiredep({
      directory: './app/lib'
    }))
    .pipe(gulp.dest('./app/lib'));
});

gulp.task('stylus', function() {  
  gulp.src('./app/styles/style.styl')
    .pipe(stylus({
      use: nib(),
      'include css': true,
    }))
    .pipe(minify())
    .pipe(gulp.dest('./build/css/'))
})



gulp.task('watch', function() {  
  gulp.watch(['./app/styles/**/*.styl', './app/components/**/*.styl'], ['stylus'])
})

gulp.task('default', ['server', 'watch'])  