<template>
  <form novalidate @submit="handlerRegister">
    <div>
      <label>Full name</label>
      <InputText
        class="mt-3"
        placeholder="Yourname"
        v-model="username"
        :validate="validateUsername"
        :always-show-validate="alwaysShowValidate"
        :disabled="loading"
        >
          <template #prefix>
            <i class="fa-solid fa-user text-slate-500"></i>
          </template>
        </InputText>
    </div>
    <div class="mt-3">
      <label>Email</label>
      <InputText
        class="mt-3"
        placeholder="youremail@gmail.com"
        v-model="email"
        :validate="validateEmail"
        :always-show-validate="alwaysShowValidate"
        :disabled="loading"
        >
          <template #prefix>
            <i class="fa-solid fa-envelope text-slate-500"></i>
          </template>
        </InputText>
    </div>
    <div class="mt-3">
      <label>Password</label>
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
    <div class="mt-3">
      <label>Confirm Password</label>
      <InputPass
        class="mt-3"
        placeholder="**********"
        v-model="confirmPassword"
        :validate="validateConfirmPassword"
        :always-show-validate="alwaysShowValidate"
        :disabled="loading"
        >
          <template #prefix>
            <i class="fa-solid fa-lock text-slate-500"></i>
          </template>
        </InputPass>
    </div>
    <Button class="mt-3" :loading="loading" :disabled="loading">Sign Up</Button>
  </form>
</template>

<script lang="ts" setup>
import InputText from '@/shared/components/general/InputText.vue'
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import Button from '@/shared/components/general/Button.vue';
import InputPass from '@/shared/components/general/InputPass.vue';
import errorHandler from '@/shared/helpers/errorHandler';
import { register } from '@/coder/auth';

const store = useStore()
const router = useRouter()
const route = useRoute()

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const alwaysShowValidate = ref(false)
const loading = ref(false)

async function handlerRegister(e: Event) {
  try {
    e.preventDefault()
    if (validateUsername(username.value) !== '' &&
    validateEmail(email.value) !== '' &&
    validatePassword(password.value) !== '' &&
    validateConfirmPassword(confirmPassword.value) !== ''
    ) {
      alwaysShowValidate.value = true
      return
    }

    loading.value = true
    const { coder, accessToken } = await register(username.value, email.value, password.value)

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

function validateUsername(username: string) {
  if (username === '')
    return 'Username is required'
  if (username.length < 8)
    return 'Username need at least 8 characters'
  return ''
}

function validateEmail(email: string) {
  if (email === '')
    return 'Email is required'
  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    return 'Email is invalid'
  return ''
}

function validatePassword(password: string) {
  if (password === '')
    return 'Password is required'
  if (password.length < 8)
    return 'Password need at least 8 characters'
  if (password.length > 15)
    return 'Password need at most 15 characters'
  if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/))
    return 'Password need at least 1 number and 1 letter'
  return ''
}

function validateConfirmPassword(confirmPassword: string) {
  if (confirmPassword !== password.value)
    return 'Password does not match'
  return ''
}
</script>

<style scoped>

</style>