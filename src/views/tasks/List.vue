<template>
  <div class="d-flex flex-column">
    <h1>Tasks</h1>

    <div class="mb-4">
      <router-link to="/create" class="btn btn-success ml-2" exact>Create Task</router-link>
    </div>

    <div v-if="tasks && tasks.length > 0" class="d-flex flex-wrap justify-content-start">
      <div
        v-for="task in tasks"
        v-bind:key="task._id"
        class="card mb-2 ml-2 text-white bg-dark"
        style="width: 18rem;"
      >
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">{{ task.text }}</h5>
          </div>

          <div class="d-flex justify-content-between">
            <router-link
              type="button"
              tag="button"
              class="card-link btn btn-primary"
              :to="{ name: 'update', params: { id: task._id } }"
              exact
            >Edit</router-link>
            <a
              v-on:click="deleteTask(task._id)"
              class="card-link btn btn-danger"
              href="#"
            >Delete</a>
          </div>
        </div>
      </div>

    </div>

    <div v-if="tasks && tasks.length === 0" class="ml-2">
      <div class="alert alert-info">No tasks found.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data: function() {
    return {
       tasks: [],
      currentTaskId: null
    };
  },
  created() {
    this.fetchUsers();
  },

  methods: {
    fetchUsers() {
      this.axios
        .get("https://electron-todo-api.herokuapp.com/api/task")
        .then(res => {
           this.tasks = res.data;
           console.log(res.data);
           console.log(res.data.tasks);
        })
        .catch(err => console.log(err));
    },

    deleteTask(id){
        this.axios.delete(`https://electron-todo-api.herokuapp.com/api/task/${id}`).then(res => {
            console.log("deleted");
        }).catch(err => console.log(err));
    }
  }
};
</script>
