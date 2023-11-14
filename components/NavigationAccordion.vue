<script setup lang="ts">
import type { CSSProperties } from 'vue'

export interface NavigationItem {
  id: string
  label: string
  icon: string
  children: Omit<NavigationItem, 'icon' | 'children'>[]
  to?: string
}

interface Props {
  items: NavigationItem[]
  multiple?: boolean
}

interface NavigationItemWithState extends NavigationItem {
  open: boolean
  style: CSSProperties
}

const route = useRoute()

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
})

const openedItems = ref<string[]>([])

const items = computed<NavigationItemWithState[]>(() => {
  return props.items.map((item) => {
    const { children: _, ...other } = item
    const children = item.children.map((child) => {
      return {
        ...child,
      }
    })
    const open = openedItems.value.includes(item.id)
    return {
      ...other,
      children,
      open,
      style: open
        ? { height: `calc(28px * ${children.length} + 8px * ${children.length - 1} + 1.125rem)` }
        : { height: '0px' },
    }
  })
})

const handleMenuClick = (item: NavigationItem) => {
  if (item.children.length > 0) {
    // toggle open the accordion
    if (openedItems.value.includes(item.id)) {
      openedItems.value = openedItems.value.filter(id => id !== item.id)
    } else {
      openedItems.value = props.multiple ? [...openedItems.value, item.id] : [item.id]
    }
  } else {
    // navigate to the route
    navigateTo(item.to)
  }
}
</script>

<template>
  <div class="flex flex-col">
    <template v-for="item in items" :key="item.id">
      <UButton :color="route.path === item.to ? 'primary' : 'gray'" @click="handleMenuClick(item)">
        <template #leading>
          <UIcon :name="item.icon" class="w-5 h-5" />
        </template>
        <span class="truncate">{{ item.label }}</span>
        <template v-if="item.children.length > 0" #trailing>
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[item.open && 'rotate-90']"
          />
        </template>
      </UButton>
      <div :style="item.style" class="overflow-hidden transition-[height] duration-200 ease-out">
        <div class="pt-1.5 pb-3">
          <nav class="ml-[1.375rem] border-s border-gray-200 dark:border-gray-800 space-y-2">
            <UButton
              v-for="child in item.children"
              :key="child.id"
              class="group p-0 py-1 ps-4 block w-full text-left -ms-px border-s dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-500 text-gray-500 dark:text-gray-400 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent font-normal"
              :class="[route.path === child.to && 'text-primary hover:text-primary dark:text-primary border-current hover:border-current dark:hover:border-current']"
              :ui="{ rounded: 'rounded-none' }"
              @click="navigateTo(child.to)"
            >
              {{ child.label }}
            </UButton>
          </nav>
        </div>
      </div>
    </template>
  </div>
</template>
