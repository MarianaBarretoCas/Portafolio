<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { skillGroups } from "../data/skills";

const activeCard = ref(null);

const toggleCard = (title) => {
  activeCard.value = activeCard.value === title ? null : title;
};
</script>

<template>
  <section
    id="skills"
    class="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-16 lg:px-18"
  >
    <div class="mb-10 text-center">
      <span
        class="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400"
      >
        My expertise
      </span>

      <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
        Skills & Technologies
      </h2>

      <p class="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
        Technologies and skills I use to transform ideas into functional digital
        solutions.
      </p>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="group in skillGroups"
        :key="group.title"
        class="group min-h-[270px] cursor-pointer [perspective:1200px]"
        role="button"
        tabindex="0"
        :aria-label="`View details about ${group.title}`"
        @click="toggleCard(group.title)"
        @keydown.enter="toggleCard(group.title)"
        @keydown.space.prevent="toggleCard(group.title)"
      >
        <div
          class="relative h-full min-h-[270px] transition-transform duration-500 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]"
          :class="{
            '[transform:rotateY(180deg)]': activeCard === group.title,
          }"
        >
          <div
            class="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 p-6 [backface-visibility:hidden]"
          >
            <div
              class="absolute -right-10 -top-10 size-36 rounded-full opacity-10 blur-3xl"
              :style="{ backgroundColor: group.color }"
            ></div>

            <div class="relative flex h-full flex-col">
              <div class="mb-6 flex items-center gap-4">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-2xl"
                  :style="{
                    color: group.color,
                    backgroundColor: `${group.color}18`,
                  }"
                >
                  <Icon :icon="group.icon" class="text-2xl" />
                </div>

                <div>
                  <h3 class="font-semibold text-white">
                    {{ group.title }}
                  </h3>

                  <span class="text-xs text-slate-500">
                    {{ group.subtitle }}
                  </span>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <div
                  v-for="technology in group.technologies"
                  :key="technology.name"
                  class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                >
                  <Icon
                    v-if="technology.icon"
                    :icon="technology.icon"
                    class="text-lg"
                  />

                  <span class="text-xs font-medium text-slate-300">
                    {{ technology.name }}
                  </span>
                </div>
              </div>

              <div
                class="mt-auto flex items-center gap-2 pt-5 text-xs text-slate-500"
              >
                <Icon icon="lucide:rotate-3d" class="text-sm" />

                <span class="hidden md:inline"> Hover to view details </span>

                <span class="md:hidden"> Tap to view details </span>
              </div>
            </div>
          </div>

          <!-- Parte trasera -->
          <div
            class="absolute inset-0 overflow-hidden rounded-3xl border p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]"
            :style="{
              borderColor: `${group.color}55`,
              background: `linear-gradient(145deg, ${group.color}20, rgba(2, 6, 23, 0.96) 65%)`,
            }"
          >
            <div class="flex h-full flex-col justify-center">
              <div
                class="mb-5 flex size-12 items-center justify-center rounded-2xl"
                :style="{
                  color: group.color,
                  backgroundColor: `${group.color}18`,
                }"
              >
                <Icon :icon="group.icon" class="text-2xl" />
              </div>

              <h3 class="mb-3 text-xl font-semibold text-white">
                {{ group.title }}
              </h3>

              <p class="text-sm leading-7 text-slate-300">
                {{ group.description }}
              </p>

              <div
                class="mt-5 h-px w-16"
                :style="{ backgroundColor: group.color }"
              ></div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
