import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AttributeBind from '../views/AttributeBind.vue'
import DataBinding from '../views/DataBinding.vue'
import VHtmlBind from '../views/VHtmlBind.vue'
import FormBind from '../views/FormBind.vue'
import ClassBind from '../views/ClassBind.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bind',
    name: 'bind',
    component: DataBinding
  },
  {
    path: '/vhtml',
    name: 'vhtml',
    component: VHtmlBind
  },
  {
    path: '/form',
    name: 'form',
    component: FormBind
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: AttributeBind
  },
  {
    path: '/class',
    name: 'class',
    component: ClassBind
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
