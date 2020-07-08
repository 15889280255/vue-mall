<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :imgList="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @img-load="imgLoad"></detail-goods-info>
      <detail-goods-param :param-info="goodsParam"></detail-goods-param>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailGoodsParam from './childComps/DetailGoodsParam'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import Scroll from "common/scroll/Scroll";

import { getDetail } from "network/detail";
import { Goods, Shop ,GoodsParam} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      goodsParam:{},
      commentInfo:{}
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
    DetailCommentInfo
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
        this.detailInfo = data.detailInfo;
        this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        if(data.rate.cRate != 0){
          this.commentInfo = data.rate.list[0]
        }
      });
    },
    imgLoad(){
      this.$refs.scroll.refresh
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