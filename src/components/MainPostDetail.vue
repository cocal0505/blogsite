<template>
  <div 
    :class="{'padding1' : toogledPadding1}"
    class="HomeContainer1">
    <div class="postconatiner">
      <div class="posttitle">
        <h1 class="posttitle-title">
          {{ fetchpostdetail.title }}
        </h1>
        <h2 class="posttitle-date">
          {{ fetchpostdetail.modify_dt }}
        </h2>
      </div>
      <div class="main-container">
        <div class="maincontent-container">
          <p class="maincontent paragraph">
            {{ fetchpostdetail.content }}
          </p>
          <div class="maincontent tag">
            {{ fetchpostdetail.tags }}
          </div>
        </div>
        <div class="sidenav-container">
          <RouterLink
            :to="`/postDeatil/${fetchpostdetail.prev.id}`"
            @click="prev(fetchpostdetail.prev.id)"
            v-if="fetchpostdetail.prev"
            class="sidenav prepost">
            <h1>{{ fetchpostdetail.prev.title }}t</h1>
          </RouterLink>
          <RouterLink 
            :to="`/postDeatil/${fetchpostdetail.next.id}`"
            @click="next(fetchpostdetail.next.id)"
            v-if="fetchpostdetail.next"
            class="sidenav nextpost">
            <h1>{{ fetchpostdetail.next.title }}</h1>
          </RouterLink>
          <div class="sidenav tagcloud">
            <h1>  {{ fetchpostdetail.tags }} </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
   computed:{
      toogledPadding1(){
        return this.$store.state.status 
      },
      fetchpostdetail(){
        return this.$store.state.detaildata1
      },
   },
   created(){
     this.$store.dispatch('fetchdetail',{
       id : this.$route.params.postid
     })
   }, 
   methods:{
     prev(preid){

       this.$store.dispatch('fetchdetail',{
        id : preid
      })
     },
     next(nextid){
      this.$store.dispatch('fetchdetail',{
        id : nextid
     })
   }
   }
}
</script>

<style scoped  lang="scss">
.HomeContainer1{
    box-sizing: border-box;
    padding:60px 0px 60px 0px; 
  
    width: 100%;
    height:100vh;
    transition: all .3s;
    .postconatiner{
      width:1000px;
      height:100%;
      background-color:rgb(238, 238, 238);
      margin-left:auto;
      margin-right:auto;
      .posttitle{
          width:500px;
          height:100px;
     
          padding:10px;
          .posttitle-title{
            margin:10px;
            font-size: 50px;
            font-weight: 800;
          }
          .posttitle-date{
            margin:10px;
          }
      }
      .main-container{
        display:flex;
        margin-top:40px; 
        margin-left:20px; 
        .maincontent-container{
          width:500px;
          height:400px; 
          background-color: rgb(209, 209, 209);
          padding:10px;
          box-sizing: border-box;
          border-radius: 5px;
          flex-basis: 100%;
          box-shadow: 0.1px 1px 8px 1px rgb(158, 158, 158);
          .paragraph{
            width:400px;
            height:360px;
          }
        }
        .sidenav-container{
          
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-basis: 100%;
         
          .sidenav{
            width:300px;
            height:50px;
            background-color: rgb(209, 209, 209);
            border-radius: 5px;
            padding:10px;
            margin-bottom:10px;
             box-shadow: 0.1px 1px 8px 1px rgb(158, 158, 158);
          }
        }
      }
    }
}



.padding1{
        padding: 60px 0px 60px 200px;
       
        width:100%;
        height:100vh;
    }
</style>