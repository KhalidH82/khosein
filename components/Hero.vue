<template>
  <div class="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-4">
    <div class="order-2 md:order-1 md:w-1/2 flex flex-col items-center md:items-start space-y-8">
      <h1 class="text-6xl md:text-8xl font-bold">
        <span class="animate-slide-in inline-block">Khalid</span>
        <span class="animate-slide-in inline-block animation-delay-300">Hosein</span>
      </h1>
      <h2 class="text-2xl md:text-4xl text-gray-600 animate-fade-in animation-delay-600">
        Full Stack Web Developer
      </h2>
      <p class="text-lg md:text-xl text-gray-500 max-w-lg animate-fade-in animation-delay-900">
        Crafting elegant solutions to complex problems with modern web technologies.
      </p>
      <div class="flex gap-4 animate-fade-in animation-delay-1200">
        <button class="btn btn-primary btn-lg">View Projects</button>
        <button class="btn btn-outline btn-lg">Contact Me</button>
      </div>
    </div>
    <div class="order-1 md:order-2 animate-float">
      <div class="relative w-72 md:w-[32rem] aspect-square rounded-full overflow-hidden shadow-2xl">
        <img 
          src="/khavatar.jpg" 
          alt="Khalid Hosein"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

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
