import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Share = () => import('components/share/share')
const UserCenter = () => import('components/user-center/user-center')
const ProfitList = () => import('components/profit-list/profit-list')
const ProfitRecord = () => import('components/profit-record/profit-record')
const Rule = () => import('components/rule/rule')
const Problem = () => import('components/problem/problem')
const Introduction = () => import('components/introduction/introduction')
const Withdrawals = () => import('components/withdrawals/withdrawals')
const WithdrawalsRecord = () => import('components/withdrawals-record/withdrawals-record')
const MyShare = () => import('components/my-share/my-share')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/share',
      meta: {
        title: '分享内容'
      }
    },
    {
      path: '/share',
      name: 'share',
      component: Share,
      meta: {
        title: '分享内容'
      }
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/profitList',
      name: 'profitList',
      component: ProfitList,
      meta: {
        title: '收益榜'
      }
    },
    {
      path: '/myShare',
      name: 'myShare',
      component: MyShare,
      meta: {
        title: '我的分享'
      }
    },
    {
      path: '/profitRecord',
      name: 'profitRecord',
      component: ProfitRecord,
      meta: {
        title: '收益记录'
      }
    },
    {
      path: '/rule',
      name: 'rule',
      component: Rule,
      meta: {
        title: '用户规则'
      }
    },
    {
      path: '/problem',
      name: 'problem',
      component: Problem,
      meta: {
        title: '常见问题'
      }
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction,
      meta: {
        title: '推广平台介绍'
      }
    },
    {
      path: '/withdrawals',
      name: 'withdrawals',
      component: Withdrawals,
      meta: {
        title: '提现'
      }
    },
    {
      path: '/withdrawalsRecord',
      name: 'withdrawalsRecord',
      component: WithdrawalsRecord,
      meta: {
        title: '提现记录'
      }
    }
  ]
})
