var mainSwiper;
var memberSwiper;

$(document).ready(function(){

  new WOW().init();
  
  /* 메인 슬라이드 */
  mainSwiper = new Swiper('.main-slide-wrap', {
    // Optional parameters
    slidesPerView : '1',
    loop: true,
    autoplay : {
      delay : 3000,
      disableOnInteraction : false,
      // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed : 3000,
    navigation: {
      nextEl: '.swiper-button-next.main-button-next',
      prevEl: '.swiper-button-prev.main-button-prev',
    },
    on:{
      init: function () {},
    },
    
  });


  memberSwiper = new Swiper('.member-slide-wrap', {
    // Optional parameters
    slidesPerView : '4',
    spaceBetween: 20,
    loop: true,
    autoplay : {
      delay : 3000,
      disableOnInteraction : false,
      // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    navigation: {
      nextEl: '.swiper-button-next.member-button-next',
      prevEl: '.swiper-button-prev.member-button-prev',
    },
    on:{
      init: function () {},
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      /* 540: {
        slidesPerView: 1,
        spaceBetween: 30
      }, */
    }
  });

});


