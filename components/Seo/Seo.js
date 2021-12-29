import { NextSeo } from "next-seo";
import { getStrapiMedia } from "../../libs/utils";

const Seo = ({ metadata }) => {
  if (!metadata) return null;

  return (
    <NextSeo
      title={metadata.metaTitle}
      description={metadata.metaDescription}
      openGraph={{
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        ...(metadata.shareImage && {
          images: {
            url: getStrapiMedia(image.url),
            width: image.width,
            height: image.height,
          },
        }),
      }}
      twitter={{
        ...(metadata.twitterCardType && { cardType: metadata.twitterCardType }),
        ...(metadata.twitterUsername && { handle: metadata.twitterUsername }),
      }}
      noindex={metadata.noindex}
    />
  );
};

export default Seo;
