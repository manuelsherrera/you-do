<template>
    <section class="bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py- mx-auto md:h-screen lg:py-0">
            <header class="h-[10rem] flex justify-center items-center">
                <h1 class=" text-white text-4xl h-30">JUST DO IT!</h1>
            </header>
            <div
                class="z-10 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="userStore.login(email, password)">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input v-model="email" type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="password" type="password" name="password" id="password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <button type="submit" value="Submit"
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account? <router-link to="register"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register
                                here</router-link>
                        </p>
                    </form>
                </div>
            </div>
            <div class="blob1 overflow-hidden hidden md:flex"></div>
            <div class="blob2 hidden md:flex"></div>
        </div>

    </section>
</template>

<script>
import { mapStores } from 'pinia'
import userStore from "../stores/user"
import tasksStore from "../stores/task"

export default {
    computed: {
        ...mapStores(userStore, tasksStore),

        
    },
    mounted() {
        this.tasksStore.fetchTasks()
    },
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Nunito", sans-serif;
}

body {
    background: #1f1f47
}

.container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.blob1 {
    position: absolute;
    width: 500px;
    height: 500px;
    filter: blur(40px);
    background: linear-gradient(180deg,
            rgba(47, 184, 255, 0.12) 31.77%,
            #5c9df1 100%);
    mix-blend-mode: color-dodge;
    /* -webkit-animation: move 25s infinite alternate; */
    animation: move 20s infinite alternate;
    transition: 5s cubic-bezier(0.07, 0.8, 0.16, 1);
}

.blob2 {
    position: absolute;
    width: 500px;
    height: 500px;
    filter: blur(40px);
    background: linear-gradient(180deg,
            rgba(47, 184, 255, 0.12) 31.77%,
            #5c9df1 100%);
    mix-blend-mode: color-dodge;
    /* -webkit-animation: move 25s infinite alternate; */
    animation: move2 20s infinite alternate;
    transition: 5s cubic-bezier(0.07, 0.8, 0.16, 1);
}

.blob1:hover {
    width: 520px;
    height: 520px;
    -webkit-filter: blur(70px);
    filter: blur(30px);
    box-shadow:
        inset 0 0 0 5px rgba(255, 255, 255, 0.6),
        inset 100px 100px 0 0px #fa709a,
        inset 200px 200px 0 0px #784ba8,
        inset 300px 300px 0 0px #2b86c5;
}

.blob2:hover {
    width: 520px;
    height: 520px;
    -webkit-filter: blur(40px);
    filter: blur(60px);
    box-shadow:
        inset 0 0 0 5px rgba(255, 255, 255, 0.6),
        inset 100px 100px 0 0px #fa709a,
        inset 200px 200px 0 0px #784ba8,
        inset 300px 300px 0 0px #2b86c5;
}

@-webkit-keyframes move {
    from {
        transform: translate(-100px, -50px) rotate(-90deg);
        border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
        transform: translate(500px, 100px) rotate(-10deg);
        border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
}

@keyframes move {
    from {
        transform: translate(-300px, -200px) rotate(100deg);
        border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
        transform: translate(-350px, -250px) rotate(-100deg);
        border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
}

@-webkit-keyframes move2 {
    from {
        transform: translate(600px, 50px) rotate(-90deg);
        border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
        transform: translate(500px, 100px) rotate(-10deg);
        border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
}

@keyframes move2 {
    from {
        transform: translate(200px, 200px) rotate(100deg);
        border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
        transform: translate(250px, 250px) rotate(-100deg);
        border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
}
</style>