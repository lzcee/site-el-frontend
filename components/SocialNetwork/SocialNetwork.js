import Image from "next/image";
import styles from "./SocialNetwork.module.scss";

const IconYoutube = () => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g clipPath="url(#icon-youtube)">
        <path d="M23.8 7c0-2.1-1.5-3.8-3.4-3.8-2.6-.2-5.3-.2-8-.2h-.8c-2.7 0-5.4 0-8 .2C1.7 3.2.2 4.9.2 7a69.5 69.5 0 0 0 0 10c0 2 1.5 3.8 3.4 3.8a175.1 175.1 0 0 0 16.8 0c1.9 0 3.4-1.7 3.4-3.8a71.5 71.5 0 0 0 0-10ZM9.7 16.6V7.4l6.8 4.6-6.8 4.6Z" />
      </g>
      <defs>
        <clipPath id="icon-youtube">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconLinkedin = () => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M20.8 1.5H3.3c-1 0-1.8.7-1.8 1.6v17.6c0 1 .8 1.8 1.8 1.8h17.5c1 0 1.7-.9 1.7-1.8V3c0-1-.7-1.6-1.7-1.6ZM8 19H5V9.6h3V19ZM6.6 8.2c-1 0-1.6-.7-1.6-1.6C5 5.6 5.6 5 6.6 5s1.6.7 1.6 1.6c0 .9-.6 1.6-1.6 1.6ZM19 19h-3v-5.1c0-1.3-.4-2-1.5-2-.9 0-1.4.5-1.6 1V19h-3V9.6h3V11c.4-.6 1-1.5 2.6-1.5 2 0 3.5 1.3 3.5 4.1V19Z" />
    </svg>
  );
};

const IconInstagram = () => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M16.4 3.2a4.4 4.4 0 0 1 4.4 4.4v8.8a4.4 4.4 0 0 1-4.4 4.3H7.6a4.4 4.4 0 0 1-4.4-4.3V7.6a4.4 4.4 0 0 1 4.4-4.4h8.8Zm0-1.7H7.6a6.1 6.1 0 0 0-6.1 6.1v8.8c0 3.3 2.8 6 6.1 6h8.8c3.3 0 6.1-2.7 6.1-6V7.6c0-3.3-2.8-6.1-6.1-6.1Z" />
      <path d="M17.7 7.6a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm-5.7.9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-1.8a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6Z" />
    </svg>
  );
};

const SocialNetwork = ({ className, data, ...rest }) => {
  let socialNetworkClassName = `${styles.socialNetwork}`;

  if (className) {
    socialNetworkClassName = `${socialNetworkClassName} ${className}`;
  }

  let icon = "";
  switch (data.Type) {
    case "linkedin":
      icon = <IconLinkedin />;
      break;
    case "youtube":
      icon = <IconYoutube />;
      break;
    case "instagram":
      icon = <IconInstagram />;
      break;
    default:
      break;
  }

  return (
    <a
      {...rest}
      className={socialNetworkClassName}
      href={data.Url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default SocialNetwork;
