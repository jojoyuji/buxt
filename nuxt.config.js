module.exports = {
  /*,
  ** Headers of the page
  */

  plugins: ['~/plugins/vuetify'],
  head: {
    title: 'buxt project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'buxt Description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  loadingIndicator: {
  /*
  ** See https://nuxtjs.org/api/configuration-loading-indicator for available loading indicators
  ** You can add a custom indicator by giving a path
  */
   name: 'folding-cube',
  /*
  ** You can give custom options given to the template
  ** See https://github.com/nuxt/nuxt.js/blob/dev/lib/app/views/loading/folding-cube.html
  */
  // color: '#DBE1EC'
  // background: 'white'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
