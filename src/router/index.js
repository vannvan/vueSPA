import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path:'/menu',
      component: resolve => require(['@/components/common/base/menu.vue'], resolve),
      children:[
        {
          path:'/index',
          component: resolve => require(['@/components/index.vue'], resolve),
        },
        {
          path: '/HelloWorld',
          component: resolve => require(['@/components/views/HelloWorld'], resolve),
          meta:{
              title:'helloWorld'
          }
        },
        {
          path: '/NpmPackages',
          component: resolve => require(['@/components/views/openSource/NpmPackages'], resolve),
          meta:{
              title:'npm包'
          }
        },
        {
          path: '/GithubRepos',
          component: resolve => require(['@/components/views/openSource/GithubRepos'], resolve),
          meta:{
              title:'github仓库'
          }
        },
        {
          path: '/Icon',
          component: resolve => require(['@/components/views/tools/Icon'], resolve),
          meta:{
              title:'图标'
          }
        },

        // demo
        {
          path: '/transition',
          component: resolve => require(['@/components/views/demo/transition'], resolve),
          meta:{
              title:'vue动画'
          }
        },
        {
          path: '/HelfRate',
          component: resolve => require(['@/components/views/demo/HelfRate'], resolve),
          meta:{
              title:'半星评分'
          }
        },

      ]
    },

  ]
})
