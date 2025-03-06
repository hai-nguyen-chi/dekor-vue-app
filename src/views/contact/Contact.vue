<script setup lang="ts">
import UserMainView from '@/layouts/UserMainView.vue'
</script>

<template>
  <user-main-view>
    <v-row no-gutters>
      <v-col cols="12" class="mt-4" style="margin-bottom: 50px">
        <div
          class="text-h6 text-uppercase text-center py-5 contact-title"
          style="font-weight: 700"
        >
          Liên hệ
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="8" class="px-4">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.570327172527!2d106.6631168!3d10.800389849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752937ddf0706b%3A0x833dda1f4454e779!2zTE9UVEUgTWFydCBUw6JuIELDrG5o!5e0!3m2!1svi!2s!4v1741168378377!5m2!1svi!2s"
            width="100%"
            height="270"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="mt-10">
          <div class="text-h6 mt-5 mb-3">Liên hệ với chúng tôi</div>
          <v-row no-gutters>
            <v-col cols="2" class="mt-2"
              >Họ tên<span class="text-red px-1">*</span></v-col
            >
            <v-col cols="10">
              <v-text-field
                density="compact"
                placeholder="Nhập họ tên *"
                variant="outlined"
                single-line
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" class="mt-2"
              >Email<span class="text-red px-1">*</span></v-col
            >
            <v-col cols="10">
              <v-text-field
                density="compact"
                placeholder="Nhập Email *"
                variant="outlined"
                single-line
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" class="mt-2"
              >Nội dung<span class="text-red px-1">*</span></v-col
            >
            <v-col cols="10">
              <v-textarea
                placeholder="Lời nhắn"
                variant="outlined"
                rows="3"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-10">
            <v-col cols="12" class="d-flex justify-end">
              <v-btn
                height="52"
                variant="outlined"
                class="text-caption text-uppercase px-6 my-4 text-white"
                style="font-weight: 700; background-color: #333"
                >Gửi liên hệ</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="4" class="px-4">
        <div>
          <div class="text-uppercase text-h6 my-2">Thông tin cửa hàng</div>
          <div class="d-flex mb-2">
            <v-icon size="20">mdi-map-marker</v-icon>
            <div class="text-subtitle-2 pl-2">Tầng 6, 266 Đội Cấn, Hà Nội</div>
          </div>
          <div class="d-flex mb-2">
            <v-icon size="20">mdi-phone</v-icon>
            <div class="text-subtitle-2 pl-2">1900 6750</div>
          </div>
          <div class="d-flex mb-2">
            <v-icon size="20">mdi-email</v-icon>
            <div class="text-subtitle-2 pl-2">hellocafein@gmail.com</div>
          </div>
        </div>
        <div class="mt-8">
          <div class="text-uppercase text-h6 my-2">Theo dõi chúng tôi</div>
          <div class="ml-n4">
            <v-icon size="20" class="pa-4 mx-2">mdi-facebook</v-icon>
            <v-icon size="20" class="pa-4 mx-2">mdi-twitter</v-icon>
            <v-icon size="20" class="pa-4 mx-2">mdi-google</v-icon>
            <v-icon size="20" class="pa-4 mx-2">mdi-instagram</v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
  </user-main-view>
</template>

<style scoped>
.contact-title {
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
