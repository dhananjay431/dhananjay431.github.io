var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  scripts: [
"./main/jquery.min.js",
"./main/bootstrap.min",
"./main/jquery.dataTables.js",
"./main/angular.min.js",
"./main/angular-datatables.min.js",
"./main/angular-datatables.bootstrap.min.js",
"./main/dataTables.tableTools.js",
"./main/angular-datatables.tabletools.min.js",
"./main/angular-resource.min.js",
"./main/ui-bootstrap-tpls.min.js",
"./main/angular-sanitize.min.js",
"./main/angular-animate.min.js",
"./main/angular-aria.min.js",
"./main/angular-messages.min.js",
"./main/angular-material.min.js",
"./main/angular-ui-router.min.js",
"./main/jquery-ui.js",
"./main/lodash.min.js"
]};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scriptsmain']);
});


gulp.task('scriptsmain', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./vendor/'));
});


gulp.task('default', ['scriptsmain']);

/*
"/js/jquery.min.js",
"/js/jquery.dataTables.js",
"/js/angular.min.js",
"/js/angular-datatables.min.js",
"/js/angular-datatables.bootstrap.min.js",
"/js/dataTables.tableTools.js",
"/js/angular-datatables.tabletools.min.js",
"/js/angular-resource.min.js",
"/js/ui-bootstrap-tpls.min.js",
"/js/angular-sanitize.min.js",
"/js/angular-animate.min.js",
"/js/angular-aria.min.js",
"/js/angular-messages.min.js",
"/js/angular-material.min.js",
"/js/angular-ui-router.min.js",
*/