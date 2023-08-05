import { createRouter, createWebHistory } from 'vue-router';
import ToolsView from '../views/ToolsView.vue';
import ROUTES from './routes.enum';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      name: 'home',
      component: ToolsView,
    },
    {
      path: ROUTES.TOOLS,
      name: 'tools',
      component: ToolsView,
    },
    {
      path: ROUTES.MONSTER_FIGHT,
      name: 'monster-fight',
      component: () => import('../views/MonsterFightView.vue'),
    },
  ],
});

export default router;
