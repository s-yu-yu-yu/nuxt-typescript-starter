import { NuxtConfig } from '@nuxt/types';

/** ENV File */
const environments = {
  // Nuxt.js default environment value
  NODE_ENV: process.env.NODE_ENV!,
  browser: process.browser!,
  client: process.client!,
  mode: process.mode!,
  modern: process.modern!,
  server: process.server!,
  static: process.static!,
  // custom environment value
  SAMPLE_ENV: process.env.SAMPLE_ENV!
};

export type EnvironmentsVariables = Readonly<{
  [P in keyof typeof environments]: typeof environments[P]
}>

const nuxtConfig: NuxtConfig = {
  /*
  ** Nuxt rendering mode
  */
  ssr: false,
  /*
  ** port and host settings
  */
  server: {
    port: process.env.PORT || 3000, // デフォルト: 3000
    host: process.env.HOST || 'localhost' // デフォルト: localhost
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '~/assets/scss/base.scss'
  ],
  styleResources: {
    scss: ['~/assets/scss/variables.scss']
    // less: [],
    // stylus: []
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/composition-api/module',
    'nuxt-typed-vuex'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config) {
      config.node = {
        fs: 'empty'
      };
    },
    transpile: [
      /typed-vuex/
    ]
  },
  generate: {
    // choose to suit your project
    interval: 2000
  },
  /*
  ** Typescript options
  */
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  /**
   * publicRuntimeConfig
   */
  publicRuntimeConfig: environments
};

export default nuxtConfig;
