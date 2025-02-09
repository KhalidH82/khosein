<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 pt-24 lg:pt-0">
      <div class="min-h-50 lg:min-h-screen flex flex-col-reverse lg:flex-row items-center gap-12">
        <!-- Left Content -->
        <div class="w-full lg:w-7/12">
          <TextHoverEffect
            class="w-full lg:w-[90%] h-52 lg:h-full"
            text="Khalid Hosein"
          />
          <div class="space-y-6">
            <h2 class="font-display text-3xl md:text-4xl text-indigo-600 animate-fade-up">
              Full Stack Web Developer
            </h2>
            <p class="font-sans text-lg text-indigo-500 max-w-lg animate-fade-up animation-delay-200">
              Crafting elegant solutions to complex problems with modern web technologies.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
              <RainbowButton>
                <NuxtLink to="/#projects">
                  View Projects
                </NuxtLink>
              </RainbowButton>
              <RainbowButton>
                <NuxtLink to="/#contact" @click.prevent="scrollToContact">
                  Contact
                </NuxtLink>
              </RainbowButton>
            </div>
          </div>
        </div>

        <!-- Right Content - Avatar -->
        <div class="w-full lg:w-4/12 flex justify-center lg:justify-end">
          <div class="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl shadow-indigo-200">
            <img 
              src="/khavatar.jpg" 
              alt="Khalid Hosein"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 ring-2 ring-indigo-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextHoverEffect from './Inspira/TextHoverEffect.vue';
import RainbowButton from './Inspira/RainbowButton.vue';

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
</style>
