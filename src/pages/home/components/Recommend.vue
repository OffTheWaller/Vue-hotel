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
            imgUrl: 'https://img.meituan.net/600.600/msmerchant/3ff5b78217da04bd79839e2b9a19ca02683868.jpg@220w_125h_1e_1c',
            title: '左串右麦音乐串吧',
            address: '通州区潞苑南大街耿庄诺丁山10号楼底商',
            price: '188.00'
          },
          {
            id: '0002',
            imgUrl: 'http://p0.meituan.net/600.600/ugcpic/d46238383b3a5318347b059288d18baa@220w_125h_1e_1c',
            title: '万融厨禾',
            address: '东城区十八里铺21号路',
            price: '288.00'
          },
          {
            id: '0003',
            imgUrl: 'http://p0.meituan.net/600.600/dpmerchantalbum/8767764365d436d4edbe11471731d55e76331.jpg@220w_125h_1e_1c',
            title: '老北京前后涮羊肉（交大店）',
            address: '海淀区交大东路94号（四川仁火锅隔壁）',
            price: '388.00'
          },
          {
            id: '0004',
            imgUrl: 'https://img.meituan.net/600.600/msmerchant/1ffaf6ce3ec8ba189b3d693cb7c9b55c4217732.jpg@220w_125h_1e_1c',
            title: '米亭味自慢料理（盈科中心店）',
            address: '东城区金宝街61号鑫海锦江大酒店3楼（东单、王府井）',
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
    /* background: #ccc; */
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
    color: #ccc;
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

