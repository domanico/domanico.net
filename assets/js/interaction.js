$(document).ready(function(){

  // $(".project").click(function(){
  //   window.location = $(this).attr("data-url");
  //
  // });
  pageBehaviors();

  $(document).pjax('a','#data-container', {fragment:'#data-container'} );

  $(document).on('pjax:send', function() {
    $('img').fadeOut(200);
  })

  $(document).on('pjax:complete', function() {
    pageBehaviors();
  })

});

function pageBehaviors() {

  if ( $( ".project-mast" ).length ) {

    $('.nav').removeClass('opaque');
    $('.project-mast').removeClass('opaque');

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var imgheight = $('.project-mast').height();

      if (scroll >= (imgheight - 200)) {
        $('.nav, .project-mast').addClass('opaque');
      } else {
        $('.nav, .project-mast').removeClass('opaque');
      }

    });
  }
}
