'use strict';

svg4everybody();

$(function() {
    FastClick.attach(document.body);
});
  
// Modules
// main-menu
(function() {

    // Main menu link border
    var link = $('.main-menu__link, .btn-link');

    if(!link.hasClass('is-active')) {
        link.mouseover(function(event) {
            $(this).addClass('is-active')
        })
        link.mouseleave(function(event) {
            var self = $(this);
            setTimeout(function(){
                self.removeClass('is-active')
            },300);
        });
    }

})();

// module__insta

(function() {

    // instagramm carousel
    $(document).ready(function() {
        
        var slick2 = $('.jsSlick2'),
            slide = $('.slide');

        slick2.slick({
            fade: true,
            infinite: true,
            dots: true,
            arrows: false,
            customPaging: function(slider, i) {
                return '<span class="slide-btn"></span>';
            }
        });

        $('.slick-dots li').click(function(event) {
            if(slide.hasClass('slick-current')){
                slide.removeClass('baluba')
                $('.slick-current').prev().addClass('baluba')
            }
        });

    });

})();

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

// module__text
(function() {

    // detect elements
    var $animation_elements = $('.jsText');
    var $window = $(window);
    
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
     
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('custom');
        } else {
          $element.removeClass('custom');
        }
      });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

})();

// module__top-slider
(function() {

    $(document).ready(function($) {
       // slick slider 
        var slider1 = $('.jsSlick');
        slider1.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            customPaging: function(slider, i) {
                var title = $(slider.$slides[i]).data('slide')
                return '<div class="slick-wrapper"><span class="slick-button"></span></div><span class="slick-title">' + title + '</span>';
            },
            arrows: false,
            fade: true
        }); 

    });

})();

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

// module__work
(function() {

    // detect elements
    var $animation_elements = $('.jsShow');
    var $window = $(window);
    
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
     
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('custom');
        } else {
          $element.removeClass('custom');
        }
      });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

})();



// Sandwitch
(function() {

    // Menu dropdown
    $('.jsMobileDropdown').click(function(event) {
        
        var sandWitch = $('.module__main-menu'),
            menu = $('.toggle-menu');

        sandWitch.toggleClass('active');        
        menu.toggleClass('active');
        $('html').toggleClass('page_mobile-menu');
        
        // Disabled scroll
        if(!scrollers[0].element.hasClass('mCS_disabled')){
            scrollers[0].element.mCustomScrollbar('disable', true)
        } else {
            setTimeout(function(){
                scrollers[0].element.mCustomScrollbar('update')
            }, 400)
        }


    });


    // Scroll init
    var scrollers = [
        {
            element: $('body'),
            params:{
                autoHideScrollbar: true
            },
            options:{
                type:'width',
                value: 1024
            }
        }
    ]


    // $(window).on("load resize",function(){
    //     $('body').css('height', $(window).height());
    //     // scrollers[0].element.mCustomScrollbar(
    //     //     scrollers[0].params
    //     // ); 
    // });

    // var scroll = $('.jsScroll'),
    //     jsHeight = $(window).height();

    // scroll.click(function(event) {
    //     scrollers[0].element.mCustomScrollbar(
    //         "scrollTo", $('.module__work')
    //     ); 
    // });
   

})();

