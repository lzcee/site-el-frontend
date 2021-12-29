export const GTM_ID = "GTM-W6ZN96S";

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
