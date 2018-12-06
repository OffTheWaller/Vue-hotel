<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-recommend :list="recommendList"></home-recommend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeRecommend
  },
  data () {
    return {
      swiperList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.recommendList = data.recommendList;
      }
    }
  },
  mounted () {
    this.getHomeInfo();
    // console.log(1)
  }
}
</script>
