import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Createtask from "./views/tasks/CreateTask.vue";
import Displaylist from "./views/tasks/Displaylist.vue";
import List from './views/tasks/List.vue';
import UpdateTask from "./views/tasks/UpdateTask.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/create",
      name: "create-task",
      component: Createtask
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/display",
      name: "display-list",
      component: Displaylist
    },
    {
      path: "/update",
      name: "update",
      component: UpdateTask
    }
  ]
});
