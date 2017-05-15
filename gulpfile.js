var gulp = require('gulp');
var postcss = require('gulp-postcss');

//Módulos procesadores para PostCSS
var csswring = require('csswring');
var perfectionist = require('perfectionist');

//tarea de gulp 'styles' y su callback
gulp.task('styles', function(){
    var processors = [
        perfectionist,
        csswring
    ];

    return gulp.src('styles.css')
        //debug inyecta código para ver los cambios en el AST y
        //devuele el array normal que necesita postcss
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});
