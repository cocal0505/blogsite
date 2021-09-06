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
          <div class="tagcon">
            <div 
              v-for="tag in fetchpostdetail.tags"
              :key="tag"
              class="maincontent tag">
              {{ tag }}
            </div>
          </div>
        </div>
        <div class="sidenav-container">
          <RouterLink
            :to="`/postDeatil/${fetchpostdetail.prev.id}`"
            @click="prev(fetchpostdetail.prev.id)"
            v-if="fetchpostdetail.prev"
            class="sidenav prepost">
            <h1>{{ fetchpostdetail.prev.title }}</h1>
          </RouterLink>
          <RouterLink 
            :to="`/postDeatil/${fetchpostdetail.next.id}`"
            @click="next(fetchpostdetail.next.id)"
            v-if="fetchpostdetail.next"
            class="sidenav nextpost">
            <h1>{{ fetchpostdetail.next.title }}</h1>
          </RouterLink>
          <div class="sidenav tagcloud">
            <div class="tag-title">
              Tags Cloud
            </div>
            <TagLists  
              v-for="(tagcloud, index) in fetchtags"
              :key="index"
              :style="{ color : tagcloud.color}"
              :taglist="tagcloud" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import  TagLists from "./Taglists.vue"
export default {
  components:{
    TagLists
  }, 
   computed:{
      toogledPadding1(){
        return this.$store.state.Postlist.status 
      },
      fetchpostdetail(){
        return this.$store.state.Postlist.detaildata1
      },
      fetchtags(){
        return this.$store.state.Postlist.tags
      }
   },
   created(){
     this.$store.dispatch('Postlist/fetchdetail',{
       id : this.$route.params.postid
     })
     this.$store.dispatch('Postlist/fetchtag')
   }, 
   methods:{
     prev(preid){

       this.$store.dispatch('Postlist/fetchdetail',{
        id : preid
      })
     },
     next(nextid){
      this.$store.dispatch('Postlist/fetchdetail',{
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
      background-color:rgb(238, 238, 238);
      margin-left:auto;
      margin-right:auto;
      padding-bottom:50px;
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
        box-sizing: border-box;
        .maincontent-container{
          width:500px;
         
          background-color: rgb(209, 209, 209);
          padding:10px;
       
          border-radius: 5px;
          flex-basis: 100%;
          box-shadow: 0.1px 1px 8px 1px rgb(158, 158, 158);
          .paragraph{
            width:400px;
            
            font-family: sans-serif;
            font-weight:500px;
            font-size:20px;
            line-height:30px;
          }
          .tagcon{

            width:400px;
            margin-top:20px;
            padding:10px;
              .tag{
              background-color:rgb(135, 184, 170);
              padding:5px 10px; 
              display:inline;
              border-radius: 10px;
              color:white;
              font-weight:600;
              margin-right: 5px;
          }
          }
          
        }
        .sidenav-container{

          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-basis: 100%;
          box-sizing: border-box;
          .sidenav{
            width:300px;
            padding:20px;
            background-color: rgb(209, 209, 209);
            border-radius: 5px;
            margin-bottom:10px;
            text-align: center;
             box-shadow: 0.1px 1px 8px 1px rgb(158, 158, 158);
            
          }
          .sidenav.tagcloud{
               display:flex;
                align-items: center;
                margin-top:10px;
                flex-wrap: wrap;
                
               .tag-title{
                font-weight: 900;
                width:300px;
                margin-bottom:15px;
                text-align: left;
            }
              
             }
        }
      }
    }
}

 a{
  text-decoration: none;
  color:rgb(88, 88, 88)
             }

.padding1{
        padding: 60px 0px 60px 200px;
       
        width:100%;
        height:100vh;
    }
</style>