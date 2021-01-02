(function($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.nav-bar').addClass('nav-sticky');
        } else {
            $('.nav-bar').removeClass('nav-sticky');
        }
    });

    // Logo on navbar while scrolling
    $(window).scroll(function() {

        if ($(this).scrollTop() > 150) {
            $('.header-logo').removeClass('d-none');
            $('.home').addClass('d-none');
        } else {
            $('.header-logo').addClass('d-none');
            $('.home').removeClass('d-none');
        }
    });

    // Logo on navbar while scrolling mobile 
    $(window).scroll(function() {

        if ($(this).scrollTop() > 150) {
            $('.mobile-logo').removeClass('d-none');
            $('.menu').addClass('d-none');
        } else {
            $('.mobile-logo').addClass('d-none');
            $('.menu').removeClass('d-none');
        }
    });

    // Dropdown on mouse hover ordinary
    // $(document).ready(function() {
    //     function toggleNavbarMethod() {
    //         if ($(window).width() > 768) {
    //             $('.navbar .dropdown').on('mouseover', function() {
    //                 $('.dropdown-toggle', this).trigger('click');
    //             }).on('mouseout', function() {
    //                 $('.dropdown-toggle', this).trigger('click').blur();
    //             });
    //         } else {
    //             $('.navbar .dropdown').off('mouseover').off('mouseout');
    //             console.log("header logo is hidden");
    //         }
    //     }
    //     toggleNavbarMethod();
    //     $(window).resize(toggleNavbarMethod);
    // });

    // Dropdown on mouse hover with effect
    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(10).slideUp()
    });

    // Marquee stop on hover
    $('.marquee').hover(function() {
        $(this).attr('scrollamount', 0);
    }).mouseout(function() {
        $(this).attr('scrollamount', 5);
    });


    // Top News Slider
    $('.tn-slider').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    // Category News Slider
    $('.cn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // Related News Slider
    $('.sn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // Category page slider
    $('.cp-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);