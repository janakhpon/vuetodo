<template>
    <div>
        <h1>Edit Task</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="body">Body</label>
                <textarea placeholder="Body" class="form-control" v-model="task.text" name="text" id="body" cols="30" rows="10"></textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Save Changes</button>
            </div>
        </form>
    </div>
</template>

<script>


    export default {
        name: 'update-task',
        
    }
</script>
