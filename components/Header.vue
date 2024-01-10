<script setup lang="ts">
function openGithub() {
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
    <div class="h-[var(--header-height)] flex items-center justify-between px-3.5">
      <!-- position of popover was incorrect because of backdrop-blur -->
      <div class="absolute inset-0 bg-white/75 dark:bg-gray-900/75 backdrop-blur" />
      <div class="w-[240px]">
        <ElInput placeholder="Type to search..." class="none-border">
          <template #prefix>
            <Icon name="heroicons:magnifying-glass" />
          </template>
        </ElInput>
      </div>
      <div class="flex items-center relative">
        <ColorModeSwitcher />
        <ElButton text>
          <Icon name="heroicons:language" />
        </ElButton>
        <ElButton text>
          <Icon name="heroicons:bell" />
        </ElButton>
        <ElButton text @click="openGithub">
          <Icon name="mdi:github" />
        </ElButton>
        <VerticalSeparator />
        <ProfilePopover />
      </div>
    </div>
  </header>
</template>
