<template>
  <div
    v-if="dropdowState"
    class="dropdown">
    <ul 
      v-if="accounts.username"
      class="list">
      <RouterLink 
        to="/" 
        @click="SiginOut"
        class="list-item">
        Log out
      </RouterLink>
      <li class="list-item">
        changeID
      </li>
    </ul>

    <ul
      v-else
      class="dropdown">
      <li
        v-for="dropdown in dropdowns2"
        class="list-item"
        :key="dropdown.title">
        <RouterLink 
          :to="dropdown.link">
          {{ dropdown.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
    data(){
        return{
            dropdowns: [
                {
                    title: "LogOut",
                    link: "/Login/"
                },
                {
                    title: "changeID",
                    link: "#"
                },
            ],
            dropdowns2:[
                  {
                    title: "LogIn",
                    link: "/Login/"
                },
                {
                    title: "Register",
                    link: "#"
                },
            ]
        }
    },
    computed:{
        dropdowState(){
            return this.$store.state.Postlist.dropdown
        },
        accounts(){
            return this.$store.state.Userdata.account
        }
    },
    methods:{
        SiginOut(){
             this.$store.dispatch('Userdata/SignOut') 
        }
    }
}
</script>


<style scoped  lang="scss">
    .dropdown{
        position:fixed;
        top: 40px;
        right:0px;
        padding:9px 10px;
        background-color:white;
        box-sizing: border-box;
        border-radius: 0px 0px 4px 4px;
        text-align: center;
        box-shadow: -1px 3px 4px  rgb(99, 99, 99);
        
        .list-item{
            margin-top:10px;
            a{
                text-decoration: none;
                color:rgb(139, 139, 139);
                font-weight:600;
            }
        }
        .list-item:first-child{
            margin-top:0px;
            cursor: pointer;
        }
    }
    
</style>