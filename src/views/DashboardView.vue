<template>
    <!-- <h1>TITLE</h1> -->
    <!-- <button @click="tasksStore.fetchTasks()">Fetch Tasks</button> -->
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

    <div class="flex justify-center mt-6 px-4">

        <div id="col1">
            <div>
                <h2 class="text-2xl mb-6 w-80 border-b-2">Backlog {{ this.tasksStore.backLog.length }}</h2>
            </div>
            <TaskCart class="mb-8 mx-3 border-2 rounded" v-for="(tasksElements, index) of tasksStore.backLog"
                :taskCard="tasksElements" :index="index" />
        </div>
        <div id="col2">
            <div>
                <h2 class="text-2xl w-80 mb-6 border-b-2">Doing {{ this.tasksStore.doing.length }}</h2>
            </div>
            <TaskCart class="mb-8 mx-3 border-2 rounded" v-for="(tasksElements, index) of tasksStore.doing"
                :taskCard="tasksElements" :index="index" />
        </div>
        <div id="col3">
            <div>
                <h2 class="text-2xl w-80 mb-6 border-b-2">Done {{ this.tasksStore.done.length }}</h2>
            </div>
            <TaskCart class="mb-8 mx-3 border-2 rounded" v-for="(tasksElements, index) of tasksStore.done"
                :taskCard="tasksElements" :index="index" />
        </div>
    </div>

</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"
import TaskCart from "../components/TaskCart.vue"

export default {
    data() {
        return {

        }
    },
    props: ["TaskCard"],
    components: {
        TaskCart,
    },
    computed: {
        ...mapStores(userStore, tasksStore),

    },
    methods: {
        addNewTask(taskTitle) {
            this.tasksStore.createTask(taskTitle, this.userStore.user.id)
        },

    },
    async mounted() {
        await this.tasksStore.fetchTasks()
        // console.log("Task Store TASKS: ", this.tasksStore.tasks)
        console.log("Task Store Backlog: ", this.tasksStore.backLog.length)
        // console.log("Task Store Doing: ", this.tasksStore.doing)
        // console.log("Task Store Done: ", this.tasksStore.done)
    },
}
</script>