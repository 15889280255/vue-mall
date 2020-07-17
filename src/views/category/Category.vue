<template>
  <div>
    <search-bar @searchClick="searchClick"></search-bar>
  </div>
</template>

<script>
import SearchBar from './childComps/SearchBar'
export default {
  name: "category",
  components: {
    SearchBar,
  },
  methods:{
    searchClick(searchData){
      console.log('搜索:'+ searchData);
    }
  }
};
</script>

<style scoped>
</style>