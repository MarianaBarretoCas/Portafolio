<script setup>
import { computed } from "vue";
import { useLanguage } from "../composables/useLanguage";
import ProjectCard from "./ProjectCard.vue";

const { t } = useLanguage();

const projects = computed(() => t.value.projects.cards);
</script>

<template>
  <section
    id="projects"
    class="mx-auto max-w-7xl rounded-2xl border-t border-b border-border-soft px-6 py-16 lg:px-8"
  >
    <div class="mb-10 text-center">
      <span
        class="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400"
      >
        {{ t.projects.eyebrow }}
      </span>

      <h2 class="mt-3 text-3xl font-bold text-content sm:text-4xl">
        {{ t.projects.title }}
      </h2>

      <p
        class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
      >
        {{ t.projects.description }}
      </p>
    </div>

    <div class="grid justify-items-center gap-7 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :index="index"
      />
    </div>

    <div class="mt-10 text-center">
      <a
        href="https://github.com/MarianaBarretoCas"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-semibold text-violet-500 transition-colors duration-300 hover:text-violet-400"
      >
        {{ t.projects.viewAll }}
      </a>
    </div>
  </section>
</template>
