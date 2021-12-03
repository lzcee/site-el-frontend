import { useRouter } from "next/router";

import Hero from "./Hero";
import HorizontalVideoBox from "./HorizontalVideoBox";
import HoverPillarsBox from "./HoverPillarsBox";
import ClassesCarousel from "./ClassesCarousel";

const sectionComponents = {
  "sections.hero": Hero,
  "sections.horizontal-video-box": HorizontalVideoBox,
  "sections.hover-pillars-box": HoverPillarsBox,
  "sections.classes-carousel": ClassesCarousel,
};

const Section = ({ sectionData }) => {
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  return <SectionComponent data={sectionData} />;
};

const PreviewModeBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`;

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  );
};

const Sections = ({ sections, preview }) => {
  return (
    <>
      {preview && <PreviewModeBanner />}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__component}${section.id}`}
        />
      ))}
    </>
  );
};

export default Sections;
