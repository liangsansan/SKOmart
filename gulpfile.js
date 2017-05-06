//引入gulp模块
//commonjs规范引用模块
var gulp = require('gulp');
var sass = require('gulp-sass');

//这里创建gulp任务
//用来编译sass文件
//创建一个任务叫compileSass，在里面编译sass文件
gulp.task('compileSass',function(){
	// 先查找sass文件的位置
	gulp.src('src/sass/*.scss')

	//通过pipe方法导入到gulp插件中，实现编译
	.pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
	//把编译后的文件输入到src/css
	.pipe(gulp.dest('src/css'));
});

//监听文件修改，执行相对任务
gulp.task('jsSass',function(){
	gulp.watch('src/sass/*.scss',['compileSass']);
})