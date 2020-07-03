<template>
  <div class="shop">
    <div class="shop-header">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>

    <div class="shop-info">
      <div class="sales">
        <div class="number">{{shop.sells | sellCountFilters}}</div>
        <div class="font-style">总销量</div>
      </div>

      <div class="goods-count">
        <div class="number">{{shop.goodsCount}}</div>
        <div class="font-style">全部宝贝</div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return Object;
      }
    }
  },
  filters: {
    sellCountFilters(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.shop-header {
  padding: 16px 30px 0 30px;
  line-height: 50px;
  display: flex;
}
.shop-header img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 25px;
  background-color: gray;
  padding: 2px;
}
.shop-header span {
  font-size: 17px;
}
.shop-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.sales {
  margin-left: 30px;
  color: black;
  font-size: 16px;
}
.font-style {
  font-size: 12px;
  margin-top: 3px;
}
.number {
  margin: 0 auto;
  text-align: center;
}
.goods-count {
  color: black;
  font-size: 16px;
  border-right: 0.5px solid grey;
  padding-right: 20px;
  height: 35px;
}

.shop-middle-right {
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
  margin-left: 10px;
}
.shop-middle-right table td {
  padding: 5px 0;
}

.shop-middle-right .score {
  color: #5ea732;
}

.shop-middle-right .score-better {
  color: #f13e3a;
}

.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>