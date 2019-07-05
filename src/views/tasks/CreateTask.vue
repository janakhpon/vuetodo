<template>
  <div>
    <h1>Create Task</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="body">Text</label>
        <textarea
          placeholder="Text Description"
          class="form-control"
          v-model="task.text"
          name="text"
          id="body"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "create-task",
  data: function() {
    return {
      task: {
        text: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.axios
        .post("https://electron-todo-api.herokuapp.com/api/task", this.task)
        .then(res => {
          console.log("succed");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
