<script setup lang="ts">
const colorMode = useColorMode()
const open = ref(false)

const dynamicIcon = computed(() => {
  const value = colorMode.preference === 'system' ? colorMode.value : colorMode.preference
  return `heroicons:${value === 'dark' ? 'moon' : 'sun'}`
})

type ColorMode = 'system' | 'light' | 'dark'

interface Option {
  value: ColorMode
  label: string
  icon: string
}

const options: Option[] = [
  {
    label: 'Light',
    icon: 'i-heroicons-sun-solid',
    value: 'light',
  },
  {
    label: 'Dark',
    icon: 'i-heroicons-moon-solid',
    value: 'dark',
  },
  {
    label: 'System',
    icon: 'i-heroicons-computer-desktop-solid',
    value: 'system',
  },
]
</script>

<template>
  <ClientOnly>
    <ElPopover trigger="hover">
      <template #reference>
        <ElButton>
          <Icon :name="dynamicIcon" />
        </ElButton>
      </template>
      <template #default>
        <div class="py-2 flex flex-col w-32">
          <ElButton v-for="option in options" :key="option.value" @click="$colorMode.preference = option.value">
            {{ option.label }}
          </ElButton>
        </div>
      </template>
    </ElPopover>
  </ClientOnly>
</template>
