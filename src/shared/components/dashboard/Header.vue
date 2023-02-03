<template>
  <template v-if="coder">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl">Hi, {{ coder.name }}</h1>
        <p class="text-sm text-slate-700 dark:text-slate-300">Welcome Back!</p>
      </div>
      <div class="ml-auto">
        <HeaderSearch />
      </div>
    </div>
  </template>
  <template v-else>
    <div>
      <h1 class="text-2xl">Heap overflow, a new way to learn</h1>
      <p class="text-sm text-slate-700 dark:text-slate-300">A place where you can practice your coding skill & prepare for the interview</p>
    </div>
  </template>
</template>

<script lang="ts" setup>
import Coder from '@/coder/coder';
import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import HeaderSearch from './HeaderSearch.vue';
const store = useStore()
const coder: ComputedRef<Coder | null> = computed(() => store.state.coderStore.coder)

</script>

<style scoped>
</style>