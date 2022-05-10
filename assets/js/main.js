$(document).ready(function () {

    $("#mobile-menu").click(function () {
        $(this).toggleClass("active");
        $('.menu').toggleClass("active");
        $('.header').toggleClass("active");
    });

    $('.slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: false,
        nextArrow: false
    });


    
});

