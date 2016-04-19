$(document).ready(function(){

  $( ".thumbnail").on("mouseenter",function(){
    $('body').css("background-color",$(this).attr("data-color"));
  }).on("mouseleave",function(){
    $('body').css("background-color","#E2E2E2");
  });

});
