const gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin');

gulp.task('sass', function(){
	return	gulp.src('online-zoo/assets/sass/main.sass')
				.pipe(sass({outputStyle: 'expanded'}))
				.pipe(autoprefixer({
					overrideBrowserslist: ['last 8 versions']
				}))
				.pipe(gulp.dest('online-zoo/'))
				.pipe(browserSync.reload({stream: true}))
});

gulp.task('style', function(){
	return gulp.src([
		'node_modules/normalize.css/normalize.css'
	])
		.pipe(concat('libsmin.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('online-zoo/'))
});



gulp.task('html', function(){
	return gulp.src('online-zoo/*.html/assets/html/*.html')
		.pipe(browserSync.reload({streem: true}))
});

gulp.task('js', function(){
	return gulp.src('online-zoo/*.js')
		.pipe(browserSync.reload({streem: true}))
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "online-zoo/"
		}
	});
});


gulp.task('watch', function(){
	gulp.watch('online-zoo/assets/sass/**/*.sass', gulp.parallel('sass'))
	gulp.watch('online-zoo/*.html', gulp.parallel('html'))
	gulp.watch('online-zoo/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('style',  'sass', 'watch', 'browser-sync'))