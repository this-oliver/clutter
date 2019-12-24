/* jshint esversion: 2015 */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Clutter from "@/components/Clutter";
import HighScore from "@/components/HighScore";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/clutter",
      name: "clutter",
      component: Clutter
    },
    {
      path: "/highscore",
      name: "highscore",
      component: HighScore
    }
  ]
});

export default router;
