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
      path:'/Menu',
      component: resolve => require(['@/components/common/base/Menu.vue'], resolve),
      children:[
        {
          path:'/Index',
          component: resolve => require(['@/components/Index.vue'], resolve),
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
          path: '/Transition',
          component: resolve => require(['@/components/views/demo/Transition'], resolve),
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
        {
          path: '/ArchivesTable',
          component: resolve => require(['@/components/views/archives/Table'], resolve),
          meta:{
              title:'文章存档'
          }
        },
        {
          path: '/virtualList',
          component: resolve => require(['@/components/views/virtualList'], resolve),
          meta:{
              title:'虚拟列表'
          }
        },

      ]
    },

  ]
})
