<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','精选','新款']"
      class="fixed"
      @tabIndedx="tabIndedx"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="scroll"
      ref="scroll"
      :probeType="3"
      :pull-up-load="true"
      @getPosition="getPosition"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banner" @SwiperImageLoad="SwiperImageLoad" />
      <home-recommend :recommends="recommend" />
      <future-view />
      <tab-control :titles="['流行','精选','新款']" @tabIndedx="tabIndedx" ref="tabControl2" />
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
import { debounce } from "@/common/util";

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
      showBackTop: false,
      offsetTop: 0,
      isTabFixed: false,
      scrollY: 0
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
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  activated() {
    console.log('y==='+this.scrollY);
    this.$refs.scroll.scrollTo(0, this.scrollY,0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    getPosition(position) {
      this.showBackTop = position.y < -700;
      this.isTabFixed = position.y < -this.offsetTop + 49;
    },
    loadMore() {
      this.getHomeData(this.currentTab);
    },
    SwiperImageLoad() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
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
  font-weight: 700;
  color: #fff;
}

.scroll {
  height: calc(100% - 98px);
  overflow: hidden;
}

.fixed {
  position: fixed;
  top: 49px;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>