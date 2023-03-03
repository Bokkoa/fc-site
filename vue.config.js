module.exports = {
  publicPath: '/fc-site/',
  pluginOptions:{
        i18n: {
            locale: 'es',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_mixins.scss";
                    @import "@/styles/_media_queries.scss";
                    @import "@/styles/_fonts.scss";
                    @import "@/styles/_animations.scss";
                `
            }
        }
    }
}