import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("./components/Home.vue"),
        props: true,
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./components/About.vue"),
    },
    {
        path: '/404',
        name: '404', 
        component: () => import("./components/404.vue"),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;