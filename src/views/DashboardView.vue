<template>
    Dashboard
    <button @click="userStore.signUp" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    SignUp
    </button>

    <button @click="userStore.login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Login</button>

    <button @click="userStore.signOut" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Logout
    </button>

    <!-- <button @click="tasksStore.fetchTasks" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Fetch Tasks
    </button> -->

    <!-- <div>User: {{ userStore.user }}</div> -->
</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"

export default {
    computed: {
        ...mapStores(userStore, tasksStore)
    },
    mounted(){
        this.tasksStore.fetchTasks()
    },
}
</script>