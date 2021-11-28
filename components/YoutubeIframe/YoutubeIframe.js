import Image from "next/image";

const YoutubeIframe = ({ data }) => {
  const getYoutubeID = (url) => {
    const regExp =
      /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
    const match = url.match(regExp);
    return match && match[1].length == 11 ? match[1] : false;
  };

  const getThumbnail = (videoId) => {
    return `https://i.ytimg.com/vi/${videoId}/hq720.jpg`;
  };

  const videoId = getYoutubeID(data);

  return (
    <div>
      <Image
        layout="responsive"
        width={16}
        height={9}
        src={getThumbnail(videoId)}
        alt="teste"
      />
    </div>
  );
};

export default YoutubeIframe;
