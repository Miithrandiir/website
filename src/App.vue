<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import Header from "./components/template/Header.vue";
import Footer from "./components/template/Footer.vue";
import './assets/sass/template.scss'
import WhoIAm from "./components/WhoIAm.vue";
import Passions from "./components/Passions.vue";
import Creations from "./components/Creations.vue";
import Quote from "./components/Quote.vue";
</script>

<template>
  <Header/>
  <WhoIAm/>
  <Passions/>
  <Creations/>
  <Quote/>
  <Footer/>
</template>
