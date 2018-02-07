var gulp = require("gulp"),
    cssmin = require("gulp-clean-css"),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');//监听文件更新
    del = require('del');

gulp.task('css',['clear_css'],function () {
   gulp.src(['assets/css/*.css'])
       .pipe(concat('caffeine-theme.min.css'))
       .pipe(cssmin({
           advanced: true,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
           compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
           keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
           keepSpecialComments: '*'
       }))
       .pipe(gulp.dest('./assets/css/'));
});

gulp.task('clear_css', function(cb) {
    return del(["assets/css/*.min.css"], cb)
});

gulp.task('default',function() {
    gulp.start('css');
});
