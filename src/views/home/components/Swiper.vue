<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.imgUrl" class="swiper-img"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed: {
        showSwiper () {
            return this.list.length;
        }
    }
}
</script>

<style lang="scss" scoped>
    .swiper-pagination.swiper-pagination-bullets {
        bottom: 70px;
        
    }
    .wrapper>>>.swiper-pagination .swiper-pagination-bullet-active {
        background: #fff;
    }
    .wrapper {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 45%;
        background: #eee;
        .swiper-img {
            width: 100%;
        }
    }
    
</style>