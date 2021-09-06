import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')



// const a = [{
//     yes:"hello",
//     leew : "weqww",
//     juno: "cocal"
// }]


// console.log(a)

// const names =[
//     {name:"juno", age:33},
//     {name:"heropy", age:34},
//     {name:"neo", age:23}
// ]

// const new1= [{
//         name:"hds",
//         age:12
//     }]

// names.push(new1)

// console.log(names)
// const newUesrList2 =names.map((user)=>{
//     return Object.assign({},user,{
//         isAudlt: user.age > 19,
//     })  
// })
// console.log(newUesrList2)


// let yes1 ={name: 'mike'}
// // let yes2= {age:21}

// let lang =["English","Korean","js","html"]

// const target1 =Object.assign({},yes1,lang)
// console.log(target1)



// const b = fruits.map((fruit,i)=>({
//     id:i+1,
//     name:`${fruit}-${i+1}`
// }))

// console.log(b)

// const fruits =[ {
//     name:"hdhd",age:12
// }]

// console.log(names.concat(fruits))


