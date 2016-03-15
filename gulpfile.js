// Copyright 2016 FOCUS Inc.All Rights Reserved.

/**
 * @fileOverview jMend
 * @author sheny@made-in-china.com
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

gulp.task('compress', function() {
    return gulp.src('src/*.js')
        //.pipe(jshint())
        //.pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('jMend.js'))
        .pipe(gulp.dest('dist'));
});

