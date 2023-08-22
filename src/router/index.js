import { createRouter, createWebHistory } from 'vue-router';
import ROUTES from './routes.enum';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      name: 'home',
      redirect: ROUTES.MONSTER_FIGHT,
    },
    {
      path: ROUTES.TOOLS,
      name: 'tools',
      redirect: ROUTES.MONSTER_FIGHT,
    },
    {
      path: ROUTES.MONSTER_FIGHT,
      name: 'monster-fight',
      component: () => import('../views/MonsterFightView.vue'),
    },
  ],
});

export default router;
