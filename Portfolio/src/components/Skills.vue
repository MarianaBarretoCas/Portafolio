<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { skills, technologies } from "../data/skills";

const activeTechnology = ref(null);

const toggleTechnology = (name) => {
  activeTechnology.value = activeTechnology.value === name ? null : name;
};

const levelStyles = {
  High: {
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/40",
    dot: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]",
  },
  Medium: {
    text: "text-yellow-300",
    bg: "bg-yellow-500/10",
    border: "border-yellow-400/40",
    dot: "bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.65)]",
  },
  Low: {
    text: "text-red-300",
    bg: "bg-red-500/10",
    border: "border-red-400/40",
    dot: "bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.65)]",
  },
};

const getLevelStyle = (level) => {
  return levelStyles[level] || levelStyles.Medium;
};
</script>

<template>
  <section
    id="skills"
    class="max-w-7xl mx-auto border-t border-white/10 px-6 py-10 lg:px-8"
  >
    <div class="grid gap-10 lg:grid-cols-[1.05fr_1.55fr] items-start">
      <div>
        <h2 class="mb-8 text-2xl font-semibold text-white">Core Skills</h2>

        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="(skill, index) in skills"
            :key="skill.title"
            class="group relative min-h-[140px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/30 p-5 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_24px_rgba(139,92,246,0.16)] transition-all duration-300"
          >
            <div
              class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-all duration-300 group-hover:bg-violet-500/20"
            ></div>

            <div class="relative z-10 flex h-full flex-col justify-between">
              <div class="flex items-center justify-between">
                <div
                  class="inline-flex size-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-colors duration-300"
                >
                  <Icon :icon="skill.icon" class="text-2xl" />
                </div>

                <span class="text-xs font-semibold text-violet-300/70">
                  0{{ index + 1 }}
                </span>
              </div>

              <div>
                <h3
                  class="mb-2 text-base font-semibold text-white group-hover:text-violet-300 transition-colors duration-300"
                >
                  {{ skill.title }}
                </h3>

                <p class="text-sm leading-relaxed text-slate-300">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div>
        <h2 class="mb-8 text-2xl font-semibold text-white">Technologies</h2>

        <div class="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          <article
            v-for="technology in technologies"
            :key="technology.name"
            class="group relative min-h-[105px] cursor-pointer [perspective:1000px] sm:min-h-[115px] lg:min-h-[125px]"
            role="button"
            tabindex="0"
            @click="toggleTechnology(technology.name)"
            @keydown.enter="toggleTechnology(technology.name)"
            @keydown.space.prevent="toggleTechnology(technology.name)"
          >
            <div
              class="relative h-full min-h-[105px] rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] sm:min-h-[115px] lg:min-h-[125px] md:group-hover:[transform:rotateY(180deg)]"
              :style="{
                transform:
                  activeTechnology === technology.name ? 'rotateY(180deg)' : '',
              }"
            >
              <div
                class="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-center [backface-visibility:hidden] sm:p-5"
              >
                <Icon
                  :icon="technology.icon"
                  class="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110 sm:text-4xl lg:text-5xl"
                />

                <h3 class="text-xs font-medium text-slate-300 sm:text-sm">
                  {{ technology.name }}
                </h3>
              </div>

              <div
                class="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5"
                :class="[
                  getLevelStyle(technology.level).bg,
                  getLevelStyle(technology.level).border,
                ]"
              >
                <div
                  class="mb-3 flex size-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/40"
                >
                  <span
                    class="size-3 rounded-full"
                    :class="getLevelStyle(technology.level).dot"
                  ></span>
                </div>

                <span
                  class="mb-1 text-xs font-semibold uppercase tracking-widest"
                  :class="getLevelStyle(technology.level).text"
                >
                  {{ technology.level }}
                </span>

                <p class="text-xs text-slate-300">
                  Level with {{ technology.name }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
