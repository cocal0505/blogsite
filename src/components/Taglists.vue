<template>
<RouterLink 
to='/postlist/extra'
@click="totag(taglist.name)"
class="tags">
    <h1 class="tags-item2">
    {{ taglist.name }} 
    <h1 class="tags-item">
      {{ taglist.count }}
    </h1>
  </h1>
</RouterLink>
  
</template>

<script>
export default {
    props:{
        taglist:{
            type:Object,
            default:() => ({})   
        }
    },
    methods:{
       totag(name){
           this.$store.dispatch('fetchdata',name)
          
       }
    }
}
</script>


<style scoped lang="scss">

 .tags{
    margin-right:4px;
    margin-bottom:6px;
    font-weight: 600;
               
    .tags-item2{
    background-color: rgb(135, 184, 170);
    padding:10px 10px;
    border-radius:10px ;
    box-shadow: 1px 1px 5px rgb(161, 161, 161);
    }
    .tags-item{
    background-color:rgb(104, 139, 139);
    display:inline;
    border-radius: 50px;
    padding:1px 6px; 
    margin-left:4px;
    }
}
.tags:hover{
    .tags-item2{
        background-color: rgb(106, 143, 132);
    }
}
</style>