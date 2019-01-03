
$(document).ready(function () {

    // sticky nav
    var NavY = $('.navbar').offset().top;

    var stickyNav = function () {
        let scrollY = $(window).scrollTop();

        if (scrollY > NavY)
            $('.navbar').addClass('sticky');
            else
                $('.navbar').removeClass('sticky');
        };
    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });

    //page scroll
    function scroll(link) {

        let target  = $(this).attr('href');

        link.preventDefault();

        $('html, body').animate({
            scrollTop: ($(target).offset().top)-74
        }, 800);

        location.hash = target;
    }

    $('.nav-link').click(scroll);
    });