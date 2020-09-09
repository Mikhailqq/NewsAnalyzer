export const SWIPER_CONFIG = {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '',
    clickable: true,
    bulletClass: '',
    bulletActiveClass: '',
  },
  navigation: {
    nextEl: 'commits__slider-arrow_place_right',
    prevEl: 'commits__slider-arrow_place_left',
  },
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 16
    },
  },
  slidesPerView: 1,
  spaceBetween: 8,
  slideClass: 'slider__item',
  wrapperClass: 'commits__slider-wrapper',
}