module.exports = {
  devServer: {
    proxy: "http://192.168.1.50:8080",
    port: "8848"
  },
  publicPath: "/",
  productionSourceMap: false,
  parallel: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `@import "@/assets/scss/variable.scss"`
      },
      scss: {
        prependData: `@import "@/assets/scss/variable.scss";`
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") return;
    config.optimization.splitChunks.cacheGroups.mineVendor = {
      name: "mineV",
      test: /[\\/]node_modules[\\/](element-ui|axios)[\\/]/,
      priority: -5,
      chunks: "initial",
      reuseExistingChunk: true
    };
  }
};
