import styles from "./Button.module.scss";

const Button = ({
  children,
  className,
  type = "button-primary-blue",
  linkSettings,
  ...rest
}) => {
  let buttonClassName = `${styles.button} ${styles[type]}`;

  if (className) {
    buttonClassName = `${buttonClassName} ${type}`;
  }

  if (linkSettings) {
    return (
      <a
        {...rest}
        className={buttonClassName}
        href={linkSettings.url}
        {...(linkSettings.newTab
          ? 'target="_blank" rel="noopener noreferer'
          : "")}
      >
        {children}
      </a>
    );
  }

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
