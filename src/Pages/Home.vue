<script>
import WhoIAm from "../components/WhoIAm.vue";
import Passions from "../components/Passions.vue";
import Creations from "../components/Creations.vue";
import Quote from "../components/Quote.vue";

export default {
  name: "Home",
  components: {Quote, Creations, Passions, WhoIAm}
}
</script>

<template>
  <WhoIAm/>
  <Passions/>
  <Creations/>
  <Quote/>
</template>


<style scoped>

</style>
