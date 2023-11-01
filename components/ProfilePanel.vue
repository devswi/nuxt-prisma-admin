<script setup lang="ts">
const { logout } = useAuth()
const currentUser = useAuthUser()

const handleLogout = async () => {
  try {
    await logout()
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex flex-col gap-2 pt-4 pb-2 min-w-[170px] ">
    <div class="px-4 pb-2 border-b border-b-solid border-b-gray-200 dark:border-b-gray-800">
      <span class="text-lg font-semibold">{{ currentUser?.username }}</span>
      <span class="font-light">{{ currentUser?.nickname }}</span>
    </div>
    <div class="flex flex-col">
      <UButton variant="ghost" color="gray" icon="i-heroicons-cog-6-tooth-solid" size="md">
        Account Setting
      </UButton>
      <UButton variant="ghost" color="gray" icon="i-heroicons-arrow-left-on-rectangle-solid" size="md" @click="handleLogout">
        Logout
      </UButton>
    </div>
  </div>
</template>
