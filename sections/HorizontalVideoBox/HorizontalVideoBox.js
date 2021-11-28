import ReactMarkdown from "react-markdown";
import SectionTitle from "../../components/SectionTitle";
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
          <ReactMarkdown className={styles.description}>
            {data.Description}
          </ReactMarkdown>
          
        </div>
      </div>
    </section>
  );
};

export default HorizontalVideoBox;
