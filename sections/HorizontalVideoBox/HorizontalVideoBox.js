import RichText from "../../components/RichText";
import SectionTitle from "../../components/SectionTitle";
import YoutubeIframe from "../../components/YoutubeIframe";
import styles from "./HorizontalVideoBox.module.scss";

const HorizontalVideoBox = ({ data }) => {
  return (
    <section className={styles.horizontalVideoBox}>
      <SectionTitle color="blue" className={styles.title}>
        {data.Title.SmallTitle}
        <span>{data.Title.Title}</span>
      </SectionTitle>
      <div className="container">
        <div className={styles.contentWrapper}>
          <RichText className={styles.description}>{data.Description}</RichText>
          <YoutubeIframe className={styles.video} data={data.YoutubeVideo}/>
        </div>
      </div>
    </section>
  );
};

export default HorizontalVideoBox;
