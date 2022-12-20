<template>
  <nav class="
        z-30
        h-auto
        w-screen
        bg-white

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
          "><img class="w-12" src="../../public/images/youdo-logo.png">
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
      <li class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link to="/">{{ home }}</router-link>
      </li>

      <!-- <li v-if="!userStore.user" class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link to="register">{{ signUp }}</router-link>
      </li> -->

      <li v-if="!userStore.user" class="text-black-100 hover:text-[color:var(--midBlue)]"><router-link to="login">{{
          logIn
      }}</router-link>
      </li>

      <!-- <li v-if="!isLoggedIn" class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link to="dashboard">{{ dashboard }}</router-link>
      </li> -->
      <!-- <li v-else-if="isLoggedIn" class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link to="dashboard">{{ dashboard }}</router-link>
      </li> -->

      <li v-if="userStore.user !== null" class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link to="dashboard">{{ dashboard }}</router-link>
      </li>
      <!-- <li v-else class="text-black-100 hover:text-[color:var(--midBlue)] hidden">
        <router-link @click="userStore.signOut" to="login">I'M LOGOUT</router-link>
      </li> -->

      <li v-if="userStore.user !== null" class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link @click="userStore.signOut" to="login">{{ logOut }}</router-link>
      </li>
      <!-- <li v-else class="text-black-100 hover:text-[color:var(--midBlue)] hidden">
        <router-link @click="userStore.signOut" to="login">I'M LOGOUT</router-link>
      </li> -->

    </ul>
  </nav>
</template>

<script>
import { mapStores } from 'pinia';
import { supabase } from "../supabase";
import userStore from "../stores/user";

export default {
  data() {
    return {
      showMenu: false,
      home: "Home",
      signUp: "SignUp",
      logIn: "Login",
      logOut: "Log Out",
      dashboard: "Dashboard",
      isLoggedIn: false,
    }
  },
  computed: {
    ...mapStores(userStore),
    async isLoggedIn2() {
      const userAuth = await supabase.auth.getUser();
      console.log("getUser: ", userAuth);
      const isUserLoggedIn = userAuth.data.user !== null;
      // const isUserLoggedIn = isLoggedIn;
      console.log("isLoggedIn: ", isUserLoggedIn);
      return isUserLoggedIn
    },
  },
  methods: {
    toggleNav() {
      (this.showMenu = !this.showMenu)
    },
  },
   async mounted() {
    // console.log("isLoggedIn: ", await this.isLoggedIn);
    },
}

</script>

