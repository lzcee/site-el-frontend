import Accordion from "../../components/Accordion";
import SectionTitle from "../../components/SectionTitle";
import styles from "./Faq.module.scss";

const Faq = ({ data }) => {
  return (
    <section className={styles.faq}>
      <SectionTitle color={data.Title.BackgroundColor} className={styles.title}>
        {data.Title.SmallTitle}
        <span>{data.Title.Title}</span>
      </SectionTitle>
      <div className="container">
        <div className={styles.accordions}>
          {data.Accordions.map((accordion) => (
            <Accordion key={accordion.id} data={accordion} />
          ))}
        </div>
      </div>
      {data.StructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data.StructuredData),
          }}
        />
      )}
    </section>
  );
};

export default Faq;
