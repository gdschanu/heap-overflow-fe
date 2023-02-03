<template>
  <span :class="difficultyColor">
    {{ difficultyText }}
  </span>
</template>

<script lang="ts" setup>
import Difficulty from '@/problem/model/difficulty';
import { PropType, computed } from 'vue';

const props = defineProps({
  difficulty: {
    type: String as PropType<Difficulty>,
    required: true
  },
})

const difficultyText = computed(() => {
  return props.difficulty === Difficulty.EASY ? 'Easy' :
    props.difficulty === Difficulty.MEDIUM ? 'Medium' : 'Hard'
})

const difficultyColor = computed(() => {
  return props.difficulty === Difficulty.EASY ? 'text-green-500' :
    props.difficulty === Difficulty.MEDIUM ? 'text-gray-500' : 'text-red-500'
}) 
</script>

<style scoped>
</style>