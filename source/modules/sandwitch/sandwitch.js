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
