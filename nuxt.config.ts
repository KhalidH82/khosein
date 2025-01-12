// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'manifest', href: '/site.webmanifest' }
      ],
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    dataValue: 'theme',
    storageKey: 'theme'
  },
  tailwindcss: {
    config: {
      darkMode: 'class',
      daisyui: {
        themes: [
          {
            light: {
              ...require('daisyui/src/theming/themes')['light'],
              primary: '#3b82f6',
              'base-100': '#ffffff',
            },
            dark: {
              ...require('daisyui/src/theming/themes')['dark'],
              primary: '#3b82f6',
              'base-100': '#1f2937',
            }
          }
        ]
      }
    }
  }
})