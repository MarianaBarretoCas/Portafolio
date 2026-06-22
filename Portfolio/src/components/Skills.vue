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
    class="relative mx-auto max-w-7xl border-t border-border-soft px-6 py-16 lg:px-18"
  >
    <div class="mb-10 text-center">
      <span
        class="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400"
      >
        My expertise
      </span>

      <h2 class="mt-3 text-3xl font-bold text-content sm:text-4xl">
        Skills & Technologies
      </h2>

      <p class="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
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
          <!-- Parte frontal -->
          <div
            class="absolute inset-0 overflow-hidden rounded-3xl border border-border-soft bg-feature-card p-6 shadow-soft backdrop-blur-xl transition-all duration-300 [backface-visibility:hidden] group-hover:border-violet-500/50 group-hover:bg-feature-card-hover group-hover:shadow-glow"
          >
            <div
              class="absolute -right-10 -top-10 size-36 rounded-full opacity-10 blur-3xl"
              :style="{ backgroundColor: group.color }"
            ></div>

            <div class="relative flex h-full flex-col">
              <div class="mb-6 flex items-center gap-4">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-soft"
                  :style="{
                    color: group.color,
                    backgroundColor: `${group.color}18`,
                  }"
                >
                  <Icon :icon="group.icon" class="text-2xl" />
                </div>

                <div>
                  <h3 class="font-semibold text-content">
                    {{ group.title }}
                  </h3>

                  <span class="text-xs text-muted">
                    {{ group.subtitle }}
                  </span>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <div
                  v-for="technology in group.technologies"
                  :key="technology.name"
                  class="flex items-center gap-2 rounded-xl border border-border-soft bg-icon-surface px-3 py-2 shadow-soft backdrop-blur-md"
                >
                  <Icon
                    v-if="technology.icon"
                    :icon="technology.icon"
                    class="text-lg"
                  />

                  <span class="text-xs font-medium text-muted">
                    {{ technology.name }}
                  </span>
                </div>
              </div>

              <div
                class="mt-auto flex items-center gap-2 pt-5 text-xs text-muted"
              >
                <Icon icon="lucide:rotate-3d" class="text-sm" />

                <span class="hidden md:inline"> Hover to view details </span>

                <span class="md:hidden"> Tap to view details </span>
              </div>
            </div>
          </div>

          <!-- Parte trasera -->
          <div
            class="absolute inset-0 overflow-hidden rounded-3xl border p-6 shadow-glow backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
            :style="{
              borderColor: `${group.color}55`,
              background: `linear-gradient(145deg, ${group.color}20, var(--feature-card-hover) 68%)`,
            }"
          >
            <div class="flex h-full flex-col justify-center">
              <div
                class="mb-5 flex size-12 items-center justify-center rounded-2xl shadow-soft"
                :style="{
                  color: group.color,
                  backgroundColor: `${group.color}18`,
                }"
              >
                <Icon :icon="group.icon" class="text-2xl" />
              </div>

              <h3 class="mb-3 text-xl font-semibold text-content">
                {{ group.title }}
              </h3>

              <p class="text-sm leading-7 text-muted">
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