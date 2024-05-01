import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import IndustrialElectricMotors from '../views/IndustrialElectricMotors.vue';
import ElevatorMotors from '../views/ElevatorMotors.vue';
import HeatingUnitMotors from '../views/HeatingUnitMotors.vue';
import HeatingUnitFan from '../views/HeatingUnitFan.vue';
import HeatingUnitPumps from '../views/HeatingUnitPumps.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/industrial-electric-motors',
      name: 'industrial-electric-motors',
      component: IndustrialElectricMotors
    },
    {
      path: '/elevator-motors',
      name: 'elevator-motor',
      component: ElevatorMotors
    },
    {
      path: '/heating-unit-motors',
      name: 'heating-unit-motors',
      component: HeatingUnitMotors
    },
    {
      path: '/heating-unit-motors/heating-unit-fan',
      name: 'HeatingUnitFan',
      component: HeatingUnitFan
    },
    {
      path: '/heating-unit-motors/heating-unit-pumps',
      name: 'HeatingUnitPumps',
      component: HeatingUnitPumps
    },
  ]
})

export default router
