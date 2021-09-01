<template>
  <div 
    :class="{'padding' : toogledPadding}"
    class="HomeContainer">
    <h1>hello</h1>
  </div>
</template>


<script>
export default {
   computed:{
      toogledPadding(){
          return this.$store.state.status 
      }
    }
}
</script>


<style scoped  lang="scss">
.HomeContainer{
    box-sizing: border-box;
    padding:60px 0px 0px 20px; 
    background-color:rgb(255, 132, 132);
    width: 100%;
    height:100vh;
    transition: all .3s;
    &.padding{
        padding: 60px 0px 0px 200px;
        background-color:rgb(255, 132, 132);
        width:100%;
        height:100vh;
    }
}
</style>