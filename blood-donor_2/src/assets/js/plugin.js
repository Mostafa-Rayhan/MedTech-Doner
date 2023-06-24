/* ==============
 ========= js documentation =========

 template name: Blad Ai
 version: 1.0
 description: Blood Donation Activism & Campaign HTML Template
 author: CropTheme
 author url: https://themeforest.net/user/croptheme

    =========================

     01. wow init
     ------------------------------------------------------
     02. select language
     ------------------------------------------------------
     03. hero section video popup
     ------------------------------------------------------
     04. hero slider
     ------------------------------------------------------
     05. odometer counter
     ------------------------------------------------------
     06. campaign slider
     ------------------------------------------------------
     07. testimonial slider
     ------------------------------------------------------
     08. donor section video popup
     ------------------------------------------------------
     09. select donation type
     ------------------------------------------------------
     10. testimonial slider two
     ------------------------------------------------------
     11. project gallery popup
     ------------------------------------------------------
     12. project gallery slider
     ------------------------------------------------------
     13. project gallery two popup
     ------------------------------------------------------
     14. campaign details slider
     ------------------------------------------------------
     15. select blood group
     ------------------------------------------------------
     16. select day
     ------------------------------------------------------
     17. select month
     ------------------------------------------------------
     18. select blood group two
     ------------------------------------------------------
     19. select last donate day
     ------------------------------------------------------
     20. select last donate month
     ------------------------------------------------------
     21. select last donate year
     ------------------------------------------------------
     22. select registration country
     ------------------------------------------------------
     23. blog poster slider
     ------------------------------------------------------
     24. blog post video popup
     ------------------------------------------------------
     25. volunteer slider
     
    =========================
============== */

(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        // wow init
        new WOW().init();

        // select language
        $(".select-language").niceSelect();

        // hero section video popup
        if (document.querySelector(".video-btn") !== null) {
            $(".video-btn").magnificPopup({
                disableOn: 768,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
            });
        }

        // Hero Slider JS
        $('.hero-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoHeight:true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            navText: [
                "<i class='fa-solid fa-angle-left'></i>",
                "<i class='fa-solid fa-angle-right'></i>",
            ],
        });

        // Hero Slider JS
        $('.hero-slider-two').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoHeight:true,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            navText: [
                "<i class='fa-solid fa-angle-left'></i>",
                "<i class='fa-solid fa-angle-right'></i>",
            ],
        });

        // odometer counter
        $(".odometer-item").each(function () {
            $(this).isInViewport(function (status) {
                if (status === "entered") {
                    for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute("data-odometer-final");
                    }
                }
            });
        });

        // campaign slider
        $(".campaign-area__slider")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            autoplay: false,
            focusOnSelect: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // testimonial slider
        $(".testimonial-area__slider")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // donor section video popup
        if (document.querySelector(".video-btn-two") !== null) {
            $(".video-btn-two").magnificPopup({
                disableOn: 768,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
            });
        }

        // select donation type
        $(".select-donation-type").niceSelect();


        // testimonial slider two
        $(".testimonial--secondary-area__slider")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
        });

        // project gallery popup
        $(".gallery-area__slider").magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: true,
                navigateByImgClick: false,
                preload: [0, 1],
            },
        });

        // project gallery slider
        $(".gallery-area__slider")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            autoplay: false,
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // project gallery two popup
        $(".gallery-area-two").magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: true,
                navigateByImgClick: false,
                preload: [0, 1],
            },
        });

        // campaign details slider
        $(".content-group-img-slider")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            responsive: [
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                    },
                }
            ]
        });

        // select blood group
        $(".blood-group").niceSelect();

        // select day
        $(".select-day").niceSelect();

        // select month
        $(".select-month").niceSelect();

        // select year
        $(".select-year").niceSelect();

        // select blood group two
        $(".select-blood-group").niceSelect();

        // select last donate day
        $(".select-last-day").niceSelect();

        // select last donate month
        $(".select-last-month").niceSelect();

        // select last donate year
        $(".select-last-year").niceSelect();

        // select registration country
        $(".select-regi-country").niceSelect();

        // blog poster slider
        $(".poster-slider__wrapper")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            autoplay: false,
            focusOnSelect: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: $(".post-prev"),
            nextArrow: $(".post-next"),
        });

        // blog post video popup
        if (document.querySelector(".video-btn-post") !== null) {
            $(".video-btn-post").magnificPopup({
                disableOn: 768,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
            });
        }

        // volunteer slider
        $(".user-slider")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            autoplay: false,
            focusOnSelect: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: $(".prev-user"),
            nextArrow: $(".next-user"),
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                }
            ]
        });

    });
})(jQuery);