var config = require('../config')
if (!config.tasks.api) return

var browserSync = require('browser-sync')
//var data         = require('gulp-data')
var gulp = require('gulp')
var gulpif = require('gulp-if')
var handleErrors = require('../lib/handleErrors')
var htmlmin = require('gulp-htmlmin')
var path = require('path')
var del = require('del')
//var render = require('gulp-nunjucks-render')
var fs = require('fs')


//var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
    src: [path.join(config.root.src, config.tasks.api.src, '**/*.json')],
    dest: path.join(config.root.dest, config.tasks.api.dest)
}

var apiTask = function () {
    //render.nunjucks.configure([path.join(config.root.src, config.tasks.html.src)], {watch: false})

    gulp.src(paths.src)
        //.pipe(data(getData))
        .on('error', handleErrors)
        //    .pipe(render())
        //.on('error', handleErrors)
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())


}

gulp.task('api', apiTask)


module.exports = apiTask
