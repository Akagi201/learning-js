'use strict';

const gulp = require('gulp-param')(require('gulp'), process.argv);
const rename = require('gulp-rename');

gulp.task('default', function () {
    console.log('default task run');
});

gulp.task('other', function () {
    console.log('other task run');
});

// $ gulp param --debug --tag v1.0.0
gulp.task('param', function (debug, tag) {
    console.log(debug); // => true
    console.log(tag); // => 'v1.0.0'
});

gulp.task('rename', function(){
   return  gulp.src('./input.txt')
       .pipe(rename('output.txt'))
       .pipe(gulp.dest('./dist'));
});
