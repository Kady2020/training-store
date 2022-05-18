$(document).ready(function () {
  $('.menu__button').click(function (event) {
    if ($('.block-name').hasClass('one')) {
      $('.menu__links').not($(this)).removeClass('active');
      $('.menu__links').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
