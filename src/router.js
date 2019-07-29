import Vue from 'vue'
import Router from 'vue-router'

//官网
import Home from './views/website/Home'

//商城
import ShoppingHome from './views/shoppingMall/Home'
import VaseDetail from './views/shoppingMall/detail/vase'
import Detail from './views/shoppingMall/detail/detail'

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
            path: '/shoppingMall/Home',
            name: 'ShoppingHome',
            component: ShoppingHome,

        },
        {
            path: '/shoppingMall/detail/vase',
            name: 'VaseDetail',
            component:VaseDetail,
        },
        {
            path: '/shoppingMall/detail/detail',
            name: 'Detail',
            component:Detail,
        }
    ]

})
