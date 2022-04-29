import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";

import VueCron from "vue-cron";

import router from "./router";
import store from "./store";
import axios from "axios";
import "echarts";
import ECharts from "vue-echarts";

axios.defaults.baseURL = "http://121.5.70.94:8085/";

if (window.localStorage.getItem("user")) {
  store.commit("setUserInfo", JSON.parse(window.localStorage.getItem("user")));
}

if (window.localStorage.getItem("curOlderId")) {
  store.commit("setCurOlderId", window.localStorage.getItem("curOlderId"));
}

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(VueCron)
  .mount("#app");
