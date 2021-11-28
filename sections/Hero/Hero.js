import NextImage from "../../components/NextImage";
import Button from "../../components/Button/Button";

import styles from "./Hero.module.scss";

const Hero = ({ data }) => {
  return (
    <section className={styles.hero}>
      <NextImage media={data.BackgroundImage} priority layout="fill" objectFit="cover"/>
      <div className="container">
        <h1 className={styles.title}>
          {data.SmallTitle}
          <span>{data.Title}</span>
        </h1>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.infoWrapper}>
          {data.Info.map((info) => (
            <div key={info.id} className={styles.info}>
              <p className={styles.infoTitle}>{info.title}</p>
              <p className={styles.infoDescription}>{info.description}</p>
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
    </section>
  );
};

export default Hero;
