<script setup lang="ts">
const { logout } = useAuth()

async function handleLogout() {
  try {
    await logout()
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex flex-col gap-2 py-2 min-w-[170px] ">
    <UButton variant="ghost" color="gray" icon="i-heroicons-cog-6-tooth-solid" size="md">
      Account Setting
    </UButton>
    <UButton variant="ghost" color="gray" icon="i-heroicons-arrow-left-on-rectangle-solid" size="md" @click="handleLogout">
      Logout
    </UButton>
  </div>
</template>
