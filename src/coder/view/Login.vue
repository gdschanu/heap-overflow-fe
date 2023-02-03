<template>
  <Layout>
    <template #layout-content>
      <div class="p-6 sm:p-12 max-w-2xl m-auto">
        <LoginHeader />
        <h1 class="mt-3 text-3xl sm:text-4xl">Sign In</h1>
        <!-- <ThirdPartySignIn class="mt-10" /> -->
        <LoginForm class="mt-6" />
      </div>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/coder/components/auth/Layout.vue'
import LoginHeader from '@/coder/components/auth/login/LoginHeader.vue'
import ThirdPartySignIn from '../components/auth/ThirdPartySignIn.vue'
import LoginForm from '@/coder/components/auth/login/LoginForm.vue'
</script>

<style scoped>
</style>