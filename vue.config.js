var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles',resolve('src/assets/styles')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          //public会作为默认目录，不用写，实际访问的是/public/mock/
          '^/api': '/mock'
        }
      }
    }
  }
}