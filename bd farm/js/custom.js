$(document).ready(function(){
    $('.venobox').venobox(); 
//    banner slide
   $('#banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
       dots:false,
       arrow:false,
       nextArrow:false,
       prevArrow:false,
  autoplaySpeed: 2000,
});
  var back2top = $(".back-to-top") 
$(back2top).click(function(){
    $(html_body).animate({scrollTop:0},1000);
});
$(window).scroll(function(){
 var scrolling = $(this).scrollTop();
    var back2top = $(".back-to-top")
 if(scrolling > 100){
    back2top.fadeIn(500);
 }
    else {
        back2top.fadeOut(500);
    }
});
  
// animation scroll js
 var html_body = $('html, body');
    $('#menubar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
});