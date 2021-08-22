 /*
|--------------------------------------------------------------------------
| Custom JS
|--------------------------------------------------------------------------
|
| About author: https://Sticky.vn/
|
*/

  /* ------------------------------------------------------------------------ *  
      Sticky header when scroll
  * ------------------------------------------------------------------------ */
  // jQuery(document).ready(function () {
  //   $(window).scroll(function(){
  //     var scroll = $(window).scrollTop();
  //     if (scroll > 62) {
  //       $(".header").addClass("sticky");
  //     }
  //     else {
  //       $(".header").removeClass("sticky");
  //     }
  //   });
  // });

  /* ------------------------------------------------------------------------ *  
      jQuery inview
  * ------------------------------------------------------------------------ */
  // ('div').on('inview', function(event, isInView) {
  //   if (isInView) {
  //   } else {
  //   }
  // });
  jQuery(document).ready(function($){
      // Menu
    $('.top-menu-button').click(function() {
        $('.nav-menu').addClass('show')
      });
    
      $('.btn-close').click(function() {
        $('.nav-menu').removeClass('show')
      });
      $('.nav-menu .menu ul li ')
  });



