import HighlightTitle from "../../components/HighlightTitle";
import NextImage from "../../components/NextImage";
import SocialNetwork from "../../components/SocialNetwork";

import styles from "./Tutors.module.scss";

const Tutors = ({ data }) => {
  console.log(data);
  return (
    <section className={styles.tutors}>
      <div className="container">
        <HighlightTitle className={styles.title}>{data.Title}</HighlightTitle>
        <div className={styles.tutorsWrapper}>
          {data.Tutors.map((tutor) => (
            <div className={styles.tutor} key={tutor.id}>
              <div className={styles.tutorProfile}>
                <div className={styles.tutorImageWrapper}>
                  <NextImage
                    className={styles.tutorImage}
                    media={tutor.Image}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.tutorContent}>
                  <div>
                    <h3 className={styles.tutorName}>{tutor.Name}</h3>
                    <p className={styles.tutorJob}>{tutor.Job}</p>
                  </div>
                  {tutor.SocialNetworks && (
                    <div className={styles.tutorSocialNetworks}>
                      {tutor.SocialNetworks.map((socialNetwork) => (
                        <SocialNetwork
                          className={styles.tutorSocialNetwork}
                          key={socialNetwork.id}
                          data={socialNetwork}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <p className={styles.tutorDescription}>{tutor.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutors;
