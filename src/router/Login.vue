<template>
  <div class="logincontainer">
    <div class="login-box">
      <h1>Log In</h1>
      <form id="login-form">
        <h1>User Name</h1>
        <input
          label="username"
          type="text"
          name="username" /><br />
        <h1>Password</h1>
        <input
          label="password"
          type="password"
          name="password" />
      </form>
      <button
        class="btn"
        @click="handler">
        login
      </button>
    </div>
  </div>
</template>


<script>


export default {
    data(){
        return{
    
        } 
    },
    methods:{
        handler(){
          const postData = new FormData (document.getElementById('login-form'))
          console.log(postData)
          this.$store.dispatch('Userdata/PostUserData',postData)
        }
    },
    created(){
      this.$store.commit('Postlist/resetState')
    }
}
</script>


<style lang="scss">
    .logincontainer{
        height:100%;
        padding:270px;
        text-align: center;
        .login-box{
            width:500px;
            height:250px;
            background-color:rgb(190, 190, 190);
            margin-right: auto;
            margin-left : auto;
            border-radius: 5px;
            #login-form{
              padding-top:40px;
            }
            .btn{
              margin-top:40px;
            }
        }
    }
</style>