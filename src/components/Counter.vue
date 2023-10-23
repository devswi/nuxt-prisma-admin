<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

const { count } = storeToRefs(counter)
</script>

<template>
  <button @click="counter.decrement">
    Decrement
  </button>
  <p>Counter: {{ count }}</p>
  <button @click="counter.increment">
    Increment
  </button>
</template>
