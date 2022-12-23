<template>
  <nav class="
        z-30
        h-auto
        w-full
        bg-white

        container
        px-6
        py-4
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
          "><img class="w-12" src="/images/youdo-logo.png">
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
      <!-- <li class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link to="/">{{ home }}</router-link>
      </li> -->
      <li v-if="!userStore.user" class="text-black-100 hover:text-[color:var(--midBlue)]"><router-link to="login">{{
          logIn
      }}</router-link>
      </li>
      <!-- <li v-if="userStore.user !== null && $route.path !== '/dashboard'" class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link to="dashboard">{{ dashboard }}</router-link>
      </li> -->
      <!-- <li v-if="userStore.user !== null" class="text-black-100 hover:text-[color:var(--midBlue)]">
        <router-link @click="userStore.signOut" to="login">{{ logOut }}</router-link>
      </li> -->
      <!-- <li v-if="userStore.user !== null"><div class="relative">
    <img class="w-10 h-10 rounded-full" src="https://thispersondoesnotexist.com/image" :alt=" userStore.user.user_metadata.firstName " :title="userStore.user.user_metadata.firstName">
    <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div></li> -->
      <div class="flex gap-4 h-10 ">
        <li>
          <CreateTask v-if="userStore.user !== null"/>
        </li>
        <li id="pfp" v-if="userStore.user !== null">
          <!-- hidden md:block -->
          <div v-if="userStore.user !== null">
            <div>
              <img id="avatarButton" type="button" class="position-absolute w-10 h-10 rounded-full cursor-pointer"
                src="https://thispersondoesnotexist.com/image" @click="toggleDropdown">
              <!-- <span class="top-[3%] right-[9.3%] absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> -->
            </div>

            <!-- Dropdown menu -->
            <div id="userDropdown" v-if="showDropdown"
              class="absolute background-radial-gradient right-auto z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <div v-if="userStore.user !== null">{{ this.userStore.user.user_metadata.firstName }}</div>
                <div v-if="userStore.user !== null" class="text-[70%] font-medium truncate">{{ this.userStore.user.email }}</div>
              </div>
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">

                <li>
                  <router-link to="/" @click="toggleDropdown" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ home }}</router-link>
                </li>

                <li v-if="userStore.user !== null" class="text-black-100 hover:text-[color:var(--midBlue)]">
                  <router-link @click="toggleDropdown" to="dashboard"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ dashboard
                    }}</router-link>
                </li>

                <li>
                  <a href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>

              </ul>

              <div v-if="userStore.user !== null">
                <router-link @click="userStore.signOut" to="login"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ logOut
                  }}</router-link>
              </div>

            </div>
          </div>

        </li>
      </div>

    </ul>
  </nav>
</template>

<script>
import { mapStores } from 'pinia';
import { supabase } from "../supabase";
import userStore from "../stores/user";
import CreateTask from "../components/CreateTask.vue"

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
      showDropdown: false
    }
  },
  components: {
    CreateTask,
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
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
  },
  async mounted() {
toggleDropdown()
  },
}

</script>

<style scoped>
#pfp a:focus {
  color: white;
}

#pfp a {
  color: white;
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

