import { fetchAPI } from "./utils"

export async function getGlobalData(locale) {
    const global = await fetchAPI(`/global?_locale=${locale}`)
    return global
}
