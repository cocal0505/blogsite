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
      }
    }

}




