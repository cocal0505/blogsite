import axios from "axios"

axios.defaults.xsrfHeaderName='X-CSRFToken'
axios.defaults.xsrfCookieName='csrftoken'
export default {
    namespaced: true,
    state:()=>({
      account : {}
     
    }),
    mutations: {
     newdata(state,data1){
       console.log(data1)
       state.account = data1
     },
     register(state,data2){
      console.log(data2)
     }
    },
    actions: {
       PostUserData ({commit},payload){
       
         axios.post('/api/login/',payload)
        .then(res=>{
        
            commit('newdata', res.data)
        })
        .catch(err=>{
          console.log(err)
        })
      },

      register({commit},payload){
        
        axios.post('/api/register/', payload)
        .then(res=>{
          alert( `user${res.data.username} created`)
          commit('register',res.data)
        })
        .catch(err=>{
          console.log(err.response)
        } )
      },
      SignOut({commit}){
        axios.get('api/logout/')
        .then((res)=>{
          commit('newdata',res.data)
        })
        .catch(err=>{
          console.log(err.res)
        })
      },

      changep({commit},payload){
        axios.post('api/pwdchg/',payload)
        .then(res=>{
          commit('newdata', res.data)
        })
        .catch(err=>{
          console.log(err.res)
        })
      }
    }

}




