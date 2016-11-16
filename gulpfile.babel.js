/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 14-Nov-2016
*/

import gulp from 'gulp';
import webpack from 'webpack-stream';
import path from 'path';
import sync from 'run-sequence';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import minify from 'gulp-minify-css';

const root = './Clients/Web/';
const output = './public/';

// helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, glob); // app/{glob}
};

// map of all paths
let paths = {
    scss: resolveToApp('scss/**/*.scss'),
    css: resolveToApp('css'),
    js: resolveToApp('**/*!(.spec.js).js'), // exclude spec files
    entry: path.join(root, 'App.js'),
    output: output
};

gulp.task('webpack', () => {
    return gulp.src(paths.entry)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(paths.output));
    });

gulp.task('generate-css', () => {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(minify())
        .pipe(gulp.dest(`${output}css`));
});

gulp.task('watch', () => {
    gulp.watch([paths.js, paths.scss], ['webpack', 'generate-css']);
});

gulp.task('default', (done) => {
    sync('watch', done);
});
