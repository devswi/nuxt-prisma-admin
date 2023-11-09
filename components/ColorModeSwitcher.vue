<script setup lang="ts">
const colorMode = useColorMode()
const open = ref(false)

const dynamicIcon = computed(() => {
  const value = colorMode.preference === 'system' ? colorMode.value : colorMode.preference
  return `i-heroicons-${value === 'dark' ? 'moon' : 'sun'}-solid`
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
    <UPopover mode="hover">
      <UButton :icon="dynamicIcon" @click="open = !open" />
      <template #fallback>
        <UButton icon="i-heroicons-computer-desktop-solid" />
      </template>
      <template #panel>
        <div class="py-2 flex flex-col w-32">
          <UButton
            v-for="option in options"
            :key="option.label"
            :color="option.value === $colorMode.preference ? 'primary' : 'gray'"
            :icon="option.icon"
            @click="$colorMode.preference = option.value"
          >
            {{ option.label }}
          </UButton>
        </div>
      </template>
    </UPopover>
  </ClientOnly>
</template>
