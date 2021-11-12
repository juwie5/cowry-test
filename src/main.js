import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import masonry from 'vue-next-masonry'

const app = createApp(App);
app.use(router);
app.use(masonry);
app.mount('#app');
