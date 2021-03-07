import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VDistpicker from 'v-distpicker'


// Vue.component('v-distpicker', VDistpicker);
createApp(App).use(router).use(store).mount('#app')
