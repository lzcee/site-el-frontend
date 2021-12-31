import Link from "next/link";

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
    buttonClassName = `${buttonClassName} ${className}`;
  }

  if (linkSettings) {
    return (
      <Link
        href={linkSettings.url}
        {...(linkSettings.newTab
          ? 'target="_blank" rel="noopener noreferer'
          : "")}
        passHref
      >
        <a className={buttonClassName} {...rest}>{children}</a>
      </Link>
    );
  }

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
