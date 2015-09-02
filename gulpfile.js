var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , Server = require('karma').Server
  , jshint = require('gulp-jshint')
  , sass = require('gulp-sass');

  gulp.task('start', function () {
    nodemon({
      script: 'server.js'
    , ext: 'html'
    })
    .on('restart', function () {
      console.log('restarted!')
    })
  });

  gulp.task('test', function (done) {
    new Server({
      configFile: __dirname + '/karma.conf.js',
    }, done).start();
  });

  gulp.task('lint', function () {
    return gulp.src('public/module/video/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
  });

  gulp.task('build-css', function() {
    return gulp.src('public/source/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('public/assets/stylesheets'));
  });

  gulp.task('watch', function() {
    gulp.watch('public/module/video/**/*.js', ['lint']);
    gulp.watch('public/source/scss/**/*.scss', ['build-css']);
  });
