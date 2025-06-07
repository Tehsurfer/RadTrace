import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import MilkComparison from '../pages/MilkComparison.vue';
import FarmToPlateBreakdown from '../pages/FarmToPlateBreakdown.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/milk-comparison',
    name: 'MilkComparison',
    component: MilkComparison
  },
  {
    path: '/milk-path-map',
    name: 'MilkPathMap',
    component: () => import('@/pages/MilkPathMap.vue')
  },
  {
    path: '/farm-to-plate-breakdown',
    name: 'FarmToPlateBreakdown',
    component: FarmToPlateBreakdown
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;