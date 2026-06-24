<script setup>
import { Icon } from "@iconify/vue";
import { useLanguage } from "../composables/useLanguage";

const { t } = useLanguage();
</script>

<template>
  <section
    id="experience"
    class="mx-auto max-w-7xl border-b border-border-soft px-6 py-10 lg:px-8"
  >
    <div class="mb-10 text-center">
      <h2 class="text-3xl font-bold text-content sm:text-4xl">
        {{ t.experience.title }}
      </h2>
    </div>

    <div class="grid gap-0 lg:grid-cols-3 lg:gap-8">
      <article
        v-for="(item, index) in t.experience.items"
        :key="item.year"
        class="group relative"
      >
        <div
          class="relative grid grid-cols-[3.5rem_1fr] gap-4 pb-10 last:pb-0 lg:hidden"
        >
          <div
            v-if="index !== t.experience.items.length - 1"
            class="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-violet-500/70 via-violet-500/25 to-transparent"
          ></div>

          <div class="relative z-10 flex justify-center">
            <div
              class="inline-flex size-12 items-center justify-center rounded-full border border-border-soft bg-icon-purple-surface text-violet-400 shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-500/50 group-hover:shadow-glow"
            >
              <Icon
                :icon="item.icon"
                class="text-2xl transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <div
            class="rounded-2xl border border-border-soft bg-feature-card p-4 shadow-soft backdrop-blur-xl transition-all duration-300 group-hover:border-violet-500/50 group-hover:bg-feature-card-hover group-hover:shadow-glow"
          >
            <span class="mb-2 block text-sm font-semibold text-violet-400">
              {{ item.year }}
            </span>

            <h3
              class="mb-2 text-base font-semibold text-content transition-colors duration-300 group-hover:text-violet-400"
            >
              {{ item.title }}
            </h3>

            <p class="text-sm leading-relaxed text-muted">
              {{ item.description }}
            </p>
          </div>
        </div>

        <div class="hidden lg:block">
          <div class="flex items-center justify-center gap-3">
            <div
              class="inline-flex size-12 items-center justify-center rounded-full border border-border-soft bg-icon-purple-surface text-violet-400 shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:border-violet-500/50 group-hover:shadow-glow"
            >
              <Icon
                :icon="item.icon"
                class="text-2xl transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <span class="text-sm font-semibold text-muted">
              {{ item.year }}
            </span>

            <div
              class="h-[2px] flex-1 bg-gradient-to-r from-violet-500 to-transparent"
            ></div>
          </div>

          <div class="mt-3 pl-16">
            <h3
              class="mb-2 text-base font-semibold text-content transition-colors duration-300 group-hover:text-violet-400"
            >
              {{ item.title }}
            </h3>

            <p class="text-sm leading-relaxed text-muted">
              {{ item.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
