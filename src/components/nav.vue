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
        v-if="account.username"
        class="account1"> 
        {{ account.username }} 
      </div>
      
    <div
     v-else
     class="accouunt2">
    </div>
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
        this.$store.commit('Postlist/openSideBar')
       
      }, 
      dropdown(){
        this.$store.commit('Postlist/openDropDown')
      }
    },
    computed:{
      account(){
        return this.$store.state.Userdata.account
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
       display:flex;
       justify-content: flex-end;
       align-items: center;
       
       .account1{
          background-color: rgb(215, 189, 245);
          padding: 2px 10px;
          border-radius: 50px;
          color:white;
       }
       .accouunt2{
          height:30px;
          width:30px;
          background-color:rgb(215, 189, 245);
          border-radius:50px;
       }
       .setting-btn{
      padding:5px 14px;
      cursor: pointer;
      border-radius:50%; 
      margin-right:10px;
      margin-left:10px;
     
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




