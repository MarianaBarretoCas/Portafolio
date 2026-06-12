<script setup>
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <section
    id="projects"
    class="max-w-7xl mx-auto rounded-2xl border-t border-b border-white/10 px-6 py-10 lg:px-8"
  >
    <div class="mb-8 flex items-center justify-between">
      <h2 class="text-2xl font-semibold text-white">Projects</h2>
      <a
        href="#"
        class="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
      >
        View all projects →
      </a>      
    </div>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </section>
</template>
