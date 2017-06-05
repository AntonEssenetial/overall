// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[ length ];

        // Only stub undefined methods.
        if (!console[ method ]) {
            console[ method ] = noop;
        }
    }
}());


// Собираем все нужные плагины в нужном порядке

//////////////////////////////////////////////////////////////////////////////
// Important plugins
//////////////////////////////////////////////////////////////////////////////





// FastclickJS
// Remove delay between a physical tap and the firing of a click event on mobile browsers.
//= require fastclick/lib/fastclick.js


// Helpers
//= require helpers/jquery.isset.js
//= require helpers/jquery.easing-1.3.js


// SVG4Everybody
//= require svg4everybody/dist/svg4everybody.js


// Slick
//= require slick/slick.min.js


// Parallax
//= require parallax/TweenMax.min.js
//= require parallax/ScrollMagic.min.js
//= require parallax/animation.gsap.min.js
//= require parallax/debug.addIndicators.min.js
//= require parallax/jquery.paroller.min.js


// Scorllbar
//= require niceScroll/jquery.nicescroll.min.js
//= require niceScroll/smoothscroll.js
