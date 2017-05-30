// module__share
(function() {

    var share = $('.jsShare'),
        popup = $('.jsPopup'),
        close = $('.jsClose'),
        html = $('html');

    share.click(function(event) {
        popup.addClass('jsActive'),
        html.addClass('page_share');
    });

    close.click(function(event) {
        popup.removeClass('jsActive'),
        html.removeClass('page_share')
    });

})();
