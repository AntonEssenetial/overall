// header
(function() {

    // // Hide Header on on scroll down
    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = 10;
    
    // $(window).scroll(hasScrolled);
    
    // setInterval(function() {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 250);
    
    // function hasScrolled() {
    //     var st = $(this).scrollTop();
    //     var jsHeight = $(window).height();
    //     // Make sure they scroll more than delta
    //     if(Math.abs(lastScrollTop - st) <= delta)
    //         return;
        
    //     // If they scrolled down and are past the navbar, add class .nav-up.
    //     // This is necessary so you never see what is "behind" the navbar.
    //     if (st > lastScrollTop && st > navbarHeight){
    //         // Scroll Down
    //         $('header').removeClass('trDown').addClass('trUp');

    //     } else if($(this).scrollTop() < jsHeight){
    //         // Scroll Up
    //         $('header').removeClass('trDown');
            
    //     } else {
    //         if(st + $(window).height() < $(document).height()) {
    //             $('header').removeClass('trUp').addClass('trDown');

    //         }
    //     }
        
    //     lastScrollTop = st;
    // }


    // $(window).scroll(function() {
    //     var jsHeight = $(window).height();

    //     if ($(this).scrollTop() < jsHeight){  
    //         $('header').removeClass('trDown');
    //     }
    // });

})();
