
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

    // Counter on scroll
 var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});
 // map animation
    $('.map').on('click',function () {
        $(this).addClass('d-none');
        $('.map-close-wrapper').removeClass('d-none');
    })
    $('.map-close').on('click',function () {
        $('.map-close-wrapper').addClass('d-none');
        $('.map').removeClass('d-none');
    })
    

    });
/* add map  */
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('gmap'), {
        center: {lat: 53.7438123, lng: 20.4537153},
        zoom: 16
    });
}
