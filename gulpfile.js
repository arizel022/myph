//переменные
const { src, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const flatten = require('gulp-flatten');

//функции
function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    })
}
function styles() {
    return src('app/scss/*.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
    return src([
        // 'node_modules/wow.js/dist/wow.js',
        // 'app/js/swiper.js',
        
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'app/js/main.js'

    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

    
        

function htmlIncludeExhs() {
    return src('app/html/pages/exhibitions/*.html') // выбираем только файлы в папке exhibitions
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(rename({dirname: ''})) // Оставляем только имя файла без пути
        .pipe(flatten({ includeParents: 1 })) // Перемещаем в папку exhibitions
        .pipe(dest('app/exhibitions'))
        .pipe(browserSync.stream());
}

function htmlInclude() {
    return src('app/html/pages/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('app'))
        .pipe(browserSync.stream());
}

function htmlIncludeBlog() {
    return src('app/html/pages/articles/*.html') // выбираем только файлы в папке articles
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(rename({dirname: ''})) // Оставляем только имя файла без пути
        .pipe(flatten({ includeParents: 1 })) // Перемещаем в папку blog
        .pipe(dest('app/articles'))
        .pipe(browserSync.stream());
}

function htmlIncludeAuthors() {
    return src('app/html/pages/authors/*.html') // выбираем только файлы в папке authors
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(rename({dirname: ''})) // Оставляем только имя файла без пути
        .pipe(flatten({ includeParents: 1 })) // Перемещаем в папку blog
        .pipe(dest('app/authors'))
        .pipe(browserSync.stream());
}

function htmlIncludeBookstore() {
    return src('app/html/pages/bookstore/*.html') // выбираем только файлы в папке bookstore
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(rename({dirname: ''})) // Оставляем только имя файла без пути
        .pipe(flatten({ includeParents: 1 })) // Перемещаем в папку bookstore
        .pipe(dest('app/bookstore'))
        .pipe(browserSync.stream());
}

function htmlIncludeCourses() {
    return src('app/html/pages/courses/*.html') // выбираем только файлы в папке courses
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(rename({dirname: ''})) // Оставляем только имя файла без пути
        .pipe(flatten({ includeParents: 1 })) // Перемещаем в папку courses
        .pipe(dest('app/courses'))
        .pipe(browserSync.stream());
}


function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch('app/html/**/*.html', htmlInclude);
    watch('app/html/pages/articles/*.html', htmlIncludeBlog);
    watch('app/html/pages/exhibitions/*.html', htmlIncludeExhs);
    watch('app/html/pages/bookstore/*.html', htmlIncludeBookstore);
    watch('app/html/pages/courses/*.html', htmlIncludeCourses);
    watch('app/html/pages/authors/*.html', htmlIncludeCourses);
}

//вызовы функций
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.htmlInclude = htmlInclude;

exports.default = parallel(styles, scripts, browsersync, watching, htmlIncludeBlog, htmlInclude, htmlIncludeCourses, htmlIncludeExhs, htmlIncludeBookstore, htmlIncludeAuthors);
