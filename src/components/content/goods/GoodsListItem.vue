<template>
  <div class="goods-list-item">
    <a :href="item.link">
      <img :src="item.show.img" alt class="item-img" />
      <p class="item-title">{{item.title}}</p>
      <span class="item-price">{{item.price}}￥</span>
      <span class="item-cfav">- {{item.cfav}}人收藏</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-list-item {
  padding-bottom: 10px;
  position: relative;
  font-size: 12px;
  width: 47%;
  text-align: center;
}

.item-img {
  width: 100%;
  border-radius: 5px;
}

.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /**指定文本不换行 */
  margin-bottom: 4px;
}

.item-price {
  color: var(--color-high-text);
}

.item-cfav {
  color: var(--color-high-text);
}
</style>