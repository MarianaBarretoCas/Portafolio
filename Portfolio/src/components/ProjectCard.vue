<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <article
    id="project-card"
    class="group rounded-2xl border border-white/10 bg-slate-950/40 overflow-hidden hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_24px_rgba(139,92,246,0.16)] transition-all duration-300"
  >
    <div id="image-project" class="h-48 overflow-hidden bg-slate-900">
      <img
        src="/images/projects/project-1.png"
        alt="Indrugs System"
        class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div id="content-project" class="p-5">
      <h3 id="title-project" class="mb-3 text-white text-lg font-bold">hey</h3>
      <p
        id="description-project"
        class="text-slate-300 text-sm mb-4 leading-relaxed"
      >
        que
      </p>
      <div id="technologies" class="mb-5 flex flex-wrap gap-2">
        <h4
          class="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
        >
          mas
        </h4>
        <h4
          class="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
        >
          menos
        </h4>
        <h4
          class="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
        >
          masomenos
        </h4>
      </div>
      <div id="buttons-projects" class="flex items-center justify-between">
        <a
          href="#"
          class="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
        >
          View Project
        </a>

        <a href="#" class="text-slate-300 hover:text-white transition-colors">
          <Icon icon="mdi:github" class="text-2xl" />
        </a>
      </div>
    </div>
  </article>
</template>
