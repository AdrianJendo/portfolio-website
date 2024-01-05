import Props from "../types/TransitionProps";

export const sliderVariants = {
  enter: ({nextPage, prevPage} : Props) => {
    return {
      x: nextPage > prevPage ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: ({nextPage, prevPage} : Props) => {
    return {
      zIndex: 0,
      x: nextPage > prevPage ? -1000: 1000,
      opacity: 0
    };
  }
};