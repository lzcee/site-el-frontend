import { fetchAPI } from "./utils"

export async function getLocalizedPage(targetLocale, pageContext) {
  const localization = pageContext.localizations.find(
    (localization) => localization.locale === targetLocale
  )
  const localePage = await fetchAPI(`/pages/${localization.id}`)
  return localePage
}

export function localizePath(page) {
  const { locale, defaultLocale, slug } = page

  if (locale === defaultLocale) {
    return `/${slug}`
  }

  return `/${locale}/${slug}`
}

export function getLocalizedPaths(page) {
  const paths = page.locales.map((locale) => {
    return {
      locale: locale,
      href: localizePath({ ...page, locale }),
    }
  })

  return paths
}