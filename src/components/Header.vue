<template>
  <header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4 md:px-10 py-4">
    <a class="flex items-center gap-3 text-primary dark:text-white" href="#home">
      <span class="material-symbols-outlined text-2xl">
        data_object
      </span>
      <h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">Paulino Samson</h2>
    </a>
    <div class="hidden md:flex items-center gap-8">
      <nav class="flex items-center gap-6">
        <a class="text-sm font-medium leading-normal hover:text-card-border-hover" href="#skills">Skills</a>
        <a class="text-sm font-medium leading-normal hover:text-card-border-hover" href="#projects">Projects</a>
        <a class="text-sm font-medium leading-normal hover:text-card-border-hover" href="#contact">Contact</a>
      </nav>
      <a class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white dark:text-gray-100 text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity" href="#">
        <span class="truncate">Download Resume</span>
      </a>
    </div>
    <button class="md:hidden text-primary dark:text-white">
      <span class="material-symbols-outlined text-3xl">menu</span>
    </button>
  </header>
</template>

<script setup>
</script>

