/* global require */

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    watchNow = require ('gulp-watch-now');

gulp.task('scripts', function () {
    return gulp.src('index.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('bin'));
});

gulp.task('scripts-debug', function () {
    return gulp.src('index.js')
        .pipe(gulp.dest('bin'));
});

gulp.task('default', ['scripts']);

gulp.task('debug', ['scripts-debug']);

gulp.task('develop', function() {
    watchNow.watch(gulp,
                   [
                       'index.js'
                   ],
                   [
                       'scripts-debug'
                   ]);
});
