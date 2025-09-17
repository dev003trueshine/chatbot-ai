/*
 * Version: 1.0.0
 * Template: chat bot ai
 * Author: creatiixdesign
 * Design and Developed by: creatiixdesign
 * NOTE: This file contains the script for initialize & listener Template.
 */
/*----------------------------------------------
Index Of Script
------------------------------------------------
:: Back To Top
------------------------------------------------
Index Of Script
----------------------------------------------*/

(function () {
  "use strict";
  // aos animation
  AOS.init({
    offset: 100,       // trigger earlier
    duration: 1000,    // animation duration
    easing: 'ease-in-out',
    once: false,       // allow animation every time you scroll
    startEvent: 'DOMContentLoaded'
  });

  // Fix for nav hash jump (#faq, #contact)
  window.addEventListener("hashchange", () => {
    setTimeout(() => {
      AOS.refresh();
    }, 300);
  });

  /*----------------Back To Top--------------------*/
  const backToTop = document.getElementById("back-to-top")
  if (backToTop !== null && backToTop !== undefined) {
    document.getElementById("back-to-top").classList.add("animate__animated", "animate__fadeOut")
    window.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop > 350) {
        document.getElementById("back-to-top").classList.remove("animate__fadeOut")
        document.getElementById("back-to-top").classList.add("animate__fadeIn")
      } else {
        document.getElementById("back-to-top").classList.remove("animate__fadeIn")
        document.getElementById("back-to-top").classList.add("animate__fadeOut")
      }
    })
    // scroll body to 0px on click
    document.querySelector('#top').addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    })
  }

  /*----------Sticky-Header-----------*/
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery(".header-sticky").addClass("sticky");
    } else {
      jQuery(".header-sticky").removeClass("sticky");
    }
  });

  document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    let navbarCollapse = document.querySelector('#navbarNavDropdown');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

  /*--------------------------------------
    Slick Slider
  ------------------------------------------*/

})();
$(function () {
  $(".slick-slider").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: false,

    responsive: [{
        breakpoint: 1024, // tablets & small laptops
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480, // small mobiles
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});