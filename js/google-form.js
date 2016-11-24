$(function() {
    // Get the form.
    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');
    var name  = $('#yname');
    var email = $('#yemail');
    var message = $('#ymessage');
    var subject = $('#ysubject');

    $(form).submit(function(event) {
        event.preventDefault();

        var formData = $(form).serialize();

        var request = $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    	});

        request.always(function (response){
        // Clear the form.
        $(name).val('');
        $(email).val('');
        $(message).val('');
        $(subject).val('');
        });

    });

});