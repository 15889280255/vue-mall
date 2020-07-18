<template>
  <div class="category">
    <search-bar @searchClick="searchClick" @menuClick="menuClick"></search-bar>
    <scroll class="scroll" ref="scroll">
      <tab-bar :tabData="tabData" v-show="showMenu"></tab-bar>
    </scroll>
  </div>
</template>

<script>
import SearchBar from "./childComps/SearchBar";
import TabBar from "./childComps/TabBar";

import Scroll from "common/scroll/Scroll";

export default {
  name: "category",
  data() {
    return {
      tabData: [
        "推荐分类",
        "国际名牌",
        "男装",
        "女装",
        "男鞋",
        "女鞋",
        "箱包",
        "护肤",
        "个护",
        "珠宝",
        "手机数码",
        "家用电器",
        "电脑办公",
        "生鲜",
        "酒水饮料",
        "医疗器械",
        "户外运动",
        "汽车",
        "宠物",
        "拍卖",
        "房产",
        "特产"
      ],
      showMenu:true
    };
  },
  components: {
    SearchBar,
    TabBar,
    Scroll
  },
  methods: {
    searchClick(searchData) {
      console.log("搜索:" + searchData);
    },
    menuClick(){
      this.showMenu = !this.showMenu
    }
  }
};
</script>

<style scoped>
.category{
  height: 100vh;
}
.scroll {
  height: calc(100% - 98px);
  overflow: hidden;
  margin-top: 3px;
}
</style>