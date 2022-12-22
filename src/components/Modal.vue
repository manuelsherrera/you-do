<template>
    <div class="py-12 bg-gray-700/80 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal">
        <!-- v-if="showModal" -->

        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div class="w-full flex justify-start text-gray-600 mb-3">
                    <img class="w-12" src="https://img.icons8.com/wired/512/task--v3.png" />
                </div>
                <form @submit.prevent="addNewTask(taskTitle, taskDescription)" class="w-full">
                    <!-- TASK TITLE -->
                    <div class="mb-4">
                        <label for="title" class="block mb-2 text-lg font-medium text-gray-900">Task Title</label>
                        <input v-model="taskTitle" type="taskTitle" name="taskTitle" id="taskTitle"
                            class="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 background-radial-gradient dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="e.g: Buy coffee" required>
                    </div>

                    <!-- TASK DESCRIPTION -->
                    <label for="expiry" class="block mb-2 text-lg font-medium text-gray-900">Task
                        Description</label>
                    <div class="relative mb-5 mt-2">
                        <textarea v-model="taskDescription" ref="myTextarea" :rows="rows" :cols="cols"
                            class="border-2 bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 background-radial-gradient dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>

                    <div class="flex items-center justify-start w-full">
                        <button @click="modalHandler()" type="submit" value="Submit"
                            class="w-1/4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                            task</button>
                        <button
                            class="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                            @click="modalHandler()">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="w-full m-auto flex justify-end">
        <div id="button">
            <button
                class="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="modalHandler(true)">
                + Create Task
            </button>
        </div>
    </div>
    <!-- <div ></div> -->
    <!--  <div v-if="succesfullTask" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert">{{ taskCreated }}
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <title>Close</title>
                <path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
        </span>
    </div> -->
    <div v-if="succesfullTask" class="flex justify-center bg-blue-100 border-blue-500 text-blue-700 px-4 py-3"
        role="alert">
        <p class="font-bold">{{ taskCreated }}</p>

    </div>
</template>
  
<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"
import TextFileIcon from "../components/icons/TextFile.vue"
//   import DROPDOWN from "/src/components/DropDown";

export default {
    // name: "LeftAlignedForm",
    data() {
        return {
            showModal: false,
            rows: 5,
            cols: 50,
            taskTitle: "",
            taskDescription: "",
            succesfullTask: false,
            taskCreated: "New task created!!",
        };
    },
    components: {
        //   DROPDOWN,
        TextFileIcon,
    },
    computed: {
        ...mapStores(userStore, tasksStore),
        textareaHeight() {
            return this.rows * 20 + 'px';
        },
    },
    methods: {
        addNewTask(taskTitle, taskDescription) {
            this.tasksStore.createTask(taskTitle, taskDescription, this.userStore.user.id)
            this.taskTitle = ""
            this.taskDescription = ""
            this.succesfullTask = true
            setTimeout(() => { this.succesfullTask = false }, 3500);

            /*  alert(this.succesfull) */
        },
        modalHandler(val) {
            let modal = document.getElementById("modal");
            if (val) {
                this.fadeIn(modal);
            } else {
                this.fadeOut(modal);
            }
        },
        fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= 0.1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        },
        fadeIn(el, display) {
            el.style.opacity = 0;
            el.style.display = display || "flex";
            (function fade() {
                let val = parseFloat(el.style.opacity);
                if (!((val += 0.2) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        },
    },
    mounted() {
        const textarea = this.$refs.myTextarea;

        textarea.style.height = this.textareaHeight;

        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        });
    }
};
</script>

<style>
#modal {
    display: none;
}

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
  