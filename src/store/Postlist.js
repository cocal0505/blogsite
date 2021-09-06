import axios from "axios"


export default {
    namespaced: true,
    state:()=>({
      status : false ,
      dropdown : false,
      open: false,
      collectedData1:[],
      detaildata1 :{},
      tags :[]
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
      fetchtags(state,tagsdata){
        tagsdata.forEach((tag)=>{
          if(tag.weight ===  3) tag.color = "rgb(0, 90, 65)";
          else if(tag.weight === 2) tag.color = "rgb(48, 106, 129)";
          else if(tag.weight === 1) tag.color = 'white';
        })
        state.tags = tagsdata
        console.log(state.tags)
      }
  
    },
    actions: {
  
     //최초테아터리스트호출
     async fetchdata({commit},payload1){
         
        try{
          const res = await _fetchdata({
             tags : payload1 
          })
          commit( 'fetchfromserver',res.data)
        }catch(message){
          console.log(message)
        }finally{
          console.log("end")
        }
      },
       
  
    
      async fetchdetail({commit},payload){
        const {id} = payload
        try{
            const res = await _fetchdeatil({
              id : id
            })
            commit('fetchdetail',res.data)
  
        }catch(message){
          console.log(message)
        }finally{
          console.log("end")
        }
      },
  
      async fetchtag({commit}){
  
        try{
          const res = await _fetchtag({
          })
          commit('fetchtags',res.data)
          
        }catch(message){
            console.log(message)
        }finally{
          console.log("tagend")
        }
        
      }
  
  
  
  
    },
}



function _fetchdata(payload){
     
        
    const { tags } =payload
     
     console.log(tags)

     const geturl = tags 
     ? `/api/post/list/?tagname=${tags}`
     :"/api/post/list/"
       // if (tags) {
       //  let geturl = `/api/post/list/?tagname=${tags}`
       // }else{
       //  let geturl = "/api/post/list/"
       // }

     return new Promise ((resolve,reject)=>{
       axios.get( geturl)
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



function _fetchtag(){

 return new Promise((resolved,reject)=>{
   axios.get('/api/tag/cloud/')
   .then(res=>{
     resolved(res)
   })
   .catch(err=>{
     reject(err.messgae)
   })
 })
}

