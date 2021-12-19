import Button from "../../components/Button";
import RichText from "../../components/RichText";

import styles from "./B2BBanner.module.scss";

const B2BBanner = ({ data }) => {
  const descriptionColor = `description-${data.Color}`;
  let descriptionClassName = `${styles.description} ${styles[descriptionColor]}`;

  return (
    <section className={styles.b2bBanner}>
      <div className="container">
        <div className={styles.flexWrapper}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>{data.Title}</h2>
            <RichText className={descriptionClassName}>
              {data.Description}
            </RichText>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              className={styles.button}
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

export default B2BBanner;
