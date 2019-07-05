<template>
  <div class="d-flex flex-column">
    <h1>Tasks</h1>

    <div class="container">
      <form class="navbar-form" role="search">
        <div class="input-group add-on">
          <input
            class="form-control"
            placeholder="Search"
            v-model="text"
            name="text"
            id="srch-term"
            type="text"
            
            v-on:change="event => onsearch(event)"
          />
        </div>
      </form>
    </div>

    <hr />
    <div class="container">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data: function() {
    return {
      tasks: [],
      text: ""
    };
  },

  methods: {
    onsearch: function(event){
   
      this.text = event.target.value;
      console.log(this.text);
      this.axios
        .get(
          `https://electron-todo-api.herokuapp.com/api/task/text/${this.text}`
        )
        .then(res => {
          this.tasks = res.data;
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
