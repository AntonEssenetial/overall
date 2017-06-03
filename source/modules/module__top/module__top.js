// module__top
(function() {

    // Top section height detection
    var jsHeight = $('.jsHeight');
    function topHeight(){
        jsHeight.css('height', $(window).height());
        // if ($(window).width() <= 767) {
        //     jsHeight.css('height', 'auto');
        // } else {
        //     jsHeight.css('height', $(window).height());
        // }
    }


    // Parallax scrolling
    function initParallax() {

        if($(window).width() > 1024 ) {
        
            // var start = $(".parallax").offset().top;
            // var dur = $(window).height() * 2;
            // $(window).on("scroll", function () {
            //     var pos = $(window).scrollTop() + $(window).height();
            //     var progress = (pos - start) / dur;
            //     if (progress >= 0 && progress <= 1) {
            //         $(".parallax > div").css("transform", "translateY(" + (progress * 80) + "%)");
            //     }
            // });

            var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: "onEnter", 
                    duration: "200%"
                }
            });

            // // build scenes
            // var scene0 = new ScrollMagic.Scene({
            //     triggerElement: ".parallax"
            // })
            // .setTween(".parallax > div", {
            //     y: "80%", 
            //     ease: Linear.easeNone
            // })
            // .addTo(controller);

            // Top slider heading
            var scene0 = new ScrollMagic.Scene({
                triggerElement: ".module__work"
            })
            .setTween(".module__scroll-down", 0.5, {
                bottom: -100
            }) // trigger a TweenMax.to tween
            .addTo(controller);
            var scene1 = new ScrollMagic.Scene({
                triggerElement: ".module__scroll-down"
            })
            .setTween(".module__top-slider__title", 0.5, {
                top: 300
            }) // trigger a TweenMax.to tween
            .addTo(controller);

            // Text animation
            var scene2 = new ScrollMagic.Scene({
                triggerElement: ".f__col:nth-child(4)"
            })
            .setTween(".module__text__str", 0.5, {
                top: 100
            }) // trigger a TweenMax.to tween
            .addTo(controller);

            // Instagram animation
            var scene3 = new ScrollMagic.Scene({
                triggerElement: ".module__insta__str"
            })
            .setTween(".module__insta__str", 0.5, {
                top: -30
            }) // trigger a TweenMax.to tween
            .addTo(controller);
        }
    }

    // Height detect
    $(window).on('load', function() {
        topHeight();
        destroy();
        initParallax();
    });
    $(window).on('resize', function() {
        topHeight();
        destroy();
    });


    // Destroy function
    function destroy() {
        var width = $(window).width(),
            maxWidth = 1024;

        if(width < maxWidth) {
            $('html').getNiceScroll().remove()
        } else {
            initScroll();
        }
    }


    // Custom scroll init function
    function initScroll() {
        var bodyScroll = $('html');
        bodyScroll.niceScroll({
            cursorcolor: "#fbae11",
            cursorwidth: "10px",
            cursorborder: "0px solid #fff", 
            cursorborderradius: "0px", 
            mousescrollstep: 40,
            scrollspeed: 80
        });
    };

})();
