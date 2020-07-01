<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  mounted(){
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType
    }),
    // 2.添加监听
    this.scroll.on('scroll',(position)=>{
      this.$emit('getPosition',position)
    })
  },
  methods:{
    scrollTo(x,y,time = 1000){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>

</style>