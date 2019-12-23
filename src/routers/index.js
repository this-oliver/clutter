/* jshint esversion: 2015 */
import Vue from "vue";
import Router from "vue-router";
import Clutter from "@/components/Clutter";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Clutter",
      component: Clutter
    }
  ]
});

export default router;
