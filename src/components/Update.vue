<template>
  <div 
    :class="{updatestate : update1}"
    class="updatecontainer">
    <form id="updateform">
      <h1>ID</h1>
      <input
        type="text"
        name="id"
        v-model="deatil.id" />
      <h1>Title</h1>
      <input
        type="text"
        name="title"
        v-model="deatil.title" />
      <h1>description</h1>
      <input
        type="text"
        name="description"
        v-model="deatil.description" />
      <h1>contnet</h1>
      <textarea
        type="text"
        name="content"
        v-model="deatil.content">
        </textarea>
      <h1>owner</h1>
      <input
        type="text"
        name="owner"
        v-model="deatil.owner" />
      <h1>tags</h1>
      <input
        type="text"
        name="tags"
        v-model="deatil.tags" />
    </form>
    <button @click="update(Nums,deatil.owner_id,accounts.username)">
      save 
    </button>
  </div>
</template>


<script>
export default {
   computed:{
       update1(){
           return this.$store.state.Postlist.edit1
       },
       deatil(){
           return this.$store.state.Postlist.detaildata1
       },
       Nums(){
         return this.$store.state.Postlist.indexNum
       },
       accounts(){
         return this.$store.state.Userdata.account
       }
   },
  methods:{
      update(index ,id2,accounts){        
        const data = new FormData(document.getElementById("updateform"))
          data.set('owner', id2)
    
           this.$store.commit('Postlist/resetState')
            this.$store.dispatch('Postlist/updatecontents',{
                data : data, 
                index : index ,
                account: accounts
            } )
        
      }
  }
}
</script>


<style scoped lang="scss">
.updatecontainer{
    display: none;

    
}

.updatestate{
    position:fixed;
    margin:auto;
    left:0;
    right:0;
    bottom:0;
    top:0;
    padding:30px;
    width:300px;
    height:500px;
    background-color:rgb(255, 255, 255);
    box-shadow: 1px 1px 6px  rgb(209, 209, 209);
    display: block;
    }
</style>