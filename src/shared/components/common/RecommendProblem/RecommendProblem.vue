<template>
  <div class="flex flex-col p-4">
    <p class="text-xl mb-4">Problem Solving</p>
    <div class="h-full" ref="problemContainer">
      <Loading v-if="firstLoading" />
      <ProblemList
        class="h-full"
        :problems="(problems as Problem[])"
        v-else
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, ComputedRef, computed } from 'vue';
import { getRecommendProblems, listProblem } from '@/problem/model/domainLogic/problem'
import Problem from '@/problem/model/problem';
import errorHandler from '@/shared/helpers/errorHandler';
import ProblemList from '@/problem/components/common/problemList/problemList.vue';
import Loading from './Loading.vue';
import { useStore } from 'vuex';
import Coder from '@/coder/coder';

const store = useStore()
const coder: ComputedRef<Coder | null> = computed(() => store.state.coderStore.coder)
const firstLoading = ref(true)
const problems = ref<Problem[]>([])

const problemContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  try {
    setTimeout(async () => {
      const numberOfProblem = Math.floor((problemContainer.value!.offsetHeight - 1) / 50)
      if (coder.value)
        problems.value = await getRecommendProblems(numberOfProblem)
      else
        problems.value = await listProblem(0, numberOfProblem)
      firstLoading.value = false
    }, 0);
  } catch (error) {
    errorHandler(error)
  }
})

</script>

<style scoped>
</style>