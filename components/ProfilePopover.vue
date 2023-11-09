<script setup lang="ts">
const currentUser = useAuthUser()
</script>

<template>
  <UPopover mode="hover" class="h-full flex items-center">
    <div class="flex items-center ml-2 gap-2">
      <div class="flex flex-col items-end">
        <span class="font-medium text-sm">{{ currentUser?.username }}</span>
        <!-- replace with enum (role) -->
        <span class="text-xs text-gray-500 dark:text-gray-300">System Admin</span>
      </div>
      <UAvatar />
      <UIcon name="i-heroicons-chevron-down-solid" />
    </div>
    <template #panel>
      <ProfilePanel />
    </template>
  </UPopover>
</template>
