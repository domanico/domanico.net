$(document).ready(function(){

  $( ".project").on("mouseenter",function(){
    $('body, nav').css("background-color",$(this).attr("data-color"));
  }).on("mouseleave",function(){
    $('body, nav').css("background-color","#202020");
  });

});

$(document).pjax('a', '#pjax-container')
