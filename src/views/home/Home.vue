<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner" />
    <home-recommend :recommends="recommend" />
    <future-view />
    <tab-control :titles="['流行','精选','新款']" class="tab-control"/>
    <goods-list :goods="goods['pop'].list"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FutureView from "./childComps/FutureView";
import GoodsList from "content/goods/GoodsList";

import TabControl from "content/tabControl/TabControl";

import { getHomeMultidata, getHomeData } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FutureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeData("pop", 0);
    this.getHomeData("new", 0);
    this.getHomeData("sell", 0);
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(val => {
        this.banner = val.data.banner.list;
        this.recommend = val.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(val => {
        this.goods[type].list.push(...val.data.list)
        this.goods[type].page +=1;
      });
    }
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: sticky;
  top: 0px;
  z-index: 100;
}

.tab-control{
  position: sticky;
  top: 49px;
  z-index: 10;
}
</style>