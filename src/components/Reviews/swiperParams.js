import { Autoplay, EffectCreative } from "swiper";

export const params = {
  grabCursor: true,
  effect: "creative",
  loop: true,
  modules: [Autoplay, EffectCreative],
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, 0, -400],
      hide: true,
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
};
