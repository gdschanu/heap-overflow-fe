<template>
  <div class="h-full">
    <Loading v-if="firstLoading"/>
    <div class="flex flex-col gap-4 h-full" v-else>
      <Header class="basis-14" />
      <div class="grow border border-slate-300 dark:border-none dark:bg-slate-900 rounded-lg p-4 flex flex-col">
        <ProblemList
          :problems="(problems as Problem[])"
        />
        <div class="mt-auto flex justify-center">
          <Paging v-model="currentPage" :total="totalPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Problem from '@/problem/model/problem';
import { ref, onMounted, watch } from 'vue';
import Header from './list/Header.vue';
import List from './list/List.vue';
import Loading from './Loading.vue';
import ProblemList from '@/problem/components/common/problemList/problemList.vue';
import Paging from '@/shared/components/general/paging/Paging.vue';
import { countProblems, listProblem } from '@/problem/model/domainLogic/problem';

const firstLoading = ref(true)
const problemsContainer = ref<HTMLElement | null>(null)
const problems = ref<Problem[]>([])
const currentPage = ref(1)
const totalPage = ref(1)
const PER_PAGE = Math.floor((window.innerHeight - 180) / 50)

onMounted(async () => {
  problems.value = await listProblem(currentPage.value - 1, PER_PAGE)
  
  totalPage.value = Math.ceil((await countProblems()) / PER_PAGE)
  firstLoading.value = false
})

watch(currentPage, async () => {
  problems.value = await listProblem(currentPage.value - 1, PER_PAGE)
})
</script>

<style scoped>
.section-container {
  @apply border border-slate-300 dark:bg-slate-900 dark:border-none rounded-xl;
}
</style>