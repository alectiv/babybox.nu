// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    devtools: {enabled: true},

    modules: [
      '@nuxthub/core',
      '@nuxthq/studio',
      '@nuxtjs/sitemap',
      '@nuxt/content',
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
    ],

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
        hostname: 'https://babybox.nu',
        routes: [
            '/',
            '/erbjudanden',
            '/kontakta-oss',
        ],
    },
})
