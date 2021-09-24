import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/HelloWorld' },
    {
        path: "/",
        component: () =>
            import(/* webpackChunkName: "Home" */ "../components/HelloWorld.vue"),
        meta: { title: "HelloWorld", requiresAuth: true },
    },
    { path: '*', redirect: '/HelloWorld' }
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
