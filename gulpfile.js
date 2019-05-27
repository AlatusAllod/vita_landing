'use strict';

const gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync').create(),
	cleanCSS = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	path = 'app/';

const paths = {
	styles: {
		src: path + 'sass/**/*.sass',
		dest: path + 'dist/css',
	},
	libs: {
		src: path + 'lib/**/*.js',
		dest: path + 'dist/js',
	},
	js: {
		src: path + 'js/**/*.js',
		dest: path + 'dist/js',
	},
};

function style() {
	return gulp
		.src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(postcss([autoprefixer({ browsers: ['last 3 versions'] })]))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream());
}

function libs() {
	return gulp
		.src(paths.libs.src)
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.libs.dest))
		.pipe(browserSync.stream());
}

function js() {
	return gulp
		.src(paths.js.src)
		.pipe(concat('index.js'))
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(uglify())
		.pipe(gulp.dest(paths.libs.dest))
		.pipe(browserSync.stream());
}

function reload(done) {
	browserSync.reload();
	done();
}

function watch() {
	browserSync.init({
		server: {
			baseDir: path,
		},
	});
	gulp.watch(paths.styles.src, style);
	gulp.watch(paths.libs.src, libs);
	gulp.watch(paths.js.src, js);
	gulp.watch(path + '*.html', reload);
}

exports.watch = watch;
exports.style = style;
const build = gulp.parallel(style, libs, js, watch);
gulp.task('default', build);
