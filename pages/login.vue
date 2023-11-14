<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

const currentUser = useAuthUser()
const isAdmin = useAdmin()
const { login } = useAuth()

const form = reactive({
  data: {
    username: '',
    password: '',
    rememberMe: true,
  },
  pending: false,
})

const passwordVisible = ref(false)

const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'))
const eyeIcon = computed(() => passwordVisible.value ? 'i-heroicons-eye-slash-solid' : 'i-heroicons-eye-solid')

const handleLoginSuccess = async () => {
  const redirect = isAdmin.value ? '/admin' : '/'
  await navigateTo(redirect)
}

const handleLogin = async () => {
  try {
    form.pending = true
    await login(form.data.username, form.data.password, form.data.rememberMe)
    await handleLoginSuccess()
  } catch (error) {
    console.error(error)
  } finally {
    form.pending = false
  }
}
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="mb-24">
      <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2819 19.3018L51.5571 5.93939V36.1129L19.303 52.2399V78.2806L46.0278 91.643V61.4695L78.2819 45.3425V19.3018ZM78.2819 52.2399V78.2806L51.5571 91.643V65.6023L78.2819 52.2399ZM19.303 19.3018V45.3424L46.0278 31.9797V5.93939L19.303 19.3018Z" fill="rgb(var(--color-primary-DEFAULT))" fill-opacity="0.6" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3033 19.3018L46.0281 5.93939V36.1129L78.2822 52.2399V78.2806L51.5574 91.643V61.4695L19.3033 45.3425V19.3018ZM19.3033 52.2399V78.2806L46.0281 91.643V65.6023L19.3033 52.2399ZM78.2822 19.3018V45.3424L51.5574 31.9797V5.93939L78.2822 19.3018Z" fill="rgb(var(--color-primary-DEFAULT))" />
      </svg>
    </div>
    <div class="flex flex-col w-80">
      <UInput
        v-model="form.data.username"
        class="mb-6"
        size="md"
        placeholder="Username"
        icon="i-heroicons-user-circle-solid"
      />
      <UInput
        v-model="form.data.password"
        class="mb-3.5"
        size="md"
        placeholder="Password"
        icon="i-heroicons-lock-closed-solid"
        :ui="{ icon: { trailing: { pointer: '' } } }"
        :type="inputType"
      >
        <template #trailing>
          <UButton
            v-show="form.data.password !== ''"
            color="gray"
            variant="link"
            :icon="eyeIcon"
            :padded="false"
            @click="passwordVisible = !passwordVisible"
          />
        </template>
      </UInput>
      <UCheckbox v-model="form.data.rememberMe" class="mb-7" label="Remember Me" />
      <UButton
        block
        color="primary"
        variant="solid"
        :loading="form.pending"
        @click="handleLogin"
      >
        Login
      </UButton>
    </div>
  </div>
</template>
