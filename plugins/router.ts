export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const router = useRouter()
    
    // Handle smooth scrolling
    router.options.scrollBehavior = (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }
      
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 80 // Offset for fixed header
        }
      }
      
      return { top: 0, behavior: 'smooth' }
    }
  })
}) 