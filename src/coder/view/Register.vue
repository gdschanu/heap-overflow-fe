<template>
  <Layout>
    <template #layout-content>
      <div class="p-6 sm:p-12 max-w-2xl m-auto">
        <RegisterHeader />
        <h1 class="mt-3 text-3xl sm:text-4xl">Sign Up</h1>
        <!-- <ThirdPartySignIn class="mt-10" /> -->
        <RegisterForm class="mt-6"/>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '../components/auth/Layout.vue';
import RegisterForm from '../components/auth/register/RegisterForm.vue';
import RegisterHeader from '../components/auth/register/RegisterHeader.vue';
import ThirdPartySignIn from '../components/auth/ThirdPartySignIn.vue';

</script>

<style scoped>
</style>