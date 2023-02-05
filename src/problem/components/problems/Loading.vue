<template>
  <el-skeleton animated class="h-full" :throttle="300">
    <template #template>
      <div class="flex flex-col gap-4 h-full">
        <!-- <Header class="basis-14" /> -->
        <div class="basis-14 flex items-center gap-3">
          <el-skeleton-item class="w-36 h-10" />
          <el-skeleton-item class="w-36 h-10" />
          <el-skeleton-item class="ml-auto w-60 h-10" />
        </div>
        <div
          class="grow border border-slate-300 dark:border-none dark:bg-slate-900 rounded-lg p-4 flex flex-col"
        >
          <div class="h-full flex flex-col gap-4">
            <el-skeleton-item class="basis-6" />
            <el-skeleton-item class="grow" />
          </div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
import { ElSkeleton, ElSkeletonItem } from "element-plus";
</script>

<style scoped>
</style>