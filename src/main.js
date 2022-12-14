import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { createApp, markRaw } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

const pinia = createPinia()
  .use(piniaPersist)
  .use(({ store }) => {
    store.$router = markRaw(router);
    //this.$router.push
    //this.$router.replace dentro de pinia (store/user.js store.taks.js)
  });

createApp(App).use(pinia).use(router).mount("#app");


// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// import './assets/style.css'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
