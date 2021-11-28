import { getStrapiMedia } from "../../libs/utils";
import Image from "next/image";

const NextImage = ({ media, ...props }) => {
  const { url, alternativeText } = media;
  const src = getStrapiMedia(url);

  if (props.layout != "responsive") {
    return <Image src={src} alt={alternativeText || ""} {...props} />;
  }

  return (
    <Image
      layout="responsive"
      width={media.width}
      height={media.height}
      src={src}
      alt={alternativeText || ""}
      {...props}
    />
  );
};

export default NextImage;
