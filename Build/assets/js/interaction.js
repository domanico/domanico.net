function setupScrollBehavior() {
  $(window).scroll(function() {
    if ( $( ".project-mast" ).length ) {

      var scroll = $(window).scrollTop();
      var imgheight = $('.project-mast').height();

      if (scroll >= (imgheight - 200)) {
        $('.nav, .project-mast').addClass('opaque');
      } else {
        $('.nav, .project-mast').removeClass('opaque');
      }
    }
  });
}

function removeOpaque(){
  $('.nav').removeClass('opaque');
  $('.project-mast').removeClass('opaque');
}

$(document).ready(function(){

  setupScrollBehavior()

  var options = {
      prefetch: false,
      cacheLength: 2,
      scroll: false,
      onStart: {
        duration: 300, // Duration of our animation
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
          pageBehaviors();
          // Inject the new content
          $container.find('#data-container').html($newContent.find('.content')[0]);

          // Remove your CSS animation reversing class
          removeOpaque()

          $container.removeClass('transitioning');

        }
      }
    },
    smoothState = $('#page-wrapper').smoothState(options).data('smoothState');

});
