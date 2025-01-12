<template>
  <footer class="bg-base-200 pt-24 pb-12">
    <div class="container mx-auto px-4">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <!-- Brand Section -->
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <img src="/khlogo.jpg" alt="KH Logo" class="w-12 h-12 rounded-full" />
            <h3 class="text-2xl font-bold">Khalid Hosein</h3>
          </div>
          <p class="text-base-content/80">
            Crafting digital experiences with clean code and creative solutions.
          </p>
          <div class="flex gap-4">
            <a href="https://github.com/KhalidH82" target="_blank" class="btn btn-circle btn-ghost group">
              <Icon 
                name="mdi:github" 
                class="w-6 h-6 transition-transform group-hover:scale-110" 
              />
            </a>
            <a href="https://www.linkedin.com/in/khalid-hosein/" target="_blank" class="btn btn-circle btn-ghost group">
              <Icon 
                name="mdi:linkedin" 
                class="w-6 h-6 transition-transform group-hover:scale-110" 
              />
            </a>
            <!-- <a href="https://twitter.com/yourusername" target="_blank" class="btn btn-circle btn-ghost group">
              <Icon 
                name="mdi:twitter" 
                class="w-6 h-6 transition-transform group-hover:scale-110" 
              />
            </a> -->
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.text">
              <a 
                @click.prevent="handleNavigation(link.href)"
                class="text-base-content/80 hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <span class="w-2 h-2 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform"></span>
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold">Get in Touch</h3>
          <div class="space-y-4">
            <a 
              href="mailto:khalid.hosein9@gmail.com" 
              class="flex items-center gap-3 text-base-content/80 hover:text-primary transition-colors"
            >
              <Icon name="mdi:email" class="w-5 h-5" />
              khalid.hosein9@gmail.com
            </a>
            <a 
              href="tel:+7868389311" 
              class="flex items-center gap-3 text-base-content/80 hover:text-primary transition-colors"
            >
              <Icon name="mdi:phone" class="w-5 h-5" />
              (786) 838 9311
            </a>
            <p class="flex items-center gap-3 text-base-content/80">
              <Icon name="mdi:map-marker" class="w-5 h-5" />
              USA
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-base-300 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-base-content/60 text-sm">
            © {{ new Date().getFullYear() }} Khalid Hosein. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
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
/* Optional: Add a subtle gradient background */
footer {
  background: linear-gradient(
    to bottom,
    var(--b2),
    var(--b3)
  );
}
</style>
