<template>
  <section id="contact" class="py-24">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">
          Get In Touch
          <span class="text-primary">.</span>
        </h2>
        <p class="font-sans text-base-content/60 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="max-w-lg mx-auto">
        <form @submit.prevent="handleSubmit" name="contact" method="POST" data-netlify="true"
          netlify-honeypot="bot-field" class="card bg-white shadow-xl shadow-indigo-100 animate-slide-up">
          <!-- Add this hidden input for Netlify form handling -->
          <input type="hidden" name="form-name" value="contact" />

          <!-- Add this for spam prevention -->
          <div class="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          <div class="card-body space-y-6">
            <!-- Form Fields -->
            <div v-for="field in formFields" :key="field.id">
              <div class="form-control relative">
                <UiLabel for="field.id" class="ml-4 w-full font-sans text-base-content/60 duration-300 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary">{{ field.label }}</UiLabel>
                <IInput  
                v-if="field.type == 'textarea' || 'textarea'"
                :type="field.type" 
                :name="field.name"
                :id="field.id"
                  required
                  class="input bg-indigo-50  border-indigo-200 dark:border-indigo-700 w-full peer focus:border-primary"
                  placeholder=" " container-class="w-full"></IInput>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="form-control mt-6">
              <InteractiveHoverButton type="submit" text="Send Message" class="w-full" />
            </div>
          </div>
        </form>

        <!-- Contact Info Cards -->
        <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="card bg-white  shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20 hover:scale-105 transition-transform">
            <div class="card-body items-center text-center">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="mdi:email" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="font-display card-title text-lg mb-2">Email</h3>
              <a 
                href="mailto:khalid.hosein9@gmail.com" 
                class="font-sans text-base-content/60 hover:text-primary transition-colors break-all"
              >
                khalid.hosein9@gmail.com
              </a>
            </div>
          </div>


          <div class="card bg-white  shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20 hover:scale-105 transition-transform">
            <div class="card-body items-center text-center">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="mdi:phone" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="font-display card-title text-lg mb-2">Phone</h3>
              <a 
                href="tel:+17868389311" 
                class="font-sans text-base-content/60 hover:text-primary transition-colors whitespace-nowrap"
              >
                +1 786 838 9311
              </a>
            </div>
          </div>


          <div class="card bg-white  shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20 hover:scale-105 transition-transform">
            <div class="card-body items-center text-center">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="mdi:map-marker" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="font-display card-title text-lg mb-2">Location</h3>
              <p class="font-sans text-base-content/60 whitespace-nowrap">
                Global
              </p>
            </div>
          </div>
        </div> -->
      </div>

      <!-- Success Modal -->
      <dialog :open="showModal" class="modal">
        <div class="modal-box relative bg-white dark:bg-indigo-900/90 backdrop-blur-lg" @click.stop>
          <div class="text-center space-y-6">
            <!-- Success Animation -->
            <div class="w-24 h-24 mx-auto relative">
              <div class="absolute inset-0 rounded-full border-4 border-primary animate-success-circle"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon name="ph:check-bold" class="w-12 h-12 text-primary animate-success-check" />
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="font-display text-2xl font-bold text-indigo-950 dark:text-indigo-100">
                Message Sent Successfully!
              </h3>
              <p class="font-sans text-base-content/60">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>

            <!-- Close Button -->
            <button @click="showModal = false" class="btn btn-primary btn-block text-[#fff]">
              Close
            </button>
          </div>
        </div>

        <!-- Close button for accessibility -->
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import IInput from './Inspira/IInput.vue';
import InteractiveHoverButton from './Inspira/InteractiveHoverButton.vue';

const showModal = ref(false)

const formFields = [
  { id: 'name', name: 'name', type: 'text', label: 'Your Name' },
  { id: 'email', name: 'email', type: 'email', label: 'Email Address' },
  { id: 'subject', name: 'subject', type: 'text', label: 'Subject' },
  { id: 'message', name: 'message', type: 'textarea', label: 'Your Message' }
]

const handleSubmit = async (e) => {
  try {
    const formData = new FormData(e.target)
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    showModal.value = true
    e.target.reset()
  } catch (error) {
    console.error('Form submission error:', error)
  }
}
</script>

<style scoped>
/* Animations */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Form animations */
@keyframes submit {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(0);
  }
}

.btn[type="submit"]:active {
  animation: submit 0.3s ease;
}

/* Success animations */
@keyframes successCircle {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes successCheck {
  0% {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }

  70% {
    transform: scale(1.3) rotate(5deg);
    opacity: 0.9;
  }

  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

.animate-success-circle {
  animation: successCircle 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.animate-success-check {
  animation: successCheck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

/* Modal animations */
.modal {
  @apply transition-opacity duration-300;
}

.modal-box {
  @apply transform transition-all duration-300;
}

.modal:not(.modal-open) .modal-box {
  @apply scale-90 opacity-0;
}

.modal.modal-open .modal-box {
  @apply scale-100 opacity-100;
}
</style>