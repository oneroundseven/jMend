// Copyright 2016 FOCUS Inc.All Rights Reserved.

/**
 * @fileOverview jMend
 * @author sheny@made-in-china.com
 */

var gulp = require('gulp');
var closure = require('gulp-closure-compiler-service');

gulp.task('default', function() {
    // todo something
});

gulp.task('compile', function() {
    return gulp.src('src/*.js')
        .pipe(closure())
        .pipe(gulp.dest('dist'));
});

.pipe(closure({
    language: 'ECMASCRIPT5',
    compilation_level: 'WHITESPACE_ONLY'
}))