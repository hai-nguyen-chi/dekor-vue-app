<script setup lang="ts">
import UserMainView from '@/layouts/UserMainView.vue'
</script>

<template>
  <user-main-view bgColor="#eeeeee">
    <v-row no-gutters>
      <v-col cols="12" class="mt-4" style="margin-bottom: 50px">
        <div
          class="text-h6 text-uppercase text-center py-5 login-title"
          style="font-weight: 700"
        >
          Đăng nhập tài khoản
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" class="bg-white py-8 px-10">
        <v-row no-gutters>
          <v-col cols="12">
            <div class="text-h6 mb-7 mt-3">Đăng nhập</div>
            <div class="mb-4">Nếu bạn đã có tài khoản, đăng nhập tại đây.</div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="7">
            <v-row no-gutters>
              <v-col cols="3" class="mt-2"
                >Email<span class="text-red px-1">*</span></v-col
              >
              <v-col cols="9">
                <v-text-field
                  density="compact"
                  placeholder="Email của bạn"
                  variant="outlined"
                  single-line
                ></v-text-field>
              </v-col>
              <v-col cols="3" class="mt-2"
                >Mật khẩu<span class="text-red px-1">*</span></v-col
              >
              <v-col cols="9">
                <v-text-field
                  density="compact"
                  placeholder="Mật khẩu"
                  variant="outlined"
                  single-line
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn
                  height="52"
                  variant="outlined"
                  class="text-caption text-uppercase px-6 mt-2 mb-4 text-white"
                  style="font-weight: 700; background-color: #333"
                  >Đăng nhập</v-btn
                >
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">
                <div class="text-center">Hoặc đăng nhập bằng</div>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <v-btn
                  height="40"
                  variant="outlined"
                  class="text-caption px-6 mt-2 mb-4 text-white"
                  style="font-weight: 700; background-color: #e14b33"
                >
                  <v-icon size="28" class="mr-3">mdi-google-plus</v-icon
                  >Google</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="5" class="pl-10">
            <div class="text-subtitle-2 mb-2">Quên mật khẩu?</div>
            <div class="text-subtitle-2">Bạn chưa có tài khoản?</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </user-main-view>
</template>

<style scoped>
.login-title {
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
