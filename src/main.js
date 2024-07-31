import { createApp } from 'vue'
// import './style.css'
import './assets/css/tailwind.css'
import router from './router';
import App from './App.vue'
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 3000
})

app.use(router)
app.mount('#app')
