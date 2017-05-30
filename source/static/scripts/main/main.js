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
//= require source/modules/**/!(_)*.js
