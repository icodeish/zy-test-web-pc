

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/assets/global.css'
import Antd from 'ant-design-vue';


const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
