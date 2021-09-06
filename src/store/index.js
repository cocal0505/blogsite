import { createStore } from 'vuex'
import Postlist from "./Postlist.js"
import Userdata from "./Userdata.js"

export default createStore ({
  modules: {
    Postlist,
    Userdata
  },
  
})


