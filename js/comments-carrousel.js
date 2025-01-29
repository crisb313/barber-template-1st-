$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3500,
        smartSpeed: 800,
        autoplayHoverPause: true,
        responsive: {0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }

        }
    });
});
