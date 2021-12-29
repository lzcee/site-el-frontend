import Button from "../../components/Button";
import NextImage from "../../components/NextImage";
import RichText from "../../components/RichText";

import styles from "./SignUpBanner.module.scss";

const SignUpBanner = ({ data }) => {
  return (
    <section className={styles.signUpBanner} id={data.SectionAnchorName}>
      <h2 className={styles.title}>{data.Title}</h2>
      <div className="container">
        <div className={styles.box}>
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
                    <RichText className={styles.featureDescription}>
                      {feature.Description}
                    </RichText>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              type={`button-${data.Button.type}-${data.Button.color}`}
              linkSettings={data.Button}
            >
              {data.Button.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBanner;
