import SectionTitle from "../../components/SectionTitle";
import Carousel from "../../components/Carousel";
import NextImage from "../../components/NextImage";
import RichText from "../../components/RichText";
import Button from "../../components/Button";

import styles from "./ClassesCarousel.module.scss";

const ClassCard = ({ classCardData }) => (
  <div className={styles.classWrapper}>
    <div className={styles.class}>
      <NextImage
        className={styles.classBackgroundImage}
        media={classCardData.BackgroundImage}
        layout="fill"
        objectFit="cover"
      />
      <h3 className={styles.classNumber}>{classCardData.Number}</h3>
      <div className={styles.classContent}>
        <h4 className={styles.classTitle}>{classCardData.Title}</h4>
        <RichText className={styles.classDescription}>
          {classCardData.Description}
        </RichText>
      </div>
    </div>
  </div>
);

const ClassesCarousel = ({ data }) => {
  return (
    <section className={styles.classesCarousel}>
      <SectionTitle color={data.Title.BackgroundColor} className={styles.title}>
        {data.Title.SmallTitle}
        <span>{data.Title.Title}</span>
      </SectionTitle>
      <div className={styles.carouselWrapper}>
        <Carousel>
          {data.Class.map((classCardData) => (
            <ClassCard key={classCardData} classCardData={classCardData} />
          ))}
        </Carousel>
      </div>
      {
        data.Button &&
        <div className={styles.buttonWrapper}>
          <Button
            type={`button-${data.Button.type}-${data.Button.color}`}
            linkSettings={data.Button}
          >
            {data.Button.text}
          </Button>
        </div>
      }
    </section>
  );
};

export default ClassesCarousel;
