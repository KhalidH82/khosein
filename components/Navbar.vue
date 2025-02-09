<template>
  <div class="fixed w-full top-0 z-50">
    <div 
      class="navbar backdrop-blur-md bg-white/70 transition-all duration-300"
      :class="{ 'py-4': !scrolled, 'py-2 shadow-lg shadow-indigo-100/20': scrolled }"
    >
      <div class="container mx-auto px-4">
        <div class="navbar-start">
          <div class="dropdown">
            <div 
              tabindex="0" 
              role="button" 
              class="btn btn-ghost btn-circle hover:rotate-12 transition-transform"
            >
            <NuxtLink to="/">
              <img src="/khlogo.jpg" class="w-10 h-10 rounded-full" />
            </NuxtLink>
            </div>
          </div>
        </div>
        
        <div class="navbar-center hidden md:flex flex-row gap-6">
          <NuxtLink 
            v-for="(item, index) in navItems" 
            :key="item.text"
            :to="item.section"
            class="font-display text-xl relative overflow-hidden group text-indigo-600 hover:pointer"
            :style="`animation-delay: ${index * 100}ms`"
          >
            {{ item.text }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NuxtLink>
        </div>
        
        <div class="navbar-end flex justify-end gap-2">
          <button class="btn btn-ghost btn-circle group">
            <div class="indicator">
              <div class="avatar">
                <div class="rounded-full transition-transform duration-300 group-hover:scale-110">
                  <img src="/khavatar.jpg" alt="Khalid Hosein" class="w-10 h-10"/>
                </div>
              </div>
              <span class="badge badge-xs badge-primary indicator-item animate-pulse"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const navItems = [
  { text: 'Home', section: '/' },
  { text: 'About', section: '/#about' },
  // { text: 'Projects', section: '/#projects' },
  { text: 'Contact', section: '/#contact' },
  { text: 'Resume', section: '/digital-resume' }
]

const router = useRouter()
const route = useRoute()
const scrolled = ref(false)

// Active section tracking
const currentSection = ref('home')

// Update active section based on scroll position
const updateActiveSection = () => {
  const sections = ['about', 'projects', 'contact']
  
  if (window.scrollY < 100) {
    currentSection.value = 'home'
    return
  }

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection.value = section
        return
      }
    }
  }
}

// Handle navigation
const handleNavigation = (section) => {
  if (section === '/') {
    // If already on home page, scroll to top
    if (route.path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
    return
  }

  if (section.startsWith('#')) {
    if (route.path !== '/') {
      router.push('/' + section)
    } else {
      const element = document.querySelector(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  } else {
    router.push(section)
  }
}

onMounted(() => {
  // Scroll handler
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
    updateActiveSection()
  })

  // Initial active section check
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {})
})
</script>

<style scoped>
</style>
