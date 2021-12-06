import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../components/Accueil.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path:'/Depannage',
    name:'Depannage',
    component: require('../components/Accueil/Depannage.vue')
  },
  {
    path:'/Formulaire',
    name:'Formulaire',
    component: require('../components/Accueil/Formulaire.vue')
  },
  {
    path:'/Ordinateur',
    name:'Ordinateur',
    component: require('../components/Accueil/Ordinateur.vue')
  },
  {
    path:'/Tablette',
    name:'Tablette',
    component: require('../components/Accueil/Tablette.vue')
  },
  {
    path:'/Tarifs',
    name:'Tarifs',
    component: require('../components/Accueil/Tarifs.vue')
  },
  {
    path:'/',
    name:'Telephone',
    component: require('../components/Accueil/Telephone.vue')
  },
  {
    path:'/Telephone',
    name:'Accessoire',
    component: require('../components/Accueil/Accessoire.vue')
  },
  {
    path:'/Assistance',
    name:'Assistance',
    component: require('../components/Accueil/Assistance.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
