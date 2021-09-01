<template>
  <div
    v-if="dropdowState"
    class="dropdown">
    <ul class="list">
      <li
        v-for="dropdown in dropdowns"
        :key="dropdown.title"
        class="list-item">
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
                    title: "LogIn",
                    link: "#"
                },
                {
                    title: "LogOut",
                    link: "#"
                },
                {
                    title: "Register",
                    link: "#"
                },
                {
                    title: "ChangePW",
                    link: "#"
                },
            ]
        }
    },
    computed:{
        dropdowState(){
            return this.$store.state.dropdown
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
        }
    }
    
</style>