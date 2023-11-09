<script setup lang="ts">
const colorMode = useColorMode()
const logo = computed(() => colorMode.value === 'dark' ? '/header-dark.svg' : '/header.svg')
</script>

<template>
  <nav class="overflow-y-auto w-[var(--sidebar-width)] pb-6 border-r border-r-gray-200 dark:border-r-gray-800 no-scrollbar">
    <div class="sticky top-0 py-6 backdrop-blur bg-white/75 dark:bg-gray-900/75">
      <NuxtImg class="w-40 mx-auto" :src="logo" />
    </div>
    <div class="pt-2.5 px-4">
      <template v-for="(i, index) in Array(100).fill(1)" :key="index">
        <div>{{ i }} - {{ index + 1 }}</div>
      </template>
    </div>
  </nav>
</template>
