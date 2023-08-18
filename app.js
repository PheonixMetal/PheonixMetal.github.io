//Swiper code
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });

    $(window).scroll(function() {
      if ($(window).scrollTop() >= 50) {
        $('.site-navigation').css('background', '#e71313');
      } else {
        $('.site-navigation').css('background', 'transparent');
      }
    });