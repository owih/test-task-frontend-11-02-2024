import { createRouter, createWebHistory } from 'vue-router';
import CoffeeConfiguratorPage from '@/views/CoffeeConfiguratorPage.vue';
import CoffeeConfiguratorListPage from '@/views/CoffeeConfiguratorListPage.vue';

const routes = [
  {
    path: '',
    name: 'CoffeeConfiguratorPage',
    component: CoffeeConfiguratorPage,
  },
  {
    path: '/list',
    name: 'CoffeeConfiguratorListPage',
    component: CoffeeConfiguratorListPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
