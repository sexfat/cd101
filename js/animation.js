$(function () {

    TweenMax.fromTo(".ss", 1, {
        x: 0,
        y: 0,
        opacity: 0

    }, {
        x: 200,
        y: 200,
        opacity: 0.8,
        //動畫方式
        ease: Bounce.easeOut,
        // boxShadow: "0px 0px 20px red",//陰影
        repeat: 1,
        repeatDelay: 1,
        rotation: 720,
        scale: 1.2,
        // className: "box5"
        // transformOrigin : 'left top' 
        // yoyo: true 
    });


    TweenMax.from(".section_01 .box_02", 1, {
        x: 100,
        opacity: 0.5,
        ease: Bounce.easeOut,
        repeat: 2,
        yoyo: true

    });
    TweenMax.to([".section_01 .box_03", ".section_01 .box_01"], 1, {
        x: 100,
        opacity: 0.5,
        ease: Bounce.easeOut,
        repeat: 2,
        yoyo: true
        // onComplete: gointo
        // onCompleteParams: ["gointo" ,"gointo2"]

    });

    // function gointo() {

    //     TweenMax.from(".box_05", 1, {
    //         y: 100,
    //         // opacity: 0.5,
    //         ease: Bounce.easeOut,
    //         // repeat: 2,
    //         // yoyo: true

    //     });
    // };
    TweenMax.staggerFromTo(".move", 1, {
        x: -100,
        opacity: 0
    }, {
        x: 200,
        opacity: 1
    }, 1);


    TweenMax.staggerFromTo(".move", 1, {
        x: -100,
        opacity: 0
    }, {
        x: 200,
        opacity: 1
    }, 1);



    // var menu = $("#menu_btn");

    // TweenMax.set("#menu li",{opacity:0});

    //  var book = menu.on("click", function() {

    //     // TweenMax.staggerFromTo("#menu li", 0.9, {
    //     //     y: 0,
    //     //     opacity: 0
    //     // }, {
    //     //     y: 30,
    //     //     ease: Power4.easeOut,
    //     //     opacity: 1
    //     // }, 0.9)
    //     TweenMax.staggerTo("#menu li", 0.9, {
    //         y: 30,
    //         opacity: 1
    //     },0.9)
    // });

    function parallax_box() {
        var scene = document.getElementById('scenes');
        var parallax = new Parallax(scene);
    }

    // parallax_box();

    TweenMax.staggerFromTo(".big_box", 0.9, {
        y: -50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        onComplete: parallax_box
    }, 0.9);

    //timelinemax
    var tl = new TimelineMax({
        repeat: 2,
        repeatDelay: 1
    });


    tl.add(TweenMax.to(".box_07", 1, {
        x: 100
    }));

    tl.add(TweenMax.to(".box_08", 1, {
        x: 200,
        backgroundColor: '#666'
    }));

    var tmax = new TimelineMax();
    tmax.to(".box_09", 1, {
        y: 50
    }).to(".box_10", 1, {
        y: 100
    });

    // scrollmagic

    //
    var controller = new ScrollMagic.Controller();

    var mv = TweenMax.to(".box_11", 0.5, {
        x: 100
    });
    var mv2 = TweenMax.to(".box_12", 0.5, {
        x: 200
    });
    
    var tmax2 = new TimelineMax();

    var mv = tmax2.to(".box_11", 1, {
        y: 50
    }).to(".box_12", 1, {
        x: 100
    }).to(".box_11", 1, {
        y: 200,
        rotation: 180
    }).to(
        ".box_12", 1 ,{
         y: 100 ,
         rotation: 720
        }
    );

    //第一個場景

    var scene = new ScrollMagic.Scene({
            triggerElement: "#section_01",
            // reverse: false,
            offset: '-20px',
            // duration: '400px'
        })
        .setTween([mv, mv2, mv3])
        // .setTween(mv)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    //第二個場景
    var mv3 = TweenMax.to(".box_13", 0.5, {
        x: 200
    });

    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#section_02",
            // reverse: false,
            offset: '700px',
            // duration: '400px'
        })
        .setClassToggle('.section_04', 'color_fadin')
        .setTween(mv3)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


});


console.log("＝＝＝＝＝＝＝end ok＝＝＝＝＝＝＝");