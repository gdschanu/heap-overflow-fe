<template>
  <el-carousel height="14rem" class="overflow-hidden">
    <el-carousel-item>
      <banner-page1 class="h-full mx-14" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
import BannerPage1 from './BannerPage1.vue';
import { ElCarousel, ElCarouselItem } from 'element-plus';
</script>

<style scoped>

</style>