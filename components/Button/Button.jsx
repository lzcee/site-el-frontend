import styles from "./Button.module.scss";

const Button = ({ children, className, type = "button-primary", ...rest }) => {
  let buttonClassName = `${styles.button} ${styles[type]}`;

  if (className) {
    buttonClassName = `${buttonClassName} ${type}`;
  }

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
