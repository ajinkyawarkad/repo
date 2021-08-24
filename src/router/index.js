import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Details from '../views/Details.vue'




import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/create',
    name: 'Create',
    component: Create,
    beforeEnter: (to, from, next) => {
     


      if(from.name == 'Home'){
        console.log("SignUp First")

        router.push('signup')


      
        alert("Create Account")

     


      }else{
        next()
        
      }

    }
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from ,next)=> {
  console.log("TO",to.name)
  console.log("FROM",from.name)
  next()
  // console.log("next",next)
  
})
export default router
