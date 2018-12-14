import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'

import Login from './views/login/Index'
import Dashboard from './views/dashboard/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
      ],
    },
  ],
})
