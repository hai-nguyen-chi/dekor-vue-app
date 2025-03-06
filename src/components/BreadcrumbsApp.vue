<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Breadcrumbs } from '@/interfaces/breadcrumbs'

const route = useRoute()

const breadcrumbs = computed(
  () => (route.meta.breadcrumbs as Breadcrumbs[]) || []
)
</script>

<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" class="pa-0">
        <v-breadcrumbs :items="breadcrumbs" class="pa-0" style="height: 26px">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
