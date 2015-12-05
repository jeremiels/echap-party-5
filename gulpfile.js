var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Requires the browser-sync plugin
var browserSync = require('browser-sync');



// SASS Task
gulp.task('sass', function(){
  gulp.src('source/assets/sass/**/*.sass')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('public/assets/stylesheets/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// CopyHTML Task
gulp.task('CopyHTML', function(){
  return gulp.src('source/*.html')
  .pipe(gulp.dest('public'))
});
// Copy fonts to public dir
gulp.task('fonts', function() {
  return gulp.src('source/assets/fonts/**/*')
  .pipe(gulp.dest('public/assets/fonts'))
})

// browserSync Task
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'public'
    },
  })
})



// Watch Task
gulp.task('watch', ['browserSync', 'sass', 'CopyHTML'], function (){
  gulp.watch('source/assets/sass/**/*.sass', ['sass']);
  gulp.watch('source/*.html', ['CopyHTML']);
  // Other watchers
});
