<template>
  <div>
    <div class="toast" v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message = "", duration = 1500) {

      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 80%;
  left: 50%;
  padding: 8px;
  z-index: 999;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
</style>