document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  

	
//   ============================
// be connect image slider js
// ======================================
$(document).ready(function(){
	$('.slider-3').slick({
		infinite: true, // Enabled infinite loop
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true, // Add dots
		prevArrow: '<i class="fa fa-chevron-left slick-prev-3"></i>',
		nextArrow: '<i class="fa fa-chevron-right slick-next-3"></i>',
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			}
		  ]
	});
});

// ======================
// sustainability page 
// =====================
document.querySelector('.container-3').addEventListener('click', function() {
    this.style.display = 'none';
});


});

