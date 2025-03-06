<script setup lang="ts">
import UserMainView from '@/layouts/UserMainView.vue'
import BlogItem from '@/components/BlogItem.vue'
</script>

<template>
  <user-main-view bgColor="#eeeeee">
    <v-row no-gutters>
      <v-col cols="12" class="mt-4" style="margin-bottom: 50px">
        <div
          class="text-h6 text-uppercase text-center py-5 news-title"
          style="font-weight: 700"
        >
          Tin tức
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="pb-10">
      <v-col cols="4" class="d-flex justify-center mb-8">
        <blog-item></blog-item>
      </v-col>
      <v-col cols="4" class="d-flex justify-center mb-8">
        <blog-item></blog-item>
      </v-col>
      <v-col cols="4" class="d-flex justify-center mb-8">
        <blog-item></blog-item>
      </v-col>
      <v-col cols="4" class="d-flex justify-center mb-8">
        <blog-item></blog-item>
      </v-col>
      <v-col cols="4" class="d-flex justify-center mb-8">
        <blog-item></blog-item>
      </v-col>
      <v-col cols="4" class="d-flex justify-center mb-8">
        <blog-item></blog-item>
      </v-col>
    </v-row>
  </user-main-view>
</template>

<style scoped>
.news-title {
  position: relative;
  &::after {
    position: absolute;
    width: 20px;
    height: 3px;
    margin-left: -10px;
    left: 50%;
    background: #333333;
    content: '';
    bottom: 0;
  }
}
</style>
