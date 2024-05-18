import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Product from '../views/Product.vue';
import search from '../views/search.vue';
import Category from '../views/Category.vue';
import Cart from '../views/Cart.vue';
import SignUp from '../views/SignUp.vue';
import Login from '@/views/Login.vue';
import MyAccount from '@/views/MyAccount.vue';
import Checkout from '@/views/Checkout.vue';
import Success from '@/views/Success.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: Product,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    // Make Sure The User is Logged In to Access Account Information
    meta: {
      requireLogin: true,
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    // Make Sure The User is Logged In to Pay
    meta: {
      requireLogin: true,
    },
  },
  {
    path: '/success',
    name: 'Success',
    component: Success,
    // Make Sure The User is Logged In to Pay
    meta: {
      requireLogin: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: Category,
  },
  {
    path: '/search',
    name: 'Search',
    component: search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next();
  }
});

export default router;
