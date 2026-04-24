$(document).ready(function(){

  setTimeout(function(){
    $("#info .info_img .info_photo").stop().animate({"top": "0", "left": "0"}, 800);
    /* $("#info .info_photo").css({"top": "0", "left": "0"}); */
  }, 500);
});