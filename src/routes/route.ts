import { lazy } from 'react';

import { ADMIN_ROUTER, AUTH_ROUTER } from './constants';

const Login = lazy(() => import('@/pages/auth/Sign-in'));
const SignUp = lazy(() => import('@/pages/auth/Sign-Up'));
const ForgotPassword = lazy(() => import('@/pages/auth/Forgot-Password'));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'));
const Website = lazy(() => import('@/pages/admin/website'));
const Traffic = lazy(() => import('@/pages/admin/Traffic'));
const ChildrenFirst = lazy(() => import('@/pages/admin/ChildrenFirst'));
const ChildrenSecond = lazy(() => import('@/pages/admin/ChildrenSecondary'));

const routes_admin = [
  {
    key: 'admin-dashboard',
    path: ADMIN_ROUTER?.DASHBOARD,
    component: Dashboard,
    name: 'admin-dashboard',
  },
  {
    key: 'admin-traffic',
    path: ADMIN_ROUTER?.TRAFFIC,
    component: Traffic,
    name: 'admin-traffic',
  },
  {
    key: 'admin-children-first',
    path: ADMIN_ROUTER?.CHILDREN_FIRST,
    component: ChildrenFirst,
    name: 'admin-children-first',
  },
  {
    key: 'admin-children-second',
    path: ADMIN_ROUTER?.CHILDREN_SECOND,
    component: ChildrenSecond,
    name: 'admin-children-second',
  },
  {
    key: 'admin-website',
    path: ADMIN_ROUTER?.WEBSITE,
    component: Website,
    name: 'admin-website',
  },
];

const routes_auth = [
  {
    key: 'auth-login',
    path: AUTH_ROUTER?.LOGIN,
    component: Login,
    name: 'auth-login',
  },
  {
    key: 'auth-register',
    path: AUTH_ROUTER?.REGISTER,
    component: SignUp,
    name: 'auth-register',
  },
  {
    key: 'auth-forgot-password',
    path: AUTH_ROUTER?.FORGOT_PASSWORD,
    component: ForgotPassword,
    name: 'auth-forgot-password',
  },
];

export { routes_admin, routes_auth };
