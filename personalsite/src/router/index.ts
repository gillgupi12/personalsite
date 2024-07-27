import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition){
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,    
    },
    {
      path: '/',
      name: 'experiences',
      component: ExperienceView
    },
    {
      path: '/',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/',
      name: 'projects',
      component: ProjectView
    },
    
  ]
})

export default router
