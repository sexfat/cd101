# CD101 Web/APP前端設計工程師養成班

 - 上課講義
[sass講義](https://www.gitbook.com/book/sexfat/greenie-s-manual/details)

- 環境安裝
[環境安裝](https://legacy.gitbook.com/book/sexfat/ev-documentatio/details)

- 上課檔案
[github / cd101](https://github.com/sexfat/cd101)

- sass官網
[sass offical website](http://sass-lang.com/) 

- sass 線上中文手冊 
[線上中文手冊](http://sass.bootcss.com/docs/sass-reference/)

- sass解決中文註解的問題
[中文註解](http://jsnwork.kiiuo.com/archives/1723/sass-scss-compass-susy2-ruby-%E8%A7%A3%E6%B1%BA%E4%B8%AD%E6%96%87%E8%A8%BB%E8%A7%A3%E7%99%BC%E7%94%9F%E9%8C%AF%E8%AA%A4)

- sass 結構設計
https://github.com/sexfat/sass_structure

[sass 線上編輯器](https://www.sassmeister.com/)



## 資源分享
https://ogdesign.tw/resources


## 技能樹
https://github.com/goodjack/developer-roadmap-chinese



# 拜拜基本款
http://blockstudio.tw/project/pai-pai/

# linux指令

sudo 管理者權限
cd 到下一層目錄
cd.. 回到上一層
ls    mac查詢指令 
dir   win 查詢指令


## gulp

安裝指令
`npm install gulp --save-dev`

## gulp-sass

安裝指令
`npm install gulp-sass --save-dev`


- 建立
  gulpfile.js 檔案
  
  放入底下的code
```jsx=
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
```


- 終端機執行  `gulp`



# sass 變數

```css=
$font-size : 20px;
$content : ""; 
$font-family-sans-serif:  "Helvetica Neue", Helvetica, Arial, sans-serif;




.box {
  font-size: $font-size ;
  width: $font-size;
  content: $content;
  font-family: $font-family-sans-serif ; 
}




.box2 {
    font-size: $font-size;
  }

```


## Nesting

```css

.wrapper {
    .sidebar {
        width: 10px;
        .testarea {
            background-color: #f00;
        }
        .box {
            width: 20px;
            span {
                margin: 10px
            }
        }
    }
}

```

# @import

```css=
@import "var";
@import "plugin";
```




# @mixin


```css＝

//沒帶值
@mixin margin-auto(){
    margin-left: auto;
    margin-right: auto;
  } 

//帶值
@mixin margin-auto-color($color){
  margin-left: auto;
  margin-right: auto;
  background-color: $color;
} 

.box {
   width: 1000px;
   @include margin-auto();
}

.box2 {
    width: 500px;
    @include margin-auto-color(#f00);
 }


//多值

 @mixin margins ($top , $left , $right) {
   margin-top: $top;
   margin-left: $left;
   margin-right: $right;
 } 


.boxleft-20 {
    @include margins(10px , 20px , 30px);
} 


.boxleft-30 {
    @include margins(10px , 30px, 40px);
} 

```

# 瀏覽器符號
```css=
 
@mixin border_radius($num) {
    -moz-border-radius: $num;
    -ms-border-radius: $num;
    -o-border-radius: $num;
    -webkit-border-radius: $num;
    border-radius: $num;
}

.btn {
    @include border_radius (10px);
}


.btn_wide {
    @include border_radius (8px);
    margin: 10px;
}
```


# #{} 跳脫字元

```css=
//非屬性數值 都要用 #{$變數}
@mixin border_radius_n($classname, $num) {
    .#{$classname} {
        -moz-border-radius: $num;
        -ms-border-radius: $num;
        -o-border-radius: $num;
        -webkit-border-radius: $num;
        border-radius: $num;
    }
}



#box {
    @include border_radius_n(btn_w, 10px);
}
```

# extend 

```css=
//extend 共用屬性
.boxs {
    width: 100px;
    height: 200px;
}

//mixin 可以傳值
@mixin boxs($num){
    width: $num;
    height: $num * 2;
}


.box-red {
    background-color: red;
    @include boxs(100px);
    // @extend .boxs;
}

.box-green {
    background-color: green;
    @extend .boxs;
    // @include boxs();
}

.box-blue {
    background-color: blue;
    // @include boxs();
    @extend .boxs;
}

// html-tag id class 都可以extend
div:hover {
    box-sizing: border-box;
}

a {
    color: #f20;
}

#obj {
    text-align: center;
}

```


```css=
// mixin _ - 都可以

@mixin btn-width($num) {
    width: $num;
}

.width {
  @include btn_width(100px);
}

```
# 佔位符號 %
 
```css=
//佔位符號
%botton {
    width: 400px;
    background-color: #f40;
}

.box-test {
  @extend %botton ;
}

.box-02 {
    @extend %botton ;
}
```


# browserSync 安裝

1. 安裝套件 `npm install browser-sync --save-dev`

2. 修改 gulpfile.js 
```jsx=

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
      index: "index.html"
    }
  });

  gulp.watch(["sass/*.scss"  , "sass/**/*.scss"], ['sass']).on('change', reload);
  gulp.watch("*.html").on('change', reload);
  gulp.watch("js/*.js").on('change', reload);
  // gulp.watch("images/*").on('change', reload);
});

// //執行函示
// gulp.task('default' ,['sass' , 'watch']);

```



# 運算

``` css=
// 運算
.box6 {
// 要注意 單位不同  跟單位相同的運算結果 
    width: 100 + 10em;
    height: 100px - 10px;
    margin : (10px - 5 ) * 10;
    padding:  (40 / 2) + px ;
    // font : 10px / 20px ;

}
```


```css=
.box7 {
      
    font-size: floor( 3.4px); //無條件捨去
    
    width: round(4.5px); //四捨五入

    height: ceil(4.7px); //無條件進位
}

```



```css=
$font-base-size: 14px;

body {
    font-size: $font-base-size;
}

h1 {
    font-size: ceil($font-base-size * 4.4);
}

h2 {
    font-size: ceil($font-base-size * 3.4);
}

h3 {
    font-size: ceil($font-base-size * 2.4);
}

h4 {
    font-size: ceil($font-base-size * 1.4);
}

h5 {
    font-size: ceil($font-base-size * 1);
}
```



# for迴圈

```css=
@for $i from 1 through 10 {
    .box-#{$i} {
        width: $i * 1px;
        height: $i * 2px; 
    }
}
```

### mixin 結合 for迴圈
```css=
@mixin box-widths($num) {
    @for $i from 1 through $num {
        .box-#{$i} {
            width: $i * 1px; // height: $i * 2px;
        }
    }
}


@include box-widths(10);

```

# Grid
```css=
@mixin grid($num) {
    @for $i from 1 through $num {
        .col-md-#{$i} {
            width: ($i /$num) * 100%;
        }
    }
}

@include grid(12);
```

# 位移
```css=
@mixin push($attr, $dir , $num) {
    @for $i from 1 through $num {
        .push-#{$attr}-#{$dir}-#{$i} {
            #{$attr}-#{$dir}: $i * 1px;
        }
    }
}


@include push( margin, top,10);
@include push( padding ,left,10);

```


# each 迴圈
```css=
@mixin imgs($images) {
    @each $img in $images {
        .#{$img}-img {
            background-image: url('images/#{$img}.png');
            display: block;
        }
    }
}

@include imgs([a1 ,a2 ,a3 ,logo ,animals]);
```

# if else
```css=
$tem : white;

//if
.box-color {
    @if $tem ==blue {
        background-color: blue;
    }
    @else if $tem ==yellow {
        background-color: yellow;
    }
    @else {
        background-color: green;
    }
}
```

# @while 迴圈

```css=

$i: 20;

@while $i >= 6 {
    .box-#{$i} {
        margin: 10px + $i;
    }
    $i: $i - 2;
}
```


### @sass控制命令  有哪些 ？

@if  @for @each @while


var  extend  mixin  nesting

運算


## @content

```css=
@mixin contents () {
    .box-inner {
       margin: 0 auto;
    }
    @content
}

.box-content {

  @include contents(){
    font-size: 10px;
    .box_small {
      width: 20px ;
    }
  }

}
```

 
#  responds


```css=
//斷點
$large : 1200px;
$medium_min : 1199px;
$medium_max : 768px;
$small : 767px;


@mixin responds($breakpoint) {
    @if $breakpoint=="desktop" {
        @media all and (min-width: $large) {
            @content;
        }
    }
    @else if $breakpoint=="medium" {
        @media all and (min-width: $medium_min) and (max-width:$medium_max) {
            @content;
        }
    }
    @else if $breakpoint=="moblie" {
        @media all and (max-width: $small) {
            @content;
        }
    }
}

```

使用方式：

```
//桌機
@include responds(desktop) {};
//平板
@include responds(medium) {};
//手機
@include responds(moblie) {};

```


# 按鈕模組設計

```css=
//函式
@mixin btn($bgc,$border-color,$width,$height,$border-r:null,$color:null){

    background-color: $bgc;
    border: 1px solid $border-color;
    border-radius: $border-r;
    width:  $width;
    height:  $height;
    color : $color;
    &:hover {
        background-color: darken($bgc , 8%);
        border: 1px solid  darken($border-color , 8%);
        transition: all 0.3s ease;
        color : lighten($color, 8%);
    }
    @content;
}
//用法
.btn_01 {
   @include btn(#999, #666 , 100px, 20px , 5px , #000){
     text-align: center


   }
}

.btn_02 {
    @include btn(rgb(212, 27, 27), rgb(100, 15, 15) , 200px, 40px , 10px , #000)
 }


//顏色函式 透明度 darken lighten  
.btn_color {
    color : rgba( #000000, 0.4);  
    background-color:lighten(rgb(148, 0, 0) , 20%);
    
}

```


http://single9.net/2018/04/node-js-%E8%88%87-socket-io-%E5%8D%B3%E6%99%82%E8%81%8A%E5%A4%A9%E5%AE%A4%E5%AF%A6%E4%BD%9C-%E8%B3%87%E6%96%99%E5%BA%AB/


# bower 安裝

https://bower.io/


type `npm install -g bower`


建立 .bowerrc 檔案

```
{
    "directory" : "libs"
}
```


# bower.json 檔案建立

```jsx=
{
    "name": "plugin",
    "description": "cd101",
    "main": "",
    "license": "MIT",
    "homepage": "",
    "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "libs",
      "test",
      "tests"
    ],
    "dependencies": {
      "jquery": "^3.1.1",
      "owl.carousel": "^2.1.5",
      "bootstrap-touchspin": "^3.1.2",
      "jqueryui": "^1.12.1",
      "font-awesome": "fontawesome#^4.6.3",
      "summernote": "^0.8.2",
      "fastselect": "^0.6.1",
      "bootstrap-sass": "^3.3.6",
      "animate-sass": "^0.6.4",
      "animate.css": "^3.5.2",
      "materialize": "^0.98.0",
      "skitter-slideshow": "skitter#^5.0.0",
      "hover": "^2.1.1",
      "compass-mixins": "^1.0.2",
      "jquery.stellar": "^0.6.2",
      "remodal": "^1.1.1",
      "moment": "^2.18.1",
      "daterangepicker": "^1.6.0",
      "gsap": "^1.18.4",
      "ScrollMagic": "^2.0.5",
      "modernizr": "^3.3.1",
      "parallax": "^2.1.3"
    },
    "devDependencies": { 
      "flipclock": "FlipClock#^0.7.7"
    }
  }
  
```


終端機執行 `bower i`



```htmlmixed=
 <!-- 套件 -->
    <script src="libs/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="libs/gsap/src/minified/TweenMax.min.js"></script>

```


# gulpfile.js

```jsx=
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
 //監看
  gulp.watch("js/*.js").on('change', reload);
  gulp.watch("images/*").on('change', reload);
  // gulp.watch("images/*").on('change', reload);
});

// //執行函示
// gulp.task('default' ,['sass' , 'watch']);
```
## ease 動畫方式
https://greensock.com/docs/Easing


## animation.js

```jsx=
$(function () {

    TweenMax.fromTo(".box", 0.2, {
        x: 0,
        y: 0,
        opacity : 0
        
    }, {
        x: 400,
        y:400,
        opacity: 1,
        //動畫方式
        ease: Bounce.easeOut,
        repeat: -1,
        yoyo: true
         
    });
```


option 方法

```jsx=
//位移跟大小
    scaleX:1.5,
    x: 140,
    y: 0,
    boxShadow: "0px 0px 20px red",//陰影
    scale:2, //放大
    delay: 2,//延遲幾秒
    repeat: 3,//重複幾次
    repeatDelay: 2,//重複延遲時間
    yoyo: true,//動畫順序1-2-2-1
    alpha:0,//透明度
    ease: Power3.easeInOut//動畫效果

//旋轉要件
    rotationY: 360, //旋轉
    rotationX: 360 , //旋轉
    rotation: 360 , //旋轉
    transformOrigin : 'right top' //定位點
```





# sass  複習


# sass 複習
- 1.Sass和 Scss 有什麽區別 ?

- 2.Sass 的@import 和 css 的import 有何差異？
   ```code
      //css 
      @import url("fineprint.css")
      
      //scss
      @import 'base/reset'
   ```


- 3.偽類的寫法
 
```html=
<a href="" class="box">偽類</a>
```

```css=
a {
  color: red;
}
a:hover {
  color: red;
}
```


```sass=
//寫法

```


- 4.跳脫符號的寫法，用在何時？
```code=
  //變數使用在選擇器上
  
```

- 5.scss檔名的命名規則有加 underline 跟沒加的差異？

   `../page/_boo.scss `  
   `../page/boo.scss `
 
    這兩個的差異性？


    
- 6.extend 用法
    - 擴增屬性
    - ％ 占位符號
  
     ```code=
         .box {
          margin: 100px
         }
 
          @extend .box;
          @extend %box;
          兩個差異在哪 ？
     ```




- 7.Mixin 用法有哪幾種 ? 


    - 不帶值
       ```code=
       margin-left: auto
       margin-right: auto
   
       //sass 寫法
   
   
   
 
       ```
       
     - 帶值
       ```css=
         // btn css寫法
        .btn {
           width : 100px;
           height: 30px;
           padding: 10px;
           text-center : center
             }
 
         //sass 寫法
 
 
         ```
     - 空值
        ```css=
          //null 用途：不要讓變數失效
 
         ```
    -  預設值
         ```css=
           // 讓變數有預設值
 
         ```
     - @content 
        ```code=
 
        ```


- 8.如何調用mixin ?
   ```code=
     //調用mixin
     
   ```




- 9.設計一個 mixin框架，把屬性封裝起來
  
   - RWD模組
     ```code=

     ```
   - Push模組
     ```code=

     ```
   - Grid模組
     ```code=

     ```
- 在sass + - * / (加減乘除) 


```code=
 //加法
 width :  10px + 10   = ?
 width :  10px + 10px = ?
 width :  10px + 10em = ?
 
 //乘法
 width :  10px * 10   = ?
 width :  10px * 10px = ?
 width :  10em * 10px = ?
 
 //減法
 width :  10px - 10  = ?
 width :  10px - 10px = ?
 width :  10em - 9px = ?
 
 //除法
 width :  (10px / 10 )  = ?
 width :  (10px / 10px) = ?
 width :  (10em / 9px)  = ? 
 ### 除法要特別注意跟font：12px / 24px 屬性
```

# tweenmmax  fromTo  from to 的差異


```jsx=
    //from
    TweenMax.from(".box_02" ,1,{
      x: 100,
      opacity: 0.5,
      ease: Bounce.easeOut,
      repeat: 2,
      yoyo: true
      
    });
    //to
     TweenMax.to(".box_02" ,1,{
      x: 100,
      opacity: 0.5,
      ease: Bounce.easeOut,
      repeat: 2,
      yoyo: true
      
    });
    //多物件相同行為
     TweenMax.to([".obj","obj2","obj3","obj4"......] ,1,{
      x: 100,
      opacity: 0.5,
      ease: Bounce.easeOut,
      repeat: 2,
      yoyo: true
      
    });
    
    //set
      TweenMax.set(".box_04",{
        x: 200 ,
        background: "#333",
        width: 600,
        opacity: 0.1
      });  
      
      
   //  onComplete: function
   
      TweenMax.to([".box_03" ,".box_01"] , 1 ,{
        x: 100,
        opacity: 0.5,
        ease: Bounce.easeOut,
        repeat: 2,
        yoyo: true,
        //事件完成後 呼叫gointo function
        onComplete: gointo
        
      });   
      // goninto function
      function gointo(){
       alert("ok")
      }
      
      // staggerFromTo
    TweenMax.staggerFromTo(".move", 1, {
        x: -100,
        opacity: 0
    }, {
        x: 200,
        opacity: 1
    },1//兩個物件間隔的秒數);
```

```htmlmixed=
<button id="menu_btn">選單按鈕</button>
            <h2>選單</h2>
            <ul id="menu">
                <li>選單一</li>
                <li>選單二</li>
                <li>選單三</li>
                <li>選單四</li>
            </ul>
```

動畫ease
https://greensock.com/docs/Easing

```jsx=
    var menu = $("#menu_btn");

    TweenMax.set("#menu li",{opacity:0});

      menu.on("click", function() {

        TweenMax.staggerFromTo("#menu li", 0.9, {
            y: 0,
            opacity: 0
        }, {
            y: 30,
            ease: Power4.easeOut,
            opacity: 1
        }, 0.9)
    })

    
```



1. html script
```htmlmixed=
<script type="text/javascript" src="js/parallax.min.js"></script>
```


2. html
 
 - data-hover-only="false" <-- 作用域
 - data-depth="0.8" <-- 物件的移動速度

```html
                <div id="scenes" data-hover-only="false">
                    <div class="big_box box_001" data-depth="0.8">001</div>
                    <div class="big_box box_002" data-depth="0.1">002</div>
                </div>
```
3. js
```jsx=
    var scene = document.getElementById('scenes');
    var parallax = new Parallax(scene);
```
 


```jsx=
   function parallax_box() {
        var scene = document.getElementById('scenes');
        var parallax = new Parallax(scene);
    }

    // parallax_box();
    
    TweenMax.staggerFromTo(".big_box", 0.9, {
        x: -50,
        opacity: 0
    }, {
        x: 200,
        opacity: 1,
        onComplete: parallax_box
    }, 0.9);
```

## TimelineMax



```jsx=
//timelinemax
    var tl = new TimelineMax({
        repeat:2,
        repeatDelay: 1
    });


    tl.add(TweenMax.to(".box_07", 1, {
        x: 100
    }));
    
    tl.add(TweenMax.to(".box_08", 1, {
        x: 200,
        backgroundColor: '#666'
    }));
```

第二種寫法
```jsx=
 var tmax = new TimelineMax();
    tmax.to(".box_09" , 1, {y:50 }).to(".box_10" , 1, {y:100});
```


第三種寫法
```jsx=
 var tmax = new TimelineMax();
    tmax.to(".box_09" , 1, {y:50 });
    tmax.to(".box_10" , 1, {y:100});
```

# scrollmagic

- script
```jsx=
<script type="text/javascript" src="libs/Scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
<script type="text/javascript" src="libs/Scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
<script type="text/javascript" src="libs/Scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"></script>

```

1. 先建立控制場景 
2. 建立場景
3. 動畫執行
4. 把場景加入控制
5. 在html 放觸發點

html
```htmlmixed=
<div id="section_01"></div>

```


js
```jsx
// controller
var controller = new ScrollMagic.Controller();

// tweenmax
 var mv =TweenMax.to(".box_11" ,1 , {x: 100});


//場景
 var scene = new ScrollMagic.Scene({
    triggerElement: "#section_01",
    // reverse: true,
    offset:'0px',
    // duration: '90%'
})
.setTween(mv)
.addIndicators() // add indicators (requires plugin)
.addTo(controller);  
```

第二個場景
js
```jsx=
   var mv3 = TweenMax.to(".box_13", 0.5, {
        x: 200
    });

    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#section_02",
            // reverse: false,
            offset: '0px',
            // duration: '400px'
        })
        //改變classname
        .setClassToggle('.section_04', 'color_fadin')
        //增加動畫
        .setTween(mv3)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
```
ok