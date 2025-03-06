<script setup lang="ts">
defineProps({
  width: {
    type: [Number, String],
    default: 260
  },
  height: {
    type: [Number, String],
    default: 260
  }
})
</script>

<template>
  <div class="text-center" :style="{ width: width + 'px' }">
    <v-img
      :height="height"
      :width="width"
      src="@/assets/imgs/product_temp.webp"
    >
      <template #sources>
        <source srcset="@/assets/imgs/product_temp.webp" />
      </template>
    </v-img>
    <div>Sofa đơn SFD18</div>
    <div>5.100.000đ</div>
  </div>
</template>

<style scoped></style>
