

$(function() {

    $('.carousel').carousel({
        interval: 0
    });

    $( "#call-to-action-question" ).click(function() {
        $( "sk-wrapper" ).trigger( "click" );
    });

    $("img.lazy").lazyload({
        effect : "fadeIn",
        threshold : 200
    });

});