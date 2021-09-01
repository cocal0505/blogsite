<template>
  <div 
    :class="{'padding2' : toogledPadding2}"
    class="HomeContainer2">
    <div class="PostList-nav">
      <div class="title">
        Post List
      </div>
      <button 
        @click="postNewList"
        class="postNewList">
        Post new
      </button>
    </div>
    <ListItems />
    <PostNew />
  </div>
</template>


<script>
import ListItems from "./ListItems.vue" 
import PostNew from "./PostNew.vue"

export default {
  components:{
    ListItems,
    PostNew,
 
  },
  data(){
    return{
      
    }
  },
   computed:{
      toogledPadding2(){
          return this.$store.state.status 
      },
    },
    methods:{
       postNewList(){
          this.$store.commit('postnewstatus')
      }
    }
    
}
</script>


<style scoped lang="scss">

 @media screen and (min-width:500px){
   .HomeContainer2{
    box-sizing: border-box;
    padding:60px 0px 60px 0px; 
    transition: all .3s;
  
   background-color:rgb(214, 240, 255);
    .PostList-nav{
      display:flex;
      width:700px;
      margin-left:auto;
      margin-right:auto;
      margin-bottom:10px;
      background-color:rgb(255, 255, 255);
      box-shadow: 1px 1px 10px 1px rgb(59, 59, 59);
      padding:10px;
      border-radius:5px;
      .title{
        margin-left:15px;
      }
      .postNewList{
        margin-left:550px;
      }
    }
  }
 .padding2{
        padding: 60px 0px 60px 100px;
    }
 }


@media screen and (max-width:500px){
        
 .HomeContainer2{
    box-sizing: border-box;
    padding:60px 0px 60px 0px; 
 
    width: 100%;
   
    transition: all .3s;
    }
 .padding2{
        padding: 60px 0px 60px 100px;
    
        width:100%;
       
    }
}
</style>