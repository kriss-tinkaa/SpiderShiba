$(document).ready(function () {

    $("#mobile-menu").click(function () {
        $(this).toggleClass("active");
        $('.menu').toggleClass("active");
        $('.header').toggleClass("active");
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("scroll");
        } else {
           $("header").removeClass("scroll");
        }
    });

    $('.slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: false,
        nextArrow: false
    });


    
});

