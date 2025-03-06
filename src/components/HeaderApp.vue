<script setup lang="ts">
import NavigationApp from './NavigationApp.vue'
</script>

<template>
  <div
    style="
      background-color: #000c;
      position: fixed;
      z-index: 9999;
      left: 0;
      right: 0;
    "
  >
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <img src="@/assets/imgs/logo.webp" />
        <navigation-app></navigation-app>
      </div>
    </v-container>
  </div>
</template>

<style scoped></style>
