<template>
  <NAVBAR />
  <h1 class="">This is a Title in app.vue</h1>
  <RouterView />

</template>
<script>
import NAVBAR from "../src/components/NavBar.vue"
export default {
 components: {
  NAVBAR,
 }
}
</script>