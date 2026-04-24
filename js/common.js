$(document).ready(function(){

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    // mobile:       false,       // default
    live:         true        // default
    })
    wow.init();

  
  /* 헤더 투뎁스 */
/*   $('.header_center .navis').on({
    mouseover: function(e){
        $(".header_drop").stop().slideDown();
        e.stopPropagation();
      },
      mouseleave: function(e){
        $(".header_drop").stop().slideUp();
        e.stopPropagation();
    }
  }); */

  $(".header_center").on('mouseenter focus' ,function(){;
    $(".header_drop").stop().slideDown("fast");
  });

  $('.header').on('mouseleave blur', function () {
    $('.header_drop').stop(true, true).slideUp("fast");
  });

/*   $(".header_center").on('mouseenter focus' ,function(){;
    $(".header_drop").stop().slideDown(500);
  });

  $('.header_center').on('mouseleave blur', function () {
    $('.header_drop').stop(true, true).slideUp(500);
  });

  $(".header_drop").on('mouseleave blur', function () {
    $(".header_drop").stop(true, true).slideUp(500);
  }); */

  /* 햄버거 메뉴 클릭 시 */
  $(".hamberger").on('click', function(){
    $(this).toggleClass('active');
    $(".header .ham_menus").slideToggle();
    $(".header .ham_menus").css({"display": "flex", "justify-content": "center", "align-items": "center"});
    $(".header_right_mo").toggleClass('hidden');
    $("body").toggleClass('active');

    $(window).resize(function(){
      $(".header .ham_menus").slideUp();
      $(".header .ham_menus").css({"display": "none"});
      $(".header").removeClass('active');
      $(".ham_bg").removeClass('active');
      $(".header_right_mo").removeClass('hidden');
    });
  });

  $(".ham_menus .menu").on('click', function(){
    $(this).toggleClass('active');
    $(this).next("ul").slideToggle();
    $(this).next("ul").toggleClass('active');
    /* $(this).siblings().removeClass('active'); */
  });

  /* 서브 드롭다운 */
  $(".sub_drop .sub_menus").on({
    click: function(e){
      $(".sub_drop_menus").stop().animate().fadeToggle(300);
      $(".sub_menus").toggleClass("active");
      $('.sub_drop .sub_menus .down_btn i').toggleClass("zwicon-minus zwicon-plus");
    }
  });
  
  $(".sub_drop .sub_menus2").on({
    click: function(e){
      $(".sub_drop_menus2").stop().animate().fadeToggle(300);
      $(".sub_menus2").toggleClass("active");
      $('.sub_drop .sub_menus2 .down_btn i').toggleClass("zwicon-minus zwicon-plus");
    }
  });

});
