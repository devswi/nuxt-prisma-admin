const ONE_DAY = 60 * 60 * 24 * 1000
const ONE_WEEK = ONE_DAY * 7

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/root.css'],
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || '__token',
    cookieExpires: parseInt(
      process.env.COOKIE_EXPIRES || ONE_DAY.toString(),
      10,
    ),
    cookieRememberMeExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
      10,
    ),
    jwtSecret: process.env.JWT_SECRET || 'superdupersecret',
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],
  image: {
    dir: 'assets/images',
  },
  ui: {
    icons: ['mdi', 'heroicons'],
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
  },
  devtools: { enabled: true },
  devServer: {
    host: 'local.admin.com',
    port: 4000,
  },
})
