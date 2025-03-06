<script setup lang="ts">
import UserMainView from '@/layouts/UserMainView.vue'
</script>

<template>
  <user-main-view>
    <v-row no-gutters>
      <v-col cols="12" class="mt-4" style="margin-bottom: 50px">
        <div
          class="text-h6 text-uppercase text-center py-5 cart-title"
          style="font-weight: 700"
        >
          Giỏ hàng
        </div>
      </v-col>
    </v-row>
  </user-main-view>
</template>

<style scoped>
.cart-title {
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
