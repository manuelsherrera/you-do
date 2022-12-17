<template>
    <ul class="p-4">
        <!-- <li>ID: {{ taskCard.id }}</li> -->
        <!-- <li>USER ID: {{ taskCard.user_id }}</li> -->
        <li v-if="inputTitle">TITLE: {{ taskCard.title }}</li>
        <div v-else>
            <input v-model="taskCard.title">
            <li><button @click="updateSelectedTask(taskCard.title, index); inputTitle = !inputTitle"
                    class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1 my-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
            </li>
        </div>
        <li v-if="inputStatus">STATUS: {{ taskCard.status }}</li>
        <li>TIMESTAMP: {{ taskCard.inserted_at }}</li>


        <div class="flex gap-2">
            <div>
                <button @click="deleteSelectedTask(index)"
                    class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1 my-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Delete</button>
            </div>
            <div>
                <button @click="inputTitle = !inputTitle"
                    class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1 my-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit</button>
            </div>
        </div>
        <!-- revisar en listbox -->
        <!-- <ListBox @change="$emit(updateStatus(people.value, index))" /> -->
        <ListBox />
    </ul>
    <!-- buscar emit para pasar informacion  -->
</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"
import ListBox from "../components/ListBox.vue"

export default {
    data() {
        return {
            inputTitle: true,
            inputStatus: true,
        }
    },
    components: {
        ListBox,
    },
    props: {
        taskCard: {
            type: Object,
        },
        index: {
            type: Number,
        },
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
    mounted() {
    },
}

</script>