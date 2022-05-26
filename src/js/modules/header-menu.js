$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".header,.menu,.burger,.menu__list,.menu__item_dn,.menu__button,.menu__sub-link,.close-link,.bottom-header__btn,.menu__item_btn-dn,.search-box,.cancel-btn,.menu__links,.menu__item_logo-dn").toggleClass("_active");
    $("body").toggleClass("lock");
  });

  $('.menu__sub-link,.close-link').click(function (event) {
    $(".header,.menu,,.burger,.menu__list,.menu__item_dn,.menu__button,.close-link,.menu__sub-link,.bottom-header__btn,.menu__item_btn-dn,.search-box,.cancel-btn,.menu__links,.menu__item_logo-dn").removeClass('_active');
    $('body').removeClass('lock');
  });
});
