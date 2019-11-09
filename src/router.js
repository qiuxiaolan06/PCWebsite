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
                {
                    path: '/website/about/detail',
                    name: 'websiteAbout',
                    component: () => import("./views/website/about/detail")
                },
                {
                    path: '/website/money/detail',
                    name: 'websiteMoney',
                    component: () => import("./views/website/money/detail")
                },
                {
                    path: '/website/tenants/detail',
                    name: 'websiteTenants',
                    component: () => import("./views/website/tenants/detail")
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
