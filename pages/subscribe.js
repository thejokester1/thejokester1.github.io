$(document).ready( function () {
    // I only have one form on the page but you can be more specific if need be.
    var $form = $('form');

    if ( $form.length > 0 ) {
        $('form input[type="submit"]').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
            // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
            if ( validate_input($form) ) { register($form); }
        });
    }
});

function register($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
        success     : function(data) {
            if (data.result != "success") {
                alert("An error has occured, please try again later.")
            } else {
                alert("You have been successfully subscribed! Please check your inbox for an email shortly.")
            }
        }
    });
}