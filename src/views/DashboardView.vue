<template>
    <!-- <CardGlass /> -->
<CreateTask />

    <div class="bg-teal-500 flex justify-center mt-6 px-4 gap-x-4 overflow-x-scroll">

        <div id="col1" @dragover.prevent @drop="onDrop($event, 1)" class="w-[33%] min-w-min">
            <div>
                <h2 class="mt-2 flex bg-green text-2xl mb-6 w-full border-b-2 pb-2">Backlog <div class="bg-red w-6 h-6 rounded-md text-center text-white ml-2 text-[1rem] leading-6">{{ this.tasksStore.backLog.length }}</div></h2>
            </div>

            <TaskCart class="list-group-item mb-8 border-2 w-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter"
                v-for="(tasksElements, index) of tasksStore.backLog" :taskCard="tasksElements" :index="index"
                draggable="true" @dragstart="startDrag($event, tasksElements)" @dragover.prevent />

        </div>

        <div id="col2" @dragover.prevent @drop="onDrop($event, 2)" class="w-[33%] min-w-min">
            <div>
                <h2 class="mt-2 flex bg-green text-2xl mb-6 w-full border-b-2 pb-2">Doing <div class="bg-red w-6 h-6 rounded-md text-center text-white ml-2 text-[1rem] leading-6">{{ this.tasksStore.doing.length }}</div></h2>
            </div>
            <TaskCart class="list-group-item mb-8 border-2 w-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter" v-for="(tasksElements, index) of tasksStore.doing"
                :taskCard="tasksElements" :index="index" draggable="true" @dragstart="startDrag($event, tasksElements)"
                @dragover.prevent />
        </div>
        <div id="col3" @dragover.prevent @drop="onDrop($event, 3)" class="w-[33%] min-w-min">
            <div>
                <h2 class="mt-2 flex bg-green text-2xl mb-6 w-full border-b-2 pb-2">Done <div class="bg-red w-6 h-6 rounded-md text-center text-white ml-2 text-[1rem] leading-6">{{ this.tasksStore.done.length }}</div></h2>
            </div>
            <TaskCart class="list-group-item mb-8 border-2 w-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter" v-for="(tasksElements, index) of tasksStore.done"
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
import CardGlass from "../components/CardGlass.vue"
import draggable from "vuedraggable"

export default {
    data() {
        return {

        }
    },
    // props: ["TaskCard"],
    components: {
        TaskCart,
        CreateTask,
        CardGlass,
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