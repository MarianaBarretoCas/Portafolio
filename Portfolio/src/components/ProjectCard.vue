<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <article
  id="project-card"
  class="group glass-card overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-card hover:border-violet-500/50 hover:shadow-project-hover"
>
    <div id="image-project" class="h-48 overflow-hidden bg-surface-strong">
      <img
        src="/images/projects/project-1.png"
        alt="Indrugs System"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div id="content-project" class="p-5">
      <h3 id="title-project" class="mb-3 text-lg font-bold text-content">
        hey
      </h3>

      <p
        id="description-project"
        class="mb-4 text-sm leading-relaxed text-muted"
      >
        que
      </p>

      <div id="technologies" class="mb-5 flex flex-wrap gap-2">
        <h4
          class="rounded-full border border-border-soft bg-icon-surface px-3 py-1 text-xs font-medium text-violet-400 shadow-soft"
        >
          mas
        </h4>

        <h4
          class="rounded-full border border-border-soft bg-icon-surface px-3 py-1 text-xs font-medium text-violet-400 shadow-soft"
        >
          menos
        </h4>

        <h4
          class="rounded-full border border-border-soft bg-icon-surface px-3 py-1 text-xs font-medium text-violet-400 shadow-soft"
        >
          masomenos
        </h4>
      </div>

      <div id="buttons-projects" class="flex items-center justify-between">
        <a
          href="#"
          class="text-sm font-semibold text-violet-500 transition-colors duration-300 hover:text-violet-400"
        >
          View Project
        </a>

        <a
          href="#"
          aria-label="GitHub repository"
          class="icon-button !size-9 group/github"
        >
          <Icon
            icon="mdi:github"
            class="text-2xl text-content transition-all duration-300 group-hover/github:scale-110 group-hover/github:text-violet-400"
          />
        </a>
      </div>
    </div>
  </article>
</template>