import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import styles from "./Carousel.module.scss";

const Carousel = ({ className, options, children, ...rest }) => {
  let defaultOptions = {
    perPage: 3,
    padding: { left: 65, right: 65 },
    gap: 66,
    breakpoints: {
      1199: {
        perPage: 2,
        padding: { left: 48, right: 48 },
        gap: 48,
      },
      767: {
        perPage: 1,
        padding: { left: 24, right: 24 },
        gap: 24,
      },
    },
  };
  options = Object.assign(defaultOptions, options);

  let carouselClassName = styles.carousel;
  if (className) {
    carouselClassName = `${carouselClassName} ${className}`;
  }

  return (
    <Splide
      className={carouselClassName}
      options={options}
      {...rest}
    >
      {children.map((child, index) => (
        <SplideSlide key={index}>{child}</SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
