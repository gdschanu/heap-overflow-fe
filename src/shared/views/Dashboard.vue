<template>
  <div class="flex flex-col gap-4 h-full">
    <Header class="basis-14" />
    <Banner
      class="border border-slate-300 dark:border-none dark:bg-slate-900 rounded-lg"
    />
    <RecommendProblem
      class="border border-slate-300 dark:border-none dark:bg-slate-900 rounded-lg grow"
    />
  </div>
</template>

<script lang="ts" setup>
import RecommendProblem from "../components/common/RecommendProblem/RecommendProblem.vue";
import Banner from "../components/dashboard/Banner.vue";
import Header from "../components/dashboard/Header.vue";

</script>

<style scoped>
</style>
