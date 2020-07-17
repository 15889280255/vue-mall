<template>
  <div>
    <nav-bar>
      <div slot="left" class="left">
        <img src="~assets/img/common/follow_note.png" alt />
      </div>
      <div slot="center" class="center">
        <input type="text" v-model="searchData" @focus="focus" @blur="blur" />
      </div>
      <div slot="right" class="right" @click="searchClick">
        <img src="~assets/img/common/search.png" alt />
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      searchData: "搜索商品"
    };
  },
  components: {
    NavBar
  },
  methods: {
    searchClick() {
      this.$emit("searchClick", this.searchData);
    },
    focus() {
      this.searchData = "";
      console.log('aaaaaaaaaaaa');
      
    },
    blur() {
      console.log('失去焦点事件blur');
    }
  }
};
</script>

<style scoped>
.center input {
  border-radius: 15px;
  outline: none;
  height: 30px;
  padding-left: 5px;
  width: 80%;
  border-color: white;
  font-size: 13px;
  color: grey;
}

.left,
.right,
.center {
  border: 1px solid white;
  background-color: var(--color-tint);
}

.left img,
.right img {
  width: 22px;
  height: 22px;
  padding-top: 5px;
}
</style>