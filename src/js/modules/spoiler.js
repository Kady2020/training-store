$(document).ready(function () {
  $('.menu__button, .answers__title-wrapper').click(function (event) {
    if ($('.menu__list, .answers__spoilers').hasClass('one')) {
      $('.menu__links, .answers__text').not($(this)).removeClass('active');
      $('.menu__links, .answers__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
