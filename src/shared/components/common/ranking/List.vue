<template>
  <div class="table-container">
    <table class="table-fixed w-full">
      <colgroup>
          <col class="w-1/6" />
          <col class="w-5/6"/>
      </colgroup>
      <tr>
        <th class="pb-1"> Rank </th>
        <th class="text-left align-middle pl-3 pb-1"> Coder </th>
      </tr>
      <tr
        v-for="(coderRank, index) in topCoders"
        :key="coderRank.coder.id"
        class="text-center"
      >
        <td class="text-center py-2">
          {{ coderRank.rank }}
        </td>
        <td class="flex py-2 pl-3 gap-3">
          <el-avatar
            :src="coderRank.coder.avatar"
            class="shrink-0"
            :size="30"
          />
          <p class="truncate">
            {{ coderRank.coder.name }}
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ElAvatar } from 'element-plus';
import Coder from '@/coder/coder';
import { PropType } from 'vue';

const props = defineProps({
  topCoders: {
    type: Array as PropType<{
      coder: Coder,
      rank: number
    }[]>,
    required: true
  },
})
</script>

<style scoped>
.table-container::-webkit-scrollbar {
  display: none;
}
</style>