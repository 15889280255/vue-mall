<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="scroll"
      ref="scroll"
      :probeType="3"
      :pull-up-load="true"
      @getPosition="getPosition"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banner" />
      <home-recommend :recommends="recommend" />
      <future-view />
      <tab-control :titles="['流行','精选','新款']" class="tab-control" @tabIndedx="tabIndedx" />
      <goods-list :goods="pushGoods" />
    </scroll>

    <back-top @click.native="backClick" v-show="showBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FutureView from "./childComps/FutureView";
import GoodsList from "content/goods/GoodsList";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "content/tabControl/TabControl";
import Scroll from "common/scroll/Scroll";
import BackTop from "content/backtop/BackTop";

import { getHomeMultidata, getHomeData } from "network/home";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentTab: "pop",
      showBackTop: false
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FutureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeData("pop", 0);
    this.getHomeData("new", 0);
    this.getHomeData("sell", 0);
  },
  mounted() {
    // 监听item图片加载完成(多次调用，需使用防抖函数)
    const debounce = this.debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImageLoad", () => {
      debounce();
    });
  },
  methods: {
    /**
     * 事件处理
     */
    // 防抖函数
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay);
      };
    },
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
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    getPosition(position) {
      this.showBackTop = position.y < -700;
    },
    loadMore() {
      this.getHomeData(this.currentTab);
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
      getHomeData(type, this.goods[type].page).then(val => {
        const newList = val.data.list;
        this.goods[type].list.push(...newList);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
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
  /* height: 100vh;
  position: absolute;
  top: 49;
  bottom: 49;
  left: 0;
  right: 0; */
  height: calc(100% - 98px);
  overflow: hidden;
}
</style>