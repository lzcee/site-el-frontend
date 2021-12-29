import Link from "next/link";

import NextImage from "../NextImage";
import RichText from "../RichText";
import SocialNetwork from "../SocialNetwork";

import styles from "./Footer.module.scss";

const Footer = ({ data }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topBox}>
          <div className={styles.info}>
            <div className={styles.logoWrapper}>
              <NextImage
                className={styles.logo}
                media={data.Logo}
                layout="fill"
                objectFit="contain"
              />
            </div>
            {data.Description && (
              <RichText className={styles.description}>
                {data.Description}
              </RichText>
            )}
          </div>
          {data.Links.length > 0 && (
            <nav className={styles.links}>
              <ul>
                {data.Links.map((link) => (
                  <li key={link.id}>
                    <Link
                      passHref
                      href={link.url}
                      {...(link.newTab
                        ? 'target="_blank" rel="noopener noreferer'
                        : "")}
                    >
                      <a className={styles.link}>{link.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className={styles.bottomBox}>
          <p className={styles.socialNetworksTitle}>
            {data.SocialNetworksTitle}
          </p>
          <div className={styles.socialNetworks}>
            {data.SocialNetworks.map((socialNetwork) => (
              <SocialNetwork
                className={styles.socialNetwork}
                key={socialNetwork.id}
                data={socialNetwork}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
