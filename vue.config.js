const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test_orkestra/'
    : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/scss/variables.scss";`,
      },
      scss: {
        additionalData: `@import "~@/scss/variables.scss";`,
      },
    },
  },
});
