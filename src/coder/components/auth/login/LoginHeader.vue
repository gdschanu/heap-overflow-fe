<template>
  <div class="flex items-center gap-3">
    <img
      src="@/shared/assets/img/logo.png"
      alt="logo"
      class="block dark:hidden w-16 p-2"
    >
    <img
      src="@/shared/assets/img/logo_white.png"
      alt="logo"
      class="hide-on-dark w-16 p-2"
    >
    <p class="text-lg">Heap Overflow</p>
    <p class="ml-auto text-right">
    <p class="hidden sm:block">Don't have an account?</p>
    <router-link to="/register" class="underline">Sign up</router-link>
    </p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.hide-on-dark {
	@apply hidden dark:block;
}
</style>