<template>
    <Modal v-if="userStore.user !== null && $route.path === '/dashboard'"/>
</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"
import Modal from "../components/Modal.vue"
import TaskCart from "../components/TaskCart.vue"

export default {
    data() {
        return {
        }
    },
    props: ["TaskCard"],
    components: {
        Modal,
    },
    computed: {
        ...mapStores(userStore, tasksStore),
        fetchConsole() {
            return
        },
    },
    methods: {
        addNewTask(taskTitle, taskDescription) {
            this.tasksStore.createTask(taskTitle, taskDescription, this.userStore.user.id)
            this.taskTitle = ""
        },
    },
    async mounted() {
        await this.tasksStore.fetchTasks()
    },
}
</script>