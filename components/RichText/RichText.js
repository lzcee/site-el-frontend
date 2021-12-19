import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./RichText.module.scss";

const RichText = ({ className, children }) => {
  let richTextClassName = styles.richText;
  if (className) {
    richTextClassName = `${richTextClassName} ${className}`;
  }

  return (
    <ReactMarkdown className={richTextClassName} remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  );
};

export default RichText;
