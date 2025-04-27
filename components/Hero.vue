<template>
  <div class="h-[46rem] lg:min-h-screen relative overflow-hidden">
    <!-- Inspira UI Background Effect -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
      <div class="absolute top-1/4 -right-24 w-96 h-96 rounded-full opacity-10 animate-blob" :class="colorMode.value === 'light' ? 'bg-indigo-400' : 'bg-indigo-600'"></div>
      <div class="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full opacity-10 animate-blob animation-delay-2000" :class="colorMode.value === 'light' ? 'bg-indigo-300' : 'bg-indigo-700'"></div>
    </div>
    <div class="container mx-auto px-4 pt-24 lg:pt-32 relative">
      <div class="max-w-4xl mx-auto">
        <!-- Name with Text Hover Effect -->
        <div class="mb-8">
          <TextHoverEffect
          class="w-full h-full"
          text="Khalid Hosein"
          />
        </div>
        
        <!-- <div class="h-[200px] w-full overflow-hidden">
        <VideoText src="https://cdn.magicui.design/ocean-small.webm" font-size="200"> Khalid </VideoText>
        </div> -->
        <!-- Main Content -->
        <div class="space-y-8">
          <!-- Title Section with Text Reveal Card -->
          <div class="space-y-4">
            <h2 class="font-display text-4xl md:text-5xl lg:text-7xl font-bold animate-fade-up" :class="colorMode.value === 'light' ? 'text-indigo-950' : 'text-white'">
              <span class="inline-block">
                <span class="text-primary">Full Stack</span> Web Developer
              </span>
              <span class="block mt-2 text-sm md:text-base lg:text-lg" :class="colorMode.value === 'light' ? 'text-indigo-400' : 'text-indigo-300'">
                // Code. Create. Innovate.
              </span>
            </h2>
          </div>

          <!-- Description with Text Highlight -->
          <p class="font-sans text-lg md:text-xl max-w-2xl animate-fade-up animation-delay-200" :class="colorMode.value === 'light' ? 'text-indigo-950/80' : 'text-indigo-100/80'">
            Building scalable solutions for content-driven marketing websites
          </p>

          <!-- Action Buttons with Interactive Hover -->
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
            <NuxtLink to="/#projects" class="w-full sm:w-auto group">
              <InteractiveHoverButton 
                text="View Projects" 
                class="w-full sm:w-auto min-w-64 transform transition-transform group-hover:scale-105" 
              />
            </NuxtLink>
            <NuxtLink to="/#contact" @click.prevent="scrollToContact" class="w-full sm:w-auto group">
              <InteractiveHoverButton 
                text="Contact" 
                class="w-full sm:w-auto min-w-64 transform transition-transform group-hover:scale-105" 
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextHoverEffect from './Inspira/TextHoverEffect.vue';
import InteractiveHoverButton from './Inspira/InteractiveHoverButton.vue';
import VideoText from './Inspira/VideoText.vue';
const colorMode = useColorMode()

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

/* Inspira UI inspired hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>
