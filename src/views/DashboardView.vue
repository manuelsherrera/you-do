<template>
    Dashboard
    <button @click="login">login</button>
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