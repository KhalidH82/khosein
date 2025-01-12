<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform -translate-y-10 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform -translate-y-10 opacity-0"
  >
    <div 
      v-if="isVisible"
      class="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md"
    >
      <div class="mx-4 p-4 bg-warning/90 backdrop-blur-sm text-warning-content rounded-lg shadow-lg">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0">
            <Icon name="ph:warning-circle-fill" class="w-6 h-6" />
          </div>
          <div class="flex-1">
            <h3 class="font-bold">Under Construction</h3>
            <p class="text-sm">This site is currently under development. Some features may not be available.</p>
          </div>
          <button 
            @click="closeAlert"
            class="flex-shrink-0 hover:text-warning-content/70 transition-colors"
          >
            <Icon name="ph:x-bold" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isVisible = ref(true)

const closeAlert = () => {
  isVisible.value = false
  localStorage.setItem('construction-alert-closed', 'true')
}

onMounted(() => {
  // Check if alert was previously closed
  const alertClosed = localStorage.getItem('construction-alert-closed')
  if (alertClosed) {
    isVisible.value = false
  }
})
</script> 