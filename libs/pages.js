import { fetchAPI } from "./utils"
/**
 *
 * @param {object} params The router params object with slug: { slug: [<slug>] }
 * @param {string} locale The current locale specified in router.locale
 * @param {boolean} preview router isPreview value
 */
export async function getPageData(params, locale, preview) {
  const slug = params.slug.join('/')

  const pagesData = await fetchAPI(
    `/pages?slug=${slug}&_locale=${locale}&status=published${preview ? '&status=draft' : ''
    }`
  )

  if (pagesData == null || pagesData.length === 0) {
    return null
  }

  return pagesData[0]
}