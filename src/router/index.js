import Vue from 'vue'
import Router from 'vue-router'
import PictureUpload from '@/components/PictureUpload'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/picUpload',
      name: 'PictureUpload',
      component: PictureUpload
    }
  ]
})
