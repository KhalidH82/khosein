<template>
  <section class="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-indigo-900 dark:to-indigo-950">
    <div class="container mx-auto px-4">
      <!-- Header Section -->
      <div class="text-start mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4 text-indigo-950 dark:text-indigo-100">
          Digital Profile
          <span class="text-primary">.</span>
        </h2>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Contact & Skills -->
        <div class="space-y-8">
          <!-- Contact Info Card -->
          <div class="card bg-white dark:bg-indigo-900/50 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div class="card-body">
              <h3 class="font-display text-2xl font-bold mb-4">Contact Info</h3>
              <div class="font-sans space-y-3">
                <a 
                  v-for="contact in contactInfo" 
                  :key="contact.label"
                  :href="contact.href"
                  class="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Icon :name="contact.icon" class="w-5 h-5" />
                  <span>{{ contact.label }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Skills Card -->
          <div class="card bg-white dark:bg-indigo-900/50 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div class="card-body">
              <h3 class="font-display text-2xl font-bold mb-6">Technical Skills</h3>
              <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                <div 
                  v-for="skill in skills" 
                  :key="skill"
                  class="group relative overflow-hidden rounded-lg bg-white/50 dark:bg-indigo-800/50 p-3 hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-all duration-300"
                >
                  <div class="relative z-10 flex items-center gap-2 transition-colors group-hover:text-white">
                    <Icon :name="getSkillIcon(skill)" class="w-5 h-5" />
                    <span class="font-sans text-sm font-medium">{{ skill }}</span>
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Info Card -->
          <div class="card bg-white dark:bg-indigo-900/50 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div class="card-body">
              <h3 class="font-display text-2xl font-bold mb-4">Additional Info</h3>
              <div class="font-sans space-y-2 text-base-content/80">
                <p>Willing to relocate: Anywhere</p>
                <p>Authorized to work in the US for any employer</p>
              </div>
            </div>
          </div>

          <!-- Links Card -->
          <div class="card bg-white dark:bg-indigo-900/50 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div class="card-body">
              <h3 class="font-display text-2xl font-bold mb-4">Professional Links</h3>
              <div class="flex flex-col gap-3">
                <a 
                  v-for="link in professionalLinks" 
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  class="btn btn-outline gap-2 hover:scale-105 transition-transform"
                >
                  <Icon :name="link.icon" class="w-5 h-5" />
                  {{ link.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Center Column - Experience -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Summary Card -->
          <div class="card bg-white dark:bg-indigo-900/50 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div class="card-body">
              <h3 class="font-display text-2xl font-bold mb-4">Professional Summary</h3>
              <p class="font-sans text-base-content/80 leading-relaxed">
                {{ professionalSummary }}
              </p>
            </div>
          </div>

          <!-- Skills & Competencies -->
          <div class="card bg-white dark:bg-indigo-900/50 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div class="card-body">
              <h3 class="font-display text-2xl font-bold mb-6">Skills & Competencies</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Development -->
                <div class="space-y-3">
                  <h4 class="font-display text-lg font-semibold text-primary">Development</h4>
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>Full Stack Development</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>Website Functionality</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>Layout Improvement</span>
                    </li>
                  </ul>
                </div>

                <!-- Management -->
                <div class="space-y-3">
                  <h4 class="font-display text-lg font-semibold text-primary">Management</h4>
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>Project Management</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>Stakeholder Relations</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>Agile Methodology</span>
                    </li>
                  </ul>
                </div>

                <!-- Technical -->
                <div class="space-y-3">
                  <h4 class="font-display text-lg font-semibold text-primary">Technical</h4>
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>User Acceptance Testing</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>SEO</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary" />
                      <span>Content Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience Timeline -->
          <div class="card bg-white dark:bg-indigo-900/50 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div class="card-body">
              <h3 class="font-display text-2xl font-bold mb-6">Work Experience</h3>
              <div class="space-y-8">
                <div 
                  v-for="job in experience" 
                  :key="job.company + job.period"
                  class="relative pl-6 pb-8 border-l-2 border-primary last:pb-0"
                >
                  <!-- Timeline Dot -->
                  <div class="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                  
                  <div class="space-y-2">
                    <div class="flex justify-between items-start flex-wrap gap-2">
                      <h4 class="font-display text-xl font-bold">{{ job.title }}</h4>
                      <span class="font-sans text-sm text-primary">{{ job.period }}</span>
                    </div>
                    <h5 class="font-sans text-lg text-base-content/70">{{ job.company }} - {{ job.location }}</h5>
                    <ul class="list-disc list-inside space-y-2 text-base-content/80">
                      <li 
                        v-for="(responsibility, index) in job.responsibilities" 
                        :key="index"
                        class="pl-2"
                      >
                        <span class="pl-2">{{ responsibility }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="card bg-white dark:bg-indigo-900/50 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20">
            <div class="card-body">
              <h3 class="font-display text-2xl font-bold mb-4">Education</h3>
              <div class="space-y-2">
                <h4 class="font-display text-xl font-bold">Certificate in Full Stack Web Development</h4>
                <p class="font-sans text-lg text-base-content/70">General Assembly - New York, NY</p>
                <p class="font-sans text-sm text-primary">January 2018 to April 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactInfo = [
  { label: 'khalid.hosein9@gmail.com', href: 'mailto:khalid.hosein9@gmail.com', icon: 'mdi:email' },
  { label: '+1 786 838 9311', href: 'tel:+17868389311', icon: 'mdi:phone' },
  { label: 'Global', href: '', icon: 'mdi:map-marker' },
  { label: 'www.khalidhosein.com', href: 'https://www.khalidhosein.com', icon: 'mdi:web' }
]

const professionalLinks = [
  { label: 'Portfolio', url: 'https://www.khalidhosein.com', icon: 'mdi:web' },
  { label: 'GitHub', url: 'https://github.com/KhalidH82', icon: 'mdi:github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/khalid-hosein/', icon: 'mdi:linkedin' }
]

const professionalSummary = `Creative and highly analytical Full Stack Web Developer with a strong background in both front-end and back-end web development technologies. I specialize in crafting Server Side Rendered, CMS-architected, and content-driven marketing websites resulting in fast high-performance, SEO-optimized, and accessible modern websites that not only meet but exceed industry and client standards. With a passion for driving initial project conception and meticulous planning, I specialize in optimizing website architecture, conducting comprehensive testing, and addressing technical challenges head-on to deliver exceptional web solutions. I'm dedicated to delivering web applications that align seamlessly with user and business requirements while upholding brand identity and guidelines to the highest quality.`

const experience = [
  {
    title: 'Full Stack Web Developer',
    company: 'T2Marcom',
    location: 'Morristown, NJ',
    period: 'June 2020 to Present',
    responsibilities: [
      'Utilize modern SSR web technologies Vue/Nuxt and headless API solutions to develop responsive, static, accessible, SEO-enhanced, and exceptionally fast websites catering to international manufacturers of large-scale industrial products, ensuring their online presence aligned with their global reputation',
      'Orchestrated the development of content management system (CMS) based websites from the ground up focused on delivering specialized engineering content to international clients',
      'Demonstrated expertise in content modeling by transforming diverse content types such as blogs, product data, and general content into reusable and highly extendable templates allowing a streamlined content creation process for internal and external teams, ensuring consistency and efficiency',
      'Adeptly resolved console errors, build issues, and any code abnormalities, ensuring that websites consistently delivered a seamless user experience with a high attention to detail',
      'Leveraged the power of Netlify and its robust functionality to implement Continuous Integration/Continuous Deployment (CI/CD) driven development practices allowing a streamlined development process also ensuring the efficient and error-free delivery of web projects',
      'Collaborated extensively with cross-functional teams, including content writers, content editors, designers, and stakeholders along with agency partners, addressing functionality, design, and business requirements effectively',
      'Crafted an array of engaging landing pages, intuitive form sign-up interfaces, and captivating microsites which played a pivotal role in driving client marketing campaigns',
      'Innovatively conceptualized solutions, translating client objectives and challenges into robust functional requirements which led to optimizing site functionality and elevating the overall user experience'
    ]
  },
  {
    title: 'Front End Developer',
    company: 'Thorium Digital',
    location: 'East Brunswick, NJ',
    period: 'January 2022 to July 2023',
    responsibilities: [
      'Develop and build user friendly multi locale web applications utilizing HTML, CSS, Javascript, jQuery, React/Next.js Node/Express, with hands on experience with PHP/Laravel/Angular, Typescript, Tailwind CSS and templating languages Liquid, Nunjucks',
      'Performed content updates, building new UI features, creating and enhancing new and existing mobile responsive layouts/templates, while refactoring existing code to be flexible, sustainable, and reusable for 40+ multi locale sites',
      'Collaborated in an Agile Kanban environment using Jira and BitBucket alongside engineering, product, and design, while communicating effectively with third party vendors, and business counterparts to understand requirements and technical solutions',
      'Provided expertise in determining the strategic technical direction and system architecture to meet business requirements and understand and analyze project risks and provide risk mitigation',
      'Assisted with QA by performing various manual testing methods such as unit, smoke, regression, API, security, performance, acceptance, and UI',
      'Participated and contributed to the full software development lifecycle, including planning, meetings, development, estimations, and design sessions, including coding standards, code review, source control, build, test, deploy, and operations',
      'Remediated a variety of security issues from external scans/audits while staying compliant with OWASP standards for secure development',
      'Integrated third-party apps, customization of templates, and functionality within the Shopify platform',
      'Applied structured SEO data to sites to allow crawlers to understand and classify page contents',
      'Ability to modify digital assets with Adobe Photoshop to crop, resize, and perform adjustments and optimizations on images and SVGs'
    ]
  },
  {
    title: 'Full Stack Web Developer',
    company: 'Exactius',
    location: 'New York, NY',
    period: 'November 2020 to December 2021',
    responsibilities: [
      'Developed web applications using HTML, CSS, Javascript, React, Node, and third-party REST APIs for a variety of partners opening new channels for growth, business development, marketing, and lead generation',
      'Worked on and contributed to designing, scoping, and implementing new features, applications, and systems for internal and external digital products with a cross-functional team consisting of FE/BE Developers, QA testers, Tracking, Creative/Design, Copywriters, Social Media, Campaign and Product Managers',
      'Built responsive pixel-perfect websites consisting of landing pages, and signup pages from high-quality Figma designs using CSS libraries such as React Styled Components, Bootstrap, and Material UI',
      'Hands-on experience working with NoSQL and SQL databases such as Firebase, Amazon Redshift, and BigQuery',
      'Implemented Contentful to allow internal and external teams to create, manage, and distribute content across a serverless Jamstack architecture',
      'Built pages for A/B testing, increasing PPC\'s, click-through rates, conversion rates, cost per leads, and cost per acquisition',
      'Proficient with Git-based workflow, continuous integration, and deployment utilizing Netlify\'s serverless platform to build, deploy, and collaborate on projects',
      'Knowledge of industry-leading marketing tools such as Zapier, Klaviyo, Google Ads/Analytics/Tags, Facebook Ads',
      'Authored technical design documentation to analyze the feasibility of the approach, identify potential risks or issues, and technical limitations when dealing with product and feature requirements',
      'Participated in scrum team ceremonies in agile methodology, sprint planning, and backlog grooming to provide clear communication and status of tasks',
      'Acted as a liaison between front and back end development teams to assist with understanding and documenting client requirements, estimating work, and developing or enhancing new or existing solutions',
      'Led efforts in transitioning to new technologies built upon the current tech stack by researching, learning, and educating the development team'
    ]
  }
  // {
  //   title: 'Web Developer',
  //   company: 'The Mercer Club',
  //   location: 'New York, NY',
  //   period: 'September 2019 to January 2020',
  //   responsibilities: [
  //     'Utilize the latest front end web technologies to lead the continuous improvement of existing eCommerce WordPress site to achieve functional, visual, and design integrity of the website',
  //     'Collaborate with the UX/UI team to define test approaches and execute usability test cases to ensure compliance with quality requirements',
  //     'Assist the team in creating user stories, wireframes, develop specifications, and manage the overall vision of the eCommerce WordPress site',
  //     'Create reusable code and libraries for future web development use',
  //     'Coded responsive Email templates for Mailchimp email marketing to engage new and existing users of the platform',
  //     'Support the Senior Developer on the development of plans and workflow to convert the existing WordPress site to a React full-stack application to scale business'
  //   ]
  // },
  // {
  //   title: 'WordPress/Shopify Developer',
  //   company: 'myEPKmedia',
  //   location: 'New York, NY',
  //   period: 'December 2018 to September 2019',
  //   responsibilities: [
  //     'Assumed full ownership for architecting and building flawless and efficient e-commerce solutions for clients using WordPress and Shopify',
  //     'Created quality mock-ups and prototypes for client reviews and feedback',
  //     'Conceptualized and translated design ideas to user-friendly web pages for eCommerce sites including but not limited to landing pages and product pages',
  //     'Maintained a strong eye for details and appealing designs by working closely with UX and Design teams on new user-facing features and website usability',
  //     'Implemented SEO practices to drive and maximize website traffic, conversion, retention, revenue, and profitability',
  //     'Utilized relevant plugins for scheduling and launching social media, email, and banners campaigns on WordPress',
  //     'Demonstrated working knowledge of Google Analytics, Mozbar, Keyword Planner; research keywords, create searchable indices, evaluate search results, and utilize actionable insights to increase web site traffic from search engines',
  //     'Maintained knowledge of the two forms of Divi Builder such as the "Back-end Builder" and the front-end "Visual Builder" as well as utilizing the theme to design responsive WordPress sites',
  //     'Managed digital assets, categories, products, RSS feeds, and content for the sites'
  //   ]
  // }
]

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
.border-l-2 {
  transition: border-color 0.3s ease;
}

.border-l-2:hover {
  border-color: theme('colors.primary');
}
</style> 