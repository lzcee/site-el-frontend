import Carousel from "../../components/Carousel";
import HighlightTitle from "../../components/HighlightTitle";
import NextImage from "../../components/NextImage";
import styles from "./Testimonials.module.scss";

const TestimonialCard = ({ testimonialCardData }) => (
  <div className={styles.testimonial}>
    <p className={styles.testimonialQuote}>{testimonialCardData.Quote}</p>
    <div className={styles.testimonialInfo}>
      <div className={styles.testimonialImageWrapper}>
        <NextImage
          className={styles.testimonialImage}
          media={testimonialCardData.Image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.testimonialContent}>
        <p className={styles.testimonialName}>{testimonialCardData.Name}</p>
        <p className={styles.testimonialJob}>{testimonialCardData.Job}</p>
      </div>
    </div>
  </div>
);

const Testimonials = ({ data }) => {
  const testimonialsLength = data.Testimonials.length;
  const getCarouselOptions = () => {
    if (testimonialsLength == 3) {
      return {
        padding: { left: 0, right: 0 }
      };
    } else if (testimonialsLength == 2) {
      return {
        padding: { left: 0, right: 0 },
        breakpoints: {
          1199: {
            padding: { left: 0, right: 0 },
          },
          767: {
            padding: { left: 24, right: 24 },
          },
        },
      };
    } else if (testimonialsLength == 1) {
      return {
        padding: { left: 0, right: 0 },
        breakpoints: {
          1199: {
            padding: { left: 0, right: 0 },
          },
          767: {
            padding: { left: 0, right: 0 },
          },
        },
      };
    }
    return {};
  };
  const carouselOptions = getCarouselOptions();

  const testimonialsColor = `testimonials-${data.BackgroundColor}`;
  let testimonialsClassName = `${styles.testimonials} ${styles[testimonialsColor]}`;

  return (
    <section className={testimonialsClassName}>
      <div className="container">
        <HighlightTitle className={styles.title}>{data.Title}</HighlightTitle>
      </div>
      <div className={styles.carouselWrapper}>
        <Carousel options={carouselOptions}>
          {data.Testimonials.map((testimonialCardData) => (
            <TestimonialCard
              key={testimonialCardData.id}
              testimonialCardData={testimonialCardData}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
