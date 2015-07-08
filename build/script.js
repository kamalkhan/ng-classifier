var gulp   = require('gulp');
var gutil  = require('gulp-util');
var coffee = require('gulp-coffee');
var rename = require('gulp-rename');
var header = require('gulp-header');
var meta   = require('./meta');

var srcFile  = __dirname + '/../src/ng-classifier.coffee';
var dest     = __dirname + '/..';

gulp.task('js', function(){
    gulp.src(srcFile)
    .pipe(coffee().on('error', gutil.log))
    .pipe(header(meta))
    .pipe(gulp.dest(dest));
});

gulp.task('js:watch', function(){
    gulp.watch([srcFile], ['js']);
});
