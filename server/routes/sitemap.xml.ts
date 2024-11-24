import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
    try {
        // Fetch all documents
        const docs = await serverQueryContent(event).find()

        // Create a new SitemapStream
        const sitemap = new SitemapStream({
            hostname: 'https://babybox.nu'
        })

        // Write each document to the sitemap stream
        for (const doc of docs) {
            sitemap.write({
                url: doc._path,
                changefreq: 'monthly'
            })
        }

        // End the sitemap stream
        sitemap.end()

        // Convert the stream to a string
        const xml = await streamToPromise(sitemap).then((data) => data.toString())

        // Set the appropriate headers for XML
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
