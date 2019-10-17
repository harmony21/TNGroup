$(document).ready(function() {
  //слайдер в блоке достижений (для мобильной версии)
  var slider = $("#lightSlider");
  slider.lightSlider({
    item: 3,
    speed: 600,
    responsive : [
    {
      breakpoint: 480,
      settings: {
        item: 1  
      }
    }
  ]
  }); 

  //слайдер в блоке о компании (для мобильной версии)
  var slider2 = $("#lightSlider2");
  slider2.lightSlider({
    item: 1,
    speed: 600,
  }); 

   //слайдер видео на главной
  var slider3 = $("#lightSlider3");
  slider3.lightSlider({
    item: 1,
    speed: 600,
    loop: true,
  }); 
  $('.video__switch').click(function(e) {
    slider3.goToNextSlide();
  });

  //слайдер видео на главной
  var slider4 = $("#lightSlider4");
  slider4.lightSlider({
    item: 1,
    speed: 600,
  }); 
});