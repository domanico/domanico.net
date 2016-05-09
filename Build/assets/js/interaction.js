$(document).ready(function(){

  var options = {
      prefetch: false,
      cacheLength: 2,
      scroll: false,
      onStart: {
        duration: 400, // Duration of our animation
        render: function ($container) {
          // Add your CSS animation reversing class
          $container.addClass('transitioning');

          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          
          // Inject the new content
          $container.find('#data-container').html($newContent.find('.content')[0]);
          
          // Remove your CSS animation reversing class
          $container.removeClass('transitioning');

        }
      }
    },
    smoothState = $('#page-wrapper').smoothState(options).data('smoothState');

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
