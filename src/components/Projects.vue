<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-3xl font-bold leading-tight tracking-[-0.015em] px-4">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="flex flex-col bg-[#FFF9F0] dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
      >
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-lg font-bold dark:text-white">{{ project.title }}</h3>
          <p class="text-sm text-secondary dark:text-slate-400 mt-2 flex-grow">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="text-xs font-semibold text-primary dark:text-gray-200 bg-primary/10 dark:bg-gray-700 px-2 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <a class="flex items-center justify-center gap-2 text-sm font-semibold text-primary dark:text-blue-400 bg-slate-50 dark:bg-slate-800/50 p-4 border-t border-slate-200 dark:border-slate-700 group-hover:bg-primary/5 dark:group-hover:bg-slate-700 transition-colors" href="#">
          View Repository <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
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

