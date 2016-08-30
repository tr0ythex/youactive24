/* jshint esversion: 6 */

const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      sass = require('gulp-sass'),
      wiredep = require('wiredep').stream,
      useref = require('gulp-useref'),
      reload = browserSync.reload;

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 8000,
    server: {
      baseDir: ['app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/*.html').on('change', reload);
  gulp.watch('app/styles/**/*.sass', ['sass']);
});

gulp.task('styles', () => {
  gulp.src('app/styles/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  gulp.src('app/scripts/**/*.js')
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({stream: true}));
});

gulp.task('html', ['styles', 'scripts'], () => {
  gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});

// <!-- bowers:scss --> и <!-- endbower -->
gulp.task('wiredep', () => {
  gulp.src('app/styles/sass/vendor.sass')
    .pipe(wiredep())
    .pipe(gulp.dest('app/styles/sass'));

  gulp.src('app/index.html')
    .pipe(wiredep({
      exclude: [ /jquery/ ]
    }))
    .pipe(gulp.dest('app'));
});

// <!-- build:css styles/vendor.css --> <!-- endbuild -->
gulp.task('useref', () => {
  gulp.src('app/index.html')
    .pipe(useref())
    // TODO: поменять на папку dist (или что-то в этом духе)
    .pipe(gulp.dest('app'));
});
