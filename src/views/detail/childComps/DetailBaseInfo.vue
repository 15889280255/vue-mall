<template>
  <div v-if="Object.keys(goods).length != 0">
    <div class="title">{{goods.title}}</div>
    <div class="price-info">
      <span class="discountBgColor">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discountBgColor dis-count" v-if="goods.disCount">{{goods.disCount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index].icon" alt class="service-icon" />
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object
    }
  },
  data() {
    return {
      discountBgColor: this.goods.discountBgColor
    };
  },
};
</script>

<style scoped>
.title {
  margin: 16px;
  font-weight: 600;
  color: grey;
}
.price-info {
  margin-left: 16px;
  font-size: 22px;
}
.old-price {
  font-size: 14px;
  text-decoration: line-through;
  padding: 0 16px;
  color: grey;
}
.discountBgColor {
  color: var(--color-high-text);
}
.dis-count {
  font-size: 12px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 25px;
  padding: 3px;
  font-weight: 600;
}
.info-other {
  padding: 0 10px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: gray;
  border-bottom: 1px solid #8080801e;
}
.info-service {
  display: flex;
  justify-content: space-between;
  padding: 15px 16px;
  font-size: 12px;
  line-height: 20px;
  border-bottom: 5px solid #8080801e;
}
.service-icon {
  width: 15px;
  height: 15px;
  position: relative;
  top: 3px;
  right: 3px;
}
</style>