import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestExport from '../views/TestExport.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jiyun',
    name: 'jiyun',
    component: () => import(/* webpackChunkName: "jiyun" */ '../views/JiyunView.vue')
  },
  {
    path: '/test',
    name: 'name',
    component: TestExport
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
