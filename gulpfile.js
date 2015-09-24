var gulp  = require('gulp');
var sass  = require('gulp-sass');
var concat = require('gulp-concat');
var delay = 0;
var dest = "./dest/";

gulp.task('default',function(){
	gulp.src('./src/**/*.js')
		.pipe(concat('common.js'))
		.pipe(gulp.dest(dest+'js'));

	// gulp.src('./src/**/*.html').pipe(gulp.dest('./test/'));
	gulp.src('./src/**/*.html').pipe(gulp.dest(dest));
	gulp.src('./src/scss/style.scss')
			.pipe(sass().on('error',sass.logError))
			.pipe(gulp.dest(dest+'css'));
});

gulp.watch('./src/**/*.js',function(event){
	console.log('rebuild file:'+event.path);
	setTimeout(function(){
		gulp.src('./src/**/*.js')
			.pipe(concat('common.js'))
			.pipe(gulp.dest(dest+'js'));
	},delay);

});

gulp.watch('./src/**/*.js.map',function(event){
	console.log('rebuild file:'+event.path);
	var path = event.path.split('/js')[1];
	var _path = path.split('/');
	var name = _path[_path.length-1];
	path = path.replace(name,'');
	setTimeout(function(){
		gulp.src(event.path)
			.pipe(gulp.dest(dest+'js'+path));
	},delay);
});

gulp.watch('./src/**/*.scss',function(event){
	console.log('rebuild file:'+event.path);
	setTimeout(function(){
		gulp.src(event.path)
			.pipe(sass().on('error',sass.logError))
			.pipe(gulp.dest(dest+'css'));
	},delay);
});

gulp.watch('./src/**/*.html',function(event){
	console.log('rebuild file:'+event.path);
	setTimeout(function(){
		// var path = event.path.split('html')[1];
		// var _path = path.split('\\');
		// var name = _path[_path.length-1];
		// path = path.replace(name,'');
		// gulp.src(event.path)
		// 	.pipe(gulp.dest(dest+path));
		gulp.src('./src/**/*.html').pipe(gulp.dest(dest));
	},delay);
})