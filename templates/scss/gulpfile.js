// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('default',
    gulp.series('sass', function () {
        gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    })
)
