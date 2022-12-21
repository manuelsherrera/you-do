<template>
    <ul class="p-4" v-if="taskCard">
        <li v-if="inputEditing">Title: {{ taskCard.title }}</li>
        <input v-else v-model="taskCard.title" name="title" id="title">
        <div>
            <li v-if="inputEditing">
                Status: {{ statusValue() }}
            </li>
            <select v-else v-model="selected">
                <option disabled :value="selected">Status: {{ statusValue() }}</option>
                <option v-for="option in options" :value="option.value" :key="option.text">
                    {{ option.text }}
                </option>
            </select>
        </div>
        <li>Deadline: {{ new Date(taskCard.inserted_at).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}) }}</li>

        <div class="flex gap-2">
            <div>
                <button @click="deleteSelectedTask(index)"
                    class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1 my-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Delete</button>
            </div>
            <div>
                <button @click="inputEditing = !inputEditing"
                    class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1 my-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit</button>
            </div>
            <div v-if="!inputEditing">
                <li><button @click="updateSelectedTask(taskCard.title, selected, taskCard.status)"
                        class="w-30 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1 my-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
                </li>
            </div>
            <div><ModalEdit :taskCardModalEdit="taskCard" :indexModalEdit="index"/></div>
        </div>
    </ul>
</template>
<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"
import ModalEdit from "../components/ModalEdit.vue"

export default {
    data() {
        return {
            inputEditing: true,
            el: "...",
            selected: "",
            options: [
                {
                    text: 'Backlog',
                    value: '1'
                },
                {
                    text: 'Doing',
                    value: '2'
                },
                {
                    text: 'Done',
                    value: '3'
                }
            ],
            status: "",
            deadLinesArr: [],
        }
    },
    components: {
        ModalEdit,
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
        ...mapStores(userStore, tasksStore),
    },
    watch: {
        selected(value) {
            this.updateSelectedTask(this.taskCard.title, value, null)
        },
    },
    methods: {
        deleteSelectedTask(index) {
            this.tasksStore.deleteTask(this.taskCard.id)
        },
        statusValue() {
            if (this.taskCard.status == 1) {
                return this.status = "Backlog"
            } else if (this.taskCard.status == 2) {
                return this.status = "Doing"
            } else if (this.taskCard.status == 3) {
                return this.status = "Done"
            }
        },
        updateSelectedTask(taskCardTitle, status, statusId){
            if(status === ""){
                console.log("statusID: ", statusId)
                this.tasksStore.updateTask(taskCardTitle, statusId, this.taskCard.id)
            } else {
                this.tasksStore.updateTask(taskCardTitle, status, this.taskCard.id)
            }
            this.inputEditing = true
            console.log("status: ", status)
        },
    },
    mounted() {
        // console.log("Data Status: ", this.status)
        this.deadLinesArr.push(this.taskCard)
    },
}
</script>