import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sync-page',
      component: require('@/components/SyncPage').default
    },
    {
      path: '/setting',
      name: 'setting-page',
      component: require('@/components/SettingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
