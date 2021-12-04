import styles from "./HighlightTitle.module.scss";

const HighlightTitle = ({ children, className, color = "blue", ...rest }) => {
  const highlightTitleColor = `highlightTitle-${color}`;
  let highlightTitleClassName = `${styles.highlightTitle} ${styles[highlightTitleColor]}`;

  if (className) {
    highlightTitleClassName = `${highlightTitleClassName} ${className}`;
  }

  return (
    <h2 {...rest} className={highlightTitleClassName} data-before={children}>
      {children}
    </h2>
  );
};

export default HighlightTitle;
