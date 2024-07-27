<script setup lang="ts">
import { ref } from 'vue'

interface JobExperience {
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
}

const activeIndex = ref(-1)
const jobExperienceData = ref<JobExperience[]>([
  {
    company: 'Mazecare',
    position: 'Lead Software Engineer',
    description:
      'Led a team of 8 software developers to develop a comprehensive Clinic Management System. Managed project requirements for 2 APAC clients, achieving strategic goals and creating innovative features adopted by 8+ clinics. Collaborated with the backend team to optimize system design and create over 30 advanced front-end features. Played a key role in ideating and developing client-specific features, with code repurposed for the Mazecare SaaS project, showcasing adaptability and code reusability.',
    startDate: 'Jan 2022',
    endDate: 'Nov 2023'
  },
  {
    company: 'Mazecare',
    position: 'Software Engineer',
    description:
      'Collaboratively redesigned the company website with the CEO, enhancing user experience and modernizing the brands visual representation. Proactively learned about health tech industry products critical to clinic operations, and contributed to the development of interactive product demos with the team. Spearheaded the prototyping and UI/UX design of a demo clinic management system using Figma, enabling cross-functional collaboration to achieve a user-centered design solution.',
    startDate: 'Sept 2021',
    endDate: 'Dec 2021'
  },
  {
    company: 'Freelancer',
    position: 'Freelancer',
    description: 'Working with local companies to establish their online presences.',
    startDate: 'Jan 2021',
    endDate: 'Present'
  },
  {
    company: 'Genius International HK Limnited',
    position: 'Business Development Manager',
    description:
      'Specialized in the watch/pen wholesale industry, supplying over 20 retail shops. Handled client and supplier relationships to provide the best products and prices. Achieved annual sales goals of 10-15 million HKD. Organized a large database to maximize lead generation and partnerships.',
    startDate: 'Aug 2014',
    endDate: 'Sept 2021'
  }
])
</script>

<template>
  <section class="flex flex-col gap-4 text-slate-300 py-6">
    <div class="text-lg font-light text-white lg:hidden">EXPERIENCE</div>
    <div v-for="(data, i) in jobExperienceData" :key="i">
      <div
        :class="[
          'group grid grid-cols-3 gap-2 w-full rounded md:p-5 md:hover:cursor-pointer  transition-all duration-300',
          {
            'lg:bg-slate-50 lg:bg-opacity-5': activeIndex == i,
            'lg:bg-opacity-50 lg:opacity-100': activeIndex == -1,
            'lg:opacity-20 lg:bg-opacity-50': activeIndex !== i && activeIndex != -1
          }
        ]"
        @mouseenter="activeIndex = i"
        @mouseleave="activeIndex = -1"
      >
        <div class="col-span-1">
          <p class="text-sm text-slate-400 group-hover:text-blue-100">
            {{ data.startDate }} - {{ data.endDate }}
          </p>
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <p class="text-base text-slate-100 group-hover:text-blue-500 cursor-pointer">
            {{ data.position }} @ {{ data.company }}
          </p>
          <p class="text-sm text-slate-400">{{ data.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
