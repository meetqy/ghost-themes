"use strict";
var PORT, _s, addsrc, banner, browserSync, changed, concat, cssmin, dist, gulp, gutil, header, pkg, prefix, reload, sass, src, strip, uglify;

gulp = require("gulp");
gutil = require("gulp-util");
sass = require("gulp-sass");
concat = require("gulp-concat");
header = require("gulp-header");
uglify = require("gulp-uglify");
cssmin = require("gulp-cssmin");
addsrc = require("gulp-add-src");
changed = require("gulp-changed");
pkg = require("./package.json");
_s = require("underscore.string");
prefix = require("gulp-autoprefixer");
strip = require("gulp-strip-css-comments");
browserSync = require("browser-sync");
reload = browserSync.reload;

PORT = {
    GHOST: 2368,
    BROWSERSYNC: 3000
};

dist = {
    name: 'caffeine-theme.min',
    css: "assets/css",
    js: "assets/js"
};

src = {
    js: {
        fonts: [
            "assets/vendor/fontfaceobserver/fontfaceobserver.js",
            "assets/js/src/fonts.js"
        ],
        main: [
            "assets/js/src/__init.js",
            "assets/js/src/main.js",
            "assets/js/src/cover.js",
            "assets/js/src/search.js"
        ],
    }
};

banner = ["/**", " * <%= pkg.name %> - <%= pkg.description %>", " * @version <%= pkg.version %>", " * @link    <%= pkg.homepage %>", " * @author  <%= pkg.author.name %> (<%= pkg.author.url %>)", " * @license <%= pkg.license %>", " */", ""].join("\n");

gulp.task("fonts", function() {
    gulp.src(src.fonts.files)
        .pipe(gulp.dest(src.fonts.dest));
});

gulp.task('css',function () {
    gulp.src('assets/css/caffeine-theme.css')
        .pipe(concat("" + dist.name + ".css"))
        .pipe(cssmin())
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task("js", function() {
    gulp.src(src.js.fonts).pipe(addsrc(src.js.main)).pipe(changed(dist.js)).pipe(concat("" + dist.name + ".js")).pipe(uglify({
        mangle: false
    })).pipe(header(banner, {
        pkg: pkg
    })).pipe(gulp.dest(dist.js));
});

gulp.task("server", function() {
    browserSync.init(null, {
        proxy: "http://127.0.0.1:" + PORT.GHOST,
        files: ["assets/**/*.*"],
        reloadDelay: 300,
        port: PORT.BROWSERSYNC
    });
});

gulp.task("build", ["css", "js"]);

gulp.task("default", function() {
    gulp.start(["build", "server"]);
    gulp.watch('/assets/css/caffeine-theme.css', ["css"]);
    gulp.watch(src.js.main, ["js"]);
    gulp.watch(src.js.fonts, ["js"]);
});
