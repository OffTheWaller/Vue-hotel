<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img"><img class="icon-img-content" :src="item.imgUrl" /></div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: '/static/images/icon-tag-001.jpg',
          desc: '星级酒店'
        },
        {
          id: '0002',
          imgUrl: '/static/images/icon-tag-002.jpg',
          desc: '快捷酒店'
        },
        {
          id: '0002',
          imgUrl: '/static/images/icon-tag-002.jpg',
          desc: '快捷酒店'
        },
        {
          id: '0002',
          imgUrl: '/static/images/icon-tag-002.jpg',
          desc: '快捷酒店'
        },
        {
          id: '0002',
          imgUrl: '/static/images/icon-tag-002.jpg',
          desc: '快捷酒店'
        },
        {
          id: '0002',
          imgUrl: '/static/images/icon-tag-002.jpg',
          desc: '快捷酒店'
        }
      ]
    }
  },
  computed: {
    //Icons的分页滚动，把图标存到二维数组中
    pages () {
      const pages = []; //pages是一个二维数组
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 4);  //page是页码
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style>
  .icons {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 25%;
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
  }
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 22px;
  }
  .icon-img-content {
    height: 100%;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 5px;
  }
  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    line-height: 22px;
    text-align: center;
    color: #333;
  }
</style>

