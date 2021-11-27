import ErrorPage from "next/error"
import { fetchAPI } from "../libs/utils"
import { getGlobalData } from "../libs/globals"
import { getPageData } from "../libs/pages"

import Sections from "../sections"
import Layout from "../components/Layout"

import { useRouter } from "next/router"
import { getLocalizedPaths } from "../libs/locale"

const DynamicPage = ({ sections, metadata, preview, global, pageContext }) => {
    const router = useRouter()

    if (!router.isFallback && !sections?.length) {
        return <ErrorPage statusCode={404} />
    }

    if (router.isFallback) {
        return <div className="container">Loading...</div>
    }

    return (
        <Layout global={global} pageContext={pageContext}>
            <Sections sections={sections} preview={preview} />
        </Layout>
    )
}

export async function getStaticPaths(context) {
    const allPages = context.locales.map(async (locale) => {
        const localePages = await fetchAPI(`/pages?_locale=${locale}`)
        return localePages
    })

    const pages = await (await Promise.all(allPages)).flat()

    const paths = pages.map((page) => {
        const slugArray = !page.slug ? false : page.slug.split("/")

        return {
            params: { slug: slugArray },
            locale: page.locale,
        }
    })

    return { paths, fallback: true }
}

export async function getStaticProps(context) {
    const { params, locale, locales, defaultLocale, preview = null } = context

    const globalLocale = await getGlobalData(locale)
    const pageData = await getPageData(
        { slug: !params.slug ? [""] : params.slug },
        locale,
        preview
    )

    if (pageData == null) {
        return { props: {} }
    }

    const { contentSections, metadata, localizations, slug } = pageData

    const pageContext = {
        locale: pageData.locale,
        locales,
        defaultLocale,
        slug,
        localizations,
    }

    const localizedPaths = getLocalizedPaths(pageContext)

    return {
        props: {
            preview,
            sections: contentSections,
            metadata,
            global: globalLocale,
            pageContext: {
                ...pageContext,
                localizedPaths,
            },
        },
    }
}

export default DynamicPage
