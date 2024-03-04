// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add your custom configuration here
      webpackConfig.devtool = "eval-source-map";
      return webpackConfig;
    },
  },
};
