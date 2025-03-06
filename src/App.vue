<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
</script>

<template>
  <v-app>
    <v-main class="main-app">
      <header-app></header-app>
      <router-view />
      <footer-app></footer-app>
    </v-main>
    <core-a-snackbar />
  </v-app>
</template>

<style scoped></style>
