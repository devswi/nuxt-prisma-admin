<script setup lang="ts">
const openGithub = () => {
  navigateTo('https://github.com/shiwei93/nuxt-prisma-admin', {
    external: true,
    open: {
      target: '_blank',
    },
  })
}
</script>

<template>
  <header class="sticky top-0 text-gray-700 dark:text-white border-b border-b-gray-200 dark:border-b-gray-800 z-100">
    <div class="h-[var(--header-height)] flex items-center justify-between px-3.5 ">
      <!-- position of popover was incorrect because of backdrop-blur -->
      <div class="absolute inset-0 bg-white/75 dark:bg-gray-900/75 backdrop-blur" />
      <UInput
        class="relative w-[240px]"
        color="gray"
        variant="none"
        size="md"
        placeholder="Type to search..."
        icon="i-heroicons-magnifying-glass-20-solid"
      />
      <div class="flex items-center gap-2 relative">
        <ColorModeSwitcher />
        <UButton icon="i-heroicons-language-solid" />
        <UButton icon="i-heroicons-bell-solid" />
        <UButton icon="i-mdi-github" @click="openGithub" />
        <VerticalSeparator />
        <ProfilePopover />
      </div>
    </div>
  </header>
</template>
