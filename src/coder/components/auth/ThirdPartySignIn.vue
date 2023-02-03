<template>
  <div class="flex gap-6">
    <Button block>
      <i class="fa-brands fa-google text-xl"></i>
      <span class="ml-3">Sign in with Google</span>
    </Button>
    <Button type="secondary">
      <i class="fa-brands fa-github text-xl"></i>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/shared/components/general/Button.vue';
</script>

<style scoped>
</style>