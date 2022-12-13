<template>
    Dashboard
    <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">login</button>
</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"


export default {
    computed: {
        ...mapStores(userStore)
    },
    methods: {
        login() {
            this.userStore.signUp()
        }
    },
}
</script>