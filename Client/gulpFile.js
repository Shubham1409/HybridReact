var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('src/js/main.js')//pick main.js
        .transform('reactify')//transform the JSX to js using reactify
        .bundle()// all the statements shud be put into one file
        .pipe(source('main.js'))//pick it from here
        .pipe(gulp.dest('dist/js'))// put the statements over the destination
});
//copy the following files.
gulp.task('copy',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});

//whenever a gulp executes run browserify and keep watching the structure and if any changes occur, run again and copy the changes.
gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('src/**/*.*',['browserify','copy']);
});
