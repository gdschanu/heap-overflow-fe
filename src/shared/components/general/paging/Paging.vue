<template>
  <div>
    <slot></slot>
    <el-pagination
      background
      small
      :total="total*10"
      layout="prev, pager, next, jumper"
      v-model:current-page="currentPage"
    />
  </div>
</template>

<script lang="ts" setup>
import { ElPagination } from 'element-plus';
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

const currentPage = computed({
  get() {
    return props.modelValue
  },
  set(value: number) {
    emit('update:modelValue', value)
  }
})

</script>

<style scoped>
</style>