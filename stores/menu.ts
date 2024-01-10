import { defineStore } from 'pinia'

interface State {
  menus: Menu[]
}

export const useMenuStore = defineStore('menu', {
  state: (): State => {
    return {
      menus: [],
    }
  },
  actions: {
    reset() {
      this.menus = []
    },
    async fetchMenus() {
      const { objects } = await $fetch<{ objects: Menu[] }>('/menus', {
        method: 'GET',
      })
      this.menus = objects
    },
  },
  persist: true,
})
