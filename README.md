## v2.0分支
- 使用vue/cli 3.x对项目进行升级
- 使用`vue create vue-travel`
- 使用scss编写css代码
- 启动项目使用`npm run serve`

### 配置别名
- 在项目根目录下新建`vue.config.js`

```javascript
var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles',resolve('src/assets/styles')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  //配置代理
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
```