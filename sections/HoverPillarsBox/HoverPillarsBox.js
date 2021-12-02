import NextImage from "../../components/NextImage";
import RichText from "../../components/RichText";
import SectionTitle from "../../components/SectionTitle";

import styles from "./HoverPillarsBox.module.scss";

const HoverPillarsBox = ({ data }) => {
  return (
    <section className={styles.hoverPillarsBox}>
      <div className="container">
        <div className={styles.gridWrapper}>
          <div className={styles.contentWrapper}>
            <SectionTitle
              color={data.Title.BackgroundColor}
              className={styles.title}
            >
              {data.Title.SmallTitle}
              <span>{data.Title.Title}</span>
            </SectionTitle>
            <RichText className={styles.description}>
              {data.Description}
            </RichText>
          </div>
          <div className={styles.pillars}>
            {data.Pillars.map((pillar) => (
              <div key={pillar.id} className={styles.pillar}>
                <NextImage
                  className={styles.pillarImage}
                  media={pillar.BackgroundImage}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>{pillar.Title}</h3>
                  <p className={styles.pillarDescription}>
                    {pillar.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoverPillarsBox;
