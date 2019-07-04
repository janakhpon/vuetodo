import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Createtask from "./views/tasks/CreateTask.vue";
import TaskList from "./views/tasks/TaskList.vue";
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
      name: "task-list",
      component: TaskList
    },
    {
      path: "/update",
      name: "update-task",
      component: UpdateTask
    }
  ]
});
