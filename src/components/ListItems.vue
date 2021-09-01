<template>
  <div class="listcontainer">
    <ul class="listitems">
      <li 
        v-for="(list,index) in getdata"
        :key="list"
        class="listitem">
        <RouterLink 
          :to="`/postDeatil/${list.id}`"
          class="listitemcontainter">      
          <div class="list id">
            {{ list.id }}
          </div>
          <div class="list title">
            {{ list.title }}
          </div>
          <div class="list author">
            {{ list.owner }}
          </div>
        </RouterLink>
        <div class="list acttions">
          <button @click="delete1(index)">
            delete
          </button>
          <button>edit</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed:{
      getdata(){
        return this.$store.state.collectedData1
      }
    }, 
    methods:{
      delete1(id){
        this.$store.commit('deletecollected',id)
      }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width:500px){
   
a{
  text-decoration: none;
  color:black
  
}


    .listcontainer{
      .listitems{
        .listitem{
        margin-top:20px;
        width:700px;
        height:150px;
        background-color: white;
        margin-right:auto; 
        margin-left:auto;
        border-radius:6px;
        box-shadow:1px 1px 10px rgb(92, 92, 92);
        .listitemcontainter{
          width:700px;
          height:150px;
          display:flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          .list{
          padding:10px;
          flex-basis:100px;      
        }
        }
        .listitemcontainter:hover{
          background-color:rgb(212, 212, 212);
        }
        
      }
    }
  }


 .padding2{
        padding: 60px 0px 0px 100px;
        background-color:rgb(95, 64, 233);
        width:100%;
        height:100vh;
    }
 }



@media screen and (max-width:500px){

    .listcontainer{
      .listitems{
        .listitem{
        margin-bottom:20px;
        width:300px;
        height:150px;
        background-color: white;
        margin-right:auto; 
        margin-left:auto;
        border-radius:6px;
        box-shadow:1px 1px 10px rgb(92, 92, 92);
        text-align: center;
        .list{
          padding:10px;
        } 
        }
    }
  }


 .padding2{
        padding: 60px 0px 0px 100px;
        background-color:rgb(95, 64, 233);
        width:100%;
        height:100vh;
    }
}

</style>