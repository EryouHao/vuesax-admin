const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        xfwd: false,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [
          resolve('src/assets/styles/variable.styl'),
        ],
      },
    },
  },
}
