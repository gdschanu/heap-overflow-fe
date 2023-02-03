<template>
  <div>
    <Loading v-if="firstLoading" />
    <template v-else>
      <div class="h-full flex flex-col">
        <Header />
        <List
          :top-coders="(topCoders as Rank[]).slice(0, 9)"
          class="flex-1 overflow-auto"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Coder from '@/coder/coder';
import errorHandler from '@/shared/helpers/errorHandler';
import { getTopCoders } from '@/shared/models/topPerform/domainLogic/topCoder';
import { ref, onMounted } from 'vue';
import Header from './Header.vue';
import List from './List.vue';
import Loading from './Loading.vue';

type Rank = {
  coder: Coder,
  rank: number
}

const firstLoading = ref(true)
const topCoders = ref<Rank[] | null>(null)

onMounted(async () => {
  try {
    topCoders.value = await getTopCoders(0, 999);
    topCoders.value.sort((a, b) => a.rank - b.rank);
    firstLoading.value = false
  } catch (error) {
    errorHandler(error)
  }
})
</script>

<style scoped>

</style>