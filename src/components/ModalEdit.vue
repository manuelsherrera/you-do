<template>

    <div class="py-12 bg-gray-700/80 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        ref="modalEdit" id="modalEdit">
        <!-- v-if="showModal" -->

        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div class="w-full flex justify-start text-gray-600 mb-3">
                    <img class="w-12" src="https://img.icons8.com/wired/512/task--v3.png" />
                </div>

                <form @submit.prevent="updateSelectedTaskModalEdit(title, selected, taskCardModalEdit.status, textArea)"
                    class="w-full">
                    <!-- TASK TITLE -->
                    <div class="mb-4">
                        <label for="title" class="block mb-2 text-lg font-medium text-gray-900 ">Title</label>
                        <input v-model="title" type="taskTitle" name="taskTitle" id="taskTitle2"
                            class="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="e.g: Buy coffee" required>
                    </div>
                    <!-- TASK STATUS -->
                    <div>
                        <select v-model="selected" class="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled :value="selected">Status: {{ statusValue() }}</option>
                            <option v-for="option in options" :value="option.value" :key="option.text">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                    <!-- TASK DESCRIPTION -->
                    <label for="expiry" class="text-gray-800 text-lg font-bold leading-tight tracking-normal">Task
                        Description</label>
                    <div class="relative mb-5 mt-2">
                        <textarea v-model="textArea" ref="myTextarea" :rows="rows" :cols="cols"
                            class="border-2 bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>

                    <div class="flex items-center justify-start w-full">
                        <button type="submit" value="Submit"
                            class="mt-2 w-1/4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save
                            task</button>
                        <button type="button"
                            class="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                            @click="modalHandler()">
                            Cancel Modal Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="w-[45%] m-auto flex justify-center">
        <div id="button">
            <button
                class="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white w-16 py-2 text-xs sm:text-sm"
                @click="modalHandler(true)">
                Edit
            </button>
        </div>
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
            title: "",
            textArea: "",
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
        };
    },
    props: {
        taskCardModalEdit: {
            type: Object,
        },
        indexModalEdit: {
            type: Number,
        },
    },
    components: {
        TextFileIcon,
    },
    computed: {
        ...mapStores(userStore, tasksStore),
        textareaHeight() {
            return this.rows * 20 + 'px';
        },
    },
    // watch: {
    //     selected(value) {
    //         this.updateSelectedTask(this.taskCardModalEdit.title, value, null)
    //     },
    // },
    methods: {
        // addNewTask(taskTitle, taskDescription) {
        //     this.tasksStore.createTask(taskTitle, taskDescription, this.userStore.user.id)
        //     this.taskTitle = ""
        // },
        modalHandler(val) {
            // console.log("taskCard2: ", this.taskCardModalEdit)
            let modal = this.$refs.modalEdit
            if (val) {
                this.fadeIn(modal);
                this.title = this.taskCardModalEdit.title
                this.textArea = this.taskCardModalEdit.textArea
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
        deleteSelectedTask(index) {
            this.tasksStore.deleteTask(this.taskCardModalEdit.id)
        },
        statusValue() {
            if (this.taskCardModalEdit.status == 1) {
                return this.status = "Backlog"
            } else if (this.taskCardModalEdit.status == 2) {
                return this.status = "Doing"
            } else if (this.taskCardModalEdit.status == 3) {
                return this.status = "Done"
            }
        },
        updateSelectedTaskModalEdit(taskCardTitle, status, statusId, textArea) {
            if (status === "") {
                console.log("statusID: ", statusId)
                this.tasksStore.updateTask(taskCardTitle, statusId, this.taskCardModalEdit.id, textArea)
            } else {
                this.tasksStore.updateTask(taskCardTitle, status, this.taskCardModalEdit.id, textArea)
            }
            this.inputEditing = true
            this.modalHandler()
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
#modalEdit {
    display: none;
}
</style>
  