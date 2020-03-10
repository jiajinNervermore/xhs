import Vue from 'vue' //引入Vue对象
import Router from 'vue-router'//引入路由
//引入自定义组件

import index from './components/xhs/index.vue'
// import messageall from './components/xhs/messageall.vue'

Vue.use(Router)//将路由对象注册
//配置组件访问路径
export default new Router({
  routes:[
    // {path:"/messagelist",component:messagelist},
    {path:"/index",component:index}
    // {path:"/message",component:messageall}
  ]
})