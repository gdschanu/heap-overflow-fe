<template>
  <div class="h-56">
    <Loading v-if="isLoading" />
    <template v-else>
      <div class="h-full flex flex-col">
        <Header />
        <div class="flex items-stretch justify-around gap-3">
          <div class="flex flex-col justify-around">
            <ProcessDifficulty
              :difficulty="Difficulty.EASY"
              :active="currentProgress?.difficulty === Difficulty.EASY"
              @switchDifficulty="currentDifficulty = $event"
            />
            <ProcessDifficulty
              :difficulty="Difficulty.MEDIUM"
              :active="currentProgress?.difficulty === Difficulty.MEDIUM"
              @switchDifficulty="currentDifficulty = $event"
            />
            <ProcessDifficulty
              :difficulty="Difficulty.HARD"
              :active="currentProgress?.difficulty === Difficulty.HARD"
              @switchDifficulty="currentDifficulty = $event"
            />
          </div>
          <el-progress
            type="circle"
            :percentage="currentProgress.percentage"
            :stroke-width="12"
            :width="120"
          >
            <p class="text-lg">{{ currentProgress.percentage }}%</p>
            <p class="text-sm">Complete</p>
          </el-progress>
        </div>
        <div class="text-sm mt-auto text-center">
          <span class="font-bold">
            {{ currentProgress.done }}/{{ currentProgress.problems }}
          </span>
          {{ currentProgress.difficulty.toLocaleLowerCase() }}
          problems solved
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ElProgress } from 'element-plus';
import { onMounted } from 'vue';
import Header from './Header.vue';
import { ref, computed, ComputedRef } from '@vue/reactivity';
import { getProgress } from '@/shared/models/progress/domainLogic/progress';
import Difficulty from '@/problem/model/difficulty';
import Progress from '@/shared/models/progress/progress';
import Loading from './Loading.vue'
import ProcessDifficulty from './Difficulty.vue';
import errorHandler from '@/shared/helpers/errorHandler';

const progresses = ref<Progress[] | null>(null)
const isLoading = ref(true)

const currentDifficulty = ref<Difficulty.EASY>(Difficulty.EASY)
const currentProgress = computed(() => {
  const progress = progresses.value!.find(progress => progress.difficulty === currentDifficulty.value)
  if (!progress) throw new Error ('Something went wrong')
  return progress
})

onMounted(async () => {
  try {
    progresses.value = await getProgress()
    isLoading.value = false
  } catch (error) {
    errorHandler(error)
  }
})
</script>

<style scoped>
</style>