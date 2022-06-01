const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],

  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: 'vue-template-loader',
          exclude: /index.html/,
        },
      ],
    },
    // plugins: [
    //   new CompressionPlugin({
    //     test: /\.(js|css|html|svg|json)(\?.*)?$/i, // which files should be compressed
    //     filename: '[file].gz[query]', // compressed filename
    //     algorithm: 'gzip', // use gzip compression
    //     minRatio: 1, // compression rate less than 1
    //     // deleteOriginalAssets: false, // delete the uncompressed file. Set it carefully. If you want to provide non gzip resources, you can set it to false or not
    //   }),
    // ],
  },
});
