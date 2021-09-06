import { createRouter, createWebHashHistory} from 'vue-router'
import Home from "./Home.vue"
import PostDetail from  "./PostDetail.vue"
import PostList from "./PostList.vue"
import postlistExtra from  "./postlistExtra.vue"
import Login from "./Login.vue"
export default createRouter ({
  // hash 모드 
  history: createWebHashHistory(), 
//   scrollBehavior(){
//     return { top: 0 }
//   },
  // pages
  routes:[
    {
      // https://google.com/  슬레시 하나면 메인페이지 
      path:'/',
      component:Home,
    }, 
    {
      path:'/postDeatil/:postid', 
      component: PostDetail,
    },
    {
      path:'/postList/', 
      component: PostList,
    },
    {
      path:'/postlist/extra',
      component: postlistExtra,
    },
    {
      path: '/Login/', 
      component : Login
    }
     
  ]
})