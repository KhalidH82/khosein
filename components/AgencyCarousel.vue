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
            T2 Marketing Communications
          </h3>
        </div>
        <CarouselSection 
          :projects="t2MarketingCommuncationsProjects" 
          carousel-id="agency1-carousel"
        />
      </div>

      <!-- Second Agency -->
      <div>
        <div class="container mx-auto px-4 mb-8">
          <h3 class="font-display text-3xl font-bold flex items-center gap-3">
            <!-- <img src="/agency2-logo.jpg" alt="Agency 2" class="w-8 h-8 rounded-full" /> -->
            Thorium Digital
          </h3>
        </div>
        <CarouselSection 
          :projects="thoriumDigitalProjects" 
          carousel-id="agency2-carousel"
        />
      </div>
    </div>
  </section>
</template>

<script setup>

const t2MarketingCommuncationsProjects = [
  {
    id: 1,
    title: '168 Manufacturing',
    description: '',
    image: '/t2marcom/168Mfg.webp',
    technologies: ['Vue.js', 'Nuxt.js'],
    liveUrl: 'https://168mfg.com/',
    agency: {
      name: 'T2 Marketing Communications',
      role: 'Lead Frontend Developer',
      year: '2023'
    }
  },
  {
    id: 2,
    title: 'Magnaplate',
    description: '',
    image: '/t2marcom/Magnaplate.webp',
    technologies: ['Vue.js', 'Nuxt.js'],
    liveUrl: 'https://www.magnaplate.com/',
    agency: {
      name: 'T2 Marketing Communications',
      role: 'Lead Frontend Developer',
      year: '2023'
    }
  },
  {
    id: 3,
    title: 'Mennekes',
    description: '',
    image: '/t2marcom/Mennekes.webp',
    technologies: ['Vue.js', 'Nuxt.js'],
    liveUrl: 'https://www.mennekes.com/',
    agency: {
      name: 'T2 Marketing Communications',
      role: 'Lead Frontend Developer',
      year: '2023'
    }
  },
  {
    id: 4,
    title: 'Angstrom Designs',
    description: '',
    image: '/t2marcom/Angstrom.webp',
    technologies: ['Vue.js', 'Nuxt.js'],
    liveUrl: 'https://angstromdesigns.com/',
    agency: {
      name: 'T2 Marketing Communications',
      role: 'Frontend Developer',
      year: '2023'
    }
  },
  {
    id: 5,
    title: 'Akribis Systems',
    description: '',
    image: '/t2marcom/Akribis.webp',
    technologies: ['Vue.js', 'Nuxt.js'],
    liveUrl: 'https://akribis-sys.com/',
    agency: {
      name: 'T2 Marketing Communications',
      role: 'Lead Frontend Developer',
      year: '2023'
    }
  },
  {
    id: 6,
    title: 'L&S Machinbe Company',
    description: '',
    image: '/t2marcom/LS.webp',
    technologies: ['Vue.js', 'Nuxt.js'],
    liveUrl: 'https://lsmachineco.com/',
    agency: {
      name: 'T2 Marketing Communications',
      role: 'Frontend Developer',
      year: '2023'
    }
  },
  {
    id: 7,
    title: 'World Water Works',
    description: '',
    image: '/t2marcom/WWW.webp',
    technologies: ['Vue.js', 'Nuxt.js'],
    liveUrl: 'https://www.worldwaterworks.com/',
    agency: {
      name: 'T2 Marketing Communications',
      role: 'Lead Frontend Developer',
      year: '2023'
    }
  },
]

const thoriumDigitalProjects = [
  {
    id: 1,
    title: 'Belsazar',
    description: '',
    image: '/thorium/Belsazar.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.belsazar.com/en-de/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 2,
    title: 'Buchanans',
    description: '',
    image: '/thorium/Buchanans.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.buchananswhisky.com/en-us',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 3,
    title: 'Bulleit',
    description: '',
    image: '/thorium/Bulleit.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.bulleit.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 4,
    title: 'Cascade Moon',
    description: '',
    image: '/thorium/CascadeMoon.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.cascademooneditions.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 5,
    title: 'Casamigos',
    description: '',
    image: '/thorium/Casamigos.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.casamigos.com/en-us',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 6,
    title: 'Ciroc',
    description: '',
    image: '/thorium/Ciroc.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.ciroc.com/en-us',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 7,
    title: 'Don Julio',
    description: '',
    image: '/thorium/DonJulio.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.donjulio.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 8,
    title: 'Guinness Nitrosurge',
    description: '',
    image: '/thorium/GuinnessNitrosurge.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://nitrosurge.guinness.com/en/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 9,
    title: 'Guinness Opengate Brewery Baltimore',
    description: '',
    image: '/thorium/GuinnessOpenGate.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.guinnessbrewerybaltimore.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 10,
    title: 'Ketel One',
    description: '',
    image: '/thorium/KetelOne.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.ketelone.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 11,
    title: 'Kikori',
    description: '',
    image: '/thorium/Kikori.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.kikoriwhiskey.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 12,
    title: 'Orphan Barrel',
    description: '',
    image: '/thorium/OrphanBarrel.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.orphanbarrel.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 13,
    title: 'Seedlip Drinks',
    description: '',
    image: '/thorium/Seedlip.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.seedlipdrinks.com/en-us/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 14,
    title: 'Stitzel Weller Distillery',
    description: '',
    image: '/thorium/StitzelWeller.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.stitzelwellerdistillery.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
  {
    id: 15,
    title: 'Yuzuri',
    description: '',
    image: '/thorium/Yuzuri.webp',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://www.yuzuriliqueur.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
]
</script>