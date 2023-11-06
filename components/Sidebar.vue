<template>
  <div class="overflow-y-auto w-[var(--sidebar-width)] p-4 border-r border-r-gray-200 dark:border-r-gray-800 no-scrollbar">
    <div>
      <template v-for="(i, index) in Array(100).fill(1)" :key="index">
        <div>{{ i }} - {{ index + 1 }}</div>
      </template>
    </div>
  </div>
</template>
