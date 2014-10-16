// touch detection
if ('ontouchstart' in window) {
    document.documentElement.className += " touch"
}

$(document).ready(function() {

    // add class to body for respective page
    var loc = window.location.href;

    if (loc.indexOf('hello') !== -1) {
        $('body').addClass('page-hello');
        
    } else if (loc.indexOf('portfolio') !== -1) {
        $('body').addClass('page-portfolio');
    } else if (loc.indexOf('contacts') !== -1) {
        $('body').addClass('page-contacts');
    }

    // applies to all pages execept contacts
    if($('.page-contacts').length == 0) {

        // header collapse/expand logic
        $(window).scroll(function (e) {
            if ($('body').scrollTop() > 0
                && document.body.scrollHeight !== $(window).height() + $('body').scrollTop()) 
            {
                $('header').addClass('collapsed');    
            } else if ($('body').scrollTop() == 0) {
                $('header').removeClass('collapsed');    
            }
        })

        // add a class to back/go-to links on page scroll end
         $(window).scroll(function (e) {
            if (document.body.scrollHeight == $(window).height() + $('body').scrollTop())
            {
                $('div.project-info-highlighter').addClass('highlighter-active');

            } else {
                $('div.project-info-highlighter').removeClass('highlighter-active');
            }
         }); 
    }

    // 100% height on contacts page
    if($('.page-contacts').length == 1) {  
        $("html, body").addClass("such-height");
    }

})