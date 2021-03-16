$(function () {

    // preloader code start here
    $(window).on("load", function () {
        $(".preloader").addClass("complete");
    });
    // scroll animation aos plugin code start here 

    AOS.init();

    //  scroll down to show navbar 

    $(window).on("scroll", function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 100) {
            $(".header_section").addClass("sticky");
        } else {
            $(".header_section").removeClass("sticky");
        }
    });


    //  Back To Top button start here

    $(window).on("scroll", function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 200) {
            $(".back_to_top").slideDown();

        } else {
            $(".back_to_top").slideUp();
        }
    });
    $(".back_to_top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });

    // Smooth section scroll code start here  

    $(".header_section ul li a").on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 72
        }, 1000, function () {
            // window.location.hash = target;
        });
    });


    // banner slick slider
    $(".banner_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        prevArrow: '.slider_icon_left',
        nextArrow: '.slider_icon_right',
        arrows: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
    });
    // Portfolio slick slider
    $(".port_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    // Service slick slider
    $(".service_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        prevArrow: '.service_icon_top',
        nextArrow: '.service_icon_bottom',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    });
    // Transtimonial slider

    $(".review_item_wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".review_img_slider",
    });
    $(".review_img_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".review_item_wrapper",
        dots: false,
        arrows: true,
        prevArrow: '.review_icon_top',
        nextArrow: '.review_icon_bottom',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
        responsive: [{
            breakpoint: 768,
            settings: {
                vertical: false,
                verticalSwiping: false,
            },
        }, {
            breakpoint: 576,
            settings: {
                vertical: false,
                verticalSwiping: false,
            },
        }],
    });
    // Transtimonial slider

    $(".client_slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "0px",
        responsive: [{
            breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            }, {
                breakpoint: 351,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }, ],

    });

    // Counter js
    $('.counter').counterUp({
        delay: 20,
        time: 2000,
    });
    // portfolio venobox
    $('.portfolio_venobox').venobox({
        border: "5px",
        closeColor: "#111",
        closeBackground: "#fff",
        spinner: "wave"
    });
    // Team venobox
    $('.team_venobox').venobox({
        border: "5px",
        closeColor: "#111",
        closeBackground: "#fff",
        spinner: "wave"
    });


});