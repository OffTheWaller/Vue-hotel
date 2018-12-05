# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
### iconfont引入
- 下载iconfont购物车中的文件
- 在`main.js`中import`iconfont.css`
- 修改`iconfont.css`中字体的引用路径
- 将四个字体文件复制进`iconfont`文件夹
- 使用时直接复制iconfont代码

### swiper
- `npm install vue-awesome-swiper --save`
```javascript
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
```

V1.0
