<template>
  <div class="shop-item">
    <div class="check-icon">
      <check-button :value="product.checked" @checkBtnCilck="selectItem"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-price right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods:{
    selectItem(){
      this.product.checked = !this.product.checked;
    }
  }
};
</script>

<style scoped>
.shop-item {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid rgb(182, 182, 182);
}
.check-icon {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img img {
  width: 100px;
  height: 140px;
  border-radius: 15px;
  margin-left: 16px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-title {
  font-size: 18px;
}
.item-desc {
  font-size: 14px;
  margin-top: 16px;
  color: rgb(92, 92, 92);
}

.item-price {
  position: absolute;
  bottom: 0px;
}

.left {
  padding: 10px;
  left: 0px;
  font-size: 22px;
  color: var(--color-tint);
}
.right {
  padding: 10px;
  font-size: 20px;
  right: 0px;
}
</style>