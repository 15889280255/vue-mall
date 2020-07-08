<template>
  <div v-if="Object.keys(detailInfo).length != 0" class="good-info">
    <div class="info-desc">
      <div>{{detailInfo.desc}}</div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div>
      <img
        class="info-img"
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
// import { debounce } from "@/common/util";
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      imgLength: 0
    };
  },
  methods: {
    imgLoad() {
      this.$emit("detailImgLoad");
    },
    refresh() {
      
    }
  }
};
</script>

<style scoped>
.good-info {
  padding: 20px 0px;
  border-bottom: 5px solid #f8f8f8;
  border-top: 5px solid #f8f8f8;
  margin-top: 20px;
}
.info-desc {
  padding: 5px 16px;
  font-size: 14px;
}
.info-key {
  padding: 16px;
}
.info-img {
  width: 100%;
}
</style>