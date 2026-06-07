const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  // freeMode: true,
  slidesPerView: 'auto',
  spaceBetween: 16, // Отступы только здесь!
  // snapToSlideEdge: true, // 👈 Принудительно выравнивает слайды по краям при остановке
  // loopSlides: 3, // Явно говорим, сколько слайдов клонировать
//   centeredSlides: false, // Убедитесь, что центрирование выключено, если нужно от левого края
  // loopAdditionalSlades: 4, // 👈 Добавит запасные слайды для корректного финала
  // loopedSlides: 11, // Укажите примерное количество слайдов, видимых на экране
//   watchSlidesProgress: true, // Помогает правильно рассчитывать видимость слайдов
  // observer: true, // 👈 Следит за изменениями внутри слайдера
  // observeParent: true, // 👈 Следит за изменениями у родителей слайдера
  // observeParents: true, // В старых версиях (до Swiper 6) свойство писалось с буквой s на конце слова Parent: observeParents: true. А в новых версиях (9, 10, 11) его сократили до единственного числа: observeParent: true

//   freeMode: {
//     enabled: true,
//     sticky: true,
//   },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  mousewheel: {
    invert: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  //     effect: 'fade',
  //   fadeEffect: {
  //     crossFade: true
  //   },
});
