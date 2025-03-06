<script setup lang="ts">
import UserMainView from '@/layouts/UserMainView.vue'
import ProductItem from '@/components/ProductItem.vue'

const menuProduct = [
  'Bàn gỗ',
  'Kệ sách',
  'Rèm cửa',
  'Ghế sofa',
  'Phòng tắm',
  'Tủ quần áo',
  'Giường ngủ',
  'Đèn trang trí'
]
</script>

<template>
  <user-main-view>
    <v-row no-gutters>
      <v-col cols="3">
        <div class="text-uppercase">Danh mục</div>
        <v-list class="py-1">
          <v-list-item
            v-for="(menu, index) in menuProduct"
            :key="index"
            density="compact"
          >
            <v-list-item-title class="text-subtitle-2">{{
              menu
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="9">
        <div class="text-uppercase text-center">Sản phẩm</div>
        <v-row no-gutters>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-8">
            <product-item></product-item>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </user-main-view>
</template>

<style scoped></style>
