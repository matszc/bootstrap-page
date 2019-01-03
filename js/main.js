
$(document).ready(function () {
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
    });