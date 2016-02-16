var browserSync = require('browser-sync')
var config = require('../config')
var gulp = require('gulp')
var historyApiFallback = require('connect-history-api-fallback');

var browserSyncTask = function () {
    var bsConfig = {
        server: {
            baseDir: config.tasks.browserSync.server.baseDir,
            middleware: [historyApiFallback({
                verbose: true
                , rewrites: [
                    {
                        from: /^(.*?)\/(js|css|json|map)\/(.*)$/i,
                        to: function (context) {
                            console.log('href========'+JSON.stringify(context.parsedUrl.href));
                            console.log('match========'+JSON.stringify(context.match));
                            return '/'+context.match[2] + '/' + context.match[3];
                        }
                    }
                ]
            })]
        }
    }
    browserSync.init(bsConfig);
}
gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
