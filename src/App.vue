<template>
  <NAVBAR />
  <!-- <h1 class="">This is a Title in app.vue</h1> -->
  <RouterView />
  <FOOTER />
</template>
<script>
import NAVBAR from "../src/components/NavBar.vue"
import FOOTER from "../src/components/Footer.vue"

export default {
  components: {
    NAVBAR,
    FOOTER,
  }
}
</script>