import Vue from 'vue'
import Router from 'vue-router'

import BlogHome from '@/components/BlogHome'
import BlogPost from '@/components/BlogPost'

import Home from '@/views/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/blog/:slug',
      name: 'BlogPost',
      component: BlogPost
    }
  ]
})
