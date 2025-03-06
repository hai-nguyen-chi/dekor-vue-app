<script setup lang="ts">
const navigationMenu = [
  'Trang chủ',
  'Giới thiệu',
  'Sản phẩm',
  'Tin tức',
  'Liên hệ'
]
</script>

<template>
  <v-list
    style="background-color: transparent; color: white"
    class="d-flex py-1"
  >
    <v-list-item
      v-for="(menu, index) in navigationMenu"
      :key="index"
      density="compact"
    >
      <v-list-item-title
        class="text-uppercase text-subtitle-2"
        style="font-weight: 700"
        >{{ menu }}</v-list-item-title
      >
    </v-list-item>
    <v-list-item>
      <v-icon class="px-4">mdi-account</v-icon>
      <v-icon class="px-4">mdi-cart</v-icon>
      <v-icon class="px-4">mdi-magnify</v-icon>
    </v-list-item>
  </v-list>
</template>

<style scoped></style>
