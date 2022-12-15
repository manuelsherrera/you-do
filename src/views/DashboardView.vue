<template>
    <!-- <h1>TITLE</h1> -->
    <button @click="tasksStore.fetchTasks()">Fetch Tasks</button>
    <form @submit.prevent="addNewTask(taskTitle)">
        <div class="">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input v-model="taskTitle" type="taskTitle" name="taskTitle" id="taskTitle"
                class="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g: Buy coffee" required>
        </div>

        <button type="submit" value="Submit"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
            task</button>
    </form>

    <TaskCart />


</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"
import TaskCart from "../components/TaskCart.vue"

export default {
    // data() {
    //     return {
    //         inputTitle: true
    //     }
    // },
    components: {
        TaskCart,
    },
    computed: {
        ...mapStores(userStore, tasksStore)
    },
    methods: {
        addNewTask(taskTitle) {
            this.tasksStore.createTask(taskTitle, this.userStore.user.id)
        },
        // deleteSelectedTask(index) {
        //     this.tasksStore.deleteTask(this.tasksStore.tasks[index].id)
        // },
        // updateSelectedTask(newTitle, index) {
        //     this.tasksStore.updateTask(newTitle, this.tasksStore.tasks[index].id)
        // },
    },
    mounted() {
        console.log("userStore: ", this.userStore.user)
        console.log("userStoreId: ", this.userStore.user.id)

        this.tasksStore.fetchTasks()
    },
}
</script>