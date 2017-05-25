// module__top
(function() {

    // Top section height detection
    var jsHeight = $('.jsHeight');
    function topHeight(){
        if ($(window).width() <= 767) {
            jsHeight.css('height', 'auto');
        } else {
            jsHeight.css('height', $(window).height());
        }
    }


    $(window).on('load', function() {
        topHeight();
    });
    $(window).on('resize', function() {
        topHeight();
    });

})();
