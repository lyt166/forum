import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import "es6-promise/auto";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from "vue-axios";
import Video from "video.js";
import VideoPlayer  from 'vue-video-player';
import "video.js/dist/video-js.css";
import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import "element-plus/theme-chalk/index.css";
import "dayjs/locale/zh-cn"
import locale from "element-plus/es/locale/lang/zh-cn";
// import locale from "element-plus/es6/locale/lang/zh-cn";

axios.defaults.baseURL="/api"

createApp(App)
    .use(ElementPlus, {locale})
    .use(store)
    .use(router)
    .use(VideoPlayer)
    .use(VueAxios, axios)
    .mount('#app');
