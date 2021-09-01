<template>
  <div class="nav">
    <div
      @click="switch1"
      class="toolBar-btn">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="homelogo">
      <RouterLink
        to="/">
        home
      </RouterLink>
    </div>
    <div class="dot-container">
      <div
        @click="dropdown"
        class="setting-btn">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>

  <Dropdown />
</template>

<script>
import Dropdown from "./DropDown.vue";
export default {
  components:{
    Dropdown,
  },
    methods:{
      switch1(){
        this.$store.commit('openSideBar')
       
      }, 
      dropdown(){
        this.$store.commit('openDropDown')
      }
    }
}
</script>


<style scoped lang="scss">
 .nav{
     width:100%;
     height:40px; 
     background-color:rgb(172, 172, 172);
     position:fixed;
     display:flex;
     align-items: center;
      z-index: 2;
      box-shadow: 1px 2px 5px  rgb(80, 80, 80);
     .toolBar-btn{
         margin-left:10px;
         .line{
             width:20px;
             height:2.5px;
             background-color:white;
             margin-top:4px;
         }
         .line:first-child{
           margin-top:0px;
         }
     }
     .homelogo{
       a{
         text-decoration: none;
         color:white;
         padding:0 30px;
       }
     }
     .dot-container{
       width:100%;
       height:40px;
       position:relative;
       .setting-btn{
      padding:5px 14px;
      cursor: pointer;
      border-radius:50%; 
      position:absolute;
      right:10px;
      top:5px;
       .dot{
         width:4px;
         height:4px;
         background-color:white;
         border-radius:50%;
         margin-top:4px;
       }
       .dot:first-child{
         margin-top:0px
       }
     }
     .setting-btn:hover{
        background-color:rgb(189, 189, 189);
      }
     }
 }
</style> 




