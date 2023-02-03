<template>
  <div class="flex gap-3" @click="handleLogout">
    <div>
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
    </div>
    <p> Sign out </p>
  </div>
</template>

<script lang="ts" setup>
import { logout } from '@/coder/auth'; 
import errorHandler from '@/shared/helpers/errorHandler';
import { useRouter } from 'vue-router';

const router = useRouter();

async function handleLogout() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;
    await logout(accessToken)
    localStorage.removeItem('accessToken');
    setTimeout(() => {
      window.location.href = '/login';
    }, 0);
  } catch (error) {
    errorHandler(error);
  }
}
</script>

<style scoped>
</style>