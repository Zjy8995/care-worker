import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://121.5.70.94:8085/'

if (window.localStorage.getItem('user')) {
    console.log(window.localStorage.getItem('user'));
    store.commit('setUserInfo', JSON.parse(window.localStorage.getItem('user')))
}

createApp(App).use(store).use(router).use(ElementPlus, {
    locale: zhCn,
  }).mount('#app')
