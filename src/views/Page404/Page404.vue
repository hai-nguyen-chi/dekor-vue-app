<script setup lang="ts">
import UserMainView from '@/layouts/UserMainView.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <user-main-view>
    <div class="pt-3 mb-10" style="height: calc(100vh - 565px)">
      <div class="text-h6 text-uppercase text-black my-2">
        Lỗi không tìm thấy trang
      </div>
      <div class="text-subtitle-2">
        Xin lỗi, chúng tôi không tìm thấy kết quả nào phù hợp. Xin vui lòng quay
        lại trang chủ
      </div>
      <v-btn
        height="52"
        variant="outlined"
        class="text-caption text-uppercase px-11 mt-7 mb-3"
        style="font-weight: 700"
        @click="router.push('/')"
        >Về trang chủ</v-btn
      >
    </div>
  </user-main-view>
</template>

<style scoped></style>
