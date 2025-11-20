<template>
  <div class="relative h-dvh w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
    <!-- Global Background -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/hero-bg.png" 
        alt="Background" 
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-background-light/30 dark:to-background-dark/60"></div>
    </div>

    <div class="relative z-10 h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Header />
      
      <main class="w-full">
        <section id="home" class="snap-start h-dvh w-full flex flex-col">
          <Hero />
        </section>
        
        <section id="skills" class="snap-start min-h-dvh flex items-center justify-center w-full py-20">
          <div class="w-full max-w-6xl px-4 md:px-10">
            <Skills />
          </div>
        </section>
        
        <section id="projects" class="snap-start min-h-dvh flex items-center justify-center w-full py-20">
          <div class="w-full max-w-6xl px-4 md:px-10">
            <Projects />
          </div>
        </section>
        
        <section id="contact" class="snap-start min-h-dvh flex items-center justify-center w-full py-20">
          <div class="w-full max-w-6xl px-4 md:px-10">
            <Contact />
          </div>
        </section>
      </main>
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

