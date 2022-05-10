import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/Home", name: "Home", component: Home },
];
const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
