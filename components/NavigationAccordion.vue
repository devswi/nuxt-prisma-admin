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

      <Transition
        v-bind="{
          enterActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
          leaveActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out'
        }"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <div v-show="item.open">
          <div class="pt-1.5 pb-3">
            <nav class="ml-[1.375rem] border-s border-gray-200 dark:border-gray-800 space-y-2">
              <UButton
                v-for="child in item.children"
                :key="child.id"
                class="group p-0 py-1 ps-4 block w-full text-left -ms-px border-s dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-500 text-gray-500 dark:text-gray-400 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent font-normal"
                :class="[route.path === child.to && 'text-primary dark:text-primary hover:text-primary dark:hover:text-primary border-current dark:border-current hover:border-current dark:hover:border-current']"
                :ui="{ rounded: 'rounded-none' }"
                @click="navigateTo(child.to)"
              >
                {{ child.label }}
              </UButton>
            </nav>
          </div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<script setup lang="ts">
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
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
})

const route = useRoute()

const openedItems = ref<string[]>([])

const items = computed<NavigationItemWithState[]>(() => {
  return props.items.map((item) => {
    const { children: _, ...other } = item
    const children = item.children.map((child) => {
      return {
        ...child,
      }
    })
    // check if the route.path is in the children
    const open = openedItems.value.includes(other.id) || children.some(child => child.to === route.path)
    return {
      ...other,
      children,
      open,
    }
  })
})

function onEnter (el: Element, done: any) {
  const hel = el as HTMLElement
  hel.style.height = '0'
  hel.style.height = el.scrollHeight + 'px'
  hel.addEventListener('transitionend', done, { once: true })
}

function onBeforeLeave (el: Element) {
  const hel = el as HTMLElement
  hel.style.height = hel.scrollHeight + 'px'
}

function onAfterEnter (el: Element) {
  const hel = el as HTMLElement
  hel.style.height = 'auto'
}

function onLeave (el: Element, done: any) {
  const hel = el as HTMLElement
  hel.style.height = '0'
  hel.addEventListener('transitionend', done, { once: true })
}

const handleMenuClick = (item: NavigationItemWithState) => {
  if (item.children.length > 0) {
    // toggle open the accordion
    if (openedItems.value.includes(item.id)) {
      openedItems.value = openedItems.value.filter(id => id !== item.id)
    } else {
      openedItems.value = props.multiple ? [...openedItems.value, item.id] : [item.id]
    }
  } else {
    // clear the opened items
    openedItems.value = []
    // navigate to the route
    navigateTo(item.to)
  }
}
</script>
