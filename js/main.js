// Swiper Slider Testimonials Config

var swiper = new Swiper(".swiper-container-testimonials", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 5500,

    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
     
    },
    565: {
      slidesPerView: 3,
     
    },
    566: {
      slidesPerView: 4,
     
    },
 
  }
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("nav").addClass("shrink");
  } else {
    $("nav").removeClass("shrink");
  }
});

/* Navbar Scroll -  Hide / Show */

$(document).ready(function () {
  "use strict";

  var c,
    currentScrollTop = 0,
    navbar = $("nav");

  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
  });
});

$("#hamburger").click(function () {
  $(this).toggleClass("active");
  $(".mobileMenu").slideToggle(500);
});

$(".mobileMenu a").click(function () {
  $("#hamburger").toggleClass("active");
  $(".mobileMenu").slideToggle();
});

$(document).ready(function () {
  // responsive fonksiyonu
  function responsiveMenu() {
    // mevcut ekran genişliğini alalım
    width = $(window).width();

    // ekran genişliği 960'dan küçükse
    if (width <= 767) {
      $(".contactContainer").addClass("container");
      $(".formContent div").removeClass("w-75");
      $(".mapContent div").addClass("w-100");
      $(".formContent").removeClass("p-0");
      $(".mapContent").removeClass("pl-0");
    }
  }

  // sayfa açıldığı zaman fonksiyonu çalıştıralım.
  responsiveMenu();

  // ekran genişliği değiştiğinde fonksiyonu çalıştıralım.
  $(window).resize(responsiveMenu);
});
