export const imgAnimate = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
