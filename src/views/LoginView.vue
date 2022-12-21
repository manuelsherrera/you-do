<template>
    <section class="mb-40 background-radial-gradient overflow-hidden">
        <div v-if="this.userStore.verificationEmail" class="flex justify-end mt-2 mr-2">
            <div class="item-end w-1/4 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert">
                <span class="font-bold">We have sent you a confirmation email!</span> Please, confirm your email!.
            </div> 
        </div>
        <div class="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
            <div class="container mx-auto xl:px-32 text-gray-800">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div class="mt-12 lg:mt-0" style="z-index: 10">
                        <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                            style="color: hsl(218, 81%, 95%)">
                            Yesterday you <br /><span style="color: hsl(218, 81%, 75%)">said tomorrow</span>
                        </h1>
                        <h2 class="opacity-70 text-4xl" style="color: hsl(218, 81%, 85%)">
                            Just Do It
                        </h2>
                        <!-- <div>
                            <img src="../../public/images/you-do.png" alt="">
                            </div> -->
                    </div>
                    <div class="z-20 mb-12 lg:mb-0 relative">

                        <div class="block rounded-lg shadow-lg bg-glass px-6 py-12 md:px-12">
                            <form @submit.prevent="userStore.login(email, password)">

                                <input v-model="email" type="email" name="email" id="email"
                                    class="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address" required />

                                <input v-model="password" type="password" name="password" id="password"
                                    class="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password" required />

                                <button type="submit" value="Submit" data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    class="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Log in
                                </button>

                                <div class="flex justify-center relative mt-6">
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <router-link to="/"
                                            class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                            Up
                                            here</router-link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="blob1 hidden md:flex"></div>
                    <div class="blob2 hidden md:flex"></div>
                    <div id="radius-shape-1" class="absolute rounded-full shadow-lg blob_blur"></div>
                    <div id="radius-shape-2" class="absolute shadow-lg blob_blur"></div>
                </div>
            </div>
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

#radius-shape-1 {
    height: 220px;
    width: 220px;
    top: -60px;
    left: -130px;
    background: radial-gradient(#44006b, #ad1fff);
    overflow: hidden;
}

#radius-shape-2 {
    border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
    bottom: -60px;
    right: -110px;
    width: 300px;
    height: 300px;
    background: radial-gradient(#44006b, #ad1fff);
    overflow: hidden;
}

.bg-glass {
    background-color: hsla(0, 0%, 100%, 0.9);
    backdrop-filter: saturate(200%) blur(25px);
}

.container {
    min-height: 58vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.blob1 {
    position: absolute;
    width: 500px;
    height: 500px;
    filter: blur(30px);
    background: linear-gradient(180deg,
            rgba(47, 184, 255, 0.12) 31.77%,
            #03285a 100%);
    mix-blend-mode: color-dodge;
    /* -webkit-animation: move 25s infinite alternate; */
    /* animation: move 25s infinite alternate; */
    animation: transform2 25s ease-in-out infinite both alternate,
        movement_one 15s ease-in-out infinite both;
    transition: 5s cubic-bezier(0.07, 0.8, 0.16, 1);
    z-index: 0;
}

.blob_blur {
    filter: blur(60px);
}

.blob2 {
    position: absolute;
    right: 8rem;
    bottom: 4rem;
    width: 500px;
    height: 500px;
    filter: blur(30px);
    background: linear-gradient(180deg,
            rgba(47, 184, 255, 0.12) 31.77%,
            #5c9df1 100%);
    mix-blend-mode: color-dodge;
    /* -webkit-animation: move 5s infinite alternate; */
    /* animation: move 15s infinite alternate; */
    animation: transform2 25s ease-in-out infinite both alternate,
        movement_two 25s ease-in-out infinite both;
    transition: 15s cubic-bezier(0.07, 0.8, 0.16, 1);
}

.blob:hover {
    width: 500px;
    height: 500px;
    -webkit-filter: blur(50px);
    filter: blur(30px);
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.6),
        inset 100px 100px 0 0px #fa709a, inset 200px 200px 0 0px #784ba8,
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
        transform: translate(-400px, -50px) rotate(-90deg);
        border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
        transform: translate(400px, 100px) rotate(-10deg);
        border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
}

@keyframes transform2 {

    0%,
    100% {
        border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%;
    }

    20% {
        border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%;
    }

    40% {
        border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%;
    }

    60% {
        border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%;
    }

    80% {
        border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%;
    }
}

@keyframes movement_one {

    0%,
    100% {
        transform: none;
    }

    50% {
        transform: translate(50%, 20%) rotateY(10deg) scale(1);
    }
}

@keyframes movement_two {

    0%,
    500% {
        transform: none;
    }

    50% {
        transform: translate(5%, 10%) rotate(-100deg) scale(1.2);
    }
}
</style>


<!-- <style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Nunito", sans-serif;
}

body {
    background: #1f1f47
}

/* .container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
} */

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
    overflow: hidden;
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
</style>  -->