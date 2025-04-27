<template>
  <footer class="relative pt-24 pb-12 overflow-hidden" :class="colorMode.value === 'light' ? 'bg-gradient-to-b from-indigo-50 to-white' : 'bg-gradient-to-b from-gray-900 to-gray-950'">
    <!-- Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10" :class="colorMode.value === 'light' ? 'bg-indigo-300' : 'bg-indigo-700'"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
        <!-- Brand Section -->
        <div class="md:col-span-4 space-y-8">
          <div class="flex items-center gap-6">
            <div class="relative">
              <img src="/khlogo.jpg" alt="KH Logo" class="w-20 h-20 rounded-full" :class="colorMode.value === 'light' ? 'ring-2 ring-indigo-200' : 'ring-2 ring-indigo-600'" />
              <div class="absolute -bottom-2 -right-2 w-6 h-6 rounded-full" :class="colorMode.value === 'light' ? 'bg-green-400' : 'bg-green-500'"></div>
            </div>
            <div>
              <h3 class="font-display text-2xl font-bold" :class="colorMode.value === 'light' ? 'text-indigo-950' : 'text-white'">Khalid Hosein</h3>
              <p class="text-sm mt-1" :class="colorMode.value === 'light' ? 'text-gray-600' : 'text-gray-400'">Full Stack Developer</p>
            </div>
          </div>
          <p class="font-sans text-lg leading-relaxed" :class="colorMode.value === 'light' ? 'text-gray-700' : 'text-gray-300'">
            Crafting digital experiences with clean code and creative solutions.
          </p>
          <div class="flex gap-4 pt-2">
            <a href="https://github.com/KhalidH82" target="_blank" 
               class="btn btn-circle btn-ghost group relative overflow-hidden"
               :class="colorMode.value === 'light' ? 'hover:bg-indigo-100' : 'hover:bg-gray-800'">
              <Icon 
                name="mdi:github" 
                class="w-6 h-6 transition-transform group-hover:scale-110" 
                :class="colorMode.value === 'light' ? 'text-indigo-950' : 'text-white'"
              />
            </a>
            <a href="https://www.linkedin.com/in/khalid-hosein/" target="_blank" 
               class="btn btn-circle btn-ghost group relative overflow-hidden"
               :class="colorMode.value === 'light' ? 'hover:bg-indigo-100' : 'hover:bg-gray-800'">
              <Icon 
                name="mdi:linkedin" 
                class="w-6 h-6 transition-transform group-hover:scale-110" 
                :class="colorMode.value === 'light' ? 'text-indigo-950' : 'text-white'"
              />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="md:col-span-3 md:col-start-6 space-y-8">
          <h3 class="font-display text-xl font-bold relative inline-block" :class="colorMode.value === 'light' ? 'text-indigo-950' : 'text-white'">
            Quick Links
            <span class="absolute -bottom-2 left-0 w-12 h-1 rounded-full" :class="colorMode.value === 'light' ? 'bg-indigo-400' : 'bg-indigo-500'"></span>
          </h3>
          <ul class="font-sans space-y-4">
            <li v-for="link in quickLinks" :key="link.text">
              <a 
                @click.prevent="handleNavigation(link.href)"
                class="flex items-center gap-3 group cursor-pointer transition-colors py-1"
                :class="colorMode.value === 'light' ? 'text-gray-700 hover:text-indigo-600' : 'text-gray-300 hover:text-indigo-400'"
              >
                <span class="w-1.5 h-1.5 rounded-full transition-all duration-300" :class="colorMode.value === 'light' ? 'bg-indigo-400 group-hover:w-2' : 'bg-indigo-500 group-hover:w-2'"></span>
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="md:col-span-3 space-y-8">
          <h3 class="font-display text-xl font-bold relative inline-block" :class="colorMode.value === 'light' ? 'text-indigo-950' : 'text-white'">
            Get in Touch
            <span class="absolute -bottom-2 left-0 w-12 h-1 rounded-full" :class="colorMode.value === 'light' ? 'bg-indigo-400' : 'bg-indigo-500'"></span>
          </h3>
          <div class="font-sans space-y-6">
            <a 
              href="mailto:khalid.hosein9@gmail.com" 
              class="flex items-center gap-4 p-3 rounded-lg transition-all duration-300"
              :class="colorMode.value === 'light' ? 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600' : 'text-gray-300 hover:bg-gray-800 hover:text-indigo-400'"
            >
              <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="colorMode.value === 'light' ? 'bg-indigo-100' : 'bg-gray-800'">
                <Icon name="mdi:email" class="w-5 h-5" />
              </div>
              <span class="text-sm">khalid.hosein9@gmail.com</span>
            </a>
            <a 
              href="tel:+7868389311" 
              class="flex items-center gap-4 p-3 rounded-lg transition-all duration-300"
              :class="colorMode.value === 'light' ? 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600' : 'text-gray-300 hover:bg-gray-800 hover:text-indigo-400'"
            >
              <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="colorMode.value === 'light' ? 'bg-indigo-100' : 'bg-gray-800'">
                <Icon name="mdi:phone" class="w-5 h-5" />
              </div>
              <span class="text-sm">(786) 838 9311</span>
            </a>
            <div class="flex items-center gap-4 p-3 rounded-lg" :class="colorMode.value === 'light' ? 'text-gray-700' : 'text-gray-300'">
              <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="colorMode.value === 'light' ? 'bg-indigo-100' : 'bg-gray-800'">
                <Icon name="mdi:map-marker" class="w-5 h-5" />
              </div>
              <span class="text-sm">Global</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t pt-8" :class="colorMode.value === 'light' ? 'border-indigo-200' : 'border-gray-700'">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-sans text-sm" :class="colorMode.value === 'light' ? 'text-gray-600' : 'text-gray-400'">
            © {{ new Date().getFullYear() }} Khalid Hosein. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useColorMode } from '#imports'

const colorMode = useColorMode()

const quickLinks = [
  { text: 'About Me', href: '/#about' },
  { text: 'Projects', href: '/#projects' },
  { text: 'Resume', href: '/digital-resume' },
  { text: 'Contact', href: '/#contact' },
]

const router = useRouter()
const route = useRoute()

const handleNavigation = (href) => {
  if (href.startsWith('/#')) {
    if (route.path !== '/') {
      router.push(href)
    } else {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  } else {
    router.push(href)
  }
}
</script>

<style scoped>
footer {
  background: linear-gradient(
    to bottom,
    var(--b2),
    var(--b3)
  );
}

/* Add smooth transitions for hover effects */
.btn-circle {
  transition: all 0.3s ease;
}

.btn-circle:hover {
  transform: translateY(-2px);
}

/* Add hover effect for contact items */
.contact-item {
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(4px);
}
</style>
