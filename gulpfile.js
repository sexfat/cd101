//套件引入
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


// sass 編譯函式
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss') //來源目錄
    .pipe(sass().on('error', sass.logError)) //經由sass 轉譯
    .pipe(gulp.dest('./css')); //目的地目錄
});

// watch 監看變動函式 
// gulp.task('watch', function () {
//   gulp.watch(['./sass/*.scss' ,'./sass/**/*.scss' , './sass/**/**/*.scss'], ['sass']);
// });


gulp.task('default', ['sass'], function () {

  browserSync.init({
    server: {
      //根目錄
      baseDir: "./",
      index: "animation.html"
    }
  });

  gulp.watch(["sass/*.scss"  , "sass/**/*.scss"], ['sass']).on('change', reload);
  gulp.watch("*.html").on('change', reload);
  gulp.watch("js/*.js").on('change', reload);
  gulp.watch("images/*").on('change', reload);
  // gulp.watch("images/*").on('change', reload);
});








// //執行函示
// gulp.task('default' ,['sass' , 'watch']);