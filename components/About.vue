<template>
  <section id="about" class="py-24 bg-base-100">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          About Me
          <span class="text-primary">.</span>
        </h2>
        <p class="text-base-content/60 max-w-2xl mx-auto">
          Passionate about creating meaningful web experiences and solving complex problems through clean, efficient code.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Image and Stats -->
        <div class="space-y-8">
          <div class="relative">
            <div class="relative z-10">
              <img 
                src="/khlogo.jpg" 
                alt="Khalid Hosein" 
                class="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl"></div>
            <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl"></div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6">
            <div 
              v-for="stat in stats" 
              :key="stat.label"
              class="text-center p-4 bg-base-200 rounded-xl hover:scale-105 transition-transform"
            >
              <div class="text-3xl font-bold text-primary mb-2">{{ stat.value }}</div>
              <div class="text-sm text-base-content/70">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right Column - Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">
              Hi, I'm Khalid
              <span class="inline-block animate-wave">👋</span>
            </h3>
            <p class="text-base-content/80 leading-relaxed">
              With over X years of experience in web development, I specialize in building scalable, user-friendly applications. My journey in tech started with [your story here], and I've been passionate about creating innovative solutions ever since.
            </p>
            <p class="text-base-content/80 leading-relaxed">
              When I'm not coding, you'll find me [your interests/hobbies]. I believe in continuous learning and staying up-to-date with the latest technologies.
            </p>
          </div>

          <!-- Skills -->
          <div>
            <h4 class="text-xl font-semibold mb-6">Technical Skills</h4>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div 
                v-for="skill in skills" 
                :key="skill"
                class="group relative overflow-hidden rounded-lg bg-base-200 px-4 py-2 transition-all duration-300 hover:bg-primary hover:shadow-lg"
              >
                <div class="relative z-10 flex items-center gap-2 transition-colors group-hover:text-white">
                  <Icon :name="getSkillIcon(skill)" class="w-5 h-5" />
                  <span class="text-sm font-medium">{{ skill }}</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex gap-4">
            <a 
              href="#contact" 
              class="btn btn-primary"
            >
              Get in Touch
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              class="btn btn-outline"
            >
              Download CV
              <Icon name="mdi:download" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' }
]

const skills = [
  'Vue.js',
  'React.js',
  'Node.js',
  'Express.js',
  'TypeScript',
  'PostgreSQL',
  'REST API',
  'Git',
  'Docker',
  'Nuxt.js',
  'Angular',
  'WordPress',
  'Shopify',
  'SASS',
  'Redux',
  'Unit Testing',
  'Agile',
  'CI/CD',
  'Ruby/Rails',
  'jQuery',
  'MVC',
  'JSON',
  'GraphQL',
  'TailwindCSS',
  'MongoDB'
]

const getSkillIcon = (skill) => {
  const iconMap = {
    'Vue.js': 'logos:vue',
    'React.js': 'logos:react',
    'Node.js': 'logos:nodejs',
    'Express.js': 'simple-icons:express',
    'TypeScript': 'logos:typescript-icon',
    'PostgreSQL': 'logos:postgresql',
    'REST API': 'mdi:api',
    'Git': 'logos:git-icon',
    'Docker': 'logos:docker-icon',
    'Nuxt.js': 'logos:nuxt-icon',
    'Angular': 'logos:angular-icon',
    'WordPress': 'logos:wordpress-icon',
    'Shopify': 'logos:shopify',
    'SASS': 'logos:sass',
    'Redux': 'logos:redux',
    'Unit Testing': 'mdi:test-tube',
    'Agile': 'mdi:sync',
    'CI/CD': 'mdi:cog-sync',
    'Ruby/Rails': 'logos:rails',
    'jQuery': 'logos:jquery',
    'MVC': 'mdi:view-grid',
    'JSON': 'mdi:code-json',
    'GraphQL': 'logos:graphql',
    'TailwindCSS': 'logos:tailwindcss-icon',
    'MongoDB': 'logos:mongodb-icon'
  }

  return iconMap[skill] || 'mdi:code-tags'
}
</script>

<style scoped>
.animate-wave {
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

/* Remove the v-bind in the keyframes and handle animation differently */
.bg-primary {
  animation: skillProgress 1s ease-out forwards;
}

@keyframes skillProgress {
  from { width: 0; }
  to { width: 100%; }
}
</style>