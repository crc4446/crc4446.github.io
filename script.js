window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-400px";
  }
} 

$(function(){  // $(document).ready shorthand
  $('.topSection').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.sec').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});

$("#about").click(function() {
  $('html,body').animate({
      scrollTop: $(".textSec1").offset().top},
      'slow');
});

$("#skills").click(function() {
  $('html,body').animate({
      scrollTop: $(".textSec2").offset().top},
      'slow');
});

$("#resume").click(function() {
  $('html,body').animate({
      scrollTop: $(".textSec3").offset().top},
      'slow');
});

$("#exp").click(function() {
  $('html,body').animate({
      scrollTop: $(".textSec4").offset().top},
      'slow');
});

$("#home").click(function() {
  $('html,body').animate({
      scrollTop: $("html").offset().top},
      'slow');
});



