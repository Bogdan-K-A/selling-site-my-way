import { FreeMode } from "swiper";

export const params = {
  grabCursor: true,

  slidesPerView: 1,
  spaceBetween: 10,
  modules: [FreeMode],
  className: "mySwiper",
  breakpoints: {
    1121: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    568: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};
