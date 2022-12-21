<template>
    <!-- <CardGlass /> -->
<CreateTask />

    <div class="mb-40 background-radial-gradient flex justify-center mt-6 px-4 gap-x-4 overflow-x-scroll min-h-screen py-4 rounded">

        <div id="col1" @dragover.prevent @drop="onDrop($event, 1)" class="w-[33%] min-w-min">
            <div>
                <h2 class="mt-2 flex bg-green text-2xl mb-6 w-full border-b-2 pb-2" style="color: hsl(218, 81%, 95%)">Backlog <div class="bg-red w-4 h-4 rounded-md text-center text-white ml-1 text-[.8rem] leading-4">{{ this.tasksStore.backLog.length }}</div></h2>
            </div>

            <TaskCart class="list-group-item mb-8 border-2 w-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter"
                v-for="(tasksElements, index) of tasksStore.backLog" :taskCard="tasksElements" :index="index"
                draggable="true" @dragstart="startDrag($event, tasksElements)" @dragover.prevent />

        </div>

        <div id="col2" @dragover.prevent @drop="onDrop($event, 2)" class="w-[33%] min-w-min">
            <div>
                <h2 class="mt-2 flex bg-green text-2xl mb-6 w-full border-b-2 pb-2" style="color: hsl(218, 81%, 95%)">Doing <div class="bg-red w-4 h-4 rounded-md text-center text-white ml-1 text-[.8rem] leading-4">{{ this.tasksStore.doing.length }}</div></h2>
            </div>
            <TaskCart class="list-group-item mb-8 border-2 w-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter" v-for="(tasksElements, index) of tasksStore.doing"
                :taskCard="tasksElements" :index="index" draggable="true" @dragstart="startDrag($event, tasksElements)"
                @dragover.prevent />
        </div>
        <div id="col3" @dragover.prevent @drop="onDrop($event, 3)" class="w-[33%] min-w-min">
            <div>
                <h2 class="mt-2 flex bg-green text-2xl mb-6 w-full border-b-2 pb-2" style="color: hsl(218, 81%, 95%)">Done <div class="bg-red w-4 h-4 rounded-md text-center text-white ml-1 text-[.8rem] leading-4">{{ this.tasksStore.done.length }}</div></h2>
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
        // console.log("firstName:", this.userStore.user.user_metadata.firstName)
    },
}
</script>

<style scoped>
.background-radial-gradient {
    background-color: hsl(218, 41%, 15%);
    background-image: radial-gradient(650px circle at 0% 0%,
            hsl(218, 41%, 35%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
            hsl(218, 41%, 45%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%);
}

</style>