<template>
    <ul v-for="(task, index) of tasksStore.tasks">
        <li>ID: {{ task.id }}</li>
        <li>USER ID: {{ task.user_id }}</li>
        <li v-if="inputTitle">TITLE: {{ task.title }}</li>
        <div v-else>
            <input v-model="task.title">
            <li><button @click="updateSelectedTask(task.title, index); inputTitle = !inputTitle"
                    class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
            </li>
        </div>
        <li>STATUS: {{ task.status }}</li>
        <li>TIMESTAMP: {{ task.inserted_at }}</li>
        <li><button @click="deleteSelectedTask(index)"
                class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Delete</button>
        </li>

        <li><button @click="inputTitle = !inputTitle"
                class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit</button>
        </li>
    </ul>
</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"

export default {
    data() {
        return {
            inputTitle: true
        }
    },
    computed: {
        ...mapStores(userStore, tasksStore)
    },
    methods: {
        deleteSelectedTask(index) {
            this.tasksStore.deleteTask(this.tasksStore.tasks[index].id)
        },
        updateSelectedTask(newTitle, index) {
            this.tasksStore.updateTask(newTitle, this.tasksStore.tasks[index].id)
        },
    },
}

</script>