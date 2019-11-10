import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/Home";
import Profile from "../components/user/Profile";
import Signin from "../components/user/Signin";
import Signup from "../components/user/Signup";
import CreateMeetup from "../components/meetup/CreateMeetup";
import Meetups from "../components/meetup/Meetups";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/createmeetup',
    name: 'CreateMeetup',
    component: CreateMeetup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
