const path = require('path');

module.exports = {
  chainWebpack: config => {
    // Handle images in assets/images and subfolders
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)$/i)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[path][name].[ext]',
        context: 'src/assets/images',
        esModule: false
      })
      .end();
    // Add alias for @ to src
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'));
  }
};
