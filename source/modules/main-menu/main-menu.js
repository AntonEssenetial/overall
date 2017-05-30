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
