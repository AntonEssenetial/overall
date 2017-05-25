// module__scroll-down
(function() {

    // Animate scroll
    var scroll = $('.jsScroll'),
        jsHeight = $(window).height();

    scroll.click(function(event) {
        $('body').animate({
            scrollTop: jsHeight
        },1000);
    });

})();
