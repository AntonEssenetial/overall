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
    var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onEnter", 
                duration: "200%"
            }
        });
    // build scenes
    new ScrollMagic.Scene({
        triggerElement: ".parallax"
    })
    .setTween(".parallax > div", {
        y: "80%", 
        ease: Linear.easeNone
    }).addIndicators()
    .addTo(controller);

    // build scene
    var scene = new ScrollMagic.Scene({
        triggerElement: ".module__scroll-down"
    })
    .setTween(".module__top-slider__title", 0.5, {
        top: -100
    }) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);


    // Height detect
    $(window).on('load', function() {
        topHeight();
    });
    $(window).on('resize', function() {
        topHeight();
    });

})();
