import Vue from 'vue'
import Router from 'vue-router'
// import Indexpage from '@/view/Indexpage'
// import CompanyDetail from '@/components/CompanyDetail'
// import CompanyStructure from '@/components/CompanyStructure'
// import CompanyCulture from '@/components/CompanyCulture'
// import CompanyNews from '@/components/CompanyNews'
// import CompanyKFNews from '@/components/CompanyKFNews'
// import CompanyProject1 from '@/components/CompanyProject1'
// import CompanyProject2 from '@/components/CompanyProject2'
// import CompanyRecruitment from '@/components/CompanyRecruitment'
// import CompanyAddress from '@/components/CompanyAddress'

// 解决重复路由导致重复点击菜单红字
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this,location).catch(err => err) 
}

Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      redirect:'/WelcomePage',
    },
    {
      path: '/WelcomePage',
      name: 'WelcomePage',
      component: resolve => require(['@/view/WelcomePage'], resolve)
    },
    {
      path: '/Indexpage',
      name: 'Indexpage',
      // component: Indexpage
      component: resolve => require(['@/view/Indexpage'], resolve)
    },
    {
      path: '/CompanyDetail',
      name: 'CompanyDetail',
      // component: CompanyDetail
      component: resolve => require(['@/view/CompanyDetail'], resolve)
    },
    {
      path: '/CompanyStructure',
      name: 'CompanyStructure',
      // component: CompanyStructure
      component: resolve => require(['@/view/CompanyStructure'], resolve)
    },
    {
      path: '/CompanyCulture',
      name: 'CompanyCulture',
      // component: CompanyCulture
      component: resolve => require(['@/view/CompanyCulture'], resolve)
    },
    {
      path: '/CompanyNews',
      name: 'CompanyNews',
      // component: CompanyNews
      component: resolve => require(['@/view/CompanyNews'], resolve)
    },
    {
      path: '/CompanyKFNews',
      name: 'CompanyKFNews',
      // component: CompanyKFNews
      component: resolve => require(['@/view/CompanyKFNews'], resolve)
    },
    {
      path: '/CompanyProject1',
      name: 'CompanyProject1',
      // component: CompanyProject1
      component: resolve => require(['@/view/CompanyProject1'], resolve)
    },
    {
      path: '/CompanyProject2',
      name: 'CompanyProject2',
      // component: CompanyProject2
      component: resolve => require(['@/view/CompanyProject2'], resolve)
    },
    {
      path: '/CompanyRecruitment',
      name: 'CompanyRecruitment',
      // component: CompanyRecruitment
      component: resolve => require(['@/view/CompanyRecruitment'], resolve)
    },
    {
      path: '/CompanyAddress',
      name: 'CompanyAddress',
      // component: CompanyAddress
      component: resolve => require(['@/view/CompanyAddress'], resolve)
    },
    {
      path: '/CompanyNewsDetail1',
      name: 'CompanyNewsDetail1',
      component: resolve => require(['@/view/CompanyNewsDetail1'], resolve)
    },
    {
      path: '/CompanyNewsDetail2',
      name: 'CompanyNewsDetail2',
      component: resolve => require(['@/view/CompanyNewsDetail2'], resolve)
    },
    {
      path: '/CompanyNewsDetail3',
      name: 'CompanyNewsDetail3',
      component: resolve => require(['@/view/CompanyNewsDetail3'], resolve)
    },
    {
      path: '/CompanyKFnewsDetail1',
      name: 'CompanyKFnewsDetail1',
      component: resolve => require(['@/view/CompanyKFnewsDetail1'], resolve)
    },
    {
      path: '/CompanyKFnewsDetail2',
      name: 'CompanyKFnewsDetail2',
      component: resolve => require(['@/view/CompanyKFnewsDetail2'], resolve)
    },
    {
      path: '/CompanyKFnewsDetail3',
      name: 'CompanyKFnewsDetail3',
      component: resolve => require(['@/view/CompanyKFnewsDetail3'], resolve)
    },
  ]
})
