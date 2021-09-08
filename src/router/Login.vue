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

    <div class="login-box">
      <h1>register</h1>
      <form id="register-form">
        <h1>User Name</h1>
        <input
          label="username"
          type="text"
          name="username" /><br />
        <h1>Password</h1>
        <input
          label="password1"
          type="password"
          name="password1" />
        <h1>Password Again</h1>
        <input
          label="password2"
          type="password"
          name="password2" />
      </form>
      <button
        class="btn"
        @click="handler2">
        register
      </button>
    </div>


    <div class="login-box">
      <h1>change password</h1>
      <form id="changeP-form">
        <h1>Old Password</h1>
        <input
          label="old_password"
          type="password"
          name="old_password" /><br />
        <h1> New Password</h1>
        <input
          label="new_password1"
          type="password"
          name="new_password1" />
        <h1> New Password Again</h1>
        <input
          label="new_password2"
          type="password"
          name="new_password2" />
      </form>
      <button
        class="btn"
        @click="handler3">
        register
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
        },
        handler2(){
          const postData1 = new FormData (document.getElementById('register-form'))
          console.log(postData1)
          this.$store.dispatch('Userdata/register',postData1)
        },
        handler3(){
          const postData2 = new FormData (document.getElementById('changeP-form'))
          console.log(postData2)
          this.$store.dispatch('Userdata/changep',postData2)
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