import { createRouter, createWebHistory } from 'vue-router'
import Calculator from './components/Calculator.vue'
import Merchant from './components/MerchantValue.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Calculator,
    },
    {
      path: '/merchants',
      component: Merchant,
    }
  ]
})