<template>
  <div class="flex gap-3" @click="handleSwitchTheme">
    <div>
      <i class="fa-solid fa-moon" v-show="!darkTheme"></i>
      <i class="fa-solid fa-sun" v-show="darkTheme"></i>
    </div>
    <p v-show="!darkTheme">Dark</p>
    <p v-show="darkTheme">Light</p>
  </div>
</template>

<script lang="ts" setup>
import { setDarkTheme, setLightTheme, isDarkTheme } from '@/shared/helpers/theme';
import { ref } from 'vue';

const darkTheme = ref(isDarkTheme())

function handleSwitchTheme() {
  if (isDarkTheme()) {
    setLightTheme()
    darkTheme.value = false
  } else {
    setDarkTheme()
    darkTheme.value = true
  }
}
</script>

<style scoped>
</style>