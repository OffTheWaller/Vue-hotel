<template>
<!-- 利用wrapper来固定swiper的宽高 -->
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          // 显示控制小点
          pagination: '.swiper-pagination',
          //循环轮播
          loop: true
        },
        swiperList: [
          {
            id: '0001',
            imgUrl: '/static/images/ad-001.jpg'
          },
          {
            id: '0002',
            imgUrl: '/static/images/ad-002.jpg'
          },
          {
            id: '0003',
            imgUrl: '/static/images/ad-003.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
/* 样式穿透，从wrapper传递给swiper */
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
/* 利用wrapper固定swiper宽高比 */
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  /* 这里计算图片的高/宽 */
  padding-bottom: 46.3%;
  /* 设置一个图片未加载出来时的背景色 */
  background: #ccc;
}

.swiper-img {
  width: 100%;
}
</style>
