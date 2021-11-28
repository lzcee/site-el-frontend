import { SectionTitle } from "../../components/SectionTitle";
import styles from "./HorizontalVideoBox.module.scss";

const HorizontalVideoBox = ({ data }) => {
  return (
    <section className={styles.HorizontalVideoBox}>
      <SectionTitle>{data.SectionTitle.smallTitle}</SectionTitle>
    </section>
  );
};

export default HorizontalVideoBox;
