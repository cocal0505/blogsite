<template>
  <MainPostList />
</template>



<script>
import MainPostList from "../components/MainPostList.vue"

export default {
  components:{
    MainPostList,
 
  },
   created(){
      this.$store.commit('Postlist/resetState')

    }
}
</script>
