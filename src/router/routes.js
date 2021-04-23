
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/movie', component: () => import('pages/movie/main.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/searchlayout.vue'),
    children: [
      { path: '/search', component: () => import('pages/movie/search.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
