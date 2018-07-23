jQuery(document).ready(function() {
    var ddl = $('#lista li ul.dropdown');
    ddl.css({
        display: "none",
    });
    $('#lista li').hover(function() {
        $(this).find('ul').stop(true, true).slideDown('fast');
    }, function() {
        $(this).find('ul').stop(true, true).fadeOut('fast');
    });
});