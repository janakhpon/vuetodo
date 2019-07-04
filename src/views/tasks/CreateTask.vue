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
import * as taskService from "../../services/TaskService";

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
    onSubmit: async function() {
      const request = {
        task: this.task
      };
      await taskService.addTask(request);
      this.$router.push({ name: "task-list" });
    }
  }
};
</script>
