var gulp = require("gulp");
var less = require("gulp-less");
var cssmin=require("gulp-minify-css");
var notify=require("gulp-notify");
var plumber=require("gulp-plumber");

gulp.task("default",function(){
	gulp.src("less/*.less")
		//异常处理
		.pipe(plumber({errorHandler:notify.onError("Error:<%=error.message%>")}))
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest("css"));
});


gulp.task("testWatch",function(){
	gulp.watch("less/*.less",["default"]);
})