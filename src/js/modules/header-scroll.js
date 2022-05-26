$(window).scroll(function () {
  if ($(window).scrollTop() > 168) {
    $('.menu').addClass('menu-fixed');
  }
  else {
    $('.menu').removeClass('menu-fixed');
  }
});
