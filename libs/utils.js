export function getStrapiURL(path) {
    return `${'http://escoladelideres.io' || 'http://localhost:1337'
        }${path}`
}

export async function fetchAPI(path, options = {}) {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const mergedOptions = {
        ...defaultOptions,
        ...options,
    }
    const requestUrl = getStrapiURL(path)
    const response = await fetch(requestUrl, mergedOptions)

    if (!response.ok) {
        console.error(response.statusText)
        throw new Error(`An error occured please try again`)
    }
    const data = await response.json()
    return data
}

export function getStrapiMedia(url) {
    if (url == null) {
        return null
    }
    
    if (url.startsWith("http") || url.startsWith("//")) {
        return url
    }

    return getStrapiURL(url)
}