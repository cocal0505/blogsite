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
        <div class="list-acttions">
          <button @click="delete1(list.id,index,accounts.username)">
            delete
          </button>
          <button @click="update(list.id,accounts.username)">
            edit
          </button>
          <Update />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Update from "./Update.vue"

export default {
  components:{
    Update,
  }, 
    computed:{
      getdata(){
        return this.$store.state.Postlist.collectedData1
      }, 
      accounts(){
        return this.$store.state.Userdata.account
      }
    }, 
    methods:{
      delete1(id,id2,accounts){
        
        this.$store.dispatch('Postlist/deleteList',{
          idNumber:id, 
          indexNumber: id2,
          account : accounts
        })
        console.log(typeof(id))
        console.log(typeof(id22))
        console.log(accounts)
      },
      update(id1,accounts){
        if(accounts === undefined){
          alert("plaese log in first")
          return;
        }else{
          this.$store.commit('Postlist/indexnumbers',id1)
         this.$store.commit('Postlist/editstate')
         this.$store.dispatch('Postlist/fetchdetail',{
           id : id1,
         })
        }
         
      }
    },
   
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
        margin-top:60px;
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
        .list-acttions{
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