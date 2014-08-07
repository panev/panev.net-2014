$(document).ready(function() {
    // inject animation classes once page is loaded
    $(".light-cyan-shim").addClass("contacts-shim-collapse");
    $(".contacts-info").addClass("contacts-shim-appear");
    $(".contacts-details").addClass("contacts-shim-appear-late");
    $(".projects-greeter").addClass("projects-greeter-appear");

    // nav shift on scroll on all pages besides contacts
   /* if($('.contacts-container').length == 0) {
        $(window).on('mousewheel DOMMouseScroll', function (evt) {
            if(evt.originalEvent.detail > 0 || evt.originalEvent.wheelDelta < 0) {
                $('header').addClass('collapsed');
            } else {
                $('header').removeClass('collapsed');
            }
        });

        // header hover magic
        $(".header-magic").on('mouseenter', function (e) {
            if ($('header').hasClass('collapsed')) {
                $('header').removeClass('collapsed');
            }
        }).on('mouseleave', function (e) {
            if (!$('header').hasClass('collapsed')
                && !$(e.relatedTarget).is('header')) {
                $('header').addClass('collapsed');
            }
        });
    }*/

    // 100% height on contacts page
    if($('.contacts-container').length == 1) {  
        $("html, body").addClass("such-height");
    }

})