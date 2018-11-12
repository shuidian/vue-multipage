import Vue from 'vue'
import Router from 'vue-router'
import SubModule1 from '../pages/sub-module1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/sub-module1'
    },
    {
      path: '/sub-module1',
      name: 'subModule1',
      component: SubModule1
    }
  ]
})
