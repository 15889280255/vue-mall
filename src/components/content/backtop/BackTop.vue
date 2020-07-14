<template>
  <div class="back-top"  @click="topClick">
    <img src="~assets/img/common/top.png" alt />
  </div>
</template>

<script>
export default {
  methods: {
    topClick() {
      this.$emit("backTop");
    }
  }
};
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 50px;
  right: 10px;
}

.back-top img {
  height: 43px;
  width: 43px;
}
</style>