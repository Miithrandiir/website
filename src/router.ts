import Home from "./Pages/Home.vue";
import Skills from "./Pages/Skills.vue";
//@ts-ignore
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/skills', component: Skills}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
