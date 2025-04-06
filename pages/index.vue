<template>
  <div class="min-h-screen transition-colors duration-300" :class="colorMode.value === 'light' ? 'bg-white' : 'bg-gray-900'">
    <!-- <ConstructionAlert /> -->
    <div class="transition-colors duration-300" :class="colorMode.value === 'light' ? 'bg-gradient-to-b from-white to-indigo-50/50' : 'bg-gradient-to-b from-gray-900 to-indigo-900/20'">
      <Hero />
      <About />
      <AgencyCarousel />
      <Contact />
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

useHead({
  title: 'Khalid Hosein',
  meta: [
    {
      name: 'description',
      content: 'Khalid Hosein Full Stack Web Developer Portfolio'
    }
  ]
})
</script>