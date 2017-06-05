'use strict';

$(window).on('load', function() {
    $('#status').fadeOut(); 
    $('#preloader').delay(100).fadeOut('slow'); 
    $('body').delay(100).css({'overflow':'visible'})
    $('body').removeClass('overflow');
    $('body').addClass('loaded');
})

svg4everybody();

$(function() {
    FastClick.attach(document.body);
});
  
// Modules
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

// main-menu
(function() {

    // Main menu link border
    var link = $('.main-menu__link'),
        menu = $('.module__main-menu');

    //menu.css('height', $(window).height());

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

    // Resize img in carousel
    function imgResize(){
        var img = $('.img img'),
            wrap = $('.img');
        img.css('height',$('.slide-wrapper').width());
        img.css('width',$('.slide-wrapper').width());
        wrap.css('height',$('.slide-wrapper').width());
    }

    $(window).on('load', function() {
        imgResize()
    });
    $(window).on('resize', function() {
        imgResize()
    });

})();

// module__page-slider
(function() {

    // about slick slider
    var $aboutSlider = $('.jsPageSlider');
    var slideCount = null;

    $( document ).ready(function(){
        $aboutSlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            //fade: true,
            nextArrow: '.slick-next-1',
            prevArrow: '.slick-prev-1'
        });
    });

    $aboutSlider.on('init', function(event, slick){
        slideCount = slick.slideCount;
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
    });
    
    $aboutSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setCurrentSlideNumber(nextSlide);
    });
    
    function setSlideCount() {
        var $el = $('.slide-count-wrap').find('.total');
        $el.text(slideCount);
    }
    
    function setCurrentSlideNumber(currentSlide) {
        var $el = $('.slide-count-wrap').find('.current');
        $el.text(currentSlide + 1);
    }

})();

// module__scroll-down
(function() {

    // Animate scroll
    var scroll = $('.jsScroll'),
        jsHeight = $(window).height();

    // Anchor function
    $(function() {
        scroll.click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

})();

// module__share
(function() {

    var share = $('.jsShare'),
        popup = $('.jsPopup'),
        close = $('.jsClose'),
        html = $('html');

    share.click(function(event) {
        popup.addClass('jsActive');
        html.addClass('page_share');
        return false;
    });

    close.click(function(event) {
        popup.removeClass('jsActive'),
        html.removeClass('page_share');
    });

})();

// module__subscribe
(function() {

    // Label focus 
    $( "form :input" ).focus(function() {
        $( this ).parent().addClass( "label_focus" );
    }).blur(function() {
        $( this ).parent().removeClass( "label_focus" );
    });

})();

// module__text
(function() {

    // detect elements
    showText()
    function showText() {
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
            } else if((element_top_position > window_bottom_position)) {
              $element.removeClass('custom');
            }
          });
        }
        
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }

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
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            dots: true,
            speed: 1000,
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
            // var scene0 = new ScrollMagic.Scene({
            //     triggerElement: ".module__work"
            // })
            // .setTween(".module__scroll-down", 0.5, {
            //     bottom: -100
            // }) // trigger a TweenMax.to tween
            // .addTo(controller);
            // var scene1 = new ScrollMagic.Scene({
            //     triggerElement: ".module__scroll-down"
            // })
            // .setTween(".module__top-slider__title", 0.5, {
            //     top: 300
            // }) // trigger a TweenMax.to tween
            // .addTo(controller);

            // Text animation
            var scene2 = new ScrollMagic.Scene({
                triggerElement: ".module__work .module__text__str"
            })
            .setTween(".module__work .module__text__str", 0.5, {
                top: -50
            }) // trigger a TweenMax.to tween
            .addTo(controller);

            // Text animation
            var scene4 = new ScrollMagic.Scene({
                triggerElement: ".module__page-content .module__text__str"
            })
            .setTween(".module__page-content .module__text__str", 0.5, {
                top: -50
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
            

            $(window).paroller();
        
        }
    }

    // Height detect
    $(window).on('load', function() {
        topHeight();
        //destroy();
        initParallax();
    });
    $(window).on('resize', function() {
        topHeight();
        //destroy();
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

    // Paralax
  // var wHeight = $(window).height();
  
  // function parallax() {
  //   var pHeight = $(this).outerHeight();
  //   var pMiddle = pHeight / 2;
  //   var wMiddle = wHeight / 2;
  //   var fromTop = $(this).offset().top;
  //   var scrolled = $(window).scrollTop();
  //   var speed = $(this).attr('data-parallax-speed');
  //   var rangeA = (fromTop - wHeight);
  //   var rangeB = (fromTop + pHeight);
  //   var rangeC = (fromTop - wHeight);
  //   var rangeD = (pMiddle + fromTop) - (wMiddle + (wMiddle / 2));
    
  //   if (rangeA < 0) {
  //     rangeA = 0;
  //     rangeB = wHeight
  //   }

  //   var percent = (scrolled - rangeA) / (rangeB - rangeA);
  //   percent = percent * 200;
  //   percent = percent * speed;
  //   percent = percent.toFixed(2);
    
  //   var animFromBottom = (scrolled - rangeC) / (rangeD - rangeC);
  //   animFromBottom = animFromBottom.toFixed(2);
    
  //   if (animFromBottom >= 1) {
  //     animFromBottom = 1;
  //   }

  //   $(this).css('background-position', 'center ' + -percent + '%');
  //   $(this).find('.parallax-content').css('opacity', animFromBottom);
  //   $(this).find('.parallax-content').css('transform', 'scale(' + animFromBottom + ')');
  // }
  // $('.module__top-content').each(parallax);
  // $(window).scroll(function(e) {
  //   $('.module__top-content').each(parallax);
  // });

  // // Custom scroll init function
  //   function initScroll() {
  //       var bodyScroll = $('html');
  //       bodyScroll.niceScroll({
  //           cursorcolor: "#fbae11",
  //           cursorwidth: "10px",
  //           cursorborder: "0px solid #fff", 
  //           cursorborderradius: "0px",
  //           horizrailenabled: false,
  //           autohidemode: true,
  //           oneaxismousemode:false,
  //           cursoropacitymax:0.7
  //       });
  //       bodyScroll.onscrollstart = function(){
  //           $("iframe").fadeOut(100)
  //       };
  //   };

  //   initScroll()


})();

// module__work
(function() {

    // detect elements
    showWork()
    function showWork() {
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
            } else if((element_top_position > window_bottom_position)) {
              $element.removeClass('custom');
            }
          });
        }
        
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }

})();



// Sandwitch
(function() {

    // Menu dropdown
    $('.jsMobileDropdown').click(function(event) {
        
        var sandWitch = $('.module__main-menu'),
            menu = $('.toggle-menu'),
            header = $('header');

        sandWitch.toggleClass('active');        
        menu.toggleClass('active');
        $('html').toggleClass('page_mobile-menu');


        if(menu.hasClass('active')) {
            document.ontouchmove = function(event){
                event.preventDefault();
            }
        }
        else {
            document.ontouchmove = function(e) {
                e.stopPropagation();
            };
        }
        // Header class
        //header.toggleClass('trDown');
        
        // Disabled scroll
        // if(!scrollers[0].element.hasClass('mCS_disabled')){
        //     scrollers[0].element.mCustomScrollbar('disable', true)
        // } else {
        //     setTimeout(function(){
        //         scrollers[0].element.mCustomScrollbar('update')
        //     }, 400)
        // }


    });


   

})();

