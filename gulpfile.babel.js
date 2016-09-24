import gulp from 'gulp';
import ractive from 'gulp-ractive';
import rename from 'gulp-rename';
import wrap from 'gulp-wrap';
import rollup from 'gulp-rollup';

gulp.task('hbs', function () {
    return gulp.src('**/*.hbs')
         .pipe(ractive())
         .pipe(wrap('export default <%= contents %>;\n'))
         .pipe(rename({extname: '.hbs.js'}))
         .pipe(gulp.dest('./'));
});

gulp.task('bundle', function () {
    return gulp.src('ux-todo.js')
         .pipe(ractive({
             entry: './ux-todo.js'
         }))
         .pipe(rename({basename: 'index'}))
         .pipe(gulp.dest('./'));
});
