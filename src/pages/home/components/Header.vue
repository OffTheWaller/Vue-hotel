<template>
  <div class="home-header">
    <div class="header-left"><span class="iconfont">&#xe8b5;</span>返回</div>
    <div class="header-search">
      <span class="iconfont icon-search">&#xe86e;</span>
      <input type="text" placeholder="请输入地名">
    </div>
    <div class="header-right">城市<span class="iconfont">&#xe87e;</span></div>

  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
  .home-header {
    width: 100%;
    height: 53px;
    /* css中使用@要加~ */
    background: url('~@/assets/images/head-bg.jpg') no-repeat;
    display: flex;
    color: #fff;
    padding: 4px 0
  }
  .header-left {
    width: 65px;
    line-height: 53px;
    float: left;
    padding-left: 10px;
  }
  .header-search {
    flex: 1;
    line-height: 53px;
    position: relative;
  }
  .header-search .icon-search {
    position: absolute;
    color: #999;
    left: 7px;
  }
  .header-search input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    outline: none;
    padding-left: 30px;
  }
  .header-right {
    float: right;
    width: 60px;
    line-height: 53px;
    padding-left: 10px;
  }
</style>

