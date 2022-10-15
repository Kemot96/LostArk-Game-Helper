import { createRouter, createWebHistory } from 'vue-router'
import Calculator from './components/Calculator.vue'
import Merchant from './components/MerchantValue.vue'
import Tripod from './components/Tripods.vue'

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
    },
    {
      path: '/tripods',
      component: Tripod,
    }
  ]
})