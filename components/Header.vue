<script setup lang="ts">
const colorMode = useColorMode()

const logo = computed(() => colorMode.value === 'dark' ? '/header-dark.svg' : '/header.svg')
const darkModeIcon = computed(() => colorMode.value === 'dark' ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid')

const switchDarkMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

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
  <header class="sticky top-0 text-gray-700 dark:text-white border-b border-b-gray-200 dark:border-b-gray-800 z-100 ">
    <div class="h-[var(--header-height)] flex items-center justify-between px-3.5 bg-white dark:bg-gray-900">
      <NuxtImg class="w-40" :src="logo" />
      <div class="flex items-center gap-2">
        <UButton variant="ghost" color="gray" :icon="darkModeIcon" size="md" @click="switchDarkMode" />
        <UButton variant="ghost" color="gray" icon="i-heroicons-language-solid" size="md" />
        <UButton variant="ghost" color="gray" icon="i-mdi-github" size="md" @click="openGithub" />
        <VerticalSeparator />
        <UButton variant="ghost" color="gray" icon="i-heroicons-bell-solid" size="md" />
        <UPopover mode="hover">
          <UButton variant="ghost" color="gray" icon="i-heroicons-user-circle-solid" size="md" />
          <template #panel>
            <ProfilePanel />
          </template>
        </UPopover>
      </div>
    </div>
  </header>
</template>
