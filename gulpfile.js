var gulp = require('gulp')
plumber = require('gulp-plumber'),
rename = require('gulp-rename'),
minifyCSS = require('gulp-minify-css'),
sass = require('gulp-sass');

var paths = {
	src: "src/flexgrid.scss",
	dist: "dist/",
}

gulp.task('default', ['watch', 'build']);

gulp.task('build', function() {
	return gulp.src(paths.src)
	.pipe(plumber())
	.pipe(gulp.dest(paths.dist))
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(paths.dist))
	.pipe(minifyCSS())
	.pipe(rename({
	 suffix: '.min'
	 }))
	.pipe(gulp.dest(paths.dist));
	});

gulp.task('watch', function() {
	gulp.watch(paths.src, ['build']);
});