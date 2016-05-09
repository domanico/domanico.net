$(document).ready(function(){

  var options = {
      prefetch: false,
      cacheLength: 2,
      debug: true,
      onStart: {
        duration: 250, // Duration of our animation
        render: function ($container) {
          // Add your CSS animation reversing class

          console.log('onStart')
          // debugger
          $container.addClass('is-exiting');

          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          console.log('onReady')

          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');

          // Inject the new content
          $container.html($newContent);

        }
      }
    },
    smoothState = $('#data-container').smoothState(options).data('smoothState');


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

});
