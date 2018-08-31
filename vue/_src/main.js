import Vue from "vue";
import axios from "axios";
import VueRouter from "vue-router";
import App from "./App.vue";
import projectListing from "./project-listing/projects.vue";
import projectDetail from "./project-detail.vue";

Vue.use(VueRouter);
Vue.use(axios);

const routes = [
  {
    path: "/",
    component: projectListing
  },
  {
    path: "projects/:id",
    compoonent: projectDetail,
    props: true
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
