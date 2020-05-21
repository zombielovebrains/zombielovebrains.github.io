(function (){
  'use strict';

  let sliderBox = document.querySelector('.products__list');
  let nextBtn = document.querySelector('.products__toggle--next');
  let prevBtn = document.querySelector('.products__toggle--prev');

  function activateSlider () {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    sliderBox.classList.add('owl-carousel');
  }
  activateSlider();

  let owl = $('.owl-carousel');

  owl.owlCarousel({
    autoWidth:true,
    responsive:{
        0:{
            items:1,
            margin:10
        },
        768:{
            items:2,
            margin:30
        },
        1024:{
            items:2,
            margin:40
        },
        1200:{
            items:3,
            margin:40
        }
    },
  });

  nextBtn.addEventListener('click', function() {
    owl.trigger('next.owl.carousel');
  });

  prevBtn.addEventListener('click', function() {
    owl.trigger("prev.owl.carousel");
  });

  window.slider = {
    activate: activateSlider
  };

})();