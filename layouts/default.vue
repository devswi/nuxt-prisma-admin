<template>
  <main class="flex h-screen">
    <Sidebar />
    <div class="flex-1 min-h-screen overflow-y-auto">
      <Header />
      <slot />
    </div>
  </main>
</template>
