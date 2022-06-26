import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import Video from "../pages/Video.vue"
const routes = [
    { path: "/", name: "Login", component: Login },
    { path: "/Home", name: "Home", component: Home },
    { path: "/Video", name: "Video", component: Video }
];
const router = createRouter({ history: createWebHashHistory(), routes });
export default router;