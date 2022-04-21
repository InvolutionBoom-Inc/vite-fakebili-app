import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/style/reset.css";
import "../src/assets/img/src/bilifont.css";
import router from "./router/index.js";
import store from "./store/index.js";

createApp(App).use(router).use(store).mount("#app");
