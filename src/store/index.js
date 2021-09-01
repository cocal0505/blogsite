import { createStore } from 'vuex'
import Postlist from "./Postlist"
import axios from "axios"

export default createStore({
  namespaced: true,
  state:()=>({
    status : false ,
    dropdown : false,
    open: false,
    collectedData1:[],
    detaildata1 :{}
  }),
  mutations: {
    openSideBar(state){
      state.status = !state.status     
    },
    resetState(state){
      state.status = false
      state.dropdown = false
      state.open = false
    },
    openDropDown(state){
      state.dropdown = !state.dropdown
    },
    fetchdata(state,collectedData){
      state.collectedData1.push(collectedData)
      console.log("fetchfromfirst",state.collectedData1)
    }, 
    deletecollected(state,id){
      state.collectedData1.splice(id,1)
      console.log("deletedata",state.collectedData1)
      console.log("deletenumber",id)
    }, 
    postnewstatus(state){
      state.open = !state.open
    }, 
    fetchfromserver(state,serverdata){
        console.log("fetchfromfirst",serverdata)
        state.collectedData1 = serverdata 
    },
    fetchdetail(state,detaildata){
      state.detaildata1 = detaildata
      console.log("detail",detaildata)
    },
    // fetchprevious(state,previosdata){
    //     console.log("previoustitle", previosdata)
    // },
    // fetchnext(state,nextdata){
    //   console.log("nexttitle",nextdata)
    // }
  },
  actions: {

   
   async fetchdata({commit}){
      try{
        const res = await _fetchdata()
        commit( 'fetchfromserver',res.data)
      }catch(message){
        console.log(message)
      }finally{
        console.log("end")
      }
    },
     
    async fetchdetail({commit},payload){
      const {id} = payload
      // const previousID1 = Number(previousID)
      // const result1 = previousID1-1
      // console.log("previous number",result1)
      try{
          const res = await _fetchdeatil({
            id : id
          })
          commit('fetchdetail',res.data)

          // if( updateid < id){
          //   const res = await _fetchdeatil({
          //     id : updateid 
          //   })
          //   commit('fetchprevious',res.data.title)
          // }
      }catch(message){
        console.log(message)
      }finally{
        console.log("end")
      }
    },

    // async fetchdeatil2({commit},payload){
    //   const { nextID } = payload
    //   const nextID1 = Number(nextID)
    //   const result2 = nextID1+1
    //   console.log("next number",result2)

    //   try{
    //     const res = await _fetchdeatil({
    //       id: result2
    //     })
    //     commit('fetchnext',res.data.title)
    //   }catch(message){
    //     console.log(message)
    //   }finally{
    //     console.log("end")
    //   }
    // }
  },
  modules: {
    Postlist
  }
})




function _fetchdata(){
 
      return new Promise ((resolve,reject)=>{
        axios.get('/api/post/list')
          .then(res => {
            if(res.data.Error){
              reject(res.data.Error)
            }
            resolve(res)

          })
          .catch(err => {
            reject(err.message)
          })
      })
 }


function _fetchdeatil(payload){

   const { id } =payload
   if(id<1){
    return new Promise((resolved,reject)=>{
      axios.get("/api/post/1")
      .then(res=>{
        resolved(res)
      })
      .catch(err=>{
        reject(err.messgae)
      })
    })

   }else{
    return new Promise((resolved,reject)=>{
      axios.get(`/api/post/${id}`)
      .then(res=>{
        resolved(res)
      })
      .catch(err=>{
        reject(err.messgae)
      })
    })
   }
      
   


}