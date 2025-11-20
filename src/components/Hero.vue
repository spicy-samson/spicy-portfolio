<template>
  <section class="relative flex flex-col md:flex-row items-center justify-center gap-5 md:gap-16 px-6 py-8 md:py-0 overflow-hidden w-full h-full max-w-5xl mx-auto">
    <!-- Image Section - First on mobile -->
    <div class="relative z-10 flex-shrink-0 order-1 md:order-2 flex items-center justify-center">
      <div class="relative w-44 h-44 md:w-80 md:h-80 rounded-full p-1.5 bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl ring-1 ring-white/40">
        <div class="w-full h-full rounded-full overflow-hidden">
          <img 
            :src="imageSrc" 
            alt="Paulino Samson" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="relative z-10 flex flex-col items-center md:items-start gap-4 md:gap-6 flex-1 order-2 md:order-1 text-center md:text-left w-full">
      <div class="flex flex-col gap-2 md:gap-4 items-center md:items-start w-full">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md border border-white/20 text-primary dark:text-white text-xs md:text-sm font-medium w-fit mx-auto md:mx-0 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for hire
        </div>
        <h1 class="text-3xl md:text-7xl font-display font-bold leading-tight tracking-tight text-slate-900 dark:text-white drop-shadow-sm w-full">
          DevOps <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Engineer</span>
        </h1>
        <h2 class="text-base md:text-2xl font-normal text-slate-700 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Building efficient, scalable, and automated infrastructure to empower development teams.
        </h2>
      </div>
      
      <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 w-full sm:w-auto mt-1 md:mt-2">
        <a class="flex w-full sm:w-auto items-center justify-center rounded-full h-11 md:h-12 px-7 md:px-8 bg-primary hover:bg-primary-dark text-white text-sm md:text-base font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95" href="#projects">
          View My Work
        </a>
        <a class="flex w-full sm:w-auto items-center justify-center rounded-full h-11 md:h-12 px-7 md:px-8 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-slate-700 dark:text-white text-sm md:text-base font-semibold hover:bg-white dark:hover:bg-white/20 transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm" href="#contact">
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// In Vite, files in the public folder are served from the root
// So /public/images/image.jpg should be referenced as /images/image.jpg
const imageSrc = '/images/profile-pic.jpg'
</script>

