<template>
  <v-app>
    <HeaderBar></HeaderBar>
    <Hero></Hero>
    <v-main class="grey lighten-2"></v-main>
  </v-app>
</template>

<script>
import HeaderBar from "../components/header-bar";
import Hero from "../components/hero";

export default {
  components: { HeaderBar, Hero }
};
</script>
