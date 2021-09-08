import { createStore } from 'vuex'
import Postlist from "./Postlist.js"
import Userdata from "./Userdata.js"
import CRUD from "./CRUD.js"
export default createStore ({
  modules: {
    Postlist,
    Userdata,
    CRUD
  },
  
})


