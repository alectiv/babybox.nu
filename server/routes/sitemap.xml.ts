import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
    try {
        // Fetch documents
        const docs = await serverQueryContent(event).find()

        // Generate the XML sitemap
        const sitemap = new SitemapStream({
            hostname: 'https://babybox.nu'
        })

        docs.forEach(doc => {
            sitemap.write({
                url: doc._path,
                changefreq: 'monthly'
            })
        })

        sitemap.end()

        // Collect the XML as a Buffer
        const xmlBuffer = await streamToPromise(sitemap)
        const xml = xmlBuffer.toString()

        // Set XML headers and return response
        event.res.setHeader('Content-Type', 'application/xml')
        return xml
    } catch (error) {
        console.error('Error generating sitemap:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to generate sitemap'
        })
    }
})
