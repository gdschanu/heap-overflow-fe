<template>
  <el-skeleton animated class="h-full" :throttle="300">
    <template #template>
      <div class="h-full">
        <el-skeleton-item class="h-6 my-2" />
        <div class="flex justify-around">
          <div class="flex flex-col justify-around">
            <el-skeleton-item class="h-6 w-16" />
            <el-skeleton-item class="h-6 w-16" />
            <el-skeleton-item class="h-6 w-16" />
          </div>
          <div>
            <el-skeleton-item variant="circle" class="h-[120px] w-[120px]" />
          </div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
import { ElSkeleton, ElSkeletonItem } from 'element-plus';
</script>

<style scoped>
</style>