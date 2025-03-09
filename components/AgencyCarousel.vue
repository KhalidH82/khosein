<template>
  <section id="projects" class="py-24 overflow-hidden">
    <!-- Section Header -->
    <div class="container mx-auto px-4 mb-16">
      <h2 class="font-display text-4xl md:text-5xl font-bold mb-4 text-indigo-950">
        Agency Work
        <span class="text-primary">.</span>
      </h2>
      <p class="font-sans text-base-content/60 max-w-2xl text-indigo-950">
        Selected projects I've worked on with leading agencies.
      </p>
    </div>

    <!-- Agency Sections -->
    <div class="space-y-24">
      <!-- First Agency -->
      <div>
        <div class="container mx-auto px-4 mb-8">
          <a 
            href="https://t2marcom.com/" 
            target="_blank" 
            class="group inline-block"
          >
            <h3 class="font-display text-3xl font-bold flex items-center gap-3 text-indigo-950 hover:text-primary transition-colors">
              T2 Marketing Communications
              <Icon 
                name="heroicons:arrow-up-right-20-solid" 
                class="w-6 h-6 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" 
              />
            </h3>
            <div class="h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>
        <CarouselSection 
          :projects="t2MarketingCommuncationsProjects" 
          carousel-id="agency1-carousel"
        />
      </div>

      <!-- Second Agency -->
      <div>
        <div class="container mx-auto px-4 mb-8">
          <a 
            href="https://www.thoriumdigital.com/" 
            target="_blank"
            class="group inline-block"
          >
            <h3 class="font-display text-3xl font-bold flex items-center gap-3 text-indigo-950 hover:text-primary transition-colors">
              Thorium Digital
              <Icon 
                name="heroicons:arrow-up-right-20-solid" 
                class="w-6 h-6 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" 
              />
            </h3>
            <div class="h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </a>
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
    technologies: ['Vue.js', 'Nuxt.js', 'Directus'],
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
    technologies: ['Vue.js', 'Nuxt.js', 'Directus'],
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
    technologies: ['Vue.js', 'Nuxt.js', 'Directus'],
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
    technologies: ['Nunjucks', 'Handlebars', 'jQuery', 'Gulp', 'SASS'],
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
    technologies: ['Nunjucks', 'Handlebars', 'jQuery', 'Gulp'],
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
    technologies: ['Nunjucks', 'Handlebars', 'jQuery', 'Grunt', 'Gulp'],
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
    technologies: ['Nunjucks', 'Handlebars', 'jQuery', 'Grunt', 'Gulp'],
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
    technologies: ['React', 'Express', 'MobX', 'Bootstrap'],
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
    technologies: ['React', 'jQuery', 'Express', 'Gulp', 'Bootstrap'],
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
    technologies: ['React', 'Next.js', 'jQuery', 'Express', 'SASS'],
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
    technologies: ['React', 'MobX', 'Gulp'],
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
    technologies: ['React', 'MobX', 'Gulp'],
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
    technologies: ['React', 'Next', 'Handlebars', 'Umbraco'],
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
    technologies: ['Nunjucks', 'Gulp'],
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
    technologies: ['jQuery', 'Gulp', 'Express'],
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
    technologies: ['React', 'Next', 'jQuery', 'Express', 'GraphQL', 'Shopify' ],
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
    technologies: ['React', 'Express', 'MobX', 'SASS', 'Bootstrap'],
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
    technologies: ['Handlebars', 'jQuery', 'Gulp'],
    liveUrl: 'https://www.yuzuriliqueur.com/',
    agency: {
      name: 'Thorium Digital',
      role: 'Full Stack Developer',
      year: '2022'
    }
  },
]
</script>