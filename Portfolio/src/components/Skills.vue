<script setup>
import { Icon } from "@iconify/vue";
import { skills, technologies } from "../data/skills";
</script>

<template>
  <section
    id="skills"
    class="max-w-7xl mx-auto border-t border-white/10 px-6 py-10 lg:px-8 mt-12"
  >
    <div class="grid gap-10 lg:grid-cols-[1.05fr_1.55fr] items-start">
      <div>
        <h2 class="mb-8 text-2xl font-semibold text-white">My Skills</h2>
        <div class="grid gap-5 sm:grid-cols-2">
          <div v-for="skill in skills" :key="skill.name" class="space-y-2">
            <div class="flex items-center justify-between text-sm">
              <span class="font-medium text-slate-200 mt-7">
                {{ skill.name }}
              </span>

              <span class="text-slate-300 mt-7"> {{ skill.level }}% </span>
            </div>
            <div class="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                class="h-full rounded-full bg-gradient-to-r from-purple-600 to-violet-400 shadow-[0_0_14px_rgba(139,92,246,0.45)]"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="mb-8 text-2xl font-semibold text-white">Technologies</h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <article
            v-for="technology in technologies"
            :key="technology.name"
            class="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 p-4 text-center hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.16)] transition-all duration-300"
          >
            <Icon
              :icon="technology.icon"
              class="mb-3 text-4xl group-hover:scale-110 transition-transform duration-300"
            />

            <h3
              class="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-300"
            >
              {{ technology.name }}
            </h3>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
