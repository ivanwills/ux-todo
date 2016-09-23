import gulp from 'gulp';
import ractive from 'gulp-ractive';
import rename from 'gulp-rename';
import wrap from 'gulp-wrap';

gulp.task('hbs', function () {
    return gulp.src('**/*.hbs')
         .pipe(ractive())
         .pipe(wrap('export default <%= contents %>;\n'))
         .pipe(rename({extname: '.hbs.js'}))
         .pipe(gulp.dest('./'));
});
