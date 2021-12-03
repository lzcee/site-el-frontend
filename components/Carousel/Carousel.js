import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import styles from "./Carousel.module.scss";

const Carousel = ({ className, options, children }) => {
  let carouselClassName = styles.carousel;

  if (className) {
    carouselClassName = `${carouselClassName} ${className}`;
  }

  return (
    <Splide
      className={carouselClassName}
      options={{
        perPage: 1,
        gap: "24px",
      }}
    >
      {children.map((child, index) => (
        <SplideSlide key={index}>{child}</SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
