// module__subscribe
(function() {

    // Label focus 
    $( "form :input" ).focus(function() {
        $( this ).parent().addClass( "label_focus" );
    }).blur(function() {
        $( this ).parent().removeClass( "label_focus" );
    });

})();
