<template>
  <div class="flex flex-col justify-between">
    <div class="flex gap-3 mb-3 font-bold px-3">
      <!-- <div class="w-[5%] text-center shrink-0">ID</div> -->
      <div class="grow">Name</div>
      <div class="w-[12%] text-center shrink-0">Acceptance</div>
      <div class="w-[12%] text-center shrink-0">Difficulty</div>
      <div class="w-[20%] text-center shrink-0">Tags</div>
      <div class="w-[10%] text-center shrink-0">Status</div>
    </div>
    <ul
      v-for="problem in problems"
      :key="problem.getId()"
      class="flex gap-3 items-center h-12 px-3 rounded-lg transition hover:ring-1 dark:hover:ring-0 cursor-pointer
      ring-slate-300
      dark:ring-slate-700 hover:dark:bg-slate-800"
      @click="$router.push(`/problem/${problem.getId()}`)"
    >
      <!-- <li class="w-[5%] text-center shrink-0">01</li> -->
      <li
        class="w-[400px] truncate"
        :title="problem.getName()"
      > {{ problem.getName() }} </li>
      <li class="w-[12%] text-center shrink-0">{{ problem.getAcceptance() }}%</li>
      <li class="w-[12%] text-center shrink-0">
        <Difficulty :difficulty="problem.getDifficulty()" />
      </li>
      <li class="w-[20%] text-center shrink-0 flex justify-around">
        <el-tag
          v-for="tag in problem.getTags()"
          :key="tag"
          class="bg-sky-100 border-sky-200 dark:bg-sky-900 dark:border-sky-800"
        >
          {{ tag }}
        </el-tag>
      </li>
      <li class="w-[10%] text-center shrink-0">
        <span v-show="problem.getStatus() === ProblemStatus.DONE">
          Done
          <i class="fa-solid fa-check"></i>
        </span>
        <span v-show="problem.getStatus() === ProblemStatus.UNDONE" class="text-slate-500">
          Doing...
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ElTag } from 'element-plus';
import Problem from '@/problem/model/problem';
import Difficulty from '@/shared/components/general/Difficulty.vue';
import { PropType } from 'vue';
import { ProblemStatus } from '@/problem/model/problemStatus';

const props = defineProps({
  problems: {
    type: Array as PropType<Problem[]>,
    required: true
  },
  startIndex: {
    type: Number,
    default: 1
  },
})
</script>

<style scoped>
</style>