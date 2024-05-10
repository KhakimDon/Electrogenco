import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import BlogView from '../views/BlogView.vue';
import BlogItem from '../views/BlogItem.vue';
import BranchesView from '../views/BranchesView.vue';
import ProductsView from '../views/ProductsView.vue';
import IndustrialElectricMotors from '../views/IndustrialElectricMotors.vue';
import ElevatorMotorsView from '../views/ElevatorMotorsView.vue';
import HeatingUnitMotorsView from '../views/HeatingUnitMotorsView.vue';
import HeatingUnitFanView from '../views/HeatingUnitFanView.vue';
import HeatingUnitFanViewItem from '../views/HeatingUnitFanViewItem.vue';
import HeatingUnitPumpsView from '../views/HeatingUnitPumpsView.vue';
import WaterPumpsView from '../views/WaterPumpsView.vue';
import WaterPumpsViewItem from '../views/WaterPumpsViewItem.vue';
import VentilationMotorsView from '../views/VentilationMotorsView.vue';

import AirCurtainMotorView from '../views/AirCurtainMotorView.vue';
import AirCurtainMotorViewItem from '../views/AirCurtainMotorViewItem.vue';
import DuctSplitMotorsView from '../views/DuctSplitMotorsView.vue';
import DuctSplitMotorsViewItem from '../views/DuctSplitMotorsViewItem.vue';
import FanMotorsView from '../views/FanMotorsView.vue';
import FanMotorsViewItem from '../views/FanMotorsViewItem.vue';
import FanCoilMotorsView from '../views/FanCoilMotorsView.vue';
import FanCoilMotorsViewItem from '../views/FanCoilMotorsViewItem.vue';
import IndustrialExhaustFanMotorsView from '../views/IndustrialExhaustFanMotorsView.vue';
import IndustrialExhaustFanMotorsViewItem from '../views/IndustrialExhaustFanMotorsViewItem.vue';
import BurnerMotorsView from '../views/BurnerMotorsView.vue';
import BurnerMotorsViewItem from '../views/BurnerMotorsViewItem.vue';
import MotorsAndWaterPumpsForDesertCooler from '../views/MotorsAndWaterPumpsForDesertCooler.vue';
import WaterPumpsForDesertCoolerItem from '../views/WaterPumpsForDesertCoolerItem.vue';
import MotorsForDesertCooler from '../views/MotorsForDesertCooler.vue';
import MotorsForDesertCoolerItem from '../views/MotorsForDesertCoolerItem.vue';
import WaterPumpsForDesertCooler from '../views/WaterPumpsForDesertCooler.vue';
import AllproductsView from '../views/AllproductsView.vue';
import AllProductItemView from '../views/AllProductItemView.vue';
import IndustrialElectricMotorsItem from '../views/IndustrialElectricMotorsItem.vue';
import ElevatorMotorsViewItem from '../views/ElevatorMotorsViewItem.vue';
import HeatingUnitPumpsViewItem from '../views/HeatingUnitPumpsViewItem.vue';

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
      path: '/blog',
      name: 'Blog',
      component: BlogView
    },
    {
      path: '/blog/:id',
      name: 'Blogitem',
      component: BlogItem
    },
    {
      path: '/branches',
      name: 'BranchesView',
      component: BranchesView
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
      path: '/industrial-electric-motors/:id',
      name: 'industrial-electric-motors-item',
      component: IndustrialElectricMotorsItem
    },
    {
      path: '/elevator-motors',
      name: 'elevator-motor',
      component: ElevatorMotorsView
    },
    {
      path: '/elevator-motors/:id',
      name: 'elevator-motor-item',
      component: ElevatorMotorsViewItem
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
      path: '/heating-unit-motors/heating-unit-fan/:id',
      name: 'HeatingUnitFanViewItem',
      component: HeatingUnitFanViewItem
    },
    {
      path: '/heating-unit-motors/heating-unit-pumps',
      name: 'HeatingUnitPumps',
      component: HeatingUnitPumpsView
    },
    {
      path: '/heating-unit-motors/heating-unit-pumps/:id',
      name: 'HeatingUnitPumpsViewItem',
      component: HeatingUnitPumpsViewItem
    },
    {
      path: '/water-pumps',
      name: 'WaterPumps',
      component: WaterPumpsView
    },
    {
      path: '/water-pumps/:id',
      name: 'WaterPumpsViewItem',
      component: WaterPumpsViewItem
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
      path: '/ventilation-motors/air-curtain-motor/:id',
      name: 'AirCurtainMotorViewItem',
      component: AirCurtainMotorViewItem
    },
    {
      path: '/ventilation-motors/duct-split-motors',
      name: 'DuctSplitMotors',
      component: DuctSplitMotorsView
    },
    {
      path: '/ventilation-motors/duct-split-motors/:id',
      name: 'DuctSplitMotorsViewItem',
      component: DuctSplitMotorsViewItem
    },
    {
      path: '/ventilation-motors/fan-motors',
      name: 'FanMotors',
      component: FanMotorsView
    },
    {
      path: '/ventilation-motors/fan-motors/:id',
      name: 'FanMotorsViewItem',
      component: FanMotorsViewItem
    },
    {
      path: '/ventilation-motors/fan-coil-motors',
      name: 'FanCoilMotors',
      component: FanCoilMotorsView
    },
    {
      path: '/ventilation-motors/fan-coil-motors/:id',
      name: 'FanCoilMotorsViewItem',
      component: FanCoilMotorsViewItem
    },
    {
      path: '/ventilation-motors/industrial-exhaust-fan-motors',
      name: 'IndustrialExhaustFanMotors',
      component: IndustrialExhaustFanMotorsView
    },
    {
      path: '/ventilation-motors/industrial-exhaust-fan-motors/:id',
      name: 'IndustrialExhaustFanMotorsViewItem',
      component: IndustrialExhaustFanMotorsViewItem
    },
    {
      path: '/burder-motors',
      name: 'BurnerMotorsView',
      component: BurnerMotorsView
    },
    {
      path: '/burder-motors/:id',
      name: 'BurnerMotorsViewItem',
      component: BurnerMotorsViewItem
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
      path: '/motors-and-water-pumps-for-desert-cooler/motors-for-desert-cooler/:id',
      name: 'MotorsForDesertCoolerItem',
      component: MotorsForDesertCoolerItem
    },
    {
      path: '/motors-and-water-pumps-for-desert-cooler/water-pumps-for-desert-cooler',
      name: 'WaterPumpsForDesertCooler',
      component: WaterPumpsForDesertCooler
    },
    {
      path: '/motors-and-water-pumps-for-desert-cooler/water-pumps-for-desert-cooler/:id',
      name: 'WaterPumpsForDesertCoolerItem',
      component: WaterPumpsForDesertCoolerItem
    },
    {
      path: '/allproducts',
      name: 'AllproductsView',
      component: AllproductsView,
    },
    {
      path: '/allproducts/:id', 
      name: 'AllProductItemView',
      component: AllProductItemView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ]
})

export default router
