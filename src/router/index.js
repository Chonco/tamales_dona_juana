import Home from "../views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import { isUserLoggedIn } from "../auth/utils";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			redirectIfLoggedIn: false,
			requiresLogged: false,
		},
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
		meta: {
			redirectIfLoggedIn: false,
			requiresLogged: false,
		},
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../views/Register.vue"),
		meta: {
			redirectIfLoggedIn: true,
			requiresLogged: false,
		},
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/Login.vue"),
		meta: {
			redirectIfLoggedIn: true,
			requiresLogged: false,
		},
	},
	{
		path: "/logout",
		name: "logout",
		component: () => import("../views/Logout.vue"),
		meta: {
			redirectIfLoggedIn: false,
			requiresLogged: true,
		},
	},
	{
		path: "/posts",
		name: "posts",
		component: () => import("../views/AllPosts.vue"),
		meta: {
			requiresLogged: false,
			redirectIfLoggedIn: false,
		},
	},
	{
		path: "/me",
		name: "me",
		component: () => import("../views/Me.vue"),
		meta: {
			requiresLogged: false,
			redirectIfLoggedIn: false,
		},
	},
	{
		path: "/create-post",
		name: "create-post",
		component: () => import("../views/CreatePost.vue"),
		meta: {
			requiresLogged: false,
			redirectIfLoggedIn: false,
		},
	},
	{
		path: "/edit-post",
		name: "edit-post",
		component: () => import("../views/EditPost.vue"),
		props: true,
		meta: {
			requiresLogged: false,
			redirectIfLoggedIn: false,
		},
	},
	{ path: "*", redirect: { name: "Home" } },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, _from, next) => {
	const isLoggedIn = isUserLoggedIn();

	if (to.meta.requiresLogged && !isLoggedIn) {
		return next({ name: "login" });
	}

	if (to.meta.redirectIfLoggedIn && isLoggedIn) {
		return next({ name: "Home" });
	}

	return next();
});

export default router;
