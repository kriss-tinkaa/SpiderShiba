$(document).ready(function () {

    $("#mobile-menu").click(function () {
        $(this).toggleClass("active");
        $('body').toggleClass("hide");
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



let articles = document.getElementsByClassName('timeline-content');

for(article of articles) {
  let ar = article.getElementsByTagName("article");
  let height = ar[0].clientHeight;
  article.style.minHeight =  height - height/3 + "px";
  console.log(height);
}