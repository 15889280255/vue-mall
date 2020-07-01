<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="scroll">
      <home-swiper :banners="banner" />
      <home-recommend :recommends="recommend" />
      <future-view />
      <tab-control :titles="['流行','精选','新款']" class="tab-control" @tabIndedx="tabIndedx" />
      <goods-list :goods="pushGoods" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FutureView from "./childComps/FutureView";
import GoodsList from "content/goods/GoodsList";

import TabControl from "content/tabControl/TabControl";
import Scroll from "common/scroll/Scroll";

import { getHomeMultidata, getHomeData } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FutureView,
    TabControl,
    GoodsList,
    Scroll
  },
  created() {
    this.getHomeMultidata();
    this.getHomeData("pop", 0);
    this.getHomeData("new", 0);
    this.getHomeData("sell", 0);
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentTab: "pop"
    };
  },
  methods: {
    /**
     * 事件处理
     */
    tabIndedx(index) {
      switch (index) {
        case 0:
          this.currentTab = "pop";
          break;
        case 1:
          this.currentTab = "new";
          break;
        case 2:
          this.currentTab = "sell";
          break;
      }
    },

    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then(val => {
        this.banner = val.data.banner.list;
        this.recommend = val.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(val => {
        this.goods[type].list.push(...val.data.list);
        this.goods[type].page += 1;
      });
    }
  },
  computed: {
    pushGoods() {
      return this.goods[this.currentTab].list;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: sticky;
  top: 0px;
  z-index: 100;
}

.tab-control {
  position: sticky;
  top: 48px;
  z-index: 10;
}

.scroll {
  height: 100vh;
  position: absolute;
  top: 49;
  bottom: 49;
  left: 0;
  right: 0;
}
</style>