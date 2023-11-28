import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menus = ref<Menu[]>([])

  const fetchMenus = async () => {
    const { objects } = await $fetch<{ objects: Menu[] }>('/menus', {
      method: 'GET',
    })
    menus.value = objects
  }

  onMounted(() => {
    fetchMenus()
  })

  return {
    menus,
  }
},
{
  persist: true,
})
