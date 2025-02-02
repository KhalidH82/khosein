<template>
  <div class="relative -mx-4 md:-mx-8 lg:-mx-16 overflow-hidden carousel" :data-carousel-id="carouselId">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Left Side Navigation & Project Info - Desktop -->
    <div class="absolute left-4 md:left-8 lg:left-16 top-0 h-full flex items-center z-10">
      <div class="bg-white/80 dark:bg-indigo-900/80 backdrop-blur-md p-6 rounded-2xl w-64 hidden lg:block">
        <div class="space-y-4">
          <!-- Current Project Info -->
          <div class="space-y-2">
            <span class="font-sans text-sm text-indigo-600 dark:text-indigo-300 font-medium">
              {{ currentProject.agency.role }}
            </span>
            <h3 class="font-display text-xl font-bold text-indigo-950 dark:text-indigo-100">
              {{ currentProject.title }}
            </h3>
            <p class="font-sans text-sm text-indigo-600/80 dark:text-indigo-300/80">
              {{ currentProject.description }}
            </p>
          </div>

          <!-- Navigation Controls -->
          <div class="flex items-center justify-between">
            <button 
              @click="prev" 
              class="btn btn-circle btn-sm bg-white dark:bg-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-700"
            >
              <Icon name="mdi:chevron-left" class="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
            </button>
            <div class="flex gap-2">
              <button 
                v-for="(_, index) in projects.length" 
                :key="index"
                @click="currentIndex = index"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="[
                  currentIndex === index 
                    ? 'w-6 bg-indigo-600 dark:bg-indigo-400' 
                    : 'bg-indigo-200 dark:bg-indigo-700'
                ]"
              />
            </div>
            <button 
              @click="next" 
              class="btn btn-circle btn-sm bg-white dark:bg-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-700"
            >
              <Icon name="mdi:chevron-right" class="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Carousel -->
    <div class="pl-4 md:pl-8 lg:pl-80 pr-4 md:pr-8 overflow-visible">
      <div 
        class="flex transition-all duration-700 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="w-full flex-shrink-0 relative"
        >
          <div 
            class="group relative overflow-hidden rounded-2xl mx-auto max-w-4xl transition-all duration-500"
            :class="[
              currentIndex === index
                ? 'scale-100 opacity-100 translate-x-0'
                : index < currentIndex
                  ? '-translate-x-1/4 scale-90 opacity-30 pointer-events-none'
                  : 'translate-x-1/4 scale-90 opacity-30 pointer-events-none'
            ]"
          >
            <!-- Project Image -->
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <!-- Overlay -->
            <div 
              class="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <!-- Mobile Project Info - Always visible on mobile -->
                <div class="block lg:hidden mb-4">
                  <span class="text-sm text-primary font-medium block mb-2">
                    {{ project.agency.role }}
                  </span>
                  <h3 class="text-xl font-bold text-white mb-2">
                    {{ project.title }}
                  </h3>
                  <p class="text-sm text-white/80 mb-4">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Project Link -->
                <div class="flex gap-4">
                  <a 
                    v-if="project.liveUrl"
                    :href="project.liveUrl" 
                    target="_blank"
                    class="btn btn-sm bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-0"
                  >
                    View Live
                    <Icon name="mdi:external-link" class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Controls -->
    <!-- <div class="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-white/80 dark:bg-indigo-900/80 backdrop-blur-md p-3 rounded-full shadow-lg">
      <button 
        @click="prev" 
        class="btn btn-circle btn-sm bg-white dark:bg-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-700"
      >
        <Icon name="mdi:chevron-left" class="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
      </button>
      
      <div class="flex gap-2">
        <button 
          v-for="(_, index) in projects.length" 
          :key="index"
          @click="currentIndex = index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="[
            currentIndex === index 
              ? 'w-6 bg-indigo-600 dark:bg-indigo-400' 
              : 'bg-indigo-200 dark:bg-indigo-700'
          ]"
        />
      </div>

      <button 
        @click="next" 
        class="btn btn-circle btn-sm bg-white dark:bg-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-700"
      >
        <Icon name="mdi:chevron-right" class="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
      </button>
    </div> -->

    <!-- Swipe Indicators - Mobile Only -->
    <div class="lg:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
      <div class="w-12 h-12 flex items-center justify-center">
        <Icon 
          name="mdi:gesture-swipe-right" 
          class="w-8 h-8 text-indigo-400/50 animate-swipe-right"
        />
      </div>
      <div class="w-12 h-12 flex items-center justify-center">
        <Icon 
          name="mdi:gesture-swipe-left" 
          class="w-8 h-8 text-indigo-400/50 animate-swipe-left"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: all 0.5s ease;
}

.carousel-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.carousel-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@keyframes swipeRight {
  0% { transform: translateX(0); opacity: 0; }
  50% { transform: translateX(10px); opacity: 1; }
  100% { transform: translateX(0); opacity: 0; }
}

@keyframes swipeLeft {
  0% { transform: translateX(0); opacity: 0; }
  50% { transform: translateX(-10px); opacity: 1; }
  100% { transform: translateX(0); opacity: 0; }
}

.animate-swipe-right {
  animation: swipeRight 2s ease-in-out infinite;
}

.animate-swipe-left {
  animation: swipeLeft 2s ease-in-out infinite;
}

/* Hide swipe indicators after first view */
.swipe-seen {
  display: none;
}
</style>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  carouselId: {
    type: String,
    required: true
  }
})

const currentIndex = ref(0)
const hoveredProject = ref(null)

// Navigation methods
const next = () => {
  if (currentIndex.value < props.projects.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.projects.length - 1
  }
}

// Add computed property for current project
const currentProject = computed(() => {
  return props.projects[currentIndex.value];
})

// Add swipe functionality for mobile
const swipeSeen = ref(false)

onMounted(() => {
  let touchStartX = 0
  let touchEndX = 0
  
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX
  }
  
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX
    handleSwipe()
  }
  
  const handleSwipe = () => {
    const swipeThreshold = 50
    const swipeDistance = touchEndX - touchStartX
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        prev()
      } else {
        next()
      }
      swipeSeen.value = true
    }
  }
  
  const element = document.querySelector(`.carousel[data-carousel-id="${props.carouselId}"]`)
  if (element) {
    element.addEventListener('touchstart', handleTouchStart)
    element.addEventListener('touchend', handleTouchEnd)
  }

  // Cleanup event listeners
  onUnmounted(() => {
    if (element) {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  })
})
</script> 