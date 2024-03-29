const ONE_DAY = 60 * 60 * 24 * 1000
const ONE_WEEK = ONE_DAY * 7

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: 'Nuxt Admin',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt + Vue3 admin website',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  ssr: true,
  css: ['@/assets/scss/index.scss'],
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || '__token',
    cookieExpires: Number.parseInt(
      process.env.COOKIE_EXPIRES || ONE_DAY.toString(),
      10,
    ),
    cookieRememberMeExpires: Number.parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
      10,
    ),
    jwtSecret: process.env.JWT_SECRET || 'superdupersecret',
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
  ],
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/element/index.scss" as element;',
        },
      },
    },
  },
  image: {
    dir: 'assets/images',
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    classSuffix: '',
  },
  devtools: { enabled: true },
  devServer: {
    host: 'local.admin.com',
    port: 4000,
  },
})
