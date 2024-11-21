// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    devtools: {enabled: true},

    modules: [
      '@nuxthub/core',
      '@nuxthq/studio',
      '@nuxtjs/sitemap',
      '@nuxt/content',
    ],

    sitemap: {
        hostname: 'https://babybox.nu',
        routes: [
            '/',
            '/erbjudanden',
            '/kontakta-oss',
        ],
    },
})