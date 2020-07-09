<template>
  <div class="icon" :class="{'select-icon':value}" @click="selectItem">
    <img src="~/assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    selectItem() {
      this.$emit("checkBtnCilck");
    }
  }
};
</script>

<style scoped>
.icon {
  position: relative;
  margin: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.select-icon {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>