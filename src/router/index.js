//路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from  '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component:Msite
    },
    {
      path: '/classify',
      component:Classify
    },
    {
      path: '/shopcart',
      component:ShopCart
    },
    {
      path: '/profile',
      component:Profile
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
