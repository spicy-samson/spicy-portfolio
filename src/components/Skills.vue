<template>
  <section class="flex flex-col gap-8" id="skills">
    <h2 class="text-3xl font-bold leading-tight tracking-[-0.015em] px-4">My Tech Stack</h2>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
      <div 
        v-for="skill in skills" 
        :key="skill.name"
        class="group flex flex-1 flex-col gap-4 rounded-lg border border-primary bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-card-border-hover dark:bg-gray-800 dark:border-primary/50"
      >
        <span class="material-symbols-outlined text-3xl text-primary dark:text-card-border-hover">{{ skill.icon }}</span>
        <div class="flex flex-col gap-1">
          <h3 class="text-base font-bold leading-tight dark:text-white">{{ skill.name }}</h3>
          <p class="text-sm font-normal leading-normal text-primary/70 dark:text-gray-400">{{ skill.category }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Typescript', icon: 'directions_boat', category: 'Programming Language' },
  { name: 'Docker', icon: 'terminal', category: 'Containerization' },
  { name: 'AWS, Cloudflare, GCP', icon: 'cloud', category: 'Cloud Services' },
  { name: 'OpenAI, Gemini', icon: 'layers', category: 'AI' },
  { name: 'Github Actions', icon: 'autorenew', category: 'CI/CD' },
  { name: 'Python', icon: 'data_object', category: 'Scripting' },
  { name: 'Bash', icon: 'integration_instructions', category: 'Scripting' },
  { name: 'Windows, Mac & Linux', icon: 'computer', category: 'Operating System' }
]
</script>

