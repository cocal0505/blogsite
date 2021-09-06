<template>
  <div 
    :class="{postNewContainer : backgroundState}"
    class="postNewContainer1">
    <div class="input-container">
      <h1>id</h1>
      <input 
        @keyup="data1"
      
        type="text" />
      <h1>title</h1>
      <input 
        @keyup="data2"
     
        type="text" />
      <h1>name</h1>
      <input 
        @keyup="data3"
 
        type="text" />
    </div>
    {{ this.datalist }}
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
            datalist : 
                {
                 listId :'',
                 listTitle:'',
                 listAuthor:''
                },
        }
    },
    methods:{
        data1(e){
            this.datalist.listId = e.target.value
        },
        data2(e){
             this.datalist.listTitle = e.target.value
        },
        data3(e){
           this.datalist.listAuthor = e.target.value
        },
         collectdata(){
            const collectedData = this.datalist
            this.$store.commit('Postlist/fetchdata', collectedData)
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