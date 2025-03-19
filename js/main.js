document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.addEventListener('scroll', function() {
    const imageWrapper = document.querySelector('.unique-image-wrapper');
    const imageTop = imageWrapper.offsetTop;
    const imageHeight = imageWrapper.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport

    if (scrollPosition > imageTop && scrollPosition < imageTop + imageHeight) {
        imageWrapper.style.width = '100%'; // Expand width to full when scrolled to the middle section
        imageWrapper.style.height = '600px'; // Expand height to show the full image
        imageWrapper.querySelector('.unique-scroll-image').style.transform = 'scale(1)'; // No scaling, show full image
    } else {
        imageWrapper.style.width = '80%'; // Shrink back to initial width with clipping
        imageWrapper.style.height = '500px'; // Shrink height to clip the top and bottom
        imageWrapper.querySelector('.unique-scroll-image').style.transform = 'scale(1.2)'; // Scale up to clip sides
    }
});


  $(".latest-news-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

  jQuery(document).ready(function($) {

    "use strict";

    var siteMenuClone = function() {

      $('.js-clone-nav').each(function() {
        var $this = $(this);
        $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
      });


      setTimeout(function() {
        
        var counter = 0;
        $('.site-mobile-menu .has-children').each(function(){
          var $this = $(this);
          
          $this.prepend('<span class="arrow-collapse collapsed">');

          $this.find('.arrow-collapse').attr({
            'data-toggle' : 'collapse',
            'data-target' : '#collapseItem' + counter,
          });

          $this.find('> ul').attr({
            'class' : 'collapse',
            'id' : 'collapseItem' + counter,
          });

          counter++;

        });

      }, 1000);

      $('body').on('click', '.arrow-collapse', function(e) {
        var $this = $(this);
        if ( $this.closest('li').find('.collapse').hasClass('show') ) {
          $this.removeClass('active');
        } else {
          $this.addClass('active');
        }
        e.preventDefault();  
        
      });

      
      $('body').on('click', '.js-menu-toggle', function(e) {
        var $this = $(this);
        e.preventDefault();

        if ( $('body').hasClass('offcanvas-menu') ) {
          $('body').removeClass('offcanvas-menu');
          $this.removeClass('active');
        } else {
          $('body').addClass('offcanvas-menu');
          $this.addClass('active');
        }
      }) 

      // click outisde offcanvas
      $(document).mouseup(function(e) {
        var container = $(".site-mobile-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ( $('body').hasClass('offcanvas-menu') ) {
            $('body').removeClass('offcanvas-menu');
          }
        }
      });
    }; 
    siteMenuClone();


    var siteSticky = function() {
      $(".js-sticky-header").sticky({topSpacing:0});
    };
    siteSticky();


    var siteScroll = function() {

      

      $(window).scroll(function() {

        var st = $(this).scrollTop();

        if (st > 100) {
          $('.js-sticky-header').addClass('shrink');
        } else {
          $('.js-sticky-header').removeClass('shrink');
        }

      }) 

    };
    siteScroll();

  });

  // Spinner
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();

  (function ($) {
    
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#robertoNav').classyNav();
    }

    })(jQuery);

});

document.addEventListener("DOMContentLoaded", function () {
  // Create a new button element
  var closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "close d-flex align-items-center justify-content-center";
  closeButton.setAttribute("data-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  // Create an icon element for the close button
  var closeIcon = document.createElement("i");
  closeIcon.className = "bx bx-window-close";
  closeIcon.setAttribute("aria-hidden", "true");

  // Append the icon to the button
  closeButton.appendChild(closeIcon);

  // Find the modal content and append the close button
  var modalContent = document.querySelector("#exampleModal .modal-content");
  if (modalContent) {
      modalContent.insertBefore(closeButton, modalContent.firstChild);

      // Attach a click event listener to close the modal
      closeButton.addEventListener("click", function () {
          $('#exampleModal').modal('hide');
      });
  }
});