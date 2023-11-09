<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

const colorMode = useColorMode()
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
const logo = computed(() => colorMode.value === 'dark' ? '/logo-dark.png' : '/logo.png')

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
    <NuxtImg class="mb-24" :src="logo" />
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
