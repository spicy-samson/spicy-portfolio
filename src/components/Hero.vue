<template>
  <section class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4" id="home">
    <!-- Image Section -->
    <div class="flex-shrink-0 order-2 md:order-1">
      <div class="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
        <img 
          :src="imageSrc" 
          alt="Paulino Samson" 
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex flex-col items-center md:items-start gap-6 md:gap-8 flex-1 order-1 md:order-2 text-center md:text-left">
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
          Paulino Samson - DevOps Engineer
        </h1>
        <h2 class="text-base font-normal leading-normal md:text-xl max-w-3xl text-primary/80 dark:text-gray-300">
          Passionate about building efficient, scalable, and automated infrastructure to empower development teams.
        </h2>
      </div>
      <a class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white dark:text-gray-100 text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity" href="#projects">
        <span class="truncate">View My Work</span>
      </a>
    </div>
  </section>
</template>

<script setup>
// In Vite, files in the public folder are served from the root
// So /public/images/image.jpg should be referenced as /images/image.jpg
const imageSrc = '/images/profile-pic.jpg'
</script>

