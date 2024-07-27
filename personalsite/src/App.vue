<script setup lang="ts">
import AboutView from './views/AboutView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ProjectView from './views/ProjectView.vue'
import ContactView from './views/ContactView.vue'
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import GithubIcon from './assets/githubIcon.vue'
import linkedinIcon from './assets/linkedinIcon.vue'
import InstagramIcon from './assets/instragramIcon.vue'
import TwitterIcon from './assets/twitterIcon.vue'

const handleMouseMove = (event: any) => {
  updateLightPosition(event.pageX, event.pageY)
}

const handleScroll = (event: any) => {
  lightPosition.value.scrollX = window.scrollX
  lightPosition.value.scrollY = window.scrollY
  updateLightPosition(event.pageX, event.pageY)
}
const updateLightPosition = (x: any, y: any) => {
  lightPosition.value.left = x - 300 + 'px'
  lightPosition.value.top = y - 300 + 'px'
}

const lightPosition = ref({
  left: '0px',
  top: '0px',
  scrollX: 0,
  scrollY: 0
})

const routeLinks = ref([
  {
    name: 'about',
    href: '#about'
  },
  {
    name: 'experiences',
    href: '#experiences'
  },
  {
    name: 'projects',
    href: '#projects'
  }
])

const currentHash = ref()
const setHash = (href: string) => {
  currentHash.value = href
}
const router = useRouter()
onMounted(() => {
  router.push({ path: '/', hash: routeLinks.value[0].href })
  currentHash.value = routeLinks.value[0].href
  observeSection()
})

const sectionObserver = ref()

const observeSection = () => {
  try {
    sectionObserver.value?.disconnect()
  } catch (error) {
    console.log(error)
  }

  const options = {
    rootMargin: '0px 0px',
    threshold: 0.9
  }
  sectionObserver.value = new IntersectionObserver(sectionObserverHandler, options)
  const sections = document.querySelectorAll('.section')
  sections.forEach((section) => {
    sectionObserver.value.observe(section)
  })
}

const sectionObserverHandler = (entries: any) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id
      entry.target.scrollIntoView({ behavior: 'smooth' })
      setHash(`#${sectionId}`)
    }
  }
}
</script>

<template>
  <div class="bg-slate-900" @mousemove="handleMouseMove" @scroll="handleScroll">
    <div
      class="hidden lg:flex absolute w-[600px] h-[600px] !bg-opacity-20 bg-[rgba(125,255,255,0.02)] rounded-full shadow-[0_0_300px_rgba(255,255,255,0.05)] pointer-events-none"
      :style="lightPosition"
    ></div>
    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div class="lg:grid lg:grid-cols-2 lg:justify-between lg:gap-4">
        <div
          class="pb-20 text-slate-200 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4"
        >
          <header class="flex flex-col gap-4 mt-6 lg:mt-0">
            <div class="flex flex-col space-y-2">
              <h2 class="font-bold text-4xl md:text-5xl text-blue-300">Gupi Gill</h2>
              <h4 class="text-xl md:text-2xl font-medium text-blue-100">Software Engineer</h4>
              <p class="text-base md:text-lg text-slate-300 font-light">
                I love to code and create pixel perfect designs!
              </p>
            </div>
            <nav class="flex-col gap-5 py-6 hidden lg:flex">
              <ul v-for="(links, i) in routeLinks" :key="i">
                <RouterLink
                  :to="{ hash: links.href }"
                  @click="setHash(links.href)"
                  class="group flex flex-row gap-4 items-center"
                >
                  <div
                    :class="[
                      ' bg-slate-500  rounded-full group-hover:bg-white  group-hover:w-14 group-hover:h-[3px] duration-300 transition-all',
                      currentHash == links.href ? 'w-14 h-[3px]' : 'w-10 h-[1px] '
                    ]"
                  ></div>
                  <a
                    :class="{
                      'uppercase text-slate-500 text-xs hover:text-white': true,
                      '!text-white': currentHash == links.href
                    }"
                  >
                    {{ links.name }}
                  </a>
                </RouterLink>
              </ul>
            </nav>
            <section>
              <div class="flex flex-row gap-3 text-3xl hover:cursor-pointer">
                <a href="http://www.github.com/gillgupi12">
                  <GithubIcon class="text-slate-500 hover:text-slate-50" />
                </a>

                <a href="https://www.linkedin.com/in/gupi-s-wan-b16431207/">
                  <linkedinIcon class="text-slate-500 hover:text-slate-50" />
                </a>

                <a href="http://www.instagram.com/gill_gupi">
                  <InstagramIcon class="text-slate-500 hover:text-slate-50"
                /></a>

                <a href="https://x.com/urbanosuave">
                  <TwitterIcon class="text-slate-500 hover:text-slate-50"
                /></a>
              </div>
            </section>
          </header>
        </div>
        <div>
          <section class="flex flex-col gap-24">
            <AboutView id="about" class="section" />
            <ExperienceView id="experiences" class="section" />
            <ProjectView id="projects" class="section" />
          </section>
        </div>
      </div>
    </div>
    <div class="text-center py-8 text-slate-400 p-4">
      Inspired by Brittany Chiang.<br />
      Built using vue3 and iconify for icons.
    </div>
  </div>
</template>
