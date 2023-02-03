<template>
  <div class="flex gap-3 items-center cursor-pointer" @click="handleSwitchDifficulty">
    <i class="fa-solid fa-circle" :class="colorClass" v-if="active"></i>
    <i class="fa-regular fa-circle" :class="colorClass" v-if="!active"></i>
    <p class="text-sm" :class="colorClass">
      {{ difficultyText }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import Difficulty from '@/problem/model/difficulty';
import { PropType, computed } from 'vue';

const emit = defineEmits(['switchDifficulty'])

const difficultyText = computed(() =>
  props.difficulty === Difficulty.EASY ? 'Easy' :
    props.difficulty === Difficulty.MEDIUM ? 'Medium' : 'Hard'
)

const colorClass = computed(() =>
  !props.active ? 'text-slate-500' :
    props.difficulty === Difficulty.EASY ? 'text-green-600' :
      props.difficulty === Difficulty.MEDIUM ? 'text-gray-400' : 'text-red-600'
)

function handleSwitchDifficulty() {
  emit('switchDifficulty', props.difficulty)
}

const props = defineProps({
  difficulty: {
    type: String as PropType<Difficulty>,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
})
</script>

<style scoped>

</style>