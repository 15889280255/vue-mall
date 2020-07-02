<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: {}
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.initBscroll();
  },
  methods: {
    initBscroll() {
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      // 2.添加监听
      if (this.probeType == 2 || this.probeType == 3) {
        this.scroll.on("scroll", position => {
          this.$emit("getPosition", position);
        });
      }
      // 3.监听上拉到底部
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },

    scrollTo(x, y, time = 1000) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
      this.refresh;
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    }
  }
};
</script>

<style scoped></style>
