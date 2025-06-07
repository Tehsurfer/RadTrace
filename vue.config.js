const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  chainWebpack: config => {
    // Remove custom file-loader config for public/images.
    // Let Vue CLI/Webpack handle images in /public automatically.
    // Add alias for @ to src
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'));
  }
};
