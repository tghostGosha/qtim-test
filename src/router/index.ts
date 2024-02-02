import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ArticleView from '@/views/ArticleView.vue';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/posts',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: ArticleView,
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/ArticleView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes,
});

export default router;
