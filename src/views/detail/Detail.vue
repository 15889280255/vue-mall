<template>
  <div>
    <detail-nav-bar>详细页</detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
export default {
  data(){
    return{
      iid:null,
    }
  },
  components:{
    DetailNavBar,
  },
  created() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    
  },

}
</script>

<style>

</style>