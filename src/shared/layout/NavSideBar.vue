<template>
  <Nav>
    <div class="h-screen flex p-4 gap-4 max-w-7xl m-auto Dashboard">
      <div class="grow">
        <slot></slot>
      </div>
      <div class="w-1/4 shrink-0 flex flex-col gap-4">
        <div class="basis-14 flex justify-end items-center">
          <ActionBar />
        </div>
        <div class="section-container" v-if="coder">
          <Process class="p-4 border border-slate-300 dark:border-none dark:bg-slate-900 rounded-lg" />
        </div>
        <div class="flex-1 min-h-0 section-container">
          <Ranking class="p-4 h-full border border-slate-300 dark:border-none dark:bg-slate-900 rounded-lg" />
        </div>
      </div>
    </div>
  </Nav>
</template>

<script lang="ts" setup>
import Nav from "./Nav.vue";
import ActionBar from "../components/common/actionBar/ActionBar.vue";
import Process from "../components/common/progress/Process.vue";
import Ranking from "../components/common/ranking/Ranking.vue";
import { useStore } from "vuex";
import { ComputedRef, computed } from "vue";
import Coder from "@/coder/coder";

const store = useStore()
const coder: ComputedRef<Coder | null> = computed(() => store.state.coderStore.coder)
</script>

<style scoped></style>
