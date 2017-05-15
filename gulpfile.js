var gulp = require('gulp');
var postcss = require('gulp-postcss');

//processors with custom config
var processors = require('./config');

//tarea de gulp 'styles' y su callback
gulp.task('styles', function(){
    return gulp.src('styles.css')
        //debug inyecta código para ver los cambios en el AST y
        //devuele el array normal que necesita postcss
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});
