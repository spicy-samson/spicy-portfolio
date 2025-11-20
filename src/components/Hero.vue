<template>
  <section class="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 py-12 md:py-20 overflow-hidden w-full flex-1 max-w-5xl mx-auto">
    <!-- Content Section -->
    <div class="relative z-10 flex flex-col items-center md:items-start gap-4 flex-1 order-2 md:order-1 text-center md:text-left">
      <div class="flex flex-col gap-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-blue-400 text-sm font-semibold w-fit mx-auto md:mx-0">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for hire
        </div>
        <h1 class="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
          DevOps <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-card-border-hover">Engineer</span>
        </h1>
        <h2 class="text-lg md:text-xl font-medium text-secondary dark:text-slate-400 max-w-2xl mx-auto md:mx-0">
          Building efficient, scalable, and automated infrastructure to empower development teams.
        </h2>
      </div>
      
      <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 w-full sm:w-auto mt-2">
        <a class="flex w-full sm:w-auto items-center justify-center rounded-lg h-11 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5" href="#projects">
          View My Work
        </a>
        <a class="flex w-full sm:w-auto items-center justify-center rounded-lg h-11 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5" href="#contact">
          Contact Me
        </a>
      </div>
    </div>

    <!-- Image Section -->
    <div class="relative z-10 flex-shrink-0 order-1 md:order-2">
      <div class="relative w-40 h-40 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-primary to-card-border-hover shadow-xl">
        <div class="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-background-dark">
          <img 
            :src="imageSrc" 
            alt="Paulino Samson" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// In Vite, files in the public folder are served from the root
// So /public/images/image.jpg should be referenced as /images/image.jpg
const imageSrc = '/images/profile-pic.jpg'
</script>

