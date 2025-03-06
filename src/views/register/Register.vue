<script setup lang="ts">
import UserMainView from '@/layouts/UserMainView.vue'
</script>

<template>
  <user-main-view bgColor="#eeeeee">
    <v-row no-gutters>
      <v-col cols="12" class="mt-4" style="margin-bottom: 50px">
        <div
          class="text-h6 text-uppercase text-center py-5 register-title"
          style="font-weight: 700"
        >
          Đăng ký tài khoản
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" class="bg-white" style="padding: 75px">
        <div style="margin: 0 80px" class="px-4">
          <div class="text-uppercase my-3" style="font-weight: 700">
            TẠO TÀI KHOẢN
          </div>
          <div>Nếu chưa có tài khoản vui lòng đăng ký tại đây</div>
          <div class="my-2">Họ<span class="text-red px-1">*</span></div>
          <v-text-field
            density="compact"
            placeholder="Họ của bạn"
            variant="outlined"
            single-line
          ></v-text-field>
          <div class="my-2">Tên<span class="text-red px-1">*</span></div>
          <v-text-field
            density="compact"
            placeholder="Tên của bạn"
            variant="outlined"
            single-line
          ></v-text-field>
          <div class="my-2">Email<span class="text-red px-1">*</span></div>
          <v-text-field
            density="compact"
            placeholder="Email của bạn"
            variant="outlined"
            single-line
          ></v-text-field>
          <div class="my-2">
            Số điện thoại<span class="text-red px-1">*</span>
          </div>
          <v-text-field
            density="compact"
            placeholder="Số điện thoại của bạn"
            variant="outlined"
            single-line
          ></v-text-field>
          <div class="my-2">Mật khẩu<span class="text-red px-1">*</span></div>
          <v-text-field
            density="compact"
            placeholder="Mật khẩu của bạn"
            variant="outlined"
            single-line
          ></v-text-field>
          <v-btn
            height="52"
            variant="outlined"
            class="text-caption text-uppercase px-6 mt-2 mb-"
            style="font-weight: 700"
            >Đăng ký</v-btn
          >
        </div>
        <div class="text-center mt-10">
          <div>Bạn đã có tài khoản?</div>
          <div>Hoặc đăng nhập bằng</div>
          <v-btn
            height="40"
            variant="outlined"
            class="text-caption px-6 mt-2 mb-4 text-white"
            style="font-weight: 700; background-color: #e14b33"
          >
            <v-icon size="28" class="mr-3">mdi-google-plus</v-icon>Google</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </user-main-view>
</template>

<style scoped>
.register-title {
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
