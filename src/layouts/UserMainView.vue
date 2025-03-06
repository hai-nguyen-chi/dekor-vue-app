<script setup lang="ts">
import BreadcrumbsApp from '@/components/BreadcrumbsApp.vue'
defineProps({
  bgColor: {
    type: String,
    default: 'white'
  }
})
</script>

<template>
  <div style="margin-top: 88px" class="py-3">
    <breadcrumbs-app></breadcrumbs-app>
  </div>
  <v-divider></v-divider>
  <div
    :style="{
      backgroundColor: bgColor
    }"
  >
    <v-container class="pa-0">
      <slot name="default"></slot>
    </v-container>
  </div>
</template>

<style scoped></style>
