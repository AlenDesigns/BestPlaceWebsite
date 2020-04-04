const gulp = require('gulp');
const sass = require('gulp-sass');

const path = require('path');

const styles = path.resolve(__dirname, 'sass') + '/**/*.scss';
const dest = path.resolve(__dirname, 'dist') + '/style.css';

gulp.task('compile-sass', function() {
    return gulp.src(path.resolve(__dirname, 'sass/style.scss'))
        .pipe(sass()) // sass
        .pipe(gulp.dest(dest));
});

gulp.task('watch-sass', function() {
    gulp.watch(styles, gulp.series(['compile-sass']));
});