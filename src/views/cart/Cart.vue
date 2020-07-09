<template>
  <div class="cart">
    <nav-Bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-Bar>

    <cart-list class="cart-list" />

    <cart-buttom-bar class="buttom-bar" />
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartButtomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartButtomBar
  },
  data() {
    return {};
  },
  computed: {
    // ...mapGetters({
    //   别名 :'cartLength'
    // }),
    ...mapGetters(["cartLength"])
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 600;
}
.cart-list {
  position: absolute;
  top: 49px;
  bottom: 49px;
  width: 100%;
}
.buttom-bar {
  position: absolute;
  bottom: 49px;
}
</style>