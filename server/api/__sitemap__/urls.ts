import { defineEventHandler } from 'h3'
import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (event) => {
    // Hämta alla innehållsfiler
    const contentList = await serverQueryContent(event).find()

    // Generera sitemap URL:er
    return contentList.map((content) => {
        return asSitemapUrl({
            loc: content._path, // Använd sökvägen direkt från _path
            lastmod: content.updatedAt || content.createdAt, // Lägg till sista ändringsdatum
        })
    })
})
