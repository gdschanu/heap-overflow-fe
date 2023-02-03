<template>
  <form @submit="handleLogin" novalidate>
    <div>
      <label> Username or Email </label>
      <InputText
        class="mt-3"
        placeholder="Yourname or youremail@gmail.com"
        v-model="usernameOrEmail"
        :validate="validateUsernameOrEmail"
        :always-show-validate="alwaysShowValidate"
        :disabled="loading"
      >
        <template #prefix>
          <i class="fa-solid fa-user text-slate-500"></i>
        </template>
      </InputText>
    </div>
    <div class="mt-6">
      <div class="flex">
        <label> Password </label>
        <Router-link to="/" class="ml-auto underline">Forgot Password?</Router-link>
      </div>
      <InputPass
        class="mt-3"
        placeholder="**********"
        v-model="password"
        :validate="validatePassword"
        :always-show-validate="alwaysShowValidate"
        :disabled="loading"
      >
        <template #prefix>
          <i class="fa-solid fa-lock text-slate-500"></i>
        </template>
      </InputPass>
    </div>
    <Button class="mt-6" :loading="loading" :disabled="loading">Sign In</Button>
  </form>
</template>

<script lang="ts" setup>
import InputPass from '@/shared/components/general/InputPass.vue';
import InputText from '@/shared/components/general/InputText.vue';
import Button from '@/shared/components/general/Button.vue';
import { ref } from 'vue';
import { login } from '@/coder/auth';
import errorHandler from '@/shared/helpers/errorHandler';
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()
const route = useRoute();

const usernameOrEmail = ref('')
const password = ref('')

const alwaysShowValidate = ref(false)
const loading = ref(false)

async function handleLogin(e: Event) {
  try {
    e.preventDefault()
    if (validateUsernameOrEmail(usernameOrEmail.value) !== '' || validatePassword(password.value) !== '') {
      alwaysShowValidate.value = true
      return
    }

    loading.value = true
    const { coder, accessToken } = await login(usernameOrEmail.value, password.value)

    loading.value = false
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('coderId', coder.id)
    store.dispatch('coderStore/setCoder', coder)
    router.push(route.query.redirect as string || '/dashboard')
  } catch (error) {
    loading.value = false
    errorHandler(error)
  }
}

function validateUsernameOrEmail(usernameOrEmail: string) {
  if (usernameOrEmail === '')
    return('Username is required')
  return ''
}

function validatePassword(password: string) {
  if (password === '')
    return 'Password is required'
  return ''
}

</script>

<style scoped>
</style>