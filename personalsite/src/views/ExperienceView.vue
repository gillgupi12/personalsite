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
      'My responsibilities include leading the frontend team to develop various features as per the contract required by the clients.',
    startDate: 'Jan 2022',
    endDate: 'Nov 2023'
  },
  {
    company: 'Mazecare',
    position: 'Software Engineer',
    description:
      'My responsibilities include leading the frontend team to develop various features as per the contract required by the clients.',
    startDate: 'Sept 2021',
    endDate: 'Dec 2021'
  },
  {
    company: 'Freelancer',
    position: 'Freelancer',
    description:
      'My responsibilities include leading the frontend team to develop various features as per the contract required by the clients.',
    startDate: 'Jan 2021',
    endDate: 'Present'
  },
  {
    company: 'Genius International HK Limnited',
    position: 'Business Development Manager',
    description:
      'My responsibilities include leading the frontend team to develop various features as per the contract required by the clients.',
    startDate: 'Aug 2014',
    endDate: 'Sept 2021'
  }
])
</script>

<template>
  <section class="flex flex-col gap-4 text-slate-300 py-12">
    <div class="text-lg font-light text-white lg:hidden">EXPERIENCE</div>
    <div v-for="(data, i) in jobExperienceData" :key="i">
      <div
        :class="[
          'group grid grid-cols-3 gap-2 w-full rounded md:p-5 md:hover:cursor-pointer  transition-all duration-300',
          {
            'lg:bg-slate-50 lg:bg-opacity-5': activeIndex == i,
            'lg:bg-opacity-50 lg:opacity-100': activeIndex == -1,
            'lg:opacity-20 lg:bg-opacity-50': activeIndex !== i && activeIndex != -1,
          }
        ]"
        @mouseenter="activeIndex = i"
        @mouseleave="activeIndex = -1"
      >
        <div class="col-span-1">
          <p class="text-sm text-slate-400 group-hover:text-blue-100 ">
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
