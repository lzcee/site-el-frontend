import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ children, className, color = "blue", ...rest }) => {
  let sectionTitleClassName = `${styles.sectionTitle} ${styles.sectionTitle}-${styles[type]}`;

  if (className) {
    sectionTitleClassName = `${sectionTitleClassName} ${className}`;
  }
  return (
    <h2 {...rest} className={sectionTitleClassName}>
      {children}
    </h2>
  );
};

export default SectionTitle;
