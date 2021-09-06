<template>
  <div
    :class="{'animationSide': status}"
    class="SideNav-Bar">
    <div class="router-nav">
      <RouterLink 
        to="/postDeatil/1"
        class="postDetail">
        postDeatail
      </RouterLink>
      <RouterLink
        to="/postList"
        class="postlist">
        postlist
      </RouterLink>
    </div>
  </div>
</template>


<script>

export default {
  computed:{
    status(){
      return this.$store.state.Postlist.status
    }
  }
}
</script>


<style scoped lang="scss">
.SideNav-Bar{
    width:0px;
    height:100vh;
    background-color:rgb(139, 139, 139);
    position:fixed;
    z-index: 1;
    transition: all .2s;
    pointer-events: none; 
    .router-nav{
      transition: all 10ms;
      margin-top:100px;
      opacity: 0;
    }
}

.animationSide{
      width:100px;
      height:100vh;
      background-color:rgb(139, 139, 139);
      position:fixed;
      z-index: 1;
      pointer-events: fill;
    .router-nav{
      opacity: 1;
      margin-top:100px;
      a{
        text-decoration: none;
        color:white;
      }
      
    }
}
</style>