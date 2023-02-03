<template>
  <InputText
    placeholder="Search something ..."
  >
    <template #prefix>
      <i class="fa-solid fa-magnifying-glass text-slate-500"></i>
    </template>
  </InputText>
</template>

<script lang="ts" setup>
import InputText from '../general/InputText.vue';

</script>

<style scoped>
</style>