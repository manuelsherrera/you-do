import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },
  actions: {
    async signUp() {
      const response = await supabase.auth.signUp({
        email: 'nestor86+2@gmail.com',
        password: 'example-password',
      })
      this.user = response.data.user
    },
    async login() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'nestor86+2@gmail.com',
        password: 'example-password',
      });

      this.user = data.user;
      console.log("user: ", this.user)
    },
    async signOut() {
      const { error } = await supabase.auth.signOut()
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
})

// import { defineStore } from "pinia";
// import { supabase } from "../supabase";

// export default defineStore("user", {
//   state() {
//     return {
//       user: null,
//     };
//   },

//   actions: {
//     async fetchUser() {
//       const user = await supabase.auth.user();
//       this.user = user;
//     },

//     async signUp(email, password) {
//       const { user, error } = await supabase.auth.signUp({
//         email: email,
//         password: password,
//       });

//       if (error) throw error;
//       if (user) this.user = user;
//     },

//     persist: {
//       enabled: true,
//       strategies: [
//         {
//           key: "user",
//           storage: localStorage,
//         },
//       ],
//     },
//   },
// });
