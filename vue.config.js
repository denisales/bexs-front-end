module.exports = {
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify',
  ],
  pwa: {
    name: 'Demo Shop',
    themeColor: '#de4b4b',
    msTileColor: '#de4b4b',
    // configure the manifest options
    manifestOptions: {
      display: 'standalone',
      background_color: '#de4b4b',
      orientation: 'portrait',
      related_applications: [
        {
          platform: 'play',
          url: 'https://play.google.com/store/apps/details?id=app.netlify.gracious_mayer_2d6411.twa',
          id: 'app.netlify.gracious_mayer_2d6411.twa',
        },
      ],
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
