import { Main, Forum, Breeder, Vet, About } from '../../views'

export default [
  {
    path: '/main',
    component: Main,
    children: null
  },
  {
    path: '/forum',
    component: Forum,
    children: null
  },
  {
    path: '/vet',
    component: Vet,
    children: null
  },
  {
    path: '/breeder',
    component: Breeder,
    children: null
  },
  {
    path: '/about',
    component: About,
    children: null
  }
]