(function($) {
  "use strict";

  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  $(window).on('scroll', function(){
    if( $(window).scrollTop()>80 ){
      $('#sticky').addClass('stick');
    } else {
      $('#sticky').removeClass('stick');
    }
  }); 
  
  jQuery(document).ready(function(){
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 300,
      animation: 'fade'
    }); 

    /*-------------------------------------------
    js onePageNav
    --------------------------------------------- */
    $('.toggle-bar').on('click', function () {
      $('.menu-area').slideToggle();
    });

  });

  //Add To Cart

  $('.add-bag-btn').on('click', function(e) {
    var form = $('#addToCart');
    alert('Add to Cart');
    e.preventDefault()

    $.ajax({
        type: 'POST',                             
        url: '/cart/42362991214844:1',
        dataType: 'json',                               
        data: form.serialize(),
        contentType: false,
        processData: false,
        success: function(data) {
            document.location.href = '/cart/checkout';
        }
    });
})

})(jQuery);