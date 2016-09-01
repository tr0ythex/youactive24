/* jshint esversion: 6 */

const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      sass = require('gulp-sass'),
      wiredep = require('wiredep').stream,
      useref = require('gulp-useref'),
      reload = browserSync.reload;

gulp.task('styles', () => {
  gulp.src('app/styles/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  gulp.src('app/scripts/**/*.js')
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(reload({stream: true}));
});

// for production
gulp.task('html', ['styles', 'scripts'], () => {
  gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});

// dev server
gulp.task('serve:dev', ['styles', 'scripts'], () => {
  browserSync({
    notify: false,
    port: 8000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/*.html').on('change', reload);
  gulp.watch('app/styles/**/*.sass', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
});

// TODO: write task for prod server

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
    .pipe(gulp.dest('dist'));
});
