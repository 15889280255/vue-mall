<template>
  <div>
    <ul>
      <li v-for="item in goods" :key="item.index" class="item-li">
        <img :src="item.show.img" alt class="item-img" />
        <p class="item-title">{{getTitle(item)}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getTitle(item) {
      return item.title.slice(10, 12);
    }
  },
  mounted() {
    console.log(this.goods);
  }
};
</script>

<style>
.item-li {
  list-style: none;
  float: left;
  margin: 10px;
  text-align: center;
}

.item-img {
  width: 80px;
  height: 120px;
}

.item-title {
  font-size: 13px;
  color: grey;
  padding-top: 10px;
}
</style>