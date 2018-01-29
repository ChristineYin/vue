import Vue from 'vue'
import Router from 'vue-router'
import IndexView from 'views/index'
import DetailView from 'views/detail'
import DetailAnaView from 'views/detail/analysis'
import DetailCouView from 'views/detail/count'
import DetailForView from 'views/detail/forecast'
import DetailPubView from 'views/detail/publish'
import OrderListView from 'views/orderList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/orderList',
      component: OrderListView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaView
        },
        {
          path: 'count',
          component: DetailCouView
        },
        {
          path: 'forecast',
          component: DetailForView
        },
        {
          path: 'publish',
          component: DetailPubView
        }
      ]
    }
  ]
})
