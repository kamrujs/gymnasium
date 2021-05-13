// ======logo-slider======
$('.logo-slider').slick({
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-caret-left prevArrow"></i>',
  nextArrow: '<i class="fas fa-caret-right nextArrow"></i>',
});
// ======logo-slider======

// ======banner-slider======
$('.banner-slider').slick({
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-circle-left prev-arrow"></i>',
  nextArrow: '<i class="fas fa-chevron-circle-right next-arrow"></i>',
});
// ======banner-slider======


// ======banner-slider======
$('.testi-slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  // prevArrow: '<i class="fas fa-chevron-circle-left prev-arrow"></i>',
  // nextArrow: '<i class="fas fa-chevron-circle-right next-arrow"></i>',
});
// ======banner-slider======



// ======bvenobox=====
$(document).ready(function () {
  $('.venobox').venobox();
});
// ======venobox======



// ======venobox======
$('.venobox_custom').venobox({
  framewidth: '1080px',
  frameheight: '650px',
  border: '3px',
  bgcolor: '#e23e38',
  titleattr: 'Gymnasium',
  numeratio: true,
  infinigall: true,
  share: ['facebook', 'twitter', 'download']
});
// ======venobox======




// ======counter up======

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// ======counter up======



// ====== Class tab JS ======


  $("#colorful").colorfulTab();







// ====== Class tab JS ======