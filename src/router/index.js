import Vue from 'vue'
import Router from 'vue-router'
import MarkupApp from '@/views/markup/MarkupApp'
import Popup from '@/views/markup/common/Popup'
import Main from '@/views/markup/main/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MarkupApp',
      component: MarkupApp
    },
    {
      path: '/markup/common/Popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/markup/main/Main',
      name: 'Main',
      component: Main
    }
  ]
})
