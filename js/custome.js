jQuery(document).ready(function($) {
//scroll top
jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop() > 100) {
        jQuery(".scrollup").addClass("active");
    } else {
        jQuery(".scrollup").removeClass("active");
    }
});
jQuery(".scrollup").click(function() {
    jQuery("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

//scroll top
// Counter
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
});
// Counter
// Owl Slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//machheight
jQuery(".matchHeight").matchHeight(); 
});
//GALLERY
baguetteBox.run('.tz-gallery');