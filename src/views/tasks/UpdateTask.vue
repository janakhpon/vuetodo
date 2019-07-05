<template>
  <div>
    <h1>Edit Task</h1>
    <form class="custom-form" v-on:submit.prevent="updatedtask">
      <div class="form-group">
        <label for="body">Body</label>
        <textarea
          placeholder="Body"
          class="form-control"
          v-model="task.text"
          name="text"
          id="body"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "update",
  data: function() {
    return {
      task:{
          text:''
      }
    };
  },
  created() {
    this.gettask();
  },

  methods: {
    gettask() {
      this.axios
        .get(
          `https://electron-todo-api.herokuapp.com/api/task/ID/${this.$route.params.id}`   
        )
        .then(res => {
          this.task = res.data;
          console.log(this.task);
        });
    },
    /**
     * Método que toma los datos del usuario
     * y son enviados al verbo REST PUT
     * para que se acutalice en la base de datos
     * después de recibir respuesta redirecciona
     * al componente Displaytasks
     */
    updatedtask() {
      this.axios.put(`https://electron-todo-api.herokuapp.com/api/task/${this.$route.params.id}`, this.task).then(res => {
        console.log(res);
        this.$router.replace({ name: "list" });
      });
    }
  }
};
</script>

