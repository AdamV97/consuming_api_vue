import App from './App.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import Vuex from "vuex"

import Home from './views/Home';
import PostData from './views/PostData';

Vue.use(VueRouter);
Vue.use(Vuex);

// Set application title
document.title = 'Posts';

// Set default current page for pagination
currentPage = 1;

// Check if last page was saved to local storage
if(localStorage.getItem('currentPage') !== null){
  var currentPage = localStorage.getItem('currentPage');
}

// Set default limit(rows per page)
currentLimit = 10;

// Check if limit was saved to local storage
if(localStorage.getItem('currentLimit') !== null){
  var currentLimit = localStorage.getItem('currentLimit');
}

// New Vuex store, for storing states(last page and limit) and mutations
const store = new Vuex.Store(
  {
    state: {
      currentPage: currentPage,
      currentLimit: currentLimit
    },
    mutations: {
      setCurrentPage(state, page) {
        state.currentPage = page;
      },
      setCurrentLimit(state, limit) {
        state.currentLimit = limit;
      }
    }
  }
);

// Standard router
const router = new VueRouter({ 
  routes: [
    {
      path: '/',
      redirect: {
        name: "home"
      }
    },{
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/postdata',
      name: 'postdata',
      component: PostData
    }
  ],
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')

