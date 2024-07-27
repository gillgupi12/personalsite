<script setup lang="ts">
import { ref } from 'vue'
import fifazineimage from '../assets/images/fifazine.png'
import gupigill from '../assets/images/gupigill.png'
import imagereveal from '../assets/images/imagereveal.png'
import lalalemon from '../assets/images/lalameon.png'

interface Project {
  title: string
  image: string
  imageDescription: string
  description: string
  projectLink: string
}

const projectData = ref<Project[]>([
  {
    title: 'Lalalemon',
    image: lalalemon,
    imageDescription: 'lalalemon',
    description:
      'E-commerce website inspired by lululemon using Nuxt3, ts, supabase, pinia, TailwindCSS, nuxt/ui',
    projectLink: 'https://loquacious-parfait-d159ff.netlify.app/auth/login'
  },
  {
    title: 'Fifazine',
    image: fifazineimage,
    imageDescription: 'fifazine',
    description: 'A Fifa inspired zine styled news using Next.js, firebase, framer-motion',
    projectLink: 'https://fifazine-90892.web.app/'
  },
  {
    title: 'Personal Site',
    image: gupigill,
    imageDescription: 'Gurpinder',
    description: 'Personal Website site inpsired by Brittany Chiang',
    projectLink: 'https://www.gupigill.com'
  },
  {
    title: 'Image Reveal',
    image: imagereveal,
    imageDescription: 'image reval',
    description: 'An image reveal project using Nuxt3, and CSS, GSAP',
    projectLink: 'https://majestic-faun-962d0e.netlify.app/'
  }
])

const activeIndex = ref(-1)
</script>

<template>
  <section class="flex flex-col gap-4 text-slate-300 py-6">
    <div class="text-lg font-light text-white lg:hidden">PROJECTS</div>
    <section class="flex flex-col gap-6">
      <a
        v-for="(project, i) in projectData"
        :href="project.projectLink"
        :key="i"
        :class="[
          'group grid grid-cols-3 gap-4 w-full rounded md:p-5 md:hover:cursor-pointer  transition-all duration-300 ',
          {
            'lg:bg-slate-50 lg:bg-opacity-5': activeIndex == i,
            'lg:bg-opacity-50 lg:opacity-100': activeIndex == -1,
            'lg:opacity-20 lg:bg-opacity-50': activeIndex !== i && activeIndex != -1
          }
        ]"
        @mouseenter="activeIndex = i"
        @mouseleave="activeIndex = -1"
      >
   
          <img :src="project.image" :alt="project.imageDescription" class="col-span-1 rounded" />
          <div class="flex flex-col gap-2 col-span-2">
            <div class="text-base text-slate-100 group-hover:text-blue-500 cursor-pointer">
              {{ project.title }}
            </div>
            <div class="text-sm text-slate-400">
              {{ project.description }}
            </div>
          </div>
     
      </a>
    </section>
  </section>
</template>
