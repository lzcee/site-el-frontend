import SectionTitle from "../../components/SectionTitle";
import styles from "./ClassesCarousel.module.scss";

const ClassesCarousel = ({ data }) => {
  return (
    <section className={styles.classesCarousel}>
      <SectionTitle color={data.Title.BackgroundColor} className={styles.title}>
        {data.Title.SmallTitle}
        <span>{data.Title.Title}</span>
      </SectionTitle>
    </section>
  );
};

export default ClassesCarousel;
