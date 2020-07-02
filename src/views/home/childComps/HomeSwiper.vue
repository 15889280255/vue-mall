<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoadOk : false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      if(!this.isLoadOk)
      this.$emit('SwiperImageLoad')
      this.isLoadOk = true
    }
  }
};
</script>

<style scoped>
</style>