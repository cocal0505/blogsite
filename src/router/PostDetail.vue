<template>
  <MainPostDetail />
</template>

<script>
import MainPostDetail from "../components/MainPostDetail.vue"
export default {
  components:{
    MainPostDetail,
  },
created(){
      
      this.$store.commit('resetState')
    }
}
</script>