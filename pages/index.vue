<script setup lang="ts">
definePageMeta({
  middleware: ['auth-user'],
})
</script>

<template>
  <div class="p-4">
    <h1>Normal Page</h1>
    <Counter />
  </div>
</template>
