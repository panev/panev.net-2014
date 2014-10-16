// touch detection
if ('ontouchstart' in window) {
    document.documentElement.className += " touch"
}

$(document).ready(function() {
    // inject animation classes once page is loaded
    $(".light-cyan-shim").addClass("contacts-shim-collapse");
    $(".contacts-info").addClass("contacts-shim-appear");
    $(".contacts-details").addClass("contacts-shim-appear-late");
    $(".projects-greeter").addClass("projects-greeter-appear");

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
    if($('.contacts-container').length == 1) {  
        $("html, body").addClass("such-height");
    }

})