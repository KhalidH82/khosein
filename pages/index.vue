<template>
  <div class="bg-white min-h-screen">
    <!-- <ConstructionAlert /> -->
    <div class="bg-gradient-to-b from-white to-indigo-50/50">
      <Hero />
      <About />
      <AgencyCarousel />
      <Contact />
    </div>
  </div>
</template>

<script setup>
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