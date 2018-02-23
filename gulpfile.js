var gulp = require("gulp"),
    cssmin = require("gulp-clean-css"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del');

gulp.task('css',['clear_css'],function () {
   gulp.src('assets/css/*.css')
       .pipe(concat('caffeine-theme.min.css'))
       .pipe(cssmin({
           advanced: true,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
           compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
           keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
           keepSpecialComments: '*'
       }))
       .pipe(gulp.dest('./assets/css/'));
});

var js = 'assets/js/src';
gulp.task('js',['clear_js'],function () {
   gulp.src(['assets/js/caffeine-theme.js',js+'/other.js'])
       .pipe(concat('caffeine-theme.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('assets/js/'))
});

gulp.task('clear_css', function(cb) {
    return del(["assets/css/caffeine-theme.min.css"], cb)
});

gulp.task('clear_js', function(cb) {
    return del(["assets/js/caffeine-theme.min.js"], cb)
});

gulp.task('default',function() {
    gulp.start(['css','js']);
});
