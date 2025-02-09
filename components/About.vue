<template>
  <section id="about" class="py-24">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-24">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4 text-indigo-950 dark:text-indigo-100">
          About Me
          <span class="text-indigo-600 dark:text-indigo-400">.</span>
        </h2>
        <p class="font-sans text-base-content/60 max-w-2xl mx-auto">
          Passionate about creating meaningful web experiences and solving complex problems through clean, efficient code.
        </p>
      </div>

      <!-- Main Content -->
      <div class="relative">
        <!-- Decorative Background Elements -->
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-700/20 rounded-full blur-3xl"></div>
          <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <!-- Left Column - Profile -->
          <div class="lg:col-span-5 space-y-8">
            <!-- Profile Image with Interactive Elements -->
            <div class="relative group">
              <div class="relative z-10 overflow-hidden rounded-2xl">
                <img 
                  src="/khlogo.jpg" 
                  alt="Khalid Hosein" 
                  class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <!-- Overlay with Quick Facts -->
                <div class="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <!-- <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="text-center">
                        <div class="font-display text-2xl font-bold text-white">5+</div>
                        <div class="font-sans text-sm text-indigo-200">Years Exp.</div>
                      </div>
                      <div class="text-center">
                        <div class="font-display text-2xl font-bold text-white">50+</div>
                        <div class="font-sans text-sm text-indigo-200">Projects</div>
                      </div>
                      <div class="text-center">
                        <div class="font-display text-2xl font-bold text-white">20+</div>
                        <div class="font-sans text-sm text-indigo-200">Clients</div>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
              <!-- Decorative Frames -->
              <div class="absolute -top-4 -left-4 w-full h-full border-2 border-indigo-500 dark:border-indigo-400 rounded-2xl transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-indigo-500 dark:border-indigo-400 rounded-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>

            <!-- Introduction -->
            <div class="space-y-4 p-6 bg-white/50  rounded-2xl backdrop-blur-sm">
              <h3 class="font-display text-2xl font-bold text-indigo-950 dark:text-indigo-100 flex items-center gap-3">
                Hi, I'm Khalid
                <span class="inline-block animate-wave">👋</span>
              </h3>
              <p class="font-sans leading-relaxed">
                With over 5 years of experience in web development, I specialize in building scalable, user-friendly applications. 
              </p>
              <!-- My journey in tech started with [your story here], and I've been passionate about creating innovative solutions ever since. -->
              <p class="font-sans leading-relaxed">
                When I'm not coding, you'll find me 🏋🏽 🚴🏽‍♂️ 🛫 🏝️ ⛰️. I believe in continuous learning and staying up-to-date with the latest technologies.
              </p>
              <!-- CTA Section -->
      <div class="flex flex-wrap gap-4 justify-center md:justify-start">
        <a 
          href="#contact" 
          class="btn btn-primary text-[#fff] hover:bg-indigo-700 dark:hover:bg-indigo-500 group"
        >
          Get in Touch
          <Icon name="mdi:arrow-right" class="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank"
          class="btn btn-outline border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-indigo-950 group"
        >
          Download CV
          <Icon name="mdi:download" class="w-5 h-5 transition-transform group-hover:translate-y-1" />
        </a>
      </div>
            </div>
          </div>

          <!-- Right Column - Skills -->
          <div class="lg:col-span-7 space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(skills, category) in skillCategories" :key="category">
                <div class="p-6 bg-white/50  rounded-2xl backdrop-blur-sm space-y-4 hover:shadow-xl transition-all duration-300">
                  <h4 class="font-display text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    {{ category }}
                  </h4>
                  <div class="grid grid-cols-2 gap-3">
                    <div 
                      v-for="skill in skills" 
                      :key="skill"
                      class="group relative overflow-hidden rounded-lg bg-white/50 dark:bg-indigo-800/50 p-3 hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-all duration-300"
                    >
                      <div class="relative z-10 flex items-center gap-2 transition-colors group-hover:text-white">
                        <div v-if="skill === 'Cursor'">
                          <img src="/icons/cursor.png" class="w-5 h-5" />
                        </div>
                        <Icon :name="getSkillIcon(skill)" class="w-5 h-5" />
                        <span class="font-sans text-sm font-medium">{{ skill }}</span>
                      </div>
                      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const skillCategories = {
  'Frontend Development': [
    'Vue.js',
    'React.js',
    'TailwindCSS',
    'SCSS',
    'jQuery',
  ],
  'Backend Development': [
    'Node.js',
    'Express.js',
    'REST API'
  ],
  'Databases': [
    'Supabase',
    'Firebase',
    'PostgreSQL',
  ],
  'Languages & Tools': [
    'JavaScript',
    'TypeScript',
    'JSON',
    'MVC',
  ],
  'DevOps & Tools': [
    'GitHub',
    'Git',
    'Docker',
    'Netlify',
    'CI/CD',
  ],
  'CMS & E-commerce': [
    'Directus',
    'Contentful',
    'WordPress',
    'Shopify',
    'Webflow',
    'Nuxt Content'
  ],
  'Frameworks': [
    'Nuxt.js',
    'Next.js',
  ],
  'Productivity Skills': [
    'Figma',
    'Slack',
    'Jira',
    'Notion',
    'Cursor',
    'VS Code'
  ],
}

// Replace the existing skills array with a computed property that flattens the categories
const skills = computed(() => 
  Object.values(skillCategories).flat()
)

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
    'SCSS': 'vscode-icons:file-type-scss',
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
    'MongoDB': 'logos:mongodb-icon',
    'Directus': 'simple-icons:directus',
    'Contentful': 'logos:contentful',
    'Webflow': 'logos:webflow',
    'Nuxt Content': 'logos:nuxt-icon',
    'Next.js': 'logos:nextjs-icon',
    'GitHub': 'logos:github-icon',
    'Slack': 'logos:slack-icon',
    'Jira': 'logos:jira',
    'Notion': 'logos:notion-icon',
    // 'Cursor': '/icons/cursor.png',
    'VS Code': 'logos:visual-studio-code',
    'JavaScript': 'logos:javascript',
    'Netlify': 'logos:netlify',
    'Supabase': 'logos:supabase-icon',
    'Firebase': 'logos:firebase',
    'Figma': 'logos:figma',
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