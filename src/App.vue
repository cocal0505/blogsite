<template>
  <Nav />
  <SideNav />
  <RouterView />
  <Footer />
</template>



<script>
import Nav from './components/nav.vue'
import SideNav from './components/SideNav.vue'
import Footer from "./components/Footer.vue"

export default {
  components:{
    Nav, 
    SideNav, 
    Footer,
  },
}
</script>
<style scoped lang="scss">
    #app{
       font-family:"Oswald";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
</style>


