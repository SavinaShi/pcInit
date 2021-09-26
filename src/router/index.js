import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/Sidebar' },
    {
        path: "/Sidebar",
        component: () =>
            import(/* webpackChunkName: "Home" */ "../components/Sidebar.vue"),
        meta: { title: "Sidebar", keepAlive: true },
    },
    { path: '*', redirect: '/Sidebar' }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router;
