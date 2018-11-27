<template>
  <div>
    <div class="you-like border-bottom">
      <em>-</em>
      <span>猜你喜欢</span>
      <em>-</em>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">

        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-addr">{{item.address}}</p>
          <button class="item-button">查看详情</button>
          <p class="item-price">￥<span>{{item.price}}</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data () {
      return {
        recommendList: [
          {
            id: '0001',
            imgUrl: '/static/images/recommend1.jpg',
            title: '速八酒店',
            address: '东城区十八里铺21号路',
            price: '188.00'
          },
          {
            id: '0002',
            imgUrl: '/static/images/recommend2.jpg',
            title: '七天酒店',
            address: '东城区十八里铺21号路',
            price: '288.00'
          },
          {
            id: '0003',
            imgUrl: '/static/images/recommend3.jpg',
            title: '宜必思酒店',
            address: '东城区十八里铺21号路',
            price: '388.00'
          },
          {
            id: '0004',
            imgUrl: '/static/images/recommend4.jpg',
            title: '如家酒店',
            address: '东城区十八里铺21号路',
            price: '168.00'
          }
        ]
      }
    }
  }
</script>

<style>
  .you-like {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .item {
    display: flex;
    height: 98px;
    overflow: hidden;
    background: #ccc;
    margin-bottom: 3px;
  }
  .item-img {
    width: 92px;
    height: 92px;
    padding: 10px;
  }
  .item-info {
    flex: 1;
  }
  .item-title {
    line-height: 25px;
    font-size: 16px;
    color: #000;
  }
  .item-addr {
    line-height: 20px;
    color: #fff;
  }
  .item-button {
    background: orange;
    border-radius: 5px;
    line-height: 20px;
  }
  .item-price {
    color: #f00;
  }

</style>

