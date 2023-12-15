<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

definePageMeta({
  layout: 'blank',
})

interface Form {
  username: string
  password: string
  rememberMe: boolean
  pending: boolean
}

type RuleForm = Omit<Form, 'pending' | 'rememberMe'>

const isAdmin = useAdmin()
const { login } = useAuth()
const { fetchMenus } = useMenuStore()

const formRef = ref<FormInstance | null>(null)
const passwordVisible = ref(false)

const form = reactive<Form>({
  username: '',
  password: '',
  rememberMe: true,
  pending: false,
})

const rules = computed<FormRules<RuleForm>>(() => ({
  username: {
    required: true,
    message: 'Username is required.',
  },
  password: {
    required: true,
    message: 'Password is required.',
  },
}))

const handleLoginSuccess = async () => {
  const redirect = isAdmin.value ? '/admin' : '/'
  await navigateTo(redirect)
}

const onSubmit = async () => {
  try {
    await formRef.value?.validate()
    form.pending = true
    await login(form.username, form.password, form.rememberMe)
    await fetchMenus()
    await handleLoginSuccess()
  } catch (error) {
    console.log('error', error)
  } finally {
    form.pending = false
  }
}
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="mb-24">
      <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2819 19.3018L51.5571 5.93939V36.1129L19.303 52.2399V78.2806L46.0278 91.643V61.4695L78.2819 45.3425V19.3018ZM78.2819 52.2399V78.2806L51.5571 91.643V65.6023L78.2819 52.2399ZM19.303 19.3018V45.3424L46.0278 31.9797V5.93939L19.303 19.3018Z" fill="var(--el-color-primary)" fill-opacity="0.6" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3033 19.3018L46.0281 5.93939V36.1129L78.2822 52.2399V78.2806L51.5574 91.643V61.4695L19.3033 45.3425V19.3018ZM19.3033 52.2399V78.2806L46.0281 91.643V65.6023L19.3033 52.2399ZM78.2822 19.3018V45.3424L51.5574 31.9797V5.93939L78.2822 19.3018Z" fill="var(--el-color-primary)" />
      </svg>
    </div>
    <div class="flex flex-col w-80">
      <ElForm ref="formRef" :model="form" :rules="rules" @keyup.enter="onSubmit">
        <ElFormItem prop="username">
          <ElInput v-model="form.username" placeholder="Username" />
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput v-model="form.password" placeholder="Password" :type="passwordVisible ? 'text' : 'password'">
            <template v-if="form.password.length > 0" #suffix>
              <ElButton link @click="passwordVisible = !passwordVisible">
                <Icon :name="passwordVisible ? 'heroicons:eye' : 'heroicons:eye-slash'" />
              </ElButton>
            </template>
          </ElInput>
        </ElFormItem>
        <ElFormItem prop="rememberMe">
          <ElCheckbox v-model="form.rememberMe" label="Remember Me" />
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" class="w-full" @click="onSubmit">
            Login
          </ElButton>
        </ElFormItem>
      </ElForm>
    </div>
  </div>
</template>
