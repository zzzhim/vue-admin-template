import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入清除默认样式文件
import 'normalize.css'
import '@/styles/resize.scss'
//引入全局的css文件
import '@/styles/index.scss'
//图标
import '@/icons'

Vue.config.productionTip = true
// 全局引入element-ui
Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')