import Vue from "vue";
import Router from "vue-router";
import Work from "./views/Work.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/work",
      name: "work",
      component: Work
    }
  ]
});
