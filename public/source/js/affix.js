$( document ).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
      $('nav').addClass("affix");
    }
    else{
      $('nav').removeClass("affix");
    }
  });
});
