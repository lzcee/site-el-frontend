import Image from "next/image";
import { useState } from "react";

import styles from "./YoutubeIframe.module.scss";

const getYoutubeID = (url) => {
  const regExp =
    /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
  const match = url.match(regExp);
  return match && match[1].length == 11 ? match[1] : false;
};

const getThumbnail = (videoId) => {
  return `https://i.ytimg.com/vi/${videoId}/hq720.jpg`;
};

const YoutubeIframe = ({ data, className }) => {
  const [playing, setPlaying] = useState(false);
  const videoId = getYoutubeID(data);

  let youtubeIframeClassName = styles.youtubeIframe;
  if (className) {
    youtubeIframeClassName = `${youtubeIframeClassName} ${className}`;
  }

  const playVideo = () => {
    setPlaying(true);
  };

  return (
    <div className={youtubeIframeClassName}>
      {!playing && (
        <>
          <div className={styles.thumbnailWrapper} onClick={playVideo} aria-label="Play Video" role="button" tabIndex="0">
            <Image
              layout="responsive"
              width={16}
              height={9}
              src={getThumbnail(videoId)}
              alt="teste"
            />
          </div>
          <button className={styles.buttonPlay} onClick={playVideo} aria-label="Play Video"></button>
        </>
      )}
      {playing && (
        <iframe
          className={styles.iframe}
          frameBorder="0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
      <div className={styles.loader}></div>
    </div>
  );
};

export default YoutubeIframe;
