import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
mode: 'history',
base: process.env.BASE_URL,
routes: [
	{
	path: '/',
	name: 'home',
	component: Home
	},
	{
	path: '/about',
	name: 'about',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
	},
	{
	path: '/visuals-by-impulse',
	name: 'vbi',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ './views/casestudies/visuals-by-impulse/Casestudy.vue')
	},
	{
	path: '/canvascope',
	name: 'canvascope',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ './views/casestudies/canvascope/Casestudy.vue')
	},
	{
	path: '/elyumn',
	name: 'elyumn',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ './views/casestudies/elyumn/Casestudy.vue')
	},
	{
	path: '/stream-design-factory',
	name: 'stream-design-factory',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ './views/casestudies/stream-design-factory/Casestudy.vue')
	},
	{
	path: '/concur-app',
	name: 'concur-app',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ './views/casestudies/concur-app/Casestudy.vue')
	},
],
scrollBehavior (to, from, savedPosition){
	return { x: 0, y: 0 }
}
})
