<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-3xl font-bold leading-tight tracking-[-0.015em] px-4">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="flex flex-col bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div class="p-8 flex flex-col flex-grow gap-4">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white font-display">{{ project.title }}</h3>
          <p class="text-base text-secondary dark:text-slate-300 flex-grow leading-relaxed">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="text-xs font-semibold text-primary dark:text-blue-300 bg-primary/10 dark:bg-blue-500/20 px-3 py-1 rounded-full border border-primary/10 dark:border-blue-500/20"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <a class="flex items-center justify-center gap-2 text-sm font-semibold text-primary dark:text-blue-400 bg-white/50 dark:bg-white/5 p-4 border-t border-white/20 dark:border-white/10 group-hover:bg-primary/5 dark:group-hover:bg-white/10 transition-colors" href="#">
          View Repository <span class="material-symbols-outlined transition-transform group-hover:translate-x-1 text-lg">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Automated Cloud Provisioning',
    description: 'A Terraform project to automate the setup of a scalable VPC with public/private subnets on AWS.',
    tags: ['Terraform', 'AWS', 'IaC']
  },
  {
    title: 'CI/CD Pipeline for Microservice',
    description: 'Jenkins pipeline to automatically build, test, and deploy a containerized Python application to a Kubernetes cluster.',
    tags: ['Jenkins', 'Docker', 'Kubernetes']
  },
  {
    title: 'Infrastructure Monitoring Stack',
    description: 'Deployed Prometheus and Grafana using Docker Compose to monitor system metrics and create insightful dashboards.',
    tags: ['Prometheus', 'Grafana', 'Docker']
  }
]
</script>

