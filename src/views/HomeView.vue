<template>
    <HERO />
    <WorkBalance />
    <PRICING />
    <TEAM />
    <!--  <FOOTER /> -->

</template>

<script>
import HERO from "../components/Hero.vue"
import PRICING from "../components/Pricing.vue"
import TEAM from "../components/Team.vue"
import WorkBalance from "../components/WorkBalance.vue"
/* import FOOTER from "../components/Footer.vue" */

export default {
    components: {
        HERO,
        PRICING,
        TEAM,
        WorkBalance,
        /* FOOTER, */
    }
}
</script>

<style>

</style>