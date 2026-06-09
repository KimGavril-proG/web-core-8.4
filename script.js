let swiperInstance = null;

function initOrDestroySwiper() {
  // Слайдер работает ТОЛЬКО до 767px включительно
  if (window.innerWidth < 768) {
    if (swiperInstance === null) {
      swiperInstance = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        // freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 16, // Отступы только здесь!

        //   freeMode: {
        //     enabled: true,
        //     sticky: true,
        //   },

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },

        mousewheel: {
          invert: true,
        },

        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      });
    }
  }

  // От 768px и выше — полностью уничтожаем слайдер
  else {
    if (swiperInstance !== null) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
}

// Инициализация при старте и ресайзе
initOrDestroySwiper();
window.addEventListener('resize', initOrDestroySwiper);

// Логика для кнопки "Развернуть"
const showMoreBtn = document.querySelector('.show-more-btn');
const swiperWrapper = document.querySelector('.swiper-wrapper');

if (showMoreBtn && swiperWrapper) {
  showMoreBtn.addEventListener('click', () => {
    // Переключаем класс активного состояния у сетки
    swiperWrapper.classList.toggle('is-expanded');

    // 👈 ДОБАВЛЯЕМ ЭТУ СТРОКУ: она включает переворот стрелок прямо на кнопке
    showMoreBtn.classList.toggle('is-open');

    // 👈 НАХОДИМ СПАН С ТЕКСТОМ ВНУТРИ КНОПКИ
    const btnText = showMoreBtn.querySelector('.btn-text');

    if (btnText) {
      if (swiperWrapper.classList.contains('is-expanded')) {
        btnText.textContent = 'Скрыть'; // Меняем только текст, спан со стрелками не пострадает!
      } else {
        btnText.textContent = 'Показать все';
      }
    }
  });
}



//     // Меняем текст на кнопке
//     if (swiperWrapper.classList.contains('is-expanded')) {
//       showMoreBtn.textContent = 'Скрыть';
//     } else {
//       showMoreBtn.textContent = 'Показать все';
//     }
//   });
// }






// let swiperInstance = null;

// function initOrDestroySwiper() {
//   // Слайдер работает ТОЛЬКО до 767px включительно
//   if (window.innerWidth < 768) {
//     if (swiperInstance === null) {

//         // Это был первый вариант
// // const swiper = new Swiper('.swiper', {

//     swiperInstance = new Swiper('.swiper', {

//   direction: 'horizontal',
//   loop: true,
//   // freeMode: true,
//   slidesPerView: 'auto',
//   spaceBetween: 16, // Отступы только здесь!
//   // snapToSlideEdge: true, // 👈 Принудительно выравнивает слайды по краям при остановке
//   // loopSlides: 3, // Явно говорим, сколько слайдов клонировать
// //   centeredSlides: false, // Убедитесь, что центрирование выключено, если нужно от левого края
//   // loopAdditionalSlades: 4, // 👈 Добавит запасные слайды для корректного финала
//   // loopedSlides: 11, // Укажите примерное количество слайдов, видимых на экране
// //   watchSlidesProgress: true, // Помогает правильно рассчитывать видимость слайдов
//   // observer: true, // 👈 Следит за изменениями внутри слайдера
//   // observeParent: true, // 👈 Следит за изменениями у родителей слайдера
//   // observeParents: true, // В старых версиях (до Swiper 6) свойство писалось с буквой s на конце слова Parent: observeParents: true. А в новых версиях (9, 10, 11) его сократили до единственного числа: observeParent: true

// //   freeMode: {
// //     enabled: true,
// //     sticky: true,
// //   },

//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },

//   mousewheel: {
//     invert: true,
//   },

//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },

//   //     effect: 'fade',
//   //   fadeEffect: {
//   //     crossFade: true
//   //   },

// });

// }
// }

// // От 768px и выше — полностью уничтожаем слайдер
//   else {
//     if (swiperInstance !== null) {
//       swiperInstance.destroy(true, true);
//       swiperInstance = null;
//     }
//   }
// }

// // Инициализация при старте и ресайзе
// initOrDestroySwiper();
// window.addEventListener('resize', initOrDestroySwiper);

// // Логика для кнопки "Развернуть"
// const showMoreBtn = document.querySelector('.show-more-btn');
// const swiperWrapper = document.querySelector('.swiper-wrapper');

// if (showMoreBtn && swiperWrapper) {
//   showMoreBtn.addEventListener('click', () => {
//     // Переключаем класс активного состояния у сетки
//     swiperWrapper.classList.toggle('is-expanded');

//     // 👈 ДОБАВЬТЕ ЭТУ СТРОКУ: она включает переворот стрелок прямо на кнопке
//     showMoreBtn.classList.toggle('is-open');

//     // 👈 НАХОДИМ СПАН С ТЕКСТОМ ВНУТРИ КНОПКИ
//     const btnText = showMoreBtn.querySelector('.btn-text');

//     if (btnText) {
//       if (swiperWrapper.classList.contains('is-expanded')) {
//         btnText.textContent = 'Скрыть'; // Меняем только текст, спан со стрелками не пострадает!
//       } else {
//         btnText.textContent = 'Показать все';
//       }
//     }
//   });
// }

// //     // Меняем текст на кнопке
// //     if (swiperWrapper.classList.contains('is-expanded')) {
// //       showMoreBtn.textContent = 'Скрыть';
// //     } else {
// //       showMoreBtn.textContent = 'Показать все';
// //     }
// //   });
// // }
