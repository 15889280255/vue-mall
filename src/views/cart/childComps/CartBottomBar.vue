<template>
  <div class="bottom-bar">
    <div class="check-area">
      <check-button :value="allChecked" @click.native="allCheckedClick" />
      <span>全选</span>
    </div>

    <div class="total-price">合计：{{totalPrice}}</div>

    <div class="calculate" @click="calculateClick">去计算({{checkedLength}})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  data() {
    return {
      isAllCheck: false
    };
  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.getters.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((pre, item) => {
            return item.price * item.count + pre;
          }, 0)
      );
    },
    checkedLength() {
      return this.$store.getters.cartList.filter(item => item.checked).length;
    },
    allChecked() {
      if (this.$store.getters.cartList.length === 0) return false;
      return this.$store.getters.cartList.every(item => {
        return item.checked === true;
      });
    }
  },
  methods: {
    allCheckedClick() {
      this.$store.commit("allChecked", !this.allChecked);
    },
    calculateClick(){
      if(!this.checkedLength){
        this.$toast.show('请先选择商品')
      }else{
        this.$toast.show('需要支付：'+this.totalPrice)
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 49px;
  background-color: rgb(240, 233, 233);
  display: flex;
  justify-content: space-between;
}
.check-area {
  display: flex;
  height: 49px;
  padding: 16px;
}
.check-area span {
  margin-left: 5px;
  font-size: 14px;
  text-align: center;
}
.total-price {
  font-size: 15px;
  padding: 16px 0px;
  color: #000;
}
.calculate {
  position: relative;
  padding: 0px 16px;
  background: red;
  text-align: center;
  color: #fff;
  line-height: 49px;
  font-size: 14px;
}
</style>