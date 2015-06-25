var gulp = require('gulp');

gulp.task('default', function() {
    return gulp.src('./src/showdown-katex.js')
        .pipe(gulp.dest('./dist/'))
});
