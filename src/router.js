import Vue from 'vue'
import Router from 'vue-router'

//官网
import webSiteTemplate from './views/website/template'

//商城
import ShoppingTemplate from './views/shoppingMall/template'
// import ShoppingHome from './views/shoppingMall/Home'

Vue.use(Router)

export default new Router({
    routes: [
        //官网
        {
            path: '/',
            name: 'webSiteTemplate',
            component: webSiteTemplate,
            redirect:'/website/Home',
            children:[
                {
                    path: '/website/Home',
                    name: 'websiteHome',
                    component: () => import("./views/website/Home")
                },
            ]
        },

        //商城
        {
            path: '/shoppingMall',
            name: 'ShoppingTemplate',
            component: ShoppingTemplate,
            redirect: '/shoppingMall/Home',
            children:[
                {
                    path: '/shoppingMall/Home',
                    name: 'shoppingMallHome',
                    component: () => import("./views/shoppingMall/Home")
                },
                {
                    path: '/shoppingMall/detail/vase',
                    name: 'VaseDetail',
                    component: () => import("./views/shoppingMall/detail/vase")
                },
                {
                    path: '/shoppingMall/detail/detail',
                    name: 'Detail',
                    component: () => import("./views/shoppingMall/detail/detail")
                },
                {
                    path: '/shoppingMall/user/usercenter',
                    name: 'UserCenter',
                    component: () => import("./views/shoppingMall/user/usercenter")
                }
            ]
        },

    ]

})
