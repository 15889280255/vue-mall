<template>
  <div class="category">
    <search-bar @searchClick="searchClick" @menuClick="menuClick"></search-bar>
    <div class="scr-content">
      <scroll class="scroll1" ref="scroll">
        <div class="scrollContent">
          <tab-bar
            :tabData="tabData"
            v-show="showMenu"
            @clickIndex="clickIndex($event)"
            class="tab-bar"
          ></tab-bar>
        </div>
      </scroll>
      <scroll class="scroll2" ref="scroll">
        <div class="scrollContent">
          <tab-content :goods="goods.new.list" class="tab-content"></tab-content>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import SearchBar from "./childComps/SearchBar";
import TabBar from "./childComps/TabBar";
import TabContent from "./childComps/TabContent";

import Scroll from "common/scroll/Scroll";

import { getHomeData } from "network/home";

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
      showMenu: true,
      goods: {
        new: { page: 1, list: [] }
      }
    };
  },
  components: {
    SearchBar,
    TabBar,
    Scroll,
    TabContent
  },
  created() {
    this.getHomeData("new", 1);
  },
  methods: {
    searchClick(searchData) {
      console.log("搜索:" + searchData);
    },
    menuClick() {
      this.showMenu = !this.showMenu;
    },
    getHomeData(type, page) {
      getHomeData(type, page).then(val => {
        const newList = val.data.list;
        this.goods[type].list = [];
        this.goods[type].list.push(...newList);
        this.$refs.scroll.finishPullUp();
      });
    },
    clickIndex(index) {
      console.log(index);

      this.getHomeData("new", index);
    }
  }
};
</script>

<style scoped> 
.scr-content{
  display: flex;
  height: 100vh;
}
.scroll1 {
  height: calc(100% - 98px);
  width: 20%;
  overflow: hidden;
  margin-top: 3px;
}
.scroll2 {
  height: calc(100% - 98px);
  width: 80%;
  overflow: hidden;
  margin-top: 3px;
}
.tab-bar {
  width: 20%;
}

.scrollContent {
  display: flex;
}
</style>