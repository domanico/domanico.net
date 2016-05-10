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

function setupOpaque(){
  if ( $( ".project-mast" ).length ) {
    $('.nav').removeClass('opaque');
  } else {
    $('.nav').addClass('opaque');
  }
}

$(document).ready(function(){

  setupScrollBehavior()

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
        duration: 10,
        render: function ($container, $newContent) {

          // Inject the new content
          $container.find('#data-container').html($newContent.find('.content')[0]);

          // Remove your CSS animation reversing class
          $('.project-mast').addClass('opaque');

          $(window).scrollTop(0);
          $container.removeClass('transitioning');

        }
      },
      onAfter: function($container, $newContent) {
        $('.project-mast').removeClass('opaque');
        setupOpaque()
      }
    },
    smoothState = $('#page-wrapper').smoothState(options).data('smoothState');

});
