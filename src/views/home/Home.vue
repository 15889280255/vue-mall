<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner"/>
    <home-recommend :recommends="recommend"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'

import { getHomeMultidata } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  created() {
    getHomeMultidata().then(val => {
      this.banner = val.data.banner.list;
      this.recommend = val.data.recommend.list;
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>