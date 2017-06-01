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
