<template>
  <el-skeleton animated class="h-full" :throttle="300">
    <template #template>
      <el-skeleton-item class="h-full grow" />
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
import { ElSkeleton, ElSkeletonItem } from 'element-plus';
</script>

<style scoped>
</style>