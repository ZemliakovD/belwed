$('.juri-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
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