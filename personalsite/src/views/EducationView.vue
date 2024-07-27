<script setup lang="ts">
import { ref } from 'vue'

interface Education {
  course: string
  institution: string
  startDate: string
  endDate: string
}

const activeIndex = ref(-1)
const jobExperienceData = ref<Education[]>([
  {
    course: 'Product Management Foundations',
    institution: 'Reforge',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024'
  },
  {
    course: 'Object Oriented Programming in Java Specialization,',
    institution: 'University Of Duke ',
    startDate: 'Jul 2024',
    endDate: 'Aug 2024'
  },
  {
    course: 'Java Programming and Software Engineering Fundamentals Specialization',
    institution: 'University of Duke',
    startDate: 'Jul 2024',
    endDate: 'Aug 2024'
  },
  {
    course: 'Web Design for Everybody: Basics of Web Development & Coding Specialization',
    institution: 'University of Michigan',
    startDate: 'Jun 2021',
    endDate: 'Jul 2021'
  },
  {
    course: 'Master of Arts(Hons) Degree in Business Management',
    institution: 'University Of Glasgow',
    startDate: 'Sep 2009',
    endDate: 'Jul 2014'
  }
])
</script>

<template>
  <section class="flex flex-col gap-4 text-slate-300 pb-24 pt-6">
    <div class="text-lg font-light text-white lg:hidden">EDUCATION</div>
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
            {{ data.course }}
          </p>
          <p class="text-sm text-slate-400">{{ data.institution }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
