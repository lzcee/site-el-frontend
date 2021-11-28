import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ children, className, color = "blue", ...rest }) => {
  const sectionTitleColor = `sectionTitle-${color}`;
  let sectionTitleClassName = `${styles.sectionTitle} ${styles[sectionTitleColor]}`;

  if (className) {
    sectionTitleClassName = `${sectionTitleClassName} ${className}`;
  }

  return (
    <h2 {...rest} className={sectionTitleClassName}>
      <div className="container">{children}</div>
    </h2>
  );
};

export default SectionTitle;
