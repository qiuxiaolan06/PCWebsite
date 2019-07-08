import Vue from 'vue'
import App from './App.vue'
import router from './router'

//element 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

//百度地图
import BaiduMap from 'vue-baidu-map'

Vue.use(ElementUI)
Vue.use(BaiduMap,{
  ak:'YOU_APP_kEY'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router,
}).$mount('#app')
