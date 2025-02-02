<template>
  <div class="fixed w-full top-0 z-50">
    <div 
      class="navbar backdrop-blur-md bg-white/70 dark:bg-indigo-950/70 transition-all duration-300"
      :class="{ 'py-4': !scrolled, 'py-2 shadow-lg shadow-indigo-100/20 dark:shadow-indigo-900/20': scrolled }"
    >
      <div class="container mx-auto px-4">
        <div class="navbar-start">
          <div class="dropdown">
            <div 
              tabindex="0" 
              role="button" 
              class="btn btn-ghost btn-circle hover:rotate-12 transition-transform"
            >
              <img src="/khlogo.jpg" class="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>
        
        <div class="navbar-center hidden md:flex flex-row gap-6">
          <a 
            v-for="(item, index) in navItems" 
            :key="item.text"
            @click.prevent="handleNavigation(item.section)"
            class="font-display text-xl relative overflow-hidden group text-indigo-600 dark:text-indigo-300"
            :class="{ 'text-indigo-700 dark:text-indigo-200': currentSection === item.section.replace('/#', '') }"
            :style="`animation-delay: ${index * 100}ms`"
          >
            {{ item.text }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>
        
        <div class="navbar-end flex justify-end gap-2">
          <button 
            class="btn btn-ghost btn-circle group"
            @click="toggleTheme"
          >
            <div class="w-5 h-5">
              <Icon 
                :name="isDark ? 'ph:sun-bold' : 'ph:moon-bold'" 
                class="w-full h-full transition-transform duration-300 group-hover:rotate-45"
              />
            </div>
          </button>
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
  // { text: 'About', section: '/#about' },
  // { text: 'Projects', section: '/#projects' },
  { text: 'Contact', section: '/#contact' },
  { text: 'Resume', section: '/digital-resume' }
]

const router = useRouter()
const route = useRoute()
const scrolled = ref(false)
const colorMode = useColorMode()
const isDark = ref(colorMode.value === 'dark')

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

// Theme toggle function
const toggleTheme = () => {
  isDark.value = !isDark.value
  colorMode.preference = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  // Scroll handler
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
    updateActiveSection()
  })

  // Initial active section check
  updateActiveSection()

  // Theme handling - update this section
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  // Initialize theme based on saved preference or system preference
  isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
  colorMode.preference = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // Only update if user hasn't set a preference
      isDark.value = e.matches
      colorMode.preference = isDark.value ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {})
  window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {})
})
</script>

<style scoped>
.nav-link {
  animation: slideDown 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.active {
  color: theme('colors.primary');
}

/* Custom hover effect for nav links */
.nav-link::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  width: 4px;
  height: 4px;
  background-color: theme('colors.primary');
  border-radius: 50%;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.3s ease;
}

.nav-link:hover::before {
  opacity: 1;
}

/* Smooth transition for navbar background */
.navbar {
  transition: all 0.3s ease;
}

/* Gradient overlay for glass effect */
.navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(79, 70, 229, 0.03),
    rgba(79, 70, 229, 0.01)
  );
  pointer-events: none;
}
</style>
