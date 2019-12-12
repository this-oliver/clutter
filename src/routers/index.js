import Vue from 'vue'
import Router from 'vue-router'
import Canvas from '@/components/Canvas'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'Canvas',
    component: Canvas
  }]
})

export default router;
