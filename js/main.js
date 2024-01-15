$('.juri-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, 
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#nomitant").click(function() { // ID откуда кливаем
  $('html, body').animate({
  scrollTop: $(".nomination").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
 });

 $("#juri").click(function() { // ID откуда кливаем
  $('html, body').animate({
  scrollTop: $(".juri").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
 });

 $("#questions").click(function() { // ID откуда кливаем
  $('html, body').animate({
  scrollTop: $(".faq").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
 });

 $("#contacts").click(function() { // ID откуда кливаем
  $('html, body').animate({
  scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
 });