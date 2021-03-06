$(function() {
    /*
    $("img.lazy").lazyload({
        effect : "fadeIn",
        threshold : 200
    });*/

    $('.carousel').carousel({
        interval: 0
    });

    /*
    $( "#call-to-action-question" ).click(function() {
        $( "sk-wrapper" ).trigger( "click" );
    });*/

    /* Piwik events */

    $('a[href^="mailto:"]').click(function () {
        _paq.push(['trackEvent', 'Click', 'Contact', $(this).attr('href')]);
    });

    $('.btn-moreinfos').click(function () {
        _paq.push(['trackEvent', 'Click', 'MoreInfo', $(this).attr('title')]);
    });

    $('.portfolio-link').click(function () {
        _paq.push(['trackEvent', 'Click', 'MoreContent', $(this).attr('title')]);
    });

    $('.nav li a').click(function () {
        _paq.push(['trackEvent', 'Click', 'Navigation', $(this).text()]);
    });

    $('.carousel-indicators li').click(function () {
        _paq.push(['trackEvent', 'Click', 'Statements', $(this).children().attr('alt')]);
    });


    /* Smooch tracking */

    Smooch.on('widget:opened', function() {
        _paq.push(['trackEvent', 'Click', 'Contact', 'Chat open']);

    });

    Smooch.on('message:sent', function(message) {
        _paq.push(['trackEvent', 'Chat', 'Message', 'User sent: ' + message.text]);
    });

    Smooch.on('message:received', function(message) {
        _paq.push(['trackEvent', 'Chat', 'Message', 'User received: ' + message.text]);
    });
});