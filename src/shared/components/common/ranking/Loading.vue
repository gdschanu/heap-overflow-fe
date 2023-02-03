<template>
  <el-skeleton animated class="h-full" :throttle="300">
    <template #template>
      <div class="h-full flex flex-col gap-4">
        <el-skeleton-item class="basis-6" />
        <el-skeleton-item class="grow" />
      </div>
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
import { ElSkeleton, ElSkeletonItem } from 'element-plus';
</script>

<style scoped>
</style>