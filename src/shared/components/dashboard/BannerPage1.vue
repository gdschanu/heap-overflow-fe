<template>
  <div class="relative">
    <div class="absolute top-1/2 w-1/2 transform -translate-y-1/2">
      <h2 class="mb-5">Take our best exiting problem</h2>
      <Button>
        Solve now
        <i class="fa-regular fa-circle-right"></i>
      </Button>
    </div>
    <img
      src="@/shared/assets/img/vuejs.svg"
      class="block absolute top-1/2 transform -translate-y-1/2 w-56 right-[10%]"
    />
  </div>
</template>

<script lang="ts" setup>
import Button from '../general/Button.vue';
</script>

<style scoped>
</style>