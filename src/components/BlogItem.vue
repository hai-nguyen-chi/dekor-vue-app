<script setup lang="ts">
defineProps({
  width: {
    type: [String, Number],
    default: 360
  },
  height: {
    type: [String, Number],
    default: 270
  }
})
</script>

<template>
  <div class="text-center bg-white" :style="{ width: width + 'px' }">
    <v-img :width="width" :height="height" src="@/assets/imgs/1.webp">
      <template #sources>
        <source srcset="@/assets/imgs/1.webp" />
      </template>
    </v-img>
    <div class="pt-6 px-6 pb-3" style="color: #333333; font-weight: 700">
      Bí quyết bảo quản nội thất gỗ
    </div>
    <div class="text-body-2 px-6 pb-8 blog-content">
      Ông cha ta đã dạy : "của bền tại người". Quả thực, nếu sở hữu những sản
      phẩm nội thất...
    </div>
    <div class="d-flex align-center justify-space-between py-5 px-6">
      <div>07/11/2015</div>
      <div>
        <v-icon>mdi-forum</v-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-content {
  position: relative;
  &::after {
    position: absolute;
    left: 50%;
    height: 3px;
    width: 20px;
    background: #000;
    bottom: 0;
    margin-left: -10px;
    content: '';
  }
}
</style>
