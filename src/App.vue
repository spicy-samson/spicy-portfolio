<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <div class="flex flex-1 justify-center">
        <div class="layout-content-container flex flex-col w-full max-w-5xl px-4 md:px-10">
          <Header />
          <main class="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
            <Hero />
            <Skills />
            <Projects />
          </main>
          <Contact />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

