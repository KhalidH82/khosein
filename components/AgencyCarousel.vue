<template>
  <section id="projects" class="py-24 overflow-hidden">
    <!-- Section Header -->
    <div class="container mx-auto px-4 mb-16">
      <h2 class="font-display text-4xl md:text-5xl font-bold mb-4">
        Agency Work
        <span class="text-primary">.</span>
      </h2>
      <p class="font-sans text-base-content/60 max-w-2xl">
        Selected projects I've worked on with leading agencies.
      </p>
    </div>

    <!-- Agency Sections -->
    <div class="space-y-24">
      <!-- First Agency -->
      <div>
        <div class="container mx-auto px-4 mb-8">
          <h3 class="font-display text-3xl font-bold flex items-center gap-3">
            <!-- <img src="/agency1-logo.jpg" alt="Agency 1" class="w-8 h-8 rounded-full" /> -->
            Agency One
          </h3>
        </div>
        <CarouselSection 
          :projects="agency1Projects" 
          carousel-id="agency1-carousel"
        />
      </div>

      <!-- Second Agency -->
      <div>
        <div class="container mx-auto px-4 mb-8">
          <h3 class="font-display text-3xl font-bold flex items-center gap-3">
            <!-- <img src="/agency2-logo.jpg" alt="Agency 2" class="w-8 h-8 rounded-full" /> -->
            Agency Two
          </h3>
        </div>
        <CarouselSection 
          :projects="agency2Projects" 
          carousel-id="agency2-carousel"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// Sample data for each agency
const agency1Projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management.',
    image: 'https://picsum.photos/seed/ecommerce/800/450',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    agency: {
      name: 'Agency One',
      role: 'Lead Frontend Developer',
      duration: '6 months',
      year: '2023'
    }
  },
  {
    id: 2,
    title: 'Travel Booking App',
    description: 'Interactive travel platform with real-time booking and itinerary planning.',
    image: 'https://picsum.photos/seed/travel/800/450',
    technologies: ['Nuxt.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    agency: {
      name: 'Agency One',
      role: 'Full Stack Developer',
      duration: '4 months',
      year: '2023'
    }
  },
  {
    id: 3,
    title: 'Real Estate Portal',
    description: 'Property listing and management system with virtual tours.',
    image: 'https://picsum.photos/seed/realestate/800/450',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    liveUrl: 'https://example.com',
    agency: {
      name: 'Agency One',
      role: 'Frontend Developer',
      duration: '5 months',
      year: '2022'
    }
  }
]

const agency2Projects = [
  {
    id: 1,
    title: 'Healthcare Dashboard',
    description: 'Analytics dashboard for healthcare providers with patient management.',
    image: 'https://picsum.photos/seed/healthcare/800/450',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    agency: {
      name: 'Agency Two',
      role: 'Full Stack Developer',
      duration: '8 months',
      year: '2022'
    }
  },
  {
    id: 2,
    title: 'Educational Platform',
    description: 'Interactive learning management system with live classroom features.',
    image: 'https://picsum.photos/seed/education/800/450',
    technologies: ['Vue.js', 'Django', 'Redis'],
    liveUrl: 'https://example.com',
    agency: {
      name: 'Agency Two',
      role: 'Backend Developer',
      duration: '6 months',
      year: '2022'
    }
  },
  {
    id: 3,
    title: 'Financial Analytics Tool',
    description: 'Real-time financial data visualization and reporting platform.',
    image: 'https://picsum.photos/seed/finance/800/450',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    agency: {
      name: 'Agency Two',
      role: 'Full Stack Developer',
      duration: '7 months',
      year: '2021'
    }
  }
]
</script>