$(document).ready( function () {
    var $form = $('email-form');

    if ($form.length > 0) {
        $('form input[type="submit"]').bind('click', function (event) {
            if (event) event.preventDefault();
            if ( validate_input($form) ) {
                 emailSubscribe($form); 
            }
        });
    }
});

function validate_input($form) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) {
        return true 
    } else {
        alert("Please enter a valid email!")
    }
}

function emailSubscribe($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType : "application/json; charset=utf-8",
        error       : function(err) { alert("An error occured with the server. Please try again later."); },
        success     : function(data) {
            if (data.result != "success") {
                alert("An error has occured, please try again later.")
            } else {
                alert("You have been successfully subscribed! Please check your inbox for an email shortly.")
            }
        }
    });
}