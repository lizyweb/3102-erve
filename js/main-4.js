document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Existing pageSlider functionality
  function pageSlider() {
      $('.page-slider').slick({
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          speed: 600,
          arrows: true,
          prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
          nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
      });
  }
  pageSlider();

  // New exact-slider functionality
  let currentIndex = 0;
  const slides = document.querySelectorAll('.exact-slider-slide');
  const indicators = document.querySelectorAll('.exactly-slider-indicator');

  function updateSlider() {
      slides.forEach((slide, index) => {
          slide.style.display = (index === currentIndex) ? 'flex' : 'none';
          indicators[index].classList.toggle('active', index === currentIndex);
      });
  }

  document.querySelector('.exact-slider-prev').addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateSlider();
  });
  
  document.querySelector('.exact-slider-next').addEventListener('click', function() {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateSlider();
  });

  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
          currentIndex = index;
          updateSlider();
      });
  });
  
  // Initialize the exact-slider
  updateSlider();
});
