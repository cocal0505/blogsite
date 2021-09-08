<template>
  <HomeMain />
</template>


<script>
import HomeMain from "../components/HomeMain.vue"
export default {
    components:{
      HomeMain
    },
    created(){
      this.$store.commit('Postlist/resetState')
    }
}
</script>


<style scoped lang="scss">

</style>