import NextImage from "../../components/NextImage";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";

import styles from "./Contact.module.scss";

const IconWhatsApp = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.09 2.9A9.92 9.92 0 0 0 10.04 0 9.95 9.95 0 0 0 .08 9.91c0 1.74.46 3.45 1.33 4.96L0 20l5.28-1.38a9.95 9.95 0 0 0 13.97-12.5 9.83 9.83 0 0 0-2.16-3.21Zm-7.05 15.25a8.3 8.3 0 0 1-4.21-1.14l-.3-.18-3.14.82.84-3.04-.2-.32a8.27 8.27 0 1 1 15.29-4.38 8.27 8.27 0 0 1-8.28 8.24ZM14.58 12c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.12-.56.12-.16.25-.64.8-.79.97-.14.17-.29.19-.53.07-.25-.13-1.06-.39-2-1.23A7.47 7.47 0 0 1 7.6 9.39c-.15-.25-.02-.38.1-.5.12-.11.26-.3.38-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43l-.77-1.84c-.2-.49-.4-.42-.56-.43h-.47a.92.92 0 0 0-.67.3c-.23.25-.87.85-.87 2.07 0 1.22.9 2.4 1.02 2.56.12.17 1.75 2.67 4.25 3.74.46.2.94.37 1.42.52.6.19 1.14.16 1.56.1.48-.07 1.48-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z"
      fill="#080D34"
    />
  </svg>
);

const IconEmail = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 23">
    <path
      d="M24.5 1.8h-21A2.5 2.5 0 0 0 1 4.3v15c0 1.3 1.1 2.4 2.5 2.4h21c1.4 0 2.5-1 2.5-2.5v-15c0-1.3-1.1-2.4-2.5-2.4Z"
      stroke="#080D34"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m6 5.6 8.3 8.3 8.3-8.3"
      stroke="#080D34"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Contact = ({ data }) => {
  return (
    <section className={styles.contact}>
      <NextImage
        className={styles.backgroundImage}
        media={data.BackgroundImage}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.flexWrapper}>
        <SectionTitle
          color={data.Title.BackgroundColor}
          className={styles.title}
        >
          {data.Title.SmallTitle}
          <span>{data.Title.Title}</span>
        </SectionTitle>
        <div className={styles.content}>
          {data.WhatsApp && (
            <p className={styles.linkItem}>
              <Button
                linkSettings={{
                  url: `https://api.whatsapp.com/send?phone=55${data.WhatsApp.replace(
                    /[\(\)\s\-]/g,
                    ""
                  )}&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Escola%20de%20L%C3%ADderes!`,
                }}
                aria-label={data.WhatsApp}
              >
                <IconWhatsApp />
              </Button>
              {data.WhatsApp}
            </p>
          )}
          {data.Email && (
            <p className={styles.linkItem}>
              <Button
                linkSettings={{ url: `mailto:${data.Email}` }}
                aria-label={data.Email}
              >
                <IconEmail />
              </Button>
              {data.Email}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
