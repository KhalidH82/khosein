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
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  tailwindcss: {
    config: {
      daisyui: {
        themes: [
          {
            light: {
              ...require('daisyui/src/theming/themes')['light'],
              primary: '#3b82f6',  // or your preferred color
              'base-100': '#ffffff',
            },
            dark: {
              ...require('daisyui/src/theming/themes')['dark'],
              primary: '#3b82f6',  // or your preferred color
              'base-100': '#1f2937',
            }
          }
        ]
      }
    }
  }
})