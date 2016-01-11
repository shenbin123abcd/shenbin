var gulp = require("gulp");
var less = require("gulp-less");
var cssmin=require("gulp-minify-css");
var uglify=require("gulp-uglify");

gulp.task("default",function(){
	gulp.src("less/*.less")
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest("css"));
});

gulp.task("js-uglify",function(){
	gulp.src("build/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("js"))
})

gulp.task("testWatch",function(){
	gulp.watch("less/*.less",["default"]);
})