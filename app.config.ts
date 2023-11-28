export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'cool',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 right-0',
    },
    button: {
      default: {
        size: 'md',
        variant: 'ghost',
        color: 'gray',
      },
    },
    icons: {
      dynamic: true,
    },
  },
})
