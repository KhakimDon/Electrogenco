import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import IndustrialElectricMotors from '../views/IndustrialElectricMotors.vue';
import ElevatorMotorsView from '../views/ElevatorMotorsView.vue';
import HeatingUnitMotorsView from '../views/HeatingUnitMotorsView.vue';
import HeatingUnitFanView from '../views/HeatingUnitFanView.vue';
import HeatingUnitPumpsView from '../views/HeatingUnitPumpsView.vue';
import WaterPumpsView from '../views/WaterPumpsView.vue';
import VentilationMotorsView from '../views/VentilationMotorsView.vue';

import AirCurtainMotorView from '../views/AirCurtainMotorView.vue';
import DuctSplitMotorsView from '../views/DuctSplitMotorsView.vue';
import FanMotorsView from '../views/FanMotorsView.vue';
import FanCoilMotorsView from '../views/FanCoilMotorsView.vue';
import IndustrialExhaustFanMotorsView from '../views/IndustrialExhaustFanMotorsView.vue';
import BurnerMotorsView from '../views/BurnerMotorsView.vue';
import MotorsAndWaterPumpsForDesertCooler from '../views/MotorsAndWaterPumpsForDesertCooler.vue';
import MotorsForDesertCooler from '../views/MotorsForDesertCooler.vue';
import WaterPumpsForDesertCooler from '../views/WaterPumpsForDesertCooler.vue';
import AllproductsView from '../views/AllproductsView.vue';

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
      component: ElevatorMotorsView
    },
    {
      path: '/heating-unit-motors',
      name: 'heating-unit-motors',
      component: HeatingUnitMotorsView
    },
    {
      path: '/heating-unit-motors/heating-unit-fan',
      name: 'HeatingUnitFan',
      component: HeatingUnitFanView
    },
    {
      path: '/heating-unit-motors/heating-unit-pumps',
      name: 'HeatingUnitPumps',
      component: HeatingUnitPumpsView
    },
    {
      path: '/water-pumps',
      name: 'WaterPumps',
      component: WaterPumpsView
    },
    {
      path: '/ventilation-motors',
      name: 'VentilationMotors',
      component: VentilationMotorsView
    },
    {
      path: '/ventilation-motors/air-curtain-motor',
      name: 'AirCurtainMotor',
      component: AirCurtainMotorView
    },
    {
      path: '/ventilation-motors/duct-split-motors',
      name: 'DuctSplitMotors',
      component: DuctSplitMotorsView
    },
    {
      path: '/ventilation-motors/fan-motors',
      name: 'FanMotors',
      component: FanMotorsView
    },
    {
      path: '/ventilation-motors/fan-coil-motors',
      name: 'FanCoilMotors',
      component: FanCoilMotorsView
    },
    {
      path: '/ventilation-motors/industrial-exhaust-fan-motors',
      name: 'IndustrialExhaustFanMotors',
      component: IndustrialExhaustFanMotorsView
    },
    {
      path: '/burder-motors',
      name: 'BurnerMotorsView',
      component: BurnerMotorsView
    },
    {
      path: '/motors-and-water-pumps-for-desert-cooler',
      name: 'MotorsAndWaterPumpsForDesertCooler',
      component: MotorsAndWaterPumpsForDesertCooler
    },
    {
      path: '/motors-and-water-pumps-for-desert-cooler/motors-for-desert-cooler',
      name: 'MotorsForDesertCooler',
      component: MotorsForDesertCooler
    },
    {
      path: '/motors-and-water-pumps-for-desert-cooler/water-pumps-for-desert-cooler',
      name: 'WaterPumpsForDesertCooler',
      component: WaterPumpsForDesertCooler
    },
    {
      path: '/allproducts',
      name: 'AllproductsView',
      component: AllproductsView
    },

  ]
})

export default router
