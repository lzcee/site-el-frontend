import Markdown from "react-markdown";
import styles from "./RichText.module.scss";

const RichText = ({ className, children }) => {
  let richTextClassName = styles.richText;
  if (className) {
    richTextClassName = `${richTextClassName} ${className}`;
  }

  return <Markdown className={richTextClassName}>{children}</Markdown>;
};

export default RichText;
