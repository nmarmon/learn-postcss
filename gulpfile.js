var gulp = require('gulp');
var postcss = require('gulp-postcss');

var debug = require('postcss-debug').createDebugger();
//processors with custom config
var processors = require('./config');

//tarea de gulp 'styles' y su callback
gulp.task('styles', function(){
    return gulp.src('styles.css')
        //debug inyecta código para ver los cambios en el AST y
        //devuele el array normal que necesita postcss
        .pipe(postcss(debug(processors))) //TOKNOW: meter solo para dev o para debug ??
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch:styles',function(){
  gulp.watch('**/*.css', ['styles']);
});

gulp.task('debug-css', ['styles'], function(){
  debug.inspect();
});
