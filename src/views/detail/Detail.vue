<template>
  <div>
    <detail-nav-bar>详细页</detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";

import { getDetail } from "network/detail";
export default {
  data() {
    return {
      iid: null,
      topImages:[]
    };
  },
  components: {
    DetailNavBar
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

        this.topImages = data.itemInfo.topImages
      });
    }
  }
};
</script>

<style>
</style>