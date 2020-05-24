module.exports = {
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify',
  ],
  pwa: {
    name: 'Bexs',
    themeColor: '#de4b4b',
    msTileColor: '#de4b4b',
    // configure the manifest options
    manifestOptions: {
      display: 'standalone',
      background_color: '#de4b4b',
      orientation: 'portrait',
    },
  },
};
