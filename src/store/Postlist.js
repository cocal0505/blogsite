import axios from "axios"


export default {
    namespaced: true,
    state:()=>({
      status : false ,
      dropdown : false,
      open: false,
      collectedData1:[],
      detaildata1 :{},
      tags :[],
      edit1: false,
      indexNum : []
    }),
    mutations: {
      openSideBar(state){
        state.status = !state.status     
      },
      resetState(state){
        state.status = false
        state.dropdown = false
        state.open = false
        state.edit1 = false
      },
      openDropDown(state){
        state.dropdown = !state.dropdown
      },
      fetchdata(state,collectedData){
        state.collectedData1 = collectedData
        console.log("fetchfromfirst",state.collectedData1)
      }, 
      deletecollected(state,indexNumber){
        state.collectedData1.splice(indexNumber,1)
        console.log("deletedata",state.collectedData1)
        console.log("deletenumber",indexNumber)
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
      },
      addtolist(state,creatdata){
           
        state.collectedData1.push(creatdata)
      },
      editstate(state){
        state.edit1 = !state.edit1
        console.log("clicked")
      },
      updatepost(state,newdata){
        const {data, indexnumber} =newdata
        state.collectedData1.splice(indexnumber,1,data)
        console.log(state.collectedData1)
       
      },
      indexnumbers(state,data){
          state.indexNum = data 
          // console.log(state.indexNum)
          // console.log(data )
      }
  
    },
    actions: {

      // delete데이터 //
      deleteList({commit},payload){
        const {idNumber ,indexNumber, account} =payload

        if(account === undefined){
          alert("please log in first")
          console.log("true")
          return; 
        }else{
          axios.post(`/api/post/${idNumber}/delete/`)
          .then(res=>{
            console.log(res)
            commit('deletecollected',indexNumber)
          })
          .catch(err=>{
            console.log(err)
          })
        }
       
      },





        // 데이터 업테이트 //
        updatecontents({commit},payload){
            const { data, index } =payload
            
              axios.post(`/api/post/${index}/update/`,data)
              .then(res=>{
                commit ('updatepost',{
                  data : res.data,
                  indexnumber :index-1
                })
              }).catch(err=>{
                console.log(err)
              })
            
         
           
        }, 


      //데이터 생성 호출 // 
      creatdata({commit},payload){
        const { id, account } =payload
        if(account === undefined){
          alert("please log in first")
          console.log("true")
          return; 
        }else{
          axios.post('/api/post/create/' ,id)
        .then(res=>{
            commit('addtolist', res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        }
        
    },
  
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

