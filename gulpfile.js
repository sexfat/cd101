//套件引入
var gulp = require('gulp');
var sass = require('gulp-sass');

// sass 編譯函式
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss') //來源目錄
    .pipe(sass().on('error', sass.logError)) //經由sass 轉譯
    .pipe(gulp.dest('./css')); //目的地目錄
});

// watch 監看變動函式 
gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

//執行函示
gulp.task('default' ,['sass' , 'watch']);