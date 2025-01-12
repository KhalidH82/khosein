<template>
  <section id="contact" class="py-24 bg-base-100">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Get In Touch
          <span class="text-primary">.</span>
        </h2>
        <p class="text-base-content/60 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto">
        <form 
          name="contact"
          data-netlify="true"
          method="POST"
          netlify-honeypot="bot-field"
          class="card bg-base-200 shadow-xl"
        >
          <!-- Hidden fields for Netlify -->
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div class="card-body space-y-6">
            <!-- Name Input -->
            <div class="form-control relative">
              <input 
                type="text" 
                name="name"
                id="name"
                required
                class="input input-bordered w-full pt-6 peer focus:border-primary"
                placeholder=" "
              />
              <label 
                for="name"
                class="absolute text-base-content/60 duration-300 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
              >
                Your Name
              </label>
            </div>

            <!-- Email Input -->
            <div class="form-control relative">
              <input 
                type="email" 
                name="email"
                id="email"
                required
                class="input input-bordered w-full pt-6 peer focus:border-primary"
                placeholder=" "
              />
              <label 
                for="email"
                class="absolute text-base-content/60 duration-300 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
              >
                Email Address
              </label>
            </div>

            <!-- Subject Input -->
            <div class="form-control relative">
              <input 
                type="text" 
                name="subject"
                id="subject"
                required
                class="input input-bordered w-full pt-6 peer focus:border-primary"
                placeholder=" "
              />
              <label 
                for="subject"
                class="absolute text-base-content/60 duration-300 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
              >
                Subject
              </label>
            </div>

            <!-- Message Input -->
            <div class="form-control relative">
              <textarea 
                name="message"
                id="message"
                required
                rows="4"
                class="textarea textarea-bordered w-full pt-6 peer focus:border-primary resize-none"
                placeholder=" "
              ></textarea>
              <label 
                for="message"
                class="absolute text-base-content/60 duration-300 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
              >
                Your Message
              </label>
            </div>

            <!-- Submit Button -->
            <div class="form-control mt-6">
              <button 
                type="submit"
                class="btn btn-primary w-full group relative overflow-hidden"
              >
                <span class="relative z-10">Send Message</span>
                <div class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </form>

        <!-- Contact Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <!-- Email -->
          <div class="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
            <div class="card-body items-center text-center">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="mdi:email" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="card-title text-lg mb-2">Email</h3>
              <a href="mailto:khalid.hosein9@gmail.com" class="text-base-content/60 hover:text-primary transition-colors">
                khalid.hosein9@gmail.com
              </a>
            </div>
          </div>

          <!-- Phone -->
          <div class="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
            <div class="card-body items-center text-center">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="mdi:phone" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="card-title text-lg mb-2">Phone</h3>
              <a href="tel:+17868389311" class="text-base-content/60 hover:text-primary transition-colors">
                +1 786 838 9311
              </a>
            </div>
          </div>

          <!-- Location -->
          <div class="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
            <div class="card-body items-center text-center">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="mdi:map-marker" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="card-title text-lg mb-2">Location</h3>
              <p class="text-base-content/60">
                Philadelphia, PA 19122
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

@keyframes submit {
  0% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
}

.btn[type="submit"]:active {
  animation: submit 0.3s ease;
}

/* Optional: Add focus ring animation */
.input:focus, .textarea:focus {
  @apply ring-2 ring-primary/20;
  animation: focusRing 0.3s ease-out;
}

@keyframes focusRing {
  0% { 
    @apply shadow-[0_0_0_0] shadow-primary/40;
  }
  100% { 
    @apply shadow-[0_0_0_4px] shadow-primary/0;
  }
}
</style>