import Vue from 'vue'
import Router from 'vue-router'

//官网
import Home from './views/website/Home'

//商城
import ShoppingHome from './views/shoppingMall/Home'

Vue.use(Router)

export default new Router({
    routes: [
        //官网
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        //商城
        {
            path:'/shppingMall/Home',
            name:'ShoppingHome',
            component:ShoppingHome

        }
    ],

})
