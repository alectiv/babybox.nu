// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    devtools: {enabled: true},

    modules: [
        '@nuxthub/core',
        '@nuxthq/studio',
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/sitemap',
        '@nuxt/image',
        '@nuxtjs/google-adsense'
    ],

    googleAdsense: {
        id: 'ca-pub-8715350413784718'
    },

    head: {
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
        // SCSS file in the project
        "~/assets/style/main.scss", // you should add main.scss somewhere in your app
    ],

    content: {
        markdown: {
            slots: true, // Enables slot support in Markdown
        },
    },


    sitemap: {
        sources: [
            '/api/__sitemap__/urls' // Lägg till din API-källa
        ],
        hostname: 'https://babybox.nu', // Din webbplats URL
        gzip: true // För komprimerad sitemap
    }
})
