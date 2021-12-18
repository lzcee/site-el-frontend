import HighlightTitle from "../../components/HighlightTitle";
import NextImage from "../../components/NextImage";

import styles from "./Features.module.scss";

const Features = ({ data }) => {
  return (
    <section className={styles.features}>
      <div className="container">
        <HighlightTitle className={styles.title}>{data.Title}</HighlightTitle>
        <div className={styles.featuresWrapper}>
          {data.Features.map((feature) => (
            <div className={styles.feature} key={feature.id}>
              {feature.Icon && (
                <div className={styles.featureIconWrapper}>
                  <NextImage
                    className={styles.featureIcon}
                    media={feature.Icon}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
              <div className={styles.featureContent}>
                {feature.Title && (
                  <h3 className={styles.featureTitle}>{feature.Title}</h3>
                )}
                {feature.Description && (
                  <p className={styles.featureDescription}>
                    {feature.Description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
