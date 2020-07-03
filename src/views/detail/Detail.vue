<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :imgList="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "common/scroll/Scroll";

import { getDetail } from "network/detail";
import { Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        const data = res.result;
        console.log(data);

        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
      });
    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 110;
  background-color: #fff;
  height: 100vh;
}

.content{
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>