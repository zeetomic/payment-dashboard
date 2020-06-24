<template>
  <v-app>
    <v-main>
      <Navbar />
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '~/components/UI/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style>
.v-application {
  background: #E9EFF3!important;
}
</style>