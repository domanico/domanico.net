$(document).ready(function(){

  $(".project").click(function(){
    window.location = $(this).attr("data-url");

  });

  if ( $( ".project-mast" ).length ) {

    $('.nav').removeClass('opaque');
    $('.project-mast').removeClass('opaque');

    $(window).scroll(function() {
      console.log('poop');
      var scroll = $(window).scrollTop();
      var imgheight = $('.project-mast').height();

      if (scroll >= (imgheight - 200)) {
        $('.nav, .project-mast').addClass('opaque');
      } else {
        $('.nav, .project-mast').removeClass('opaque');
      }

    });
  }

});
