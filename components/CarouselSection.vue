<template>
  <div class="relative">
    <!-- Navigation Arrows -->
    <button 
      @click="prev" 
      class="absolute left-4 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-lg bg-base-100/80 backdrop-blur-sm"
    >
      <Icon name="mdi:chevron-left" class="w-6 h-6" />
    </button>
    <button 
      @click="next" 
      class="absolute right-4 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-lg bg-base-100/80 backdrop-blur-sm"
    >
      <Icon name="mdi:chevron-right" class="w-6 h-6" />
    </button>

    <!-- Projects Carousel -->
    <div 
      class="flex transition-transform duration-500 ease-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }"
    >
      <div 
        v-for="project in projects" 
        :key="project.id"
        :style="{ flex: `0 0 ${100 / visibleSlides}%` }"
        class="px-4"
      >
        <div 
          class="group relative overflow-hidden rounded-2xl"
          @mouseenter="hoveredProject = project.id"
          @mouseleave="hoveredProject = null"
        >
          <!-- Project Image -->
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <!-- Overlay -->
          <div 
            class="absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="mb-4">
                <span class="text-sm text-primary font-medium">
                  {{ project.agency.role }} • {{ project.agency.duration }} • {{ project.agency.year }}
                </span>
              </div>
              <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-base-content/80 mb-4">{{ project.description }}</p>
              
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-base-100/20 backdrop-blur-sm rounded-full text-sm"
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
                  class="btn btn-primary btn-sm"
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

    <!-- Dots Navigation -->
    <div class="flex justify-center gap-2 mt-8">
      <button 
        v-for="(_, index) in Math.ceil(projects.length / visibleSlides)" 
        :key="index"
        @click="currentIndex = index"
        class="w-3 h-3 rounded-full transition-colors duration-300"
        :class="currentIndex === index ? 'bg-primary' : 'bg-base-300'"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const hoveredProject = ref(null)
const visibleSlides = ref(2) // Changed default to 2 slides

// Update visible slides based on screen size
onMounted(() => {
  const updateVisibleSlides = () => {
    if (window.innerWidth < 768) {
      visibleSlides.value = 1
    } else {
      visibleSlides.value = 2
    }
  }

  updateVisibleSlides()
  window.addEventListener('resize', updateVisibleSlides)
})

// Navigation methods
const next = () => {
  if (currentIndex.value < Math.ceil(props.projects.length / visibleSlides.value) - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = Math.ceil(props.projects.length / visibleSlides.value) - 1
  }
}

// Cleanup
onUnmounted(() => {
  window.removeEventListener('resize', () => {})
})
</script> 