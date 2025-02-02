<template>
  <div class="h-[50vh] lg:min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 px-4">
    <div class="order-2 md:order-1 md:w-full lg:w-1/2 flex flex-col items-center md:items-start space-y-8">
      <h1 class="font-display text-6xl md:text-8xl font-bold text-indigo-950 dark:text-indigo-100">
        <span class="animate-slide-in inline-block">Khalid</span>
        <span class="animate-slide-in inline-block animation-delay-300">Hosein</span>
      </h1>
      <h2 class="font-display text-2xl md:text-4xl text-indigo-600 dark:text-indigo-300 animate-fade-in animation-delay-600">
        Full Stack Web Developer
      </h2>
      <p class="font-sans text-lg md:text-xl text-indigo-500 dark:text-indigo-400 max-w-lg animate-fade-in animation-delay-900">
        Crafting elegant solutions to complex problems with modern web technologies.
      </p>
      <div class="flex gap-4 animate-fade-in animation-delay-1200">
        <button class="btn btn-primary text-[#fff] hover:bg-indigo-700 dark:hover:bg-indigo-500">
          View Projects
        </button>
        <NuxtLink 
          to="/#contact" 
          @click.prevent="scrollToContact"
          class="btn btn-outline border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-indigo-950"
        >
          Contact Me
        </NuxtLink>
      </div>
    </div>
    <div class="order-1 md:order-2 animate-float hidden lg:block">
      <div class="relative w-72 md:w-[32rem] aspect-square rounded-full overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-indigo-900/50">
        <img 
          src="/khavatar.jpg" 
          alt="Khalid Hosein"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 ring-2 ring-indigo-200 dark:ring-indigo-700 rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-900 {
  animation-delay: 900ms;
}

.animation-delay-1200 {
  animation-delay: 1200ms;
}
</style>
