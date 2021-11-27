import { useContext, createContext } from "react";

import config from "../../package.json";

export const SiteContext = createContext();

export function useSiteContext(data) {
  let { homepage = "" } = config;

  return {
    ...data,
    homepage,
  };
}

export default function useSite() {
  const site = useContext(SiteContext);
  return site;
}
