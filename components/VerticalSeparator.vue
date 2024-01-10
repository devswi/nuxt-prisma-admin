<script setup lang="ts">
interface Props {
  height?: number
  width?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 1,
  height: 32,
})

const style = computed(() => ({
  height: `${props.height}px`,
  width: `${props.width}px`,
}))
</script>

<template>
  <div :style="style" class="bg-gray-200 dark:bg-gray-800" />
</template>
