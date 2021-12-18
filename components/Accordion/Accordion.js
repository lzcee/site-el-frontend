import { useState, useRef } from "react";

import RichText from "../RichText";
import styles from "./Accordion.module.scss";

const Accordion = ({ className, data }) => {
  const [maxHeight, setMaxHeight] = useState(null);
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

  let accordionClassName = `${styles.accordion}`;
  if (className) {
    accordionClassName = `${accordionClassName} ${className}`;
  }

  const toggleAccordion = () => {
    if (ref.current.maxHeight) {
      ref.current.maxHeight = null;
      setActive(false);
    } else {
      ref.current.maxHeight = ref.current.scrollHeight + "px";
      setActive(true);
    }
    setMaxHeight(ref.current.maxHeight);
  };

  return (
    <div className={accordionClassName} data-active={isActive}>
      <header className={styles.header} onClick={toggleAccordion}>
        <h3 className={styles.title}>{data.Title}</h3>
      </header>
      <div
        className={styles.content}
        ref={ref}
        style={{ maxHeight: maxHeight }}
      >
        <RichText className={styles.description}>{data.Description}</RichText>
      </div>
    </div>
  );
};

export default Accordion;
