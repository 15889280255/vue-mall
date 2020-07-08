<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="navbar"></detail-nav-bar>
    <scroll class="content" ref="scroll" @getPosition="getPosition" :probe-type="3">
      <detail-swiper :imgList="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @detailImgLoad="imgLoad"></detail-goods-info>
      <detail-goods-param ref="param" :param-info="goodsParam"></detail-goods-param>
      <detail-comment-info ref="common" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommendList"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParam from "./childComps/DetailGoodsParam";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import Scroll from "common/scroll/Scroll";
import GoodsList from "content/goods/GoodsList";

import { debounce } from "@/common/util";

import { getDetail, getRecommend } from "network/detail";
import { Goods, Shop, GoodsParam } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendList: [],
      topY: [],
      getTopY: null,
      currentIndex: 0
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,
    GoodsList
  },
  created() {
    this._getDetail();
    this._getRecommend();
    this.getTopY = debounce(() => {
      this.topY = [];
      this.topY.push(49);
      this.topY.push(this.$refs.param.$el.offsetTop);
      this.topY.push(this.$refs.common.$el.offsetTop);
      this.topY.push(this.$refs.recommend.$el.offsetTop);
      this.topY.push(Number.MAX_VALUE);
      this.$refs.scroll.refresh();
    }, 200);
  },
  mounted() {
    // 监听item图片加载完成(多次调用，需使用防抖函数)
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("detailItemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    _getDetail() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.goodsParam = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    _getRecommend() {
      getRecommend().then(val => {
        this.recommendList = val.data.list;
      });
    },
    imgLoad() {
      this.getTopY();
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.topY[index] + 49, 200);
    },
    getPosition(position) {
      const positionY = -position.y + 49;
      let length = this.topY.length;

      for (let i = 0; i < length-1; i++) {
        if (
          this.currentIndex !== i &&
          i < length - 1 &&
            positionY >= this.topY[i] &&
            positionY < this.topY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
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

.content {
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>