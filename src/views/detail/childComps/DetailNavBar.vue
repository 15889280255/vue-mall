<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="backIcon">
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="item.index"
          @click="itemClick(index)"
          class="title-item"
          :class="{active:index === currentIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.backIcon{
  margin-top: 13px;
}
</style>