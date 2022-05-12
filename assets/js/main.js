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

    $('.team-slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: false,
        nextArrow: false
    });


    
    var items = $(".timeline-card-row"),
    timelineHeight = $(".timeline-cards").height(),
    greyLine = $('.default-line'),
    lineToDraw = $('.draw-line');

if(lineToDraw.length) {
  $(window).on('scroll', function () {

    // Need to constantly get '.draw-line' height to compare against '.default-line'
    var redLineHeight = lineToDraw.height(),
    greyLineHeight = greyLine.height(),
    windowDistance = $(window).scrollTop(),
    windowHeight = $(window).height() / 2,
    timelineDistance = $(".timeline").offset().top;

    if(windowDistance >= timelineDistance - windowHeight) {
      line = windowDistance - timelineDistance + windowHeight;

      if(line <= greyLineHeight) {
        lineToDraw.css({
          'height' : line + 20 + 'px'
        });
      }
    }

    // This takes care of adding the class in-view to the li:before items
    var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
    items.each(function(index){
      var circlePosition = $(this).offset();

      if(bottom > circlePosition.top) {				
        $(this).addClass('in-view');
      } else {
        $(this).removeClass('in-view');
      }
    });	
  });
}

});
