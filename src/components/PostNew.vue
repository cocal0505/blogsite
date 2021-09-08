<template>
  <div 
    :class="{postNewContainer : backgroundState}"
    class="postNewContainer1">
    <form id="input-container">
      <h1>ID</h1>
      <input 
        name="id"
        type="text" />
      <h1>Title</h1>
      <input 
        name="title"
        type="text" />
      <h1>Descrption</h1>
      <input 
        name="description"
        type="text" />
      <h1>content</h1>
      <textarea 
        name="content"
        type=""></textarea>
      <h1>owner</h1>
      <input 
        name="owner"
        type="text" />
      <h1>tags</h1>
      <input 
        name="tags"
        type="text" />
    </form>
   
    <button 
      @click="collectdata"
      class="btn-save">
      save
    </button>
  </div>
</template>


<script>
export default {
    data(){
        return{
        }
    },
    methods:{
         collectdata(){
           const createdata = new FormData (document.getElementById('input-container'))
           console.log(createdata)
            this.$store.dispatch('Postlist/creatdata', createdata)
            this.$store.commit('Postlist/resetState')
        },
    },
    computed:{
      backgroundState(){
        return this.$store.state.Postlist.open
      }
    }
}
</script>


<style lang="scss">
 
.postNewContainer1{
  display: none;
}


    .postNewContainer{
        width:700px;
        height:500px;
        background-color:rgb(211, 211, 211);
        position:absolute;
        margin: auto;
        top:0;
        bottom :0;
        left: 0;
        right: 0;
        display: block;
    }

</style>