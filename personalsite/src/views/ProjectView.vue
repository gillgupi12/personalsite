<script setup lang="ts">
import { ref } from 'vue'

const projectData = ref([
  {
    title: 'Lalalemon',
    image: '',
    imagedescription: 'lalalemon',
    description:
      'E-commerce website inspired by lululemon using Nuxt3, ts, supabase, pinia, TailwindCSS, nuxt/ui'
  },
  {
    title: 'Image Reveal',
    image: '',
    imagedescription: 'image reval',
    description: 'An image reveal project using Nuxt3, and CSS, GSAP'
  },
  {
    title: 'Fifazine',
    image: '',
    imagedescription: 'fifazine',
    description: 'A Fifa inspired zine styled news using Next.js, firebase, framer-motion'
  },
  {
    title: 'Fifazine',
    image: '',
    imagedescription: 'fifazine',
    description: 'A Fifa inspired zine styled news using Next.js, firebase, framer-motion'
  }
])

const activeIndex = ref(-1)
</script>

<template>
  <section class="flex flex-col gap-4 text-slate-300 pb-24">
    <div class="text-lg font-light text-white lg:hidden">PROJECTS</div>
    <section class="flex flex-col gap-6">
      <li
        v-for="(project, i) in projectData"
        :key="i"
        :class="[
          'group grid grid-cols-3 gap-2 w-full rounded md:p-5 md:hover:cursor-pointer  transition-all duration-300 ',
          {
            'lg:bg-slate-50 lg:bg-opacity-5': activeIndex == i,
            'lg:bg-opacity-50 lg:opacity-100': activeIndex == -1,
            'lg:opacity-20 lg:bg-opacity-50': activeIndex !== i && activeIndex != -1,
          }
        ]"
        @mouseenter="activeIndex = i"
        @mouseleave="activeIndex = -1"
      >
        <img :src="project.image" :alt="project.imagedescription" class="col-span-1" />
        <div class="flex flex-col gap-2 col-span-2">
          <div class="text-base text-slate-100 group-hover:text-blue-500 cursor-pointer">{{ project.title }}</div>
          <div class="text-sm text-slate-400">
            {{ project.description }}
          </div>
        </div>
      </li>
    </section>
  </section>
</template>
