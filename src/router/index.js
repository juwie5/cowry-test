import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import Modal from '../components/Modal.vue'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
   path: '/modal/:id',
   name: 'Modal',
   component: Modal
  },
  {
    path: '',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "Index" */ '../components/Index.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
