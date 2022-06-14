import Swiper, {
  Mousewheel, HashNavigation, Pagination, Keyboard,
} from 'swiper';

let servSw = new Swiper('.services__swiper', {
  modules: [
    HashNavigation
  ],

  hashNavigation: {
    watchState: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  slidesPerView: 1,

  slidesPerGroup: 1,

  watchOverflow: true,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,

  init: false,

  on: {
    init: function () {
      menuSlider();
    },

    slideChange: function () {
      menuSliderRemove();
      menuLinks[servSw.realIndex].classList.add('_act');
    },
  },
});

new Swiper('.services__swiper-inner', {
  modules: [
    Pagination, Keyboard
  ],

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    UpDown: true,
  },

  simulateTouch: true,

  slidesPerView: 1,

  slidesPerGroup: 1,

  watchOverflow: true,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,

  nested: true,
});

let menuLinks = document.querySelectorAll('.services__link');

function menuSlider(params) {
  if (menuLinks.length > 0) {
    menuLinks[servSw.realIndex].classList.add('_act');
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', function (e) {
        menuSliderRemove();
        servSw.slideTo(index, 1000);
        menuLink.classList.add('_act');
        e.preventDefault();
      });
    }
  }
}

function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.services__link._act');
  if (menuLinkActive) {
    menuLinkActive.classList.remove('_act');
  }
}

servSw.init();
