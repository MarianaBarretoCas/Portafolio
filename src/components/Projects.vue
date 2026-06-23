<script setup>
import ProjectCard from "./ProjectCard.vue";
import { useLanguage } from "../composables/useLanguage";

const { t } = useLanguage();
</script>

<template>
  <section
    id="projects"
    class="mx-auto max-w-7xl rounded-2xl border-t border-b border-border-soft px-6 py-10 lg:px-8"
  >
    <div class="mb-8 flex items-center justify-between gap-4">
      <h2 class="text-2xl font-semibold text-content">
        {{ t.projects.title }}
      </h2>

      <a
        href="https://github.com/MarianaBarretoCas"
        target="_blank"
        class="text-sm font-medium text-violet-500 transition-colors duration-300 hover:text-violet-400"
      >
        {{ t.projects.viewAll }}
      </a>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </section>
</template>
