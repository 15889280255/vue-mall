<template>
  <div class="goods-list-item" @click="goTODetail">
    <img :src="getImgUrl" alt class="item-img" @load="imageLoad" />
    <p class="item-title">{{item.title}}</p>
    <span class="item-price">{{item.price}}￥</span>
    <span class="item-cfav">- {{item.cfav}}人收藏</span>
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
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    goTODetail() {
      this.$router.push("/detail/" + this.item.iid);
    }
  },
  computed: {
    getImgUrl: function() {
      return this.item.image || this.item.show.img;
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