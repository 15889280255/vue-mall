<template>
  <div>
    <ul>
      <li
        class="tabItem"
        v-for="item in tabData"
        :key="item"
        :class="{'focus':item === choose}"
        @click="itemClick(item)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choose: this.tabData[0]
    };
  },
  props: {
    tabData: {
      type: Array,
      default() {
        return [];
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    itemClick(item) {
      this.choose = item;

      let index = this.tabData.indexOf(item) + 1;
      this.$emit('clickIndex',index)
    },
  }
};
</script>

<style>
.tabItem {
  height: 40px;
  width: 80px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  background-color: var(--color-tint);
  color: white;
}
.focus {
  background-color: rgb(255, 247, 247);
  color: black;
  display: flex;
  position: relative;
}
.focus::before {
  content: "";
  display: block;
  width: 4px;
  height: 15px;
  background-color: red;
  position: relative;
  top: 10px;
  margin-right: 10px;
}
</style>