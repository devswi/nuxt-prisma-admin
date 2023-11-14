<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import type { NavigationItem } from '@/components/NavigationAccordion.vue'

const colorMode = useColorMode()
const logo = computed(() => colorMode.value === 'dark' ? '/header-dark.svg' : '/header.svg')

const items: NavigationItem[] = [
  {
    id: uuidv4(),
    label: 'Dashboard',
    icon: 'i-heroicons-squares-2x2-solid',
    children: [],
    to: '/admin',
  },
  {
    id: uuidv4(),
    label: 'Authority',
    icon: 'i-heroicons-cube-solid',
    children: [
      {
        id: uuidv4(),
        label: 'User',
        to: '/admin/users',
      },
      {
        id: uuidv4(),
        label: 'Role',
        to: '/admin/roles',
      },
    ],
  },
  {
    id: uuidv4(),
    label: 'System',
    icon: 'i-heroicons-cog-6-tooth-solid',
    children: [
      {
        id: uuidv4(),
        label: 'Settings',
        to: '/admin/settings',
      },
      {
        id: uuidv4(),
        label: 'Data Table',
        to: '/admin/data-table',
      },
    ],
  },
  {
    id: uuidv4(),
    label: 'Chart',
    icon: 'i-heroicons-chart-pie-solid',
    children: [],
    to: '/admin/charts',
  },
  {
    id: uuidv4(),
    label: 'Components',
    icon: 'i-heroicons-rectangle-group-solid',
    children: [],
    to: '/admin/components',
  },
]
</script>

<template>
  <nav class="overflow-y-auto w-[var(--sidebar-width)] pb-6 border-r border-r-gray-200 dark:border-r-gray-800 no-scrollbar">
    <div class="sticky top-0 py-6 backdrop-blur bg-white/75 dark:bg-gray-900/75">
      <NuxtImg class="w-40 ml-4" :src="logo" />
    </div>
    <div class="pt-2.5 px-4">
      <NavigationAccordion :items="items" />
    </div>
  </nav>
</template>
