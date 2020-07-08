<template>
  <Swiper class="detail-swiper">
    <SwiperItem v-for="item in imgList" :key="item.index">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper';
export default {
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    imgList:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 250px;
  overflow: hidden;
}
</style>