<template>
    <CreateTask />

    <div class="flex justify-center mt-6 px-4">

        <div id="col1" @dragover.prevent @drop="onDrop($event, 1)">
            <div>
                <h2 class="text-2xl mb-6 w-80 border-b-2">Backlog {{ this.tasksStore.backLog.length }}</h2>
            </div>
            <TaskCart class="list-group-item mb-8 mx-3 border-2 rounded"
                v-for="(tasksElements, index) of tasksStore.backLog" :taskCard="tasksElements" :index="index"
                draggable="true" @dragstart="startDrag($event, tasksElements)" @dragover.prevent />
        </div>

        <div id="col2" @dragover.prevent @drop="onDrop($event, 2)">
            <div>
                <h2 class="text-2xl w-80 mb-6 border-b-2">Doing {{ this.tasksStore.doing.length }}</h2>
            </div>
            <TaskCart class="mb-8 mx-3 border-2 rounded" v-for="(tasksElements, index) of tasksStore.doing"
                :taskCard="tasksElements" :index="index" draggable="true" @dragstart="startDrag($event, tasksElements)"
                @dragover.prevent />
        </div>
        <div id="col3" @dragover.prevent @drop="onDrop($event, 3)">
            <div>
                <h2 class="text-2xl w-80 mb-6 border-b-2">Done {{ this.tasksStore.done.length }}</h2>
            </div>
            <TaskCart class="mb-8 mx-3 border-2 rounded" v-for="(tasksElements, index) of tasksStore.done"
                :taskCard="tasksElements" :index="index" draggable="true" @dragstart="startDrag($event, tasksElements)"
                @dragover.prevent />
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"
import TaskCart from "../components/TaskCart.vue"
import CreateTask from "../components/CreateTask.vue"
import draggable from "vuedraggable"

export default {
    data() {
        return {

        }
    },
    props: ["TaskCard"],
    components: {
        TaskCart,
        CreateTask
    },
    computed: {
        ...mapStores(userStore, tasksStore),
        fetchConsole() {
            return
        },

    },
    methods: {
        addNewTask(taskTitle) {
            this.tasksStore.createTask(taskTitle, this.userStore.user.id)
            this.taskTitle = ""
        },
        startDrag(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        },
        onDrop(evt, status) {
            const itemID = evt.dataTransfer.getData('itemID')
            //const item = this.items.find((item) => item.id == itemID)
            this.tasksStore.updateDragStatus(status, itemID)
        },
        allowDrop(ev) {
            ev.preventDefault();
        }
    },
    async mounted() {
        await this.tasksStore.fetchTasks()
    },
}
</script>