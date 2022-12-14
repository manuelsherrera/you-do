<template>
    <nav class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      ">
        <div class="flex items-center justify-between">
            <router-link to="/" class="
            text-xl
            font-bold
            text-black-100
            md:text-2xl
            hover:text-green-400
          "><img class="scale-[1]" src="../../public/images/logo.svg">
            </router-link>
            <!-- Mobile menu button -->
            <div @click="toggleNav" class="flex md:hidden">
                <button type="button" class="
              text-[black]-100
              hover:text-black-400
              focus:outline-none focus:text-black-400
            ">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                        <path fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        ">
            <li class="text-black-100 hover:text-[color:var(--vue-green)]"><router-link to="/">{{ home }}</router-link></li>
            <li class="text-black-100 hover:text-[color:var(--vue-green)]"><router-link to="register">{{ signUp }}</router-link></li>
            <li class="text-black-100 hover:text-[color:var(--vue-green)]"><router-link to="login">{{ logIn }}</router-link></li>
            <li class="text-black-100 hover:text-[color:var(--vue-green)]"><router-link to="login">{{ logOut }}</router-link></li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

//Nav buttons
const home = "Home";
const signUp = "SignUp";
const logIn = "Login";
const logOut = "Log Out";

</script>